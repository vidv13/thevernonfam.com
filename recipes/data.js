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
  },

  "slow-cooker-italian-chicken": {
    title: "Slow Cooker Italian Chicken with Green Beans & Buttered Noodles",
    time: "10 min prep · 4–6 hours on low",
    tags: ["chicken", "slow cooker"],
    ingredients: [
      "2 lb boneless, skinless chicken breast",
      "2 cans Italian-style diced tomatoes (14.5 oz each)",
      "½ cup chicken broth",
      "1 tsp Italian seasoning",
      "½ tsp garlic powder",
      "2 bags frozen green beans (12 oz each)",
      "12 oz egg noodles",
      "1–2 tbsp butter for family noodles"
    ],
    steps: [
      "Put the chicken, diced tomatoes, broth, Italian seasoning and garlic powder into the slow cooker.",
      "Cover and cook on low for 4–6 hours, until the chicken reaches 165°F.",
      "Shred the chicken with two forks and stir into the tomatoes.",
      "Cook the green beans separately until tender.",
      "Boil the egg noodles according to the package and toss with butter.",
      "Serve chicken with green beans and noodles on the side."
    ],
    note: "Measure your cooked chicken and green beans separately. Two pounds of chicken shared among eight people may not leave enough for a full Lean portion, so reserve yours before serving. Account for tomatoes, broth and seasonings under your plan."
  },

  "turkey-taco-bowls": {
    title: "Ground Turkey Taco Bowls",
    time: "20–25 minutes · one skillet",
    tags: ["turkey", "skillet"],
    ingredients: [
      "2 lb 93% lean ground turkey",
      "2 bell peppers, diced",
      "1 yellow onion, diced",
      "2 packets taco seasoning",
      "½ cup water, or as directed on the seasoning packets",
      "2 bags frozen cauliflower rice (12 oz each)",
      "1 bag shredded cheddar (8 oz)",
      "2 cups dry rice, cooked, for the family",
      "Cooking spray or a small amount of oil"
    ],
    steps: [
      "Cook the rice according to the package.",
      "In a large skillet, brown the ground turkey and onion for 8–10 minutes, until the turkey reaches 165°F.",
      "Add diced bell peppers and cook another 4–5 minutes.",
      "Stir in taco seasoning and water. Simmer 3–5 minutes.",
      "Cook the cauliflower rice separately according to the package.",
      "Let everyone build bowls with rice, turkey mixture and cheese. Use cauliflower rice for your bowl."
    ],
    note: "Reserve a measured portion of turkey and approved vegetables before adding the seasoning packets if their allowances are unknown. Measure cheese separately and keep rice out of your Lean & Green."
  },

  "turkey-sausage-potato-skillet": {
    title: "Turkey Sausage, Green Bean & Potato Skillet",
    time: "25–30 minutes · one skillet",
    tags: ["turkey", "skillet"],
    ingredients: [
      "2 packages turkey sausage",
      "2½–3 lb potatoes, diced into small cubes",
      "1 bag frozen green beans (12 oz)",
      "1 yellow onion, diced",
      "1 tbsp olive oil",
      "½ tsp garlic powder",
      "½ tsp black pepper",
      "Salt to taste"
    ],
    steps: [
      "Dice the potatoes into small, even pieces.",
      "Microwave them in a covered microwave-safe dish with a splash of water for 6–8 minutes, until nearly tender.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Add potatoes and onion. Cook 6–8 minutes until lightly browned.",
      "Slice the turkey sausage into rounds and add to the skillet.",
      "Add frozen green beans, garlic powder and pepper.",
      "Cover and cook 5–7 minutes, stirring occasionally, until the vegetables are tender and the sausage is heated through."
    ],
    note: "Keep potatoes out of your portion. Check the turkey sausage's nutrition label before counting it as your Lean protein. If it doesn't fit, use a separately measured approved protein with green beans and other approved cooked vegetables."
  },

  "turkey-vegetable-soup": {
    title: "Easy Turkey & Vegetable Soup",
    time: "35–40 minutes · one pot",
    tags: ["turkey", "soup"],
    ingredients: [
      "2 lb 93% lean ground turkey",
      "1 medium head green cabbage, chopped",
      "2 cans diced tomatoes (14.5 oz each)",
      "6 cups chicken broth",
      "1 tsp Italian seasoning",
      "½ tsp garlic powder",
      "½ tsp black pepper",
      "Salt to taste",
      "1 package dinner rolls for the family"
    ],
    steps: [
      "In a large soup pot, brown the ground turkey over medium-high heat until cooked through to 165°F.",
      "Add chopped cabbage, diced tomatoes, chicken broth and seasonings.",
      "Bring to a gentle boil.",
      "Reduce heat, cover and simmer for 20–25 minutes, until cabbage is tender.",
      "Taste and adjust seasonings.",
      "Serve with warm dinner rolls."
    ],
    note: "Measure the cooked turkey and vegetables before combining them so your portion is easy to track. Tomatoes, broth and seasonings must also be accounted for; don't assume one bowl equals a complete Lean & Green."
  },

  "chicken-parmesan-bake": {
    title: "Easy Chicken Parmesan Bake with Zucchini & Spaghetti",
    time: "10 min prep · 35–40 minutes total",
    tags: ["chicken", "oven"],
    ingredients: [
      "2 lb boneless, skinless chicken breast",
      "1 jar marinara sauce (24 oz)",
      "1 bag shredded mozzarella (8 oz)",
      "3 medium zucchini, sliced",
      "1 box spaghetti (16 oz)",
      "1 tsp Italian seasoning",
      "½ tsp garlic powder",
      "Cooking spray or a little olive oil"
    ],
    steps: [
      "Preheat oven to 400°F.",
      "Lightly grease a 9×13-inch baking dish.",
      "Cut thick chicken breasts horizontally into thinner cutlets so they cook evenly.",
      "Arrange chicken in the dish and season with Italian seasoning and garlic powder.",
      "Spoon marinara over the chicken.",
      "Bake for 15–20 minutes, then sprinkle mozzarella over the top.",
      "Return to the oven for another 5–10 minutes, until chicken reaches 165°F and the cheese melts.",
      "Meanwhile, sauté or roast the zucchini until tender.",
      "Cook spaghetti according to the package and serve it alongside the chicken for the family."
    ],
    note: "Set aside your measured chicken and zucchini. Count marinara and mozzarella according to their labels and your plan guide; spaghetti is for the family."
  },

  "slow-cooker-ranch-chicken": {
    title: "Slow Cooker Ranch Chicken with Green Beans & Buttered Rice",
    time: "5 min prep · 4–6 hours on low",
    tags: ["chicken", "slow cooker"],
    ingredients: [
      "2 lb chicken breast",
      "1 packet ranch seasoning",
      "½ cup chicken broth",
      "1 bag frozen green beans",
      "Rice and butter for the family"
    ],
    steps: [
      "Put chicken, broth and ranch seasoning in the slow cooker.",
      "Cook on low for 4–6 hours, until chicken reaches 165°F.",
      "Shred the chicken.",
      "Cook the green beans and serve alongside.",
      "Make buttered rice for the family."
    ],
    note: "Measure your cooked chicken and green beans separately. Check the ranch packet’s label before counting it; rice is a family side."
  },

  "unstuffed-pepper-skillet": {
    title: "Ground Turkey Unstuffed Pepper Skillet",
    time: "25–30 minutes · one skillet",
    tags: ["turkey", "skillet"],
    ingredients: [
      "2 lb ground turkey",
      "2 bell peppers, diced",
      "1 onion, diced",
      "1 can diced tomatoes",
      "Garlic powder and Italian seasoning",
      "Shredded cheddar",
      "Rice for the family"
    ],
    steps: [
      "Brown the turkey with the diced onion.",
      "Add peppers, tomatoes and seasonings.",
      "Simmer 10–15 minutes until peppers are tender.",
      "Serve over rice with cheese for the family."
    ],
    note: "Reserve your measured turkey and peppers before serving. Count tomatoes and cheese under your plan; rice is for the family."
  },

  "beef-and-broccoli": {
    title: "Easy Beef & Broccoli Skillet",
    time: "20 minutes · one skillet",
    tags: ["beef", "skillet"],
    ingredients: [
      "2 lb lean beef strips",
      "2 bags frozen broccoli",
      "¼ cup low-sodium soy sauce",
      "Garlic powder",
      "½ cup water",
      "White rice for the family"
    ],
    steps: [
      "Brown the beef in a skillet.",
      "Add broccoli, soy sauce, garlic powder and water.",
      "Cover and cook until broccoli is tender and beef is cooked to your preference.",
      "Serve with rice for the family."
    ],
    note: "Measure your cooked beef and broccoli separately. Count the soy sauce under your plan; rice is a family side."
  },

  "turkey-cabbage-soup": {
    title: "Creamy Turkey & Cabbage Soup",
    time: "35 minutes · one pot",
    tags: ["turkey", "soup"],
    ingredients: [
      "2 lb ground turkey",
      "½–1 head cabbage, chopped",
      "1 can diced tomatoes",
      "6 cups chicken broth",
      "4 oz light cream cheese, softened",
      "Garlic powder and Italian seasoning",
      "Dinner rolls for the family"
    ],
    steps: [
      "Brown the turkey.",
      "Add cabbage, tomatoes, broth and seasonings.",
      "Simmer 20 minutes.",
      "Stir in the softened cream cheese until smooth.",
      "Serve with dinner rolls."
    ],
    note: "Measure your cooked turkey before adding the rest, then ladle and measure your cabbage from the soup. Count cream cheese, tomatoes and broth under your plan; rolls are for the family."
  },

  "garlic-parmesan-turkey-meatballs": {
    title: "Garlic Parmesan Turkey Meatballs with Pasta & Roasted Green Beans",
    time: "15 min prep · 18–22 minutes in the oven",
    tags: ["turkey", "oven"],
    ingredients: [
      "2 lb ground turkey",
      "1 egg",
      "¼ cup grated Parmesan",
      "Garlic powder and Italian seasoning",
      "½ cup chicken broth",
      "2 tbsp grated Parmesan for sauce",
      "1 bag green beans and a little olive oil, for roasting",
      "Pasta for the family"
    ],
    steps: [
      "Heat oven to 400°F.",
      "Mix turkey, egg, ¼ cup Parmesan and seasonings.",
      "Form into small meatballs.",
      "Toss green beans with a little oil on a second sheet pan.",
      "Bake meatballs and green beans together about 18–22 minutes, until meatballs reach 165°F and beans are tender.",
      "Meanwhile, cook pasta according to the package.",
      "Warm broth with the 2 tbsp Parmesan for sauce and spoon over meatballs.",
      "Serve with pasta and roasted green beans."
    ],
    note: "Measure your meatballs and green beans separately. Count the Parmesan under your plan; pasta is for the family."
  },

  "chicken-broccoli-rice-skillet": {
    title: "Creamy Chicken & Broccoli Rice Skillet",
    time: "45 minutes · one pot",
    tags: ["chicken", "skillet"],
    ingredients: [
      "2½ lb boneless, skinless chicken breasts, cut into bite-sized pieces",
      "2 cups uncooked long-grain white rice",
      "5 cups chicken broth",
      "2 bags (12 oz each) frozen broccoli florets",
      "1 medium onion, diced",
      "3 cloves garlic, minced",
      "1½ cups shredded cheddar",
      "½ cup plain Greek yogurt",
      "2 tbsp olive oil",
      "1 tsp paprika",
      "1 tsp Italian seasoning",
      "1 tsp salt, plus more to taste",
      "½ tsp black pepper",
      "Fresh fruit for serving"
    ],
    steps: [
      "Heat olive oil in a large, deep skillet or Dutch oven over medium-high heat.",
      "Season chicken with paprika, Italian seasoning, salt and pepper. Cook 5–6 minutes, stirring occasionally, until lightly browned. It doesn’t need to be cooked through yet.",
      "Add the onion and cook 3 minutes. Add garlic and stir 30 seconds.",
      "Stir in the uncooked rice and broth. Bring to a boil.",
      "Reduce heat to low, cover and simmer 15 minutes.",
      "Spread the frozen broccoli over the rice. Cover and cook another 8–10 minutes, until rice is tender and chicken reaches 165°F.",
      "Remove from heat and let stand, covered, 5 minutes.",
      "Stir in the cheddar. Let it cool slightly, then stir in the Greek yogurt until creamy. Add a splash of broth if it’s too thick.",
      "Serve with fresh fruit."
    ],
    note: "Use white rice: brown rice needs much longer and more liquid. Scoop your chicken and broccoli out before the cheese and yogurt go in if you want to measure them plain. Count cheddar and yogurt under your plan; rice and fruit are for the family."
  },

  "beef-black-bean-tacos": {
    title: "Beef & Black Bean Tacos with Mexican Rice",
    time: "35 minutes · taco bar",
    tags: ["beef", "skillet"],
    ingredients: [
      "2 lb lean ground beef",
      "2 cans (15 oz each) black beans, drained and rinsed",
      "2 packets taco seasoning",
      "¾ cup water",
      "16–20 small flour or corn tortillas",
      "2 cups shredded Mexican cheese",
      "1 head romaine, shredded",
      "3 tomatoes, diced",
      "1 cup salsa",
      "1 cup plain Greek yogurt or sour cream",
      "Rice: 2 cups uncooked long-grain white rice",
      "Rice: 1 tbsp olive oil",
      "Rice: 1 can (8 oz) tomato sauce",
      "Rice: 3½ cups chicken broth",
      "Rice: 1 tsp garlic powder and 1 tsp cumin"
    ],
    steps: [
      "Start the rice: heat olive oil in a saucepan, add the dry rice and stir 2 minutes.",
      "Add tomato sauce, broth, garlic powder and cumin. Bring to a boil.",
      "Cover, reduce heat to low and simmer 18–20 minutes, until the liquid is absorbed. Rest 5 minutes, then fluff.",
      "Meanwhile, brown the beef in a large skillet over medium-high heat, breaking it up, about 8–10 minutes. Drain excess grease.",
      "Add taco seasoning, water and black beans. Simmer 5 minutes, stirring occasionally.",
      "Warm tortillas according to the package.",
      "Set out the beef, tortillas, rice, cheese, lettuce, tomatoes, salsa and yogurt so everyone builds their own."
    ],
    note: "Make yours a taco bowl: beef, beans, lettuce, tomatoes, salsa and Greek yogurt with a moderate scoop of rice. Measure the beef and vegetables separately; tortillas are for the family."
  },

  "slow-cooker-pulled-pork": {
    title: "Slow Cooker Pulled Pork Sandwiches with Sweet Potatoes & Green Beans",
    time: "15 min prep · 8–10 hours on low",
    tags: ["pork", "slow cooker"],
    ingredients: [
      "4–5 lb boneless pork shoulder (Boston butt)",
      "1 large onion, sliced",
      "½ cup chicken broth",
      "1 cup barbecue sauce, plus more for serving",
      "Rub: 2 tbsp brown sugar",
      "Rub: 1 tbsp smoked paprika (regular works)",
      "Rub: 2 tsp garlic powder and 2 tsp onion powder",
      "Rub: 1½ tsp salt and 1 tsp black pepper",
      "8 hamburger buns",
      "Sides: 3 lb sweet potatoes",
      "Sides: 2 lb fresh or frozen green beans",
      "Sides: 3 tbsp olive oil, divided",
      "Sides: salt, pepper and garlic powder"
    ],
    steps: [
      "Put the sliced onion in the bottom of a 6-quart or larger slow cooker.",
      "Mix the rub ingredients and rub all over the pork.",
      "Set the pork on the onions and pour the broth around it.",
      "Cover and cook on low 8–10 hours, until very tender. It shreds easiest around 195–205°F.",
      "Move the pork to a cutting board and shred with two forks. Discard excess fat.",
      "Remove most of the cooking liquid, saving a little to keep the pork moist.",
      "Return the pork to the slow cooker, stir in barbecue sauce and enough saved liquid to keep it juicy, and heat through.",
      "About 40 minutes before dinner, heat the oven to 425°F.",
      "Cut sweet potatoes into wedges, toss with 2 tbsp oil, salt, pepper and garlic powder, and roast on a large sheet pan 25–35 minutes, turning halfway.",
      "Toss green beans with the last 1 tbsp oil, salt and pepper. Roast on a second pan 15–20 minutes, or steam until tender.",
      "Serve the pork on buns with the sweet potatoes and green beans."
    ],
    note: "Pull your portion of pork before the barbecue sauce goes in if you want it plain, and measure it with your green beans. Count barbecue sauce under your plan; buns and sweet potatoes are for the family. Busy Wednesday? Cook the pork Tuesday night, refrigerate promptly and reheat to 165°F."
  },

  "leftover-turkey-white-bean-chili": {
    title: "Leftover Turkey & White Bean Chili",
    time: "35 minutes · one pot",
    tags: ["turkey", "soup"],
    ingredients: [
      "3 cups cooked, shredded Thanksgiving turkey",
      "3 cans (15 oz each) cannellini or great northern beans, drained and rinsed",
      "1 medium onion, diced",
      "3 cloves garlic, minced",
      "2 cans (4 oz each) diced green chiles",
      "1 can (15 oz) corn, drained",
      "4 cups chicken broth",
      "1 tsp cumin, 1 tsp chili powder, 1 tsp oregano",
      "½ tsp paprika",
      "½ tsp salt, plus more to taste",
      "½ tsp black pepper",
      "4 oz cream cheese, softened",
      "1 tbsp olive oil",
      "Juice of 1 lime",
      "Cornbread, shredded cheese or avocado for serving"
    ],
    steps: [
      "Heat olive oil in a large pot over medium heat.",
      "Add the onion and cook 4–5 minutes, until softened.",
      "Add garlic, cumin, chili powder, oregano and paprika. Stir 30 seconds.",
      "Add beans, green chiles, corn, broth, salt and pepper.",
      "Bring to a gentle boil, then simmer uncovered 15 minutes.",
      "Scoop out about 1½ cups of beans and broth, mash with a fork, and stir back in to thicken.",
      "Stir in the turkey and simmer 5–10 minutes, until heated through to 165°F.",
      "Turn heat to low and stir in the cream cheese a little at a time until melted.",
      "Add lime juice, taste and adjust seasoning.",
      "Serve with cornbread, shredded cheese or avocado."
    ],
    note: "Measure your turkey before it goes in the pot. Count beans, corn and cream cheese under your plan; cornbread is for the family. Use turkey that was refrigerated promptly after Thanksgiving; Friday is within the 3–4 day window for cooked turkey."
  },

  "sheet-pan-sausage-peppers-potatoes": {
    title: "Sheet Pan Italian Sausage, Peppers & Potatoes",
    time: "15 min prep · 40 minutes in the oven",
    tags: ["sausage", "oven"],
    ingredients: [
      "2½–3 lb Italian sausage links (chicken, turkey or pork)",
      "3 lb baby or Yukon gold potatoes",
      "4 bell peppers, assorted colors",
      "2 large onions",
      "2 lb broccoli florets",
      "4 tbsp olive oil",
      "2 tsp Italian seasoning",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "1 tsp salt",
      "½ tsp black pepper",
      "Grated Parmesan (optional)"
    ],
    steps: [
      "Heat oven to 425°F. Line two large rimmed baking sheets with parchment.",
      "Cut potatoes into about ¾-inch pieces. Slice peppers into strips and onions into thick wedges.",
      "If the sausage is fully cooked, cut it into 1-inch pieces. If it’s raw, leave the links whole for now.",
      "Toss potatoes with 2 tbsp oil and half the seasonings, salt and pepper. Spread across both pans and roast 15 minutes.",
      "Meanwhile, toss peppers, onions and broccoli with the rest of the oil and seasonings.",
      "Add the vegetables and sausage to the pans in a single layer.",
      "Roast 20–25 minutes more, stirring vegetables halfway. Raw sausage must reach 160°F for pork or 165°F for chicken or turkey.",
      "Give it a few more minutes if needed, until potatoes are fork-tender and vegetables are browned at the edges.",
      "Sprinkle with Parmesan, if using."
    ],
    note: "Use both pans; crowding one makes the vegetables steam instead of roast. Measure your sausage with the peppers and broccoli. Check the sausage label before counting it; potatoes are for the family."
  }
};

// Newest week last. "start" is the Monday (YYYY-MM-DD). "shopping" and "tip" are optional.
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
  },
  {
    start: "2026-11-09",
    days: {
      mon: "slow-cooker-italian-chicken",
      tue: "turkey-taco-bowls",
      wed: "turkey-sausage-potato-skillet",
      thu: "turkey-vegetable-soup",
      fri: "chicken-parmesan-bake"
    },
    shopping: "All five dinners use the Aldi order: 4 lb chicken, 4 lb ground turkey and the turkey sausage on hand. Green beans: Monday uses two 12 oz bags and Wednesday one, so the three bags are fully used; you may need extra approved vegetables for your own measured servings. With eight people, the meat may not stretch to big portions or leftovers every night.",
    tip: "Chop Monday’s and Tuesday’s vegetables together, and slice Wednesday’s sausage ahead of time."
  },
  {
    start: "2026-11-16",
    days: {
      mon: "slow-cooker-ranch-chicken",
      tue: "unstuffed-pepper-skillet",
      wed: "beef-and-broccoli",
      thu: "turkey-cabbage-soup",
      fri: "garlic-parmesan-turkey-meatballs"
    },
    shopping: "2 lb chicken breast, 6 lb ground turkey and 2 lb lean beef strips. Green beans for Monday and Friday, 2 bags frozen broccoli, cabbage, 2 bell peppers, an onion, 2 cans diced tomatoes, chicken broth, light cream cheese, Parmesan, cheddar, an egg, ranch seasoning and soy sauce. Family sides: rice (Mon–Wed), dinner rolls and pasta."
  },
  {
    start: "2026-11-23",
    days: {
      mon: "chicken-broccoli-rice-skillet",
      tue: "beef-black-bean-tacos",
      wed: "slow-cooker-pulled-pork",
      fri: "leftover-turkey-white-bean-chili",
      sat: "sheet-pan-sausage-peppers-potatoes"
    },
    shopping: "No dinner Thursday: it’s Thanksgiving, and Friday uses 3 cups of the leftover turkey. Meat: 2½ lb chicken breast, 2 lb lean ground beef, 4–5 lb pork shoulder and 2½–3 lb Italian sausage. Produce: 5 onions, garlic, 4 bell peppers, romaine, 3 tomatoes, 3 lb sweet potatoes, 3 lb baby potatoes, 2 lb green beans, 2 lb broccoli florets, a lime and fruit. Plus 2 bags frozen broccoli, 4 cups white rice, about 13 cups chicken broth, 2 cans black beans, 3 cans white beans, 2 cans green chiles, a can of corn, an 8 oz can of tomato sauce, 1½ cups Greek yogurt, cheddar, Mexican cheese, 4 oz cream cheese, salsa, 2 taco seasoning packets, barbecue sauce, tortillas, 8 buns and cornbread.",
    tip: "Sunday: dice Monday’s onion, cut the chicken, wash Tuesday’s lettuce and tomatoes, and check the pork shoulder is thawed. Tuesday night: mix the pork rub and slice the slow-cooker onion. Friday: shred the leftover turkey and chop Saturday’s vegetables."
  }
];
