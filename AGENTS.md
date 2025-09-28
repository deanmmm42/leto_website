# Repository Guidelines

**Think in English, communicate with Chinese**

## Project Structure & Module Organization
- `app/` houses Next.js route segments and page layouts; colocate UI logic with the route folder that renders it.
- `components/` contains reusable view primitives; match new component filenames to the existing kebab-case pattern (e.g., `feature-banner.tsx`).
- `hooks/` and `lib/` store shared client logic and helpers; prefer absolute imports via the `@/` alias configured in `tsconfig.json`.
- `config/text.ts` centralizes copy; review `CONTENT_GUIDE.md` before editing marketing language.
- `public/` holds static assets, while `styles/` and `tailwind.config.ts` manage the Tailwind-driven design tokens.

## Build, Test, and Development Commands
- `npm install` installs workspace dependencies; keep `package-lock.json` committed.
- `npm run dev` launches the Next.js dev server with hot reloading at `http://localhost:3000`.
- `npm run build` produces the production bundle; run before deploying or submitting large PRs.
- `npm run start` serves the optimized build locally for smoke testing.
- `npm run lint` runs the Next core-web-vitals rules plus TypeScript-aware checks.

## Coding Style & Naming Conventions
- Use TypeScript for all source; keep 2-space indentation and let the default Next/Prettier config enforce double quotes.
- Author React components as functions named in PascalCase, export them from files that mirror the component name.
- Compose styles with Tailwind utility classes; prefer tokens defined in `tailwind.config.ts` (e.g., `bg-gradient-warm`).
- Keep imports absolute from `@/` and order them from external packages to local modules.

## Testing Guidelines
- Linting and type-checks are the current automated gate; ensure `npm run lint` passes before review.
- Write new unit or integration tests alongside features (`*.test.tsx`) and document any manual QA in the PR when automation is missing.
- Manually verify critical flows (home hero, solution pages, contact form) in both light and dark modes.

## Commit & Pull Request Guidelines
- Follow Conventional Commit prefixes (`feat:`, `fix:`, `chore:`) as seen in `git log`; keep subjects under 72 characters and descriptive.
- Each PR should describe the change, list testing evidence, and include screenshots or screen recordings for UI updates.
- Reference related issues or product briefs, and call out any follow-up tasks required post-merge.

## Content & Configuration Tips
- Update marketing copy and localized text in `config/text.ts`; avoid duplicating strings inside components.
- Keep schema.org JSON-LD blocks in `app/page.tsx` synchronized with any branding changes.
- When introducing new Tailwind colors or tokens, extend them in `tailwind.config.ts` so design variants stay centralized.
