const express = require('express');
const app = express();
const PORT = 8090;

let initialRecipe = [
  {
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    preparationTime: '15 minutes',
    cookingTime: '15',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    country: "India",
    veg: true,
    id: 1,
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Welcome to the recipe API.'));

app.get('/recipe/all', (req, res) => res.json(initialRecipe));

app.get('/index', (req, res) => res.render('index'));

app.get('/add', (req, res) => res.render('recipe'));

app.use('/recipe/add', (req, res, next) => {
  const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;
  if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || veg === undefined) {
    return res.status(400).send('All fields are required');
  }
  next();
});

app.post('/recipe/add', (req, res) => {
  const newRecipe = { ...req.body, id: initialRecipe.length + 1 };
  initialRecipe.push(newRecipe);
  res.json(initialRecipe);
});

app.patch('/recipe/update/:id', (req, res) => {
  const { id } = req.params;
  const index = initialRecipe.findIndex(recipe => recipe.id == id);
  if (index !== -1) {
    Object.assign(initialRecipe[index], req.body);
    res.json(initialRecipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

app.delete('/recipe/delete/:id', (req, res) => {
  const { id } = req.params;
  initialRecipe = initialRecipe.filter(recipe => recipe.id != id);
  res.json(initialRecipe);
});

app.get('/recipe/filter', (req, res) => {
  let filteredRecipes = initialRecipe;
  if (req.query.veg) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.veg == (req.query.veg === 'true'));
  }
  if (req.query.country) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.country === req.query.country);
  }
  if (req.query.sort) {
    filteredRecipes.sort((a, b) => req.query.sort === 'lth' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  }
  res.json(filteredRecipes);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
