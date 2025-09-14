const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const recipesRouter = require('./routes/recipes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Unique Recipe API — welcome!',
    routes: ['/recipes', '/recipes/random', '/recipes/search?ingredient=tomato']
  });
});

app.use('/recipes', recipesRouter);

app.listen(PORT, () => {
  console.log(`Unique Recipe API running on http://localhost:${PORT}`);
});
