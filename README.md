# NutriChef AI 🥗

A modern, mobile-responsive React app that uses AI to scan food for nutrition info and generate recipes from your pantry ingredients.

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up your API keys
```bash
cp .env.example .env.local
```
Open `.env.local` and fill in your keys:
```
VITE_ANTHROPIC_API_KEY=sk-ant-...
VITE_OPENAI_API_KEY=sk-...       # optional, for GPT-4 Vision scanning
```

### 3. Run the dev server
```bash
npm run dev
```
Visit http://localhost:5173 — the app loads instantly.

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## Project Structure

```
nutrichef/
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx       # Tab navigation bar
│   │   ├── NutritionCard.jsx   # Calorie + macro display card
│   │   ├── RecipeCard.jsx      # Single recipe suggestion card
│   │   └── RecipeModal.jsx     # Full-screen recipe detail sheet
│   ├── hooks/
│   │   └── useNutriChef.js     # Central state + all API logic
│   ├── pages/
│   │   ├── ScannerPage.jsx     # Food photo scanner tab
│   │   ├── PantryPage.jsx      # Ingredient manager + recipe generator
│   │   └── CookbookPage.jsx    # Saved recipes history
│   ├── App.jsx                 # Root component + routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + global styles
├── .env.example                # API key template
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Features

| Tab | Feature |
|---|---|
| Scanner  | Upload a food photo → skeleton loader → AI nutrition card (calories, protein, carbs, fats) |
| Pantry   | Tag-based ingredient input → Generate Recipes calls Claude API → 3 recipe cards with modal detail view |
| Cookbook | Persistent list of saved items from scanner and pantry |

---

## Connecting Real APIs

### Recipe Generation (Claude) — already wired
Add VITE_ANTHROPIC_API_KEY to .env.local and it switches from mock data to live Claude responses automatically.

### Food Scanning (GPT-4 Vision)
In src/hooks/useNutriChef.js, find handleFileUpload and replace the setTimeout mock with a real fetch to:
  https://api.openai.com/v1/chat/completions
using model gpt-4o with an image_url content block.

### CalorieMama (alternative scanner)
POST to https://api.caloriemama.ai/v1/food/recognize using VITE_CALORIEMAMA_API_KEY.

---

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Anthropic Claude API (recipes)
- OpenAI GPT-4 Vision (food scanning, optional)

---

## License
MIT
