(function () {
  "use strict";

  var RECIPES = window.RECIPES || {};
  var WEEKS = (window.WEEKS || []).slice().sort(function (a, b) { return a.start < b.start ? -1 : 1; });
  var DAYS = [
    { key: "mon", short: "Mon", long: "Monday" },
    { key: "tue", short: "Tue", long: "Tuesday" },
    { key: "wed", short: "Wed", long: "Wednesday" },
    { key: "thu", short: "Thu", long: "Thursday" },
    { key: "fri", short: "Fri", long: "Friday" },
    { key: "sat", short: "Sat", long: "Saturday" },
    { key: "sun", short: "Sun", long: "Sunday" }
  ];
  var app = document.getElementById("app");

  // ---------- helpers ----------

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function parseDate(iso) {
    var p = iso.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function addDays(d, n) {
    var r = new Date(d);
    r.setDate(r.getDate() + n);
    return r;
  }

  function fmt(d, opts) {
    return d.toLocaleDateString(undefined, opts || { month: "short", day: "numeric" });
  }

  function today() {
    var d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  // Days planned in a week, in calendar order.
  function plannedDays(week) {
    return DAYS.filter(function (d) { return week.days[d.key] && RECIPES[week.days[d.key]]; });
  }

  // The week containing today, else the next upcoming one, else the latest.
  function currentWeek() {
    var t = today();
    for (var i = 0; i < WEEKS.length; i++) {
      var s = parseDate(WEEKS[i].start);
      if (t >= s && t < addDays(s, 7)) return WEEKS[i];
    }
    for (var j = 0; j < WEEKS.length; j++) {
      if (parseDate(WEEKS[j].start) > t) return WEEKS[j];
    }
    return WEEKS[WEEKS.length - 1];
  }

  function todayKey(week) {
    var t = today();
    var s = parseDate(week.start);
    var diff = Math.round((t - s) / 86400000);
    return diff >= 0 && diff < 7 ? DAYS[diff].key : null;
  }

  // Small localStorage wrapper; the page works fine if storage is unavailable.
  var store = {
    get: function (k, def) {
      try { var v = localStorage.getItem("tvf-recipes:" + k); return v ? JSON.parse(v) : def; }
      catch (e) { return def; }
    },
    set: function (k, v) {
      try { localStorage.setItem("tvf-recipes:" + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    },
    del: function (k) {
      try { localStorage.removeItem("tvf-recipes:" + k); } catch (e) { /* ignore */ }
    }
  };

  // ---------- screen wake lock (keeps the phone awake while cooking) ----------

  var wake = { on: false, lock: null };

  function setWake(on) {
    wake.on = on;
    if (on && "wakeLock" in navigator) {
      navigator.wakeLock.request("screen").then(function (l) {
        wake.lock = l;
      }).catch(function () { wake.on = false; syncWakeButtons(); });
    } else if (wake.lock) {
      wake.lock.release();
      wake.lock = null;
    }
    syncWakeButtons();
  }

  function syncWakeButtons() {
    document.querySelectorAll("[data-act=wake]").forEach(function (b) {
      b.setAttribute("aria-pressed", wake.on ? "true" : "false");
    });
  }

  document.addEventListener("visibilitychange", function () {
    // Wake locks are dropped when the tab is hidden; re-acquire on return.
    if (wake.on && document.visibilityState === "visible") setWake(true);
  });

  // ---------- text size ----------

  function applyBig() {
    document.documentElement.style.setProperty("--fs", store.get("big", false) ? "20px" : "17px");
  }
  applyBig();

  // ---------- rendering ----------

  function recipeCard(slug, opts) {
    var r = RECIPES[slug];
    var scope = opts.scope;
    var st = store.get(scope, { ing: [], step: [] });
    var firstOpen = -1;
    for (var i = 0; i < r.steps.length; i++) {
      if (st.step.indexOf(i) < 0) { firstOpen = i; break; }
    }

    var h = '<article class="card" data-scope="' + esc(scope) + '">';
    h += '<div class="card-top">';
    if (opts.kicker) h += '<div class="kicker">' + esc(opts.kicker) + "</div>";
    h += "<h2>" + (opts.link ? '<a href="#/r/' + esc(slug) + '">' + esc(r.title) + "</a>" : esc(r.title)) + "</h2>";
    if (r.time) h += '<p class="meta">' + esc(r.time) + "</p>";
    if (r.tags && r.tags.length) {
      h += '<div class="tags">' + r.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>";
    }
    if (r.leftoversOf && RECIPES[r.leftoversOf]) {
      h += '<a class="leftover-link" href="#/r/' + esc(r.leftoversOf) + '">Leftovers from: ' + esc(RECIPES[r.leftoversOf].title) + " →</a>";
    }
    h += "</div>";

    h += '<div class="tools">';
    h += '<button class="chip" data-act="wake" aria-pressed="' + wake.on + '">☀︎ Keep screen on</button>';
    h += '<button class="chip" data-act="big" aria-pressed="' + store.get("big", false) + '">A+ Bigger text</button>';
    h += "</div>";

    h += '<div class="cols"><section><h3>Ingredients <span class="count">' + st.ing.length + "/" + r.ingredients.length + "</span></h3><ul class=\"check\">";
    r.ingredients.forEach(function (ing, i) {
      var done = st.ing.indexOf(i) >= 0;
      h += '<li class="' + (done ? "done" : "") + '"><button data-act="ing" data-i="' + i + '" aria-pressed="' + done + '"><span class="box"></span><span class="txt">' + esc(ing) + "</span></button></li>";
    });
    h += "</ul></section>";

    h += "<section><h3>Directions <span class=\"count\">" + st.step.length + "/" + r.steps.length + "</span></h3><ol class=\"steps\">";
    r.steps.forEach(function (s, i) {
      var done = st.step.indexOf(i) >= 0;
      var cls = done ? "done" : (i === firstOpen ? "current" : "");
      h += '<li class="' + cls + '"><button data-act="step" data-i="' + i + '" aria-pressed="' + done + '"><span class="num">' + (i + 1) + '</span><span class="txt">' + esc(s) + "</span></button></li>";
    });
    h += "</ol></section></div>";

    if (r.note) h += '<aside class="note"><b>Your 4&amp;2 note:</b> ' + esc(r.note) + "</aside>";

    h += '<div class="cooked-row">';
    if (opts.cookedKey) {
      var cooked = store.get(opts.cookedKey, false);
      h += '<button class="cooked-btn" data-act="cooked" data-key="' + esc(opts.cookedKey) + '" aria-pressed="' + cooked + '">' + (cooked ? "✓ Cooked" : "Mark as cooked") + "</button>";
    } else {
      h += "<span></span>";
    }
    h += '<button class="reset" data-act="reset">Clear checkmarks</button></div>';
    h += "</article>";
    return h;
  }

  function renderWeek(start, dayKey) {
    if (!WEEKS.length) {
      app.innerHTML = '<p class="empty">No weeks planned yet.</p>';
      return;
    }
    var week = start ? WEEKS.filter(function (w) { return w.start === start; })[0] : currentWeek();
    if (!week) week = currentWeek();
    var days = plannedDays(week);
    var tk = todayKey(week);
    if (!dayKey) dayKey = days.some(function (d) { return d.key === tk; }) ? tk : (days[0] && days[0].key);

    var idx = WEEKS.indexOf(week);
    var prev = WEEKS[idx - 1], next = WEEKS[idx + 1];
    var s = parseDate(week.start);
    var last = days.length ? addDays(s, DAYS.indexOf(days[days.length - 1])) : s;

    var h = '<div class="week-head"><div><h1>Week of ' + esc(fmt(s)) + "</h1>";
    h += '<p class="sub">' + esc(fmt(s, { weekday: "short", month: "short", day: "numeric" })) + " – " + esc(fmt(last, { weekday: "short", month: "short", day: "numeric" })) + " · " + days.length + " dinners</p></div>";
    if (prev || next) {
      h += '<div class="week-nav">';
      h += '<a class="icon-btn" aria-label="Previous week" href="#/week/' + (prev ? prev.start : "") + '"' + (prev ? "" : ' aria-disabled="true"') + ">‹</a>";
      h += '<a class="icon-btn" aria-label="Next week" href="#/week/' + (next ? next.start : "") + '"' + (next ? "" : ' aria-disabled="true"') + ">›</a>";
      h += "</div>";
    }
    h += "</div>";

    if (week.shopping) {
      h += '<details class="shop"><summary>Shopping plan</summary><p>' + esc(week.shopping) + "</p></details>";
    }

    h += '<nav class="days" style="grid-template-columns:repeat(' + (days.length + 1) + ',1fr)">';
    days.forEach(function (d) {
      var cls = "day" + (d.key === dayKey ? " on" : "") + (d.key === tk ? " today" : "") +
        (store.get(week.start + ":cooked:" + d.key, false) ? " cooked" : "");
      h += '<a class="' + cls + '" href="#/week/' + week.start + "/" + d.key + '"><b>' + d.short + "</b><small>" + esc(RECIPES[week.days[d.key]].title) + "</small></a>";
    });
    h += '<a class="day' + (dayKey === "all" ? " on" : "") + '" href="#/week/' + week.start + '/all"><b>All</b><small>Whole week</small></a>';
    h += "</nav>";

    var cardOpts = function (d) {
      var date = addDays(s, DAYS.indexOf(d));
      return {
        kicker: d.long + " · " + fmt(date) + (d.key === tk ? " · Tonight" : ""),
        scope: week.start + ":" + d.key,
        cookedKey: week.start + ":cooked:" + d.key,
        link: true
      };
    };

    if (dayKey === "all") {
      days.forEach(function (d) { h += recipeCard(week.days[d.key], cardOpts(d)); });
    } else {
      var d = DAYS.filter(function (x) { return x.key === dayKey; })[0];
      if (d && week.days[d.key] && RECIPES[week.days[d.key]]) {
        h += '<div id="swipe">' + recipeCard(week.days[d.key], cardOpts(d)) + "</div>";
        h += '<p class="swipe-hint">Swipe left or right for other days</p>';
      } else {
        h += '<p class="empty">Nothing planned for that day.</p>';
      }
    }

    app.innerHTML = h;
    app.dataset.week = week.start;
    app.dataset.days = days.map(function (x) { return x.key; }).join(",");
    app.dataset.day = dayKey;
  }

  function renderBox(query, tag) {
    var slugs = Object.keys(RECIPES).filter(function (k) { return !RECIPES[k].leftoversOf; });
    var allTags = [];
    slugs.forEach(function (k) {
      (RECIPES[k].tags || []).forEach(function (t) { if (allTags.indexOf(t) < 0) allTags.push(t); });
    });
    allTags.sort();

    var h = "<h1>Recipe Box</h1><p class=\"sub\">" + slugs.length + " family recipes</p>";
    h += '<input class="search" type="search" placeholder="Search recipes or ingredients…" value="' + esc(query || "") + '" aria-label="Search recipes">';
    h += '<div class="filters"><button class="chip" data-tag="" aria-pressed="' + !tag + '">All</button>';
    allTags.forEach(function (t) {
      h += '<button class="chip" data-tag="' + esc(t) + '" aria-pressed="' + (t === tag) + '">' + esc(t) + "</button>";
    });
    h += '</div><div class="grid" id="grid"></div>';
    app.innerHTML = h;
    app.dataset.tag = tag || "";
    fillGrid(slugs, query, tag);
  }

  function fillGrid(slugs, query, tag) {
    var q = (query || "").trim().toLowerCase();
    var hits = slugs.filter(function (k) {
      var r = RECIPES[k];
      if (tag && (r.tags || []).indexOf(tag) < 0) return false;
      if (!q) return true;
      return (r.title + " " + (r.tags || []).join(" ") + " " + r.ingredients.join(" ")).toLowerCase().indexOf(q) >= 0;
    }).sort(function (a, b) { return RECIPES[a].title < RECIPES[b].title ? -1 : 1; });

    var grid = document.getElementById("grid");
    grid.innerHTML = hits.length ? hits.map(function (k) {
      var r = RECIPES[k];
      return '<a class="tile" href="#/r/' + esc(k) + '"><h2>' + esc(r.title) + '</h2><p class="meta">' + esc(r.time || "") + "</p>" +
        '<div class="tags">' + (r.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div></a>";
    }).join("") : '<p class="empty">No recipes match.</p>';
  }

  function renderRecipe(slug) {
    if (!RECIPES[slug]) {
      app.innerHTML = '<p class="empty">Recipe not found. <a href="#/box">Back to the recipe box</a></p>';
      return;
    }
    app.innerHTML = '<a class="back" href="#/box">‹ Recipe Box</a>' + recipeCard(slug, { scope: "r:" + slug });
    document.title = RECIPES[slug].title + " · Vernon Family Recipes";
  }

  // ---------- routing ----------

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    var tab = parts[0] === "box" || parts[0] === "r" ? "box" : "week";
    document.querySelectorAll(".tabs a").forEach(function (a) {
      a.classList.toggle("on", a.dataset.tab === tab);
    });
    document.title = "Vernon Family Recipes";
    if (parts[0] === "box") renderBox("", decodeURIComponent(parts[1] || ""));
    else if (parts[0] === "r") renderRecipe(parts[1]);
    else renderWeek(parts[1], parts[2]);
  }

  // Re-render without jumping the scroll position (used after checking things off).
  function rerender() {
    var y = window.scrollY;
    route();
    window.scrollTo(0, y);
  }

  window.addEventListener("hashchange", function () { route(); window.scrollTo(0, 0); });

  // ---------- interactions ----------

  app.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var act = b.dataset.act;
    var card = b.closest(".card");
    var scope = card && card.dataset.scope;

    if (act === "ing" || act === "step") {
      var st = store.get(scope, { ing: [], step: [] });
      var list = st[act];
      var i = +b.dataset.i;
      var at = list.indexOf(i);
      if (at >= 0) list.splice(at, 1); else list.push(i);
      store.set(scope, st);
      rerender();
    } else if (act === "reset") {
      store.del(scope);
      rerender();
    } else if (act === "cooked") {
      store.set(b.dataset.key, !store.get(b.dataset.key, false));
      rerender();
    } else if (act === "wake") {
      if (!("wakeLock" in navigator)) {
        alert("This browser can't keep the screen on. Try Safari 16.4+ or Chrome.");
        return;
      }
      setWake(!wake.on);
    } else if (act === "big") {
      store.set("big", !store.get("big", false));
      applyBig();
      rerender();
    } else if (b.hasAttribute("data-tag")) {
      var tag = b.dataset.tag;
      history.replaceState(null, "", tag ? "#/box/" + encodeURIComponent(tag) : "#/box");
      renderBox(app.querySelector(".search").value, tag);
      var input = app.querySelector(".search");
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });

  app.addEventListener("input", function (e) {
    if (!e.target.classList.contains("search")) return;
    var slugs = Object.keys(RECIPES).filter(function (k) { return !RECIPES[k].leftoversOf; });
    fillGrid(slugs, e.target.value, app.dataset.tag);
  });

  // Swipe between days on the week view.
  var touch = null;
  app.addEventListener("touchstart", function (e) {
    if (!e.target.closest("#swipe")) { touch = null; return; }
    touch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });
  app.addEventListener("touchend", function (e) {
    if (!touch) return;
    var dx = e.changedTouches[0].clientX - touch.x;
    var dy = e.changedTouches[0].clientY - touch.y;
    touch = null;
    if (Math.abs(dx) < 70 || Math.abs(dy) > Math.abs(dx) * 0.6) return;
    var days = app.dataset.days.split(",");
    var i = days.indexOf(app.dataset.day) + (dx < 0 ? 1 : -1);
    if (i >= 0 && i < days.length) location.hash = "#/week/" + app.dataset.week + "/" + days[i];
  }, { passive: true });

  route();
})();
