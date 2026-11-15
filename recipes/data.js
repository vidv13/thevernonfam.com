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
  }
];
