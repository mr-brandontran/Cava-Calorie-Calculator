export const DIETARY_FILTERS = [
  { id: 'vegan', label: 'Vegan', group: 'diet' },
  { id: 'vegetarian', label: 'Vegetarian', group: 'diet' },
  { id: 'glutenFree', label: 'Gluten-Free (No Wheat)', group: 'avoiding' },
  { id: 'dairyFree', label: 'Dairy-Free (No Milk)', group: 'avoiding' },
  { id: 'soyFree', label: 'Soy-Free', group: 'avoiding' },
  { id: 'eggFree', label: 'Egg-Free', group: 'avoiding' },
  { id: 'sesameFree', label: 'Sesame-Free', group: 'avoiding' },
];

export const CURATED_BOWLS = [
  {
    id: 'greek-goddess-steak-salad',
    name: 'Greek Goddess Steak Salad',
    description: 'Grilled steak, super greens, crumbled feta, pickled onions, Persian cucumber, tomato + onion, and Greek Goddess dressing.',
    category: 'curated-bowl',
    nutrition: { cal: 470, calFromFat: 260, totalFat: 29, satFat: 9, transFat: 0, chol: 110, sodium: 1250, carb: 22, fiber: 4, sugar: 4, protein: 34 },
    allergens: ['Milk', 'Sesame'],
    diets: []
  },
  {
    id: 'greek-goddess-salmon-bowl',
    name: 'Greek Goddess Salmon Bowl',
    description: 'Glazed salmon, brown rice, super greens, tzatziki, crumbled feta, pickled onions, cucumber, tomato + onion, Greek Goddess dressing.',
    category: 'curated-bowl',
    nutrition: { cal: 700, calFromFat: 360, totalFat: 40, satFat: 7, transFat: 0, chol: 100, sodium: 1800, carb: 57, fiber: 7, sugar: 15, protein: 34 },
    allergens: ['Milk', 'Fish (Salmon)', 'Sesame'],
    diets: []
  },
  {
    id: 'spicy-lamb-avocado-bowl',
    name: 'Spicy Lamb + Avocado Bowl',
    description: 'Spicy lamb meatballs, saffron basmati rice, avocado, roasted eggplant dip, fiery broccoli, pickled onions, skhug.',
    category: 'curated-bowl',
    nutrition: { cal: 800, calFromFat: 460, totalFat: 52, satFat: 14, transFat: 0, chol: 105, sodium: 1670, carb: 49, fiber: 17, sugar: 11, protein: 43 },
    allergens: ['Milk', 'Sesame'],
    diets: []
  },
  {
    id: 'steak-harissa-bowl',
    name: 'Steak + Harissa Bowl',
    description: 'Grilled steak, saffron basmati rice, brown rice, tzatziki, fiery broccoli, fire-roasted corn, hot harissa vinaigrette.',
    category: 'curated-bowl',
    nutrition: { cal: 620, calFromFat: 310, totalFat: 35, satFat: 10, transFat: 0, chol: 105, sodium: 1830, carb: 39, fiber: 7, sugar: 7, protein: 37 },
    allergens: ['Milk', 'Sesame'],
    diets: []
  },
  {
    id: 'harissa-avocado-bowl',
    name: 'Harissa Avocado Bowl',
    description: 'Harissa honey chicken, saffron basmati rice, super greens, avocado, crazy feta, fiery broccoli, pickled onions, hot harissa vinaigrette.',
    category: 'curated-bowl',
    nutrition: { cal: 830, calFromFat: 440, totalFat: 49, satFat: 12, transFat: 0, chol: 155, sodium: 2010, carb: 62, fiber: 12, sugar: 12, protein: 41 },
    allergens: ['Milk', 'Sesame'],
    diets: []
  },
  {
    id: 'chicken-rice-bowl',
    name: 'Chicken + Rice Bowl',
    description: 'Grilled chicken, saffron basmati rice, brown rice, tzatziki, hummus, tomato + cucumber, pickled onions, garlic dressing.',
    category: 'curated-bowl',
    nutrition: { cal: 700, calFromFat: 370, totalFat: 42, satFat: 10, transFat: 0, chol: 165, sodium: 1810, carb: 44, fiber: 7, sugar: 8, protein: 40 },
    allergens: ['Milk', 'Sesame'],
    diets: []
  },
  {
    id: 'greek-salad-bowl',
    name: 'Greek Salad Bowl',
    description: 'Romaine, super greens, grilled chicken, tzatziki, kalamata olives, crumbled feta, tomato + cucumber, Greek vinaigrette.',
    category: 'curated-bowl',
    nutrition: { cal: 580, calFromFat: 360, totalFat: 40, satFat: 10, transFat: 0, chol: 165, sodium: 1810, carb: 19, fiber: 8, sugar: 5, protein: 37 },
    allergens: ['Milk', 'Sesame'],
    diets: []
  },
  {
    id: 'falafel-crunch-bowl',
    name: 'Falafel Crunch Bowl',
    description: 'Falafel, saffron basmati rice, super greens, hummus, roasted eggplant, sumac cabbage slaw, pickled onions, pita crisps, skhug.',
    category: 'curated-bowl',
    nutrition: { cal: 860, calFromFat: 470, totalFat: 56, satFat: 9, transFat: 0, chol: 15, sodium: 2210, carb: 88, fiber: 18, sugar: 13, protein: 24 },
    allergens: ['Wheat', 'Milk', 'Sesame'],
    diets: ['vegetarian']
  },
  {
    id: 'salmon-yogurt-dill-bowl',
    name: 'Salmon + Yogurt Dill Bowl',
    description: 'Glazed salmon, brown rice, spinach, tzatziki, pickled onions, Persian cucumber, yogurt dill dressing.',
    category: 'curated-bowl',
    nutrition: { cal: 710, calFromFat: 390, totalFat: 43, satFat: 9, transFat: 0, chol: 110, sodium: 1870, carb: 49, fiber: 5, sugar: 10, protein: 35 },
    allergens: ['Milk', 'Fish (Salmon)', 'Sesame'],
    diets: []
  },
  {
    id: 'pomegranate-glazed-salmon-bowl',
    name: 'Pomegranate Glazed Salmon Bowl',
    description: 'Glazed salmon, saffron basmati rice, black lentils, roasted eggplant dip, fire-roasted corn, pickled onions, lemon herb tahini.',
    category: 'curated-bowl',
    nutrition: { cal: 1040, calFromFat: 590, totalFat: 65, satFat: 11, transFat: 0, chol: 105, sodium: 2120, carb: 80, fiber: 9, sugar: 11, protein: 36 },
    allergens: ['Milk', 'Fish (Salmon)', 'Sesame'],
    diets: []
  }
];

export const CURATED_PITAS = [
  {
    id: 'spicy-chicken-avocado-pita',
    name: 'Spicy Chicken + Avocado Pita',
    description: 'Warm fluffy whole pita with harissa honey chicken, avocado, crazy feta, pickles, shredded romaine, hot harissa vinaigrette.',
    category: 'curated-pita',
    nutrition: { cal: 930, calFromFat: 430, totalFat: 48, satFat: 11, transFat: 0, chol: 155, sodium: 2290, carb: 80, fiber: 13, sugar: 13, protein: 48 },
    allergens: ['Wheat', 'Milk'],
    diets: []
  },
  {
    id: 'steak-feta-pita',
    name: 'Steak + Feta Pita',
    description: 'Warm whole pita, grilled steak, crumbled feta, pickled onions, Persian cucumber, tomato + onion, Greek vinaigrette.',
    category: 'curated-pita',
    nutrition: { cal: 820, calFromFat: 370, totalFat: 42, satFat: 10, transFat: 0, chol: 105, sodium: 1800, carb: 68, fiber: 9, sugar: 9, protein: 44 },
    allergens: ['Wheat', 'Milk', 'Sesame'],
    diets: []
  },
  {
    id: 'greek-chicken-pita',
    name: 'Greek Chicken Pita',
    description: 'Warm whole pita, grilled chicken, tzatziki, crumbled feta, tomato + cucumber, pickled onions, shredded romaine, Greek vinaigrette.',
    category: 'curated-pita',
    nutrition: { cal: 720, calFromFat: 270, totalFat: 30, satFat: 9, transFat: 0, chol: 170, sodium: 2230, carb: 64, fiber: 8, sugar: 6, protein: 48 },
    allergens: ['Wheat', 'Milk'],
    diets: []
  }
];

export const MENU_CATEGORIES = [
  {
    id: 'bases',
    name: 'Bases (Grains & Greens)',
    subhead: 'CHOOSE UP TO 2 (SPLIT HALF & HALF)',
    maxSelect: 2,
    type: 'split',
    items: [
      { id: 'brown-rice', name: 'Brown Rice', cal: 310, calFromFat: 90, totalFat: 10, satFat: 2, transFat: 0, chol: 0, sodium: 770, carb: 48, fiber: 5, sugar: 2, protein: 7, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'saffron-basmati-rice', name: 'Saffron Basmati Rice', cal: 290, calFromFat: 60, totalFat: 7, satFat: 1, transFat: 0, chol: 0, sodium: 770, carb: 54, fiber: 2, sugar: 1, protein: 5, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'black-lentils', name: 'Black Lentils', cal: 270, calFromFat: 70, totalFat: 7, satFat: 1, transFat: 0, chol: 0, sodium: 520, carb: 37, fiber: 15, sugar: 3, protein: 18, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'super-greens', name: 'Super Greens', cal: 35, calFromFat: 5, totalFat: 0.5, satFat: 0, transFat: 0, chol: 0, sodium: 35, carb: 6, fiber: 4, sugar: 2, protein: 3, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'arugula', name: 'Arugula', cal: 20, calFromFat: 5, totalFat: 0.5, satFat: 0, transFat: 0, chol: 0, sodium: 25, carb: 3, fiber: 1, sugar: 2, protein: 2, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'baby-spinach', name: 'Baby Spinach', cal: 20, calFromFat: 5, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 70, carb: 3, fiber: 2, sugar: 0, protein: 3, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'romaine', name: 'Romaine', cal: 20, calFromFat: 5, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 10, carb: 4, fiber: 3, sugar: 1, protein: 1, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'power-greens', name: 'Power Greens', cal: 30, calFromFat: 2, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 35, carb: 4, fiber: 2, sugar: 1, protein: 2, allergens: [], diets: ['vegan', 'vegetarian'] }
    ]
  },
  {
    id: 'dips',
    name: 'Dips & Spreads',
    subhead: 'CHOOSE UP TO 3 (INCLUDED IN BOWL)',
    maxSelect: 3,
    type: 'multi',
    items: [
      { id: 'tzatziki', name: 'Tzatziki', cal: 30, calFromFat: 20, totalFat: 2.5, satFat: 1.5, transFat: 0, chol: 10, sodium: 60, carb: 1, fiber: 0, sugar: 1, protein: 2, allergens: ['Milk'], diets: ['vegetarian'] },
      { id: 'hummus', name: 'Traditional Hummus', cal: 50, calFromFat: 25, totalFat: 2.5, satFat: 0, transFat: 0, chol: 0, sodium: 90, carb: 4, fiber: 2, sugar: 0, protein: 2, allergens: ['Sesame'], diets: ['vegan', 'vegetarian'] },
      { id: 'roasted-eggplant', name: 'Roasted Eggplant Dip', cal: 50, calFromFat: 40, totalFat: 5, satFat: 0.5, transFat: 0, chol: 0, sodium: 160, carb: 2, fiber: 1, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'crazy-feta', name: 'Crazy Feta®', cal: 70, calFromFat: 50, totalFat: 6, satFat: 3, transFat: 0, chol: 15, sodium: 230, carb: 1, fiber: 0, sugar: 0, protein: 4, allergens: ['Milk'], diets: ['vegetarian'] },
      { id: 'harissa', name: 'Harissa Spread', cal: 70, calFromFat: 50, totalFat: 6, satFat: 1, transFat: 0, chol: 0, sodium: 250, carb: 5, fiber: 1, sugar: 2, protein: 1, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'red-pepper-hummus', name: 'Red Pepper Hummus', cal: 40, calFromFat: 10, totalFat: 1.5, satFat: 0, transFat: 0, chol: 0, sodium: 105, carb: 5, fiber: 2, sugar: 1, protein: 2, allergens: ['Sesame'], diets: ['vegan', 'vegetarian'] }
    ]
  },
  {
    id: 'mains',
    name: 'Mains & Proteins',
    subhead: 'CHOOSE 1 (DOUBLE PORTION AVAILABLE)',
    maxSelect: 2,
    type: 'split-protein',
    items: [
      { id: 'harissa-honey-chicken', name: 'Harissa Honey Chicken', cal: 260, calFromFat: 120, totalFat: 14, satFat: 3, transFat: 0, chol: 135, sodium: 670, carb: 7, fiber: 2, sugar: 3, protein: 26, allergens: [], diets: [] },
      { id: 'grilled-chicken', name: 'Grilled Chicken', cal: 250, calFromFat: 120, totalFat: 13, satFat: 3, transFat: 0, chol: 150, sodium: 670, carb: 3, fiber: 1, sugar: 0, protein: 28, allergens: [], diets: [] },
      { id: 'grilled-steak', name: 'Grilled Steak', cal: 170, calFromFat: 80, totalFat: 9, satFat: 3, transFat: 0, chol: 85, sodium: 280, carb: 1, fiber: 0, sugar: 0, protein: 23, allergens: [], diets: [] },
      { id: 'braised-lamb', name: 'Braised Lamb', cal: 210, calFromFat: 110, totalFat: 12, satFat: 6, transFat: 0, chol: 65, sodium: 450, carb: 2, fiber: 1, sugar: 0, protein: 24, allergens: [], diets: [] },
      { id: 'spicy-lamb-meatballs', name: 'Spicy Lamb Meatballs', cal: 300, calFromFat: 190, totalFat: 21, satFat: 8, transFat: 0, chol: 90, sodium: 680, carb: 3, fiber: 1, sugar: 1, protein: 24, allergens: [], diets: [] },
      { id: 'glazed-salmon', name: 'Glazed Salmon', cal: 320, calFromFat: 210, totalFat: 23, satFat: 3.5, transFat: 0, chol: 90, sodium: 630, carb: 5, fiber: 0, sugar: 5, protein: 23, allergens: ['Fish (Salmon)'], diets: [] },
      { id: 'falafel', name: 'Falafel', cal: 350, calFromFat: 230, totalFat: 26, satFat: 2, transFat: 0, chol: 0, sodium: 810, carb: 24, fiber: 5, sugar: 3, protein: 6, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] },
      { id: 'roasted-vegetables', name: 'Roasted Vegetables', cal: 100, calFromFat: 40, totalFat: 4.5, satFat: 0.5, transFat: 0, chol: 0, sodium: 600, carb: 14, fiber: 5, sugar: 5, protein: 3, allergens: [], diets: ['vegan', 'vegetarian'] }
    ]
  },
  {
    id: 'toppings',
    name: 'Toppings',
    subhead: 'CHOOSE AS MANY AS YOU LIKE',
    maxSelect: 99,
    type: 'topping-multi',
    items: [
      { id: 'crumbled-feta', name: 'Crumbled Feta', cal: 35, calFromFat: 20, totalFat: 2.5, satFat: 1.5, transFat: 0, chol: 10, sodium: 125, carb: 0, fiber: 0, sugar: 1, protein: 3, allergens: ['Milk'], diets: ['vegetarian'] },
      { id: 'avocado', name: 'Avocado', cal: 110, calFromFat: 90, totalFat: 10, satFat: 1.5, transFat: 0, chol: 0, sodium: 0, carb: 6, fiber: 4, sugar: 0, protein: 1, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'pickled-onions', name: 'Pickled Onions', cal: 20, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, carb: 5, fiber: 0, sugar: 4, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'persian-cucumber', name: 'Persian Cucumber', cal: 15, calFromFat: 10, totalFat: 1, satFat: 0, transFat: 0, chol: 0, sodium: 110, carb: 1, fiber: 0, sugar: 1, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'tomato-cucumber', name: 'Tomato + Cucumber', cal: 5, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, carb: 1, fiber: 0, sugar: 1, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'tomato-onion', name: 'Tomato + Onion', cal: 20, calFromFat: 15, totalFat: 1.5, satFat: 0, transFat: 0, chol: 0, sodium: 125, carb: 2, fiber: 0, sugar: 1, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'kalamata-olives', name: 'Kalamata Olives', cal: 35, calFromFat: 25, totalFat: 3, satFat: 0.5, transFat: 0, chol: 0, sodium: 360, carb: 2, fiber: 2, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'fiery-broccoli', name: 'Fiery Broccoli', cal: 35, calFromFat: 25, totalFat: 2.5, satFat: 0, transFat: 0, chol: 0, sodium: 170, carb: 2, fiber: 1, sugar: 1, protein: 1, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'sumac-cabbage-slaw', name: 'Sumac Cabbage Slaw', cal: 30, calFromFat: 15, totalFat: 1.5, satFat: 0, transFat: 0, chol: 0, sodium: 170, carb: 3, fiber: 1, sugar: 1, protein: 1, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'fire-roasted-corn', name: 'Fire-Roasted Corn', cal: 45, calFromFat: 25, totalFat: 2.5, satFat: 0, transFat: 0, chol: 0, sodium: 105, carb: 5, fiber: 1, sugar: 2, protein: 1, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'pita-crisps', name: 'Pita Crisps', cal: 70, calFromFat: 70, totalFat: 11, satFat: 1.5, transFat: 0, chol: 0, sodium: 25, carb: 6, fiber: 0, sugar: 0, protein: 1, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] },
      { id: 'salt-brined-pickles', name: 'Salt-Brined Pickles', cal: 5, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 180, carb: 0, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'shredded-romaine', name: 'Shredded Romaine', cal: 5, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, carb: 1, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] }
    ]
  },
  {
    id: 'dressings',
    name: 'Dressings & Vinaigrettes',
    subhead: 'CHOOSE 1 OR 2',
    maxSelect: 3,
    type: 'topping-multi',
    items: [
      { id: 'greek-goddess', name: 'Greek Goddess', cal: 35, calFromFat: 25, totalFat: 3, satFat: 1.5, transFat: 0, chol: 5, sodium: 115, carb: 2, fiber: 0, sugar: 0, protein: 2, allergens: ['Milk'], diets: ['vegetarian'] },
      { id: 'garlic-dressing', name: 'Garlic Dressing', cal: 180, calFromFat: 170, totalFat: 20, satFat: 1.5, transFat: 0, chol: 0, sodium: 90, carb: 0, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'greek-vinaigrette', name: 'Greek Vinaigrette', cal: 130, calFromFat: 120, totalFat: 14, satFat: 2, transFat: 0, chol: 0, sodium: 230, carb: 1, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'skhug', name: 'Skhug (Spicy Herb Sauce)', cal: 80, calFromFat: 80, totalFat: 9, satFat: 1, transFat: 0, chol: 0, sodium: 150, carb: 1, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'hot-harissa-vinaigrette', name: 'Hot Harissa Vinaigrette', cal: 70, calFromFat: 60, totalFat: 7, satFat: 1, transFat: 0, chol: 0, sodium: 270, carb: 1, fiber: 0, sugar: 1, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'lemon-herb-tahini', name: 'Lemon Herb Tahini', cal: 70, calFromFat: 50, totalFat: 6, satFat: 1, transFat: 0, chol: 0, sodium: 140, carb: 4, fiber: 2, sugar: 0, protein: 2, allergens: ['Sesame'], diets: ['vegan', 'vegetarian'] },
      { id: 'balsamic-date-vinaigrette', name: 'Balsamic Date Vinaigrette', cal: 60, calFromFat: 35, totalFat: 4, satFat: 0.5, transFat: 0, chol: 0, sodium: 250, carb: 7, fiber: 1, sugar: 5, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'yogurt-dill', name: 'Yogurt Dill', cal: 30, calFromFat: 20, totalFat: 2, satFat: 1, transFat: 0, chol: 5, sodium: 190, carb: 1, fiber: 0, sugar: 0, protein: 2, allergens: ['Milk'], diets: ['vegetarian'] }
    ]
  },
  {
    id: 'sides',
    name: 'Sides & Bakery',
    subhead: 'ADD-ONS & TREATS',
    maxSelect: 99,
    type: 'counter',
    items: [
      { id: 'side-pita', name: 'Side Quarter Pita (Included)', cal: 80, calFromFat: 15, totalFat: 1.5, satFat: 0, transFat: 0, chol: 0, sodium: 180, carb: 14, fiber: 2, sugar: 1, protein: 3, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] },
      { id: 'whole-pita', name: 'Whole Pita', cal: 320, calFromFat: 50, totalFat: 6, satFat: 1, transFat: 0, chol: 0, sodium: 700, carb: 54, fiber: 6, sugar: 3, protein: 13, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] },
      { id: 'pita-chips', name: 'Pita Chips', cal: 280, calFromFat: 80, totalFat: 8, satFat: 1, transFat: 0, chol: 0, sodium: 630, carb: 41, fiber: 5, sugar: 2, protein: 10, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] },
      { id: 'harissa-bbq-pita-chips', name: 'Harissa BBQ Pita Chips', cal: 280, calFromFat: 90, totalFat: 10, satFat: 2, transFat: 0, chol: 0, sodium: 850, carb: 43, fiber: 5, sugar: 3, protein: 10, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] },
      { id: 'chocolate-chip-blondie', name: 'Greyston Chocolate Chip Blondie', cal: 140, calFromFat: 45, totalFat: 5, satFat: 3, transFat: 0, chol: 35, sodium: 10, carb: 22, fiber: 0, sugar: 16, protein: 2, allergens: ['Wheat', 'Milk', 'Soy', 'Eggs'], diets: ['vegetarian'] },
      { id: 'greyston-brownie', name: 'Greyston Brownie', cal: 150, calFromFat: 80, totalFat: 9, satFat: 6, transFat: 0, chol: 45, sodium: 10, carb: 17, fiber: 1, sugar: 13, protein: 2, allergens: ['Wheat', 'Milk', 'Eggs'], diets: ['vegetarian'] },
      { id: 'apricot-honey-cookie', name: 'Whisked! Apricot Honey Cookie', cal: 220, calFromFat: 80, totalFat: 9, satFat: 6, transFat: 0, chol: 40, sodium: 150, carb: 34, fiber: 1, sugar: 19, protein: 3, allergens: ['Wheat', 'Milk', 'Eggs'], diets: ['vegetarian'] },
      { id: 'dark-chocolate-oat-cookie', name: 'Whisked! Salted Dark Chocolate Oat Cookie', cal: 240, calFromFat: 120, totalFat: 13, satFat: 7, transFat: 0, chol: 35, sodium: 115, carb: 31, fiber: 3, sugar: 17, protein: 4, allergens: ['Wheat', 'Milk', 'Soy', 'Eggs'], diets: ['vegetarian'] }
    ]
  },
  {
    id: 'drinks',
    name: 'Beverages & Juices',
    subhead: 'REFRESHMENTS',
    maxSelect: 99,
    type: 'counter',
    items: [
      { id: 'classic-lemonade-16oz', name: 'Classic Lemonade (16 oz)', cal: 260, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, carb: 69, fiber: 0, sugar: 66, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'cucumber-mint-lime-16oz', name: 'Cucumber Mint Lime (16 oz)', cal: 180, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, carb: 44, fiber: 0, sugar: 41, protein: 1, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'blueberry-lavender-16oz', name: 'Blueberry Lavender (16 oz)', cal: 140, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 10, carb: 36, fiber: 0, sugar: 34, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'sweet-tea-16oz', name: 'Sweet Tea (16 oz)', cal: 150, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 15, carb: 37, fiber: 0, sugar: 37, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'unsweetened-black-tea-16oz', name: 'Unsweetened Black Tea (16 oz)', cal: 0, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 15, carb: 0, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'jasmine-green-tea-16oz', name: 'Jasmine Green Tea (16 oz)', cal: 0, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 15, carb: 0, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'spindrift-grapefruit', name: 'Spindrift Grapefruit', cal: 17, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, carb: 4, fiber: 0, sugar: 3, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'spindrift-raspberry-lime', name: 'Spindrift Raspberry Lime', cal: 5, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, carb: 1, fiber: 0, sugar: 1, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'maine-root-soda-16oz', name: 'Maine Root Fountain Soda (16 oz)', cal: 190, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 50, carb: 50, fiber: 0, sugar: 50, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'maine-root-diet-soda-16oz', name: 'Maine Root Diet Soda (16 oz)', cal: 0, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 40, carb: 0, fiber: 0, sugar: 0, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'chocolate-milk', name: 'Organic Chocolate Milk', cal: 150, calFromFat: 25, totalFat: 2.5, satFat: 1.5, transFat: 0, chol: 10, sodium: 200, carb: 22, fiber: 0, sugar: 21, protein: 8, allergens: ['Milk'], diets: ['vegetarian'] },
      { id: 'milk-1-percent', name: 'Organic 1% Milk', cal: 110, calFromFat: 25, totalFat: 2.5, satFat: 1.5, transFat: 0, chol: 15, sodium: 125, carb: 12, fiber: 0, sugar: 12, protein: 8, allergens: ['Milk'], diets: ['vegetarian'] },
      { id: 'honest-apple-juice', name: 'Honest Organic Apple Juice', cal: 35, calFromFat: 0, totalFat: 0, satFat: 0, transFat: 0, chol: 0, sodium: 15, carb: 9, fiber: 0, sugar: 8, protein: 0, allergens: [], diets: ['vegan', 'vegetarian'] }
    ]
  },
  {
    id: 'kids',
    name: "Kid's Meal Components",
    subhead: 'PORTIONED FOR KIDS',
    maxSelect: 99,
    type: 'counter',
    items: [
      { id: 'kids-saffron-rice', name: 'Kids Saffron Basmati Rice', cal: 150, calFromFat: 30, totalFat: 3.5, satFat: 0.5, transFat: 0, chol: 0, sodium: 390, carb: 27, fiber: 1, sugar: 0, protein: 3, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'kids-brown-rice', name: 'Kids Brown Rice', cal: 150, calFromFat: 45, totalFat: 5, satFat: 1, transFat: 0, chol: 0, sodium: 390, carb: 24, fiber: 2, sugar: 1, protein: 3, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'kids-black-lentils', name: 'Kids Black Lentils', cal: 130, calFromFat: 30, totalFat: 3.5, satFat: 0, transFat: 0, chol: 0, sodium: 260, carb: 18, fiber: 7, sugar: 2, protein: 9, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'kids-chicken', name: 'Kids Grilled Chicken', cal: 120, calFromFat: 60, totalFat: 7, satFat: 1.5, transFat: 0, chol: 75, sodium: 330, carb: 1, fiber: 1, sugar: 0, protein: 14, allergens: [], diets: [] },
      { id: 'kids-harissa-chicken', name: 'Kids Harissa Honey Chicken', cal: 130, calFromFat: 60, totalFat: 7, satFat: 1.5, transFat: 0, chol: 65, sodium: 340, carb: 4, fiber: 1, sugar: 2, protein: 13, allergens: [], diets: [] },
      { id: 'kids-steak', name: 'Kids Grilled Steak', cal: 90, calFromFat: 40, totalFat: 4.5, satFat: 1.5, transFat: 0, chol: 40, sodium: 140, carb: 0, fiber: 0, sugar: 0, protein: 11, allergens: [], diets: [] },
      { id: 'kids-meatballs', name: 'Kids Spicy Lamb Meatballs', cal: 150, calFromFat: 100, totalFat: 11, satFat: 4, transFat: 0, chol: 45, sodium: 340, carb: 2, fiber: 0, sugar: 1, protein: 12, allergens: [], diets: [] },
      { id: 'kids-falafel', name: 'Kids Falafel', cal: 170, calFromFat: 120, totalFat: 13, satFat: 1, transFat: 0, chol: 0, sodium: 400, carb: 12, fiber: 2, sugar: 1, protein: 3, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] },
      { id: 'kids-veggies', name: 'Kids Roasted Vegetables', cal: 50, calFromFat: 20, totalFat: 2, satFat: 0, transFat: 0, chol: 0, sodium: 300, carb: 7, fiber: 3, sugar: 3, protein: 2, allergens: [], diets: ['vegan', 'vegetarian'] },
      { id: 'kids-pita-chips', name: 'Kids Pita Chips', cal: 140, calFromFat: 40, totalFat: 4, satFat: 0.5, transFat: 0, chol: 0, sodium: 310, carb: 20, fiber: 2, sugar: 1, protein: 5, allergens: ['Wheat'], diets: ['vegan', 'vegetarian'] }
    ]
  }
];

export const FDA_DAILY_VALUES = {
  totalFat: 78,      // g
  satFat: 20,        // g
  chol: 300,         // mg
  sodium: 2300,      // mg
  carb: 275,         // g
  fiber: 28,         // g
  sugar: 50,         // g
  protein: 50        // g
};
