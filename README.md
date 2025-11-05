# Agentic Greeting Hub

Friendly greetings deserve enthusiastic responses. The Agentic Greeting Hub is a small Next.js experience that turns a simple “hi” into a polished landing page with interactive mood visuals and playful copy.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to explore the site locally.

## Available Scripts

```bash
npm run dev    # Launches the Next.js development server
npm run lint   # Runs ESLint with the Next.js config
npm run build  # Produces an optimized production bundle
npm start      # Serves the production build locally
```

## Tech Stack

- Next.js 15 (App Router, typed routes enabled)
- React 18 with the Inter font
- TypeScript with strict settings
- Lightweight styling via `app/globals.css`

## Features

- Responsive landing page with a hero, highlight cards, and clear calls to action
- About page describing how the project sprang from a single friendly greeting
- Contact page featuring an optimistic form and animated moodboard
- Friendly navigation with active link highlighting

## Deployment

This project is production ready and deploys to Vercel via:

```bash
npx vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-d9c7640f
```

The live site is available at https://agentic-d9c7640f.vercel.app.

---

Built decisively in a single autonomous sprint. Say hi, get fireworks. 🎇
