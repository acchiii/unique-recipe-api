const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const data = require('../data/recipes.json');

// In-memory copy for demo (data file is the source-of-truth for initial content)
let recipes = data.recipes;

// Helper to scale ingredients by factor (for servings)
function scaleIngredients(ingredients, factor) {
  return ingredients.map(i => {
    // If amount is numeric, scale it; otherwise return original
    if (typeof i.amount === 'number') {
      return { ...i, amount: +(i.amount * factor).toFixed(2) };
    }
    return i;
  });
}

// GET /recipes - list all
router.get('/', (req, res) => {
  res.json({ count: recipes.length, recipes });
});

// GET /recipes/random - returns a random recipe
router.get('/random', (req, res) => {
  const idx = Math.floor(Math.random() * recipes.length);
  res.json({ recipe: recipes[idx] });
});

// GET /recipes/search?ingredient=tomato
router.get('/search', (req, res) => {
  const ingredient = (req.query.ingredient || '').toLowerCase();
  if (!ingredient) return res.status(400).json({ error: 'Please provide ?ingredient=...' });
  const found = recipes.filter(r =>
    r.ingredients.some(i => (i.name || '').toLowerCase().includes(ingredient))
  );
  res.json({ query: ingredient, count: found.length, recipes: found });
});

// GET /recipes/:id?servings=4 -> returns recipe, optionally scaled to servings
router.get('/:id', (req, res) => {
  const r = recipes.find(x => x.id === req.params.id);
  if (!r) return res.status(404).json({ error: 'Recipe not found' });
  const servings = parseFloat(req.query.servings);
  if (servings && !isNaN(servings) && servings > 0) {
    const factor = servings / (r.servings || 1);
    const scaled = {
      ...r,
      servings,
      ingredients: scaleIngredients(r.ingredients, factor)
    };
    return res.json({ recipe: scaled });
  }
  res.json({ recipe: r });
});

// POST /recipes - add a new recipe
// Expects: { title, servings, ingredients: [{name, amount, unit}], steps, tags }
router.post('/', (req, res) => {
  const { title, servings, ingredients, steps } = req.body;
  if (!title || !ingredients || !steps) {
    return res.status(400).json({ error: 'title, ingredients, and steps are required' });
  }
  const newRecipe = {
    id: uuidv4(),
    title,
    servings: servings || 1,
    ingredients,
    steps,
    tags: req.body.tags || [],
    createdAt: new Date().toISOString()
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// DELETE /recipes/:id
router.delete('/:id', (req, res) => {
  const idx = recipes.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Recipe not found' });
  const removed = recipes.splice(idx, 1)[0];
  res.json({ removed });
});

module.exports = router;
