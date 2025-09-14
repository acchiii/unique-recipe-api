# Unique Recipe API

**Feature (unique twist):**  
- Random recipe generator (`GET /recipes/random`)  
- Search recipes by ingredient (`GET /recipes/search?ingredient=tomato`)  
- **Serving scaler:** request a recipe scaled to a specific number of servings (`GET /recipes/:id?servings=4`) — useful for presentation demos and shows light computation/JSON transform.


## Endpoints
- `GET /` — small welcome message and route hints
- `GET /recipes` — list all recipes
- `GET /recipes/random` — returns a random recipe
- `GET /recipes/search?ingredient=...` — find recipes containing an ingredient
- `GET /recipes/:id?servings=NUMBER` — get a recipe (optionally scaled to NUMBER servings)
- `POST /recipes` — add a recipe ({ title, servings, ingredients, steps, tags })
- `DELETE /recipes/:id` — delete a recipe

## Tech
- Node.js + Express
- JSON data file for initial content (`data/recipes.json`)
- CORS + request logging (morgan)

## Install & run
1. Clone or download the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run:
   ```bash
   npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

## Example requests & responses

- Random recipe:
  ```
  GET http://localhost:3000/recipes/random
  ```
  Response:
  ```json
  {
    "recipe": {
      "id": "r2",
      "title": "Tomato Basil Soup",
      "servings": 4
    }
  }
  ```

- Search by ingredient:
  ```
  GET http://localhost:3000/recipes/search?ingredient=garlic
  ```
  Response:
  ```json
  {
    "query": "garlic",
    "count": 3,
    "recipes": [ ... ]
  }
  ```

- Scaled servings:
  ```
  GET http://localhost:3000/recipes/r1?servings=4

