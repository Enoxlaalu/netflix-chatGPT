# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # Production build → /build directory
npm run preview   # Preview production build locally
npx eslint .      # Run ESLint (no npm script configured)
npx prettier --write src/  # Format code
```

Firebase deploy: `firebase deploy` (deploys `/build` to Firebase Hosting).

## Architecture

**Netflix clone** with AI movie search. Stack: React 19 + Vite 6 + TypeScript 5 + SCSS Modules + Firebase Auth.

### Routing (`src/App.tsx`)
React Router v7. Three routes protected by Firebase `onAuthStateChanged`:
- `/` — LoginPage (public)
- `/browse` — BrowsePage (requires auth)
- `/gptSearch` — GptSearchPage (requires auth)

### State Management
No Redux/Zustand — component-level `useState`/`useEffect`. The `useCallApi` hook (`src/hooks/useCallApi.ts`) is the standard pattern for data fetching: it accepts a fetch function, calls it on mount, and returns the data.

```ts
const movies = useCallApi<MovieType[]>(getPopularMovies);
```

### External APIs
- **TheMovieDB** — endpoints in `src/api/movies.ts`; Bearer token hardcoded in `src/utils/callApi.ts`
- **OpenRouter (DeepSeek R1)** — `src/api/openRouter.ts`; key from `VITE_OPEN_ROUTER_KEY` in `.env`
- **Firebase Auth** — initialized in `src/utils/firebase.ts` (config hardcoded)

### Path Alias
`@` maps to `/src` (configured in `vite.config.js`). Use `@/components/...` instead of relative paths.

## Component Conventions

Each component lives in its own PascalCase folder:
```
ComponentName/
  ComponentName.tsx          # Component implementation
  ComponentName.module.scss  # Scoped styles
  ComponentName.types.ts     # Props interface (named ComponentNameType)
```

Pages follow the same pattern under `src/pages/`. Sub-components are nested inside the parent page folder (e.g., `BrowsePage/MovieCard/`).

## Environment Variables

Only one variable is needed in `.env`:
```
VITE_OPEN_ROUTER_KEY="..."
```

Firebase config and TMDB bearer token are hardcoded in source files.
