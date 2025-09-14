# Unique Recipe API

**Feature (unique twist):**  
- Random recipe generator (`GET /recipes/random`)  
- Search recipes by ingredient (`GET /recipes/search?ingredient=tomato`)  
- **Serving scaler:** request a recipe scaled to a specific number of servings (`GET /recipes/:id?servings=4`) — useful for presentation demos and shows light computation/JSON transform.

This project follows the IT-SIA31 API project instructions: it returns JSON, is built with Express.js (JavaScript), and includes documentation suitable for GitHub.

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
  ```
  Response will include `servings: 4` and ingredients' numeric amounts scaled accordingly.

## GitHub collaboration tips (for grading)
- Create a repo, commit often with descriptive messages.
- Use branches for features and open PRs.
- Add contributors and show merge commits during presentation.

## Next steps / improvements
- Persist data with a database (SQLite / MongoDB).
- Add authentication for protected writes.
- Add unit tests and GitHub Actions CI.

---
Created: 2025-09-14 04:17:30Z
