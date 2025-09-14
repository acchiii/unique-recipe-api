1. Open project & start server

Open VS Code → project folder (unique-recipe-api).

Run:

npm start


Show the console log:

Unique Recipe API running on http://localhost:3000

🔹 2. Show Welcome Route

Open browser → http://localhost:3000/

Explain: “This is our API base route. It shows available endpoints.”

🔹 3. Show GET Requests

All recipes → http://localhost:3000/recipes

Random recipe → http://localhost:3000/recipes/random

Search by ingredient → http://localhost:3000/recipes/search?ingredient=garlic

Scale servings → http://localhost:3000/recipes/r1?servings=4

(Explain briefly what each does and show JSON output.)






IF ERROR 

That error means nodemon isn’t installed globally, so Windows can’t find the command.

But don’t worry 👍 your project already has nodemon in devDependencies, so you can fix this in two ways:

✅ Option 1 — Use npx (recommended)

Run:

npx nodemon index.js


npx will run the local nodemon from your project’s node_modules.

✅ Option 2 — Install nodemon globally

Run:

npm install -g nodemon


Then you can use:

npm run dev