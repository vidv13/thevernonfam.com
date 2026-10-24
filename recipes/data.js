// Recipe box + weekly plans for thevernonfam.com/recipes/
//
// To add a recipe: add an entry to RECIPES (the key is its URL slug).
// To plan a week: add an entry to WEEKS with the Monday date and a recipe slug per day.
// Plain text only; the page handles escaping.

window.RECIPES = {
  "salsa-chicken-bowls": {
    title: "Slow Cooker Salsa Chicken Bowls",
    time: "10 min prep · 4–6 hours on low",
    tags: ["chicken", "slow cooker"],
    ingredients: [
      "2 lb chicken breast",
      "24 oz salsa",
      "½ tsp each garlic powder, cumin and chili powder",
      "Cooked rice",
      "Optional cheddar"
    ],
    steps: [
      "Place chicken, salsa and seasonings in slow cooker.",
      "Cook on low 4–6 hours until chicken reaches 165°F.",
      "Shred chicken, stir into salsa and serve over rice for family."
    ],
    note: "For your 4&2, measure chicken and approved vegetables separately. Check salsa and cheese allowances; no rice in your Lean & Green."
  },

  "turkey-cheeseburger-skillet": {
    title: "Cheesy Ground Turkey Cheeseburger Skillet",
    time: "25–30 minutes",
    tags: ["turkey", "skillet"],
    ingredients: [
      "2 lb 93% lean ground turkey",
      "1 onion, diced",
      "2 bags cauliflower rice (12 oz each)",
      "1 can diced tomatoes (14.5 oz), drained",
      "1 cup reduced-fat cheddar",
      "2 tbsp ketchup",
      "1 tsp garlic powder, ½ tsp salt, ½ tsp pepper",
      "About 2 lb potatoes, for wedges"
    ],
    steps: [
      "Cut potatoes into wedges and roast at 425°F for 30–35 minutes.",
      "Brown turkey and onion in a skillet until turkey reaches 165°F.",
      "Add cauliflower rice, tomatoes and seasonings; cook 6–8 minutes.",
      "Stir in ketchup, top with cheddar, cover until melted. Serve wedges separately."
    ],
    note: "Measure your cooked turkey and approved vegetables before adding ketchup and cheese. Count toppings according to your plan."
  },

  "mini-turkey-meatloaves": {
    title: "Mini Turkey Meatloaves with Green Beans & Mashed Potatoes",
    time: "45 minutes · makes enough for two nights",
    tags: ["turkey", "oven", "makes leftovers"],
    ingredients: [
      "3 lb 93% lean ground turkey",
      "1 onion, finely diced",
      "2 eggs",
      "¾ cup breadcrumbs",
      "½ cup tomato sauce",
      "1 tsp each garlic powder, Italian seasoning and salt",
      "½ tsp pepper",
      "¼ cup ketchup for glaze",
      "2 bags green beans (12 oz each)",
      "About 3 lb potatoes",
      "Milk and butter for mash"
    ],
    steps: [
      "Heat oven to 375°F.",
      "Mix turkey, onion, eggs, breadcrumbs, tomato sauce and seasonings; form about 16 small meatloaves.",
      "Top with ketchup and bake 25–35 minutes, until centers reach 165°F.",
      "Boil potatoes until tender; mash with milk and butter. Cook green beans.",
      "Refrigerate the second night's portions promptly."
    ],
    note: "Set aside plain seasoned turkey before adding breadcrumbs, eggs, tomato sauce or glaze. Measure your approved vegetables; potatoes are a family side."
  },

  "leftover-meatloaves": {
    title: "Leftover Mini Turkey Meatloaves",
    time: "10–20 minutes",
    tags: ["leftovers"],
    leftoversOf: "mini-turkey-meatloaves",
    ingredients: [
      "Reserved mini meatloaves",
      "Leftover green beans and mashed potatoes",
      "Splash of broth, optional"
    ],
    steps: [
      "Place meatloaves in a covered baking dish with a splash of broth.",
      "Reheat at 350°F for about 15–20 minutes until centers reach 165°F.",
      "Warm mashed potatoes and green beans and serve."
    ],
    note: "Use your separately portioned meatloaf and approved vegetables. Three pounds of turkey makes small servings for eight people across two nights."
  },

  "chicken-vegetable-soup": {
    title: "Homestyle Chicken & Vegetable Soup",
    time: "40–45 minutes · good made ahead",
    tags: ["chicken", "soup", "make ahead"],
    ingredients: [
      "2 lb chicken breast",
      "8 cups chicken broth",
      "4 carrots, sliced",
      "4 celery stalks, sliced",
      "1 onion, diced",
      "2 garlic cloves, minced",
      "1 tsp Italian seasoning",
      "½ tsp pepper; salt to taste",
      "12 oz egg noodles, cooked separately"
    ],
    steps: [
      "Combine broth, chicken, vegetables and seasonings in a large pot.",
      "Simmer gently 20–25 minutes, until chicken reaches 165°F.",
      "Shred chicken, return to pot and simmer 5–10 minutes until vegetables are tender.",
      "Cook noodles separately and add to family bowls.",
      "If prepared ahead, refrigerate promptly and reheat to 165°F."
    ],
    note: "Noodles are a family addition. Carrots do not count as approved Greens on the legacy 4&2; prepare your measured chicken with approved vegetables separately."
  }
};

// Newest week last. "start" is the Monday (YYYY-MM-DD).
window.WEEKS = [
  {
    start: "2026-10-26",
    days: {
      mon: "salsa-chicken-bowls",
      tue: "turkey-cheeseburger-skillet",
      wed: "mini-turkey-meatloaves",
      thu: "leftover-meatloaves",
      fri: "chicken-vegetable-soup"
    },
    shopping: "4 lb chicken, 5 lb ground turkey, plus broth and rice already on hand. Wednesday’s 3 lb meatloaf batch yields small portions for eight people across two nights. Family recipes are not automatically complete 4&2 Lean & Green meals."
  }
];
