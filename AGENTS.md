# AGENTS.md

A concise guide for AI agents and contributors working in this repository. It covers **how to work** (process, judgment, commits) first, then **what the codebase is** (stack, conventions, reference).

## How to work here

### Make minimal, well-shaped changes

Make surgical changes aligned with existing patterns — but "minimal diff" is not the goal; a readable final state is. When a task could be done either by tacking onto existing code or by first restructuring it slightly, choose the restructuring. If the change would be clearer after extracting a helper, splitting a function, or renaming, that refactor is part of the task.

This is not license for speculative abstraction. Don't invent structure for imagined future needs. If you catch yourself thinking "this does a bit of wasted work, but it's harmless" or "I'll just add the new behavior alongside the old," stop and refactor first.

### Separate prep refactors from behavior changes

If a fix or feature is easier to review after a refactor, land the refactor first as its own commit. Pure refactors must be behavior-preserving; the commit that changes behavior should be as small as possible. When a change would land in logic duplicated across two or more call sites, don't patch one copy — do the behavior-preserving refactor that unifies them first, then make the change once. Never sequence work so one commit introduces a regression that a later commit repairs.

### Demonstrate bugs before fixing them

When fixing a defect, where reasonably possible first land a change that adds or updates a test demonstrating the bug, then fix it. This gives reviewers (and `git bisect`) a clear before/after and proves the test exercises the broken path.

### Don't present "live with the bug" as an option

When laying out fix options for the user, "accept the race / leave it as-is / document it and move on" is not one of them. A known race condition, data corruption, or correctness violation needs a real fix. If a real fix is genuinely out of reach (e.g. it needs an API change you can't make), say so plainly — don't dress "no fix" up as a viable option alongside real ones.

### Comments are for future readers, not development history

Source comments explain *why this code is shaped the way it is* — not what was tried first, what didn't work, or what's "cleaner than the previous approach". The iteration story belongs in the commit message. Avoid phrasings like "more reliable than…", "we used to… but…", "after trying X, we found Y".

### Commits

- **Commit only when the user asks.** Don't leave the tree broken between commits — every commit should type-check (`pnpm ts`) and lint (`pnpm lint`).
- **Conventional commits are required** (`feat:`, `fix:`, `refactor:`, `chore:`, etc.) — enforced by commitlint + lefthook on `commit-msg`.
- **Messages explain _why_, not _what_.** The diff shows what changed; capture the motivation, constraint, or bug.
- **Prefer fine-grained history.** Commits as small as possible while still self-contained.

### Guardrails

- Do not add dependencies without strong justification — ask first. When you do, pin the version in `pnpm-workspace.yaml` under `catalog:` and reference it as `"catalog:"` in `package.json`.
- Do not change Node/pnpm versions or tooling without confirmation.
- Keep changes within `src/` unless config/docs require edits.
- Avoid creating new global state without design review; prefer local component state or server actions.
- Run `pnpm ts` and `pnpm lint` before handing off. Write code that passes the Biome config on the first run; use `biome check --write` (`pnpm lint:fix`) to auto-fix.
- If adding new images/fonts, ensure they're committed and referenced correctly.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss` and `src/styles/globals.css`
- Biome for lint/format, Lefthook git hooks, Commitlint
- Turborepo caching, pnpm 11, Node 24
- Dependency versions are centralized in `pnpm-workspace.yaml` under `catalog:`; `package.json` references them as `"catalog:"`

## Getting Started

- Install: `pnpm install`
- Dev: `pnpm dev`
- Typecheck: `pnpm ts` (fast, via `tsgo`) — or `pnpm tsc` for stock `tsc`
- Lint: `pnpm lint` (or `pnpm lint:fix`)
- Build/Run: `pnpm build && pnpm start`

## Testing

This template ships without a test runner configured. When a change warrants a test, use **`bun:test`** (Bun's built-in runner — `import { describe, test, expect } from 'bun:test'`); do not pull in jest or vitest.

- Colocate `*.test.ts` files next to the code they test.
- Run a single file directly: `bun test src/lib/example.test.ts`.
- See [Demonstrate bugs before fixing them](#demonstrate-bugs-before-fixing-them) — when fixing a defect, add the failing test first.

## Styling

- Tailwind v4 is configured in CSS. Primary entry: `src/styles/globals.css`.
- Use the `cn` helper from `@/lib/classnames` to merge classes.
- Prefer Tailwind utilities and CSS variables over inline styles.
- Dark mode uses the `.dark` class. `layout.tsx` sets initial classes.
- Fonts: Inter + local Geist Sans/Mono via `@/fonts`.

## Environment Variables

- Define and validate env in `src/env.ts` using Zod.
- Mirror any new variables in `turbo.json` under `tasks.build.env`.
- Client exposure requires the `NEXT_PUBLIC_` prefix and must be present in the client schema.
- On invalid env, the app throws early to avoid undefined behavior.

## Server vs Client

- React Compiler is enabled. Prefer idiomatic React and pure components.
- Mark client components with `'use client'` only when necessary.
- Use `server-only` for server-only modules when appropriate.

## Performance & Build

- Turborepo caches `.next/**` and tracks env inputs from `turbo.json`.
- Tailwind v4 compiles from CSS directives; `tailwind.config.ts` is minimal by design.

## Common Tasks

- Add an API route: create `route.ts` under `src/app/api/<name>` and export HTTP methods (`GET`, `POST`, ...).
- Add a page: create a segment folder in `src/app` with `page.tsx` and optional `layout.tsx`.
- Add a component: place in `src/components`, import via `@/components/*`. For shadcn, follow `components.json` aliases.
- Add an env var: update `src/env.ts` (schema), add to `turbo.json` env list, and pass through `process.env` where needed.

## Troubleshooting

- Module resolution: remember baseUrl is `src` with `@/*` alias.
- Env errors: ensure variables exist and are added to both schema and `turbo.json`.
- Styling not applied: confirm `globals.css` is imported in `src/app/layout.tsx`.

## Linting, Formatting, Commits

- Lint/format with Biome: `pnpm lint` or `pnpm lint:fix`.
- Git hooks via Lefthook auto-fix staged files and enforce commit messages.
- Use Conventional Commits (Commitlint is configured).

## Project Conventions

- Module format: ESM (`"type": "module"`). Prefer `import`/`export`.
- Paths: Base URL is `src`. Use `@/` alias (e.g. `@/lib/classnames`).
- Routing: Use App Router under `src/app`. Keep routes colocated by segment folders.
- Errors: `src/app/error.tsx` and `src/app/not-found.tsx` are global pages.
- Metadata: Set via `export const metadata` in layouts/pages.

**For Agents**

- Write code that passes this Biome config on first run. Use `biome check --write` to auto-fix.

**Imports/Exports**

- Use `node:` for Node builtins (e.g., `node:fs`) and `node:assert/strict`.
- Avoid barrel files and namespace imports. Prefer named imports.
- Use type-only imports/exports for types. Don’t export an imported binding; re-export from source.

**TypeScript**

- Prefer `type` aliases over `interface`; avoid `enum` and `namespace`.
- Use `Array<T>` over `T[]`.
- Don’t use non-null assertions or constructor parameter properties.
- Don’t annotate obvious types; lift magic numbers to named constants when needed.

**Code Style**

- Prefer `const`; avoid `.forEach()` in favor of `for...of`/`while`.
- Avoid nested ternaries and negation-else; use template strings.
- Use object spread and assignment shorthand; prefer optional chaining.
- Keep `switch` default last; avoid fallthrough.

**Correctness**

- No floating promises; use `await` in async functions when needed.
- Don’t assign to globals; don’t re-declare; use `globalThis` over `global`/`self`.
- React: no nested component defs; don’t assign to props; provide stable `key` in lists; no children on void elements.
- Hooks: call at top level and specify dependencies.

**React/Next**

- Use function components. Don’t render `<head>` directly.
- Use framework image components instead of raw `<img>` in supported frameworks.
- Avoid async client components in Next.

**Security**

- Add `rel="noopener"` to `target="_blank"` links.
- Don’t use `dangerouslySetInnerHTML`.

**Suspicious**

- `console` is limited to `warn|error|debug` (warned). No bitwise ops, `with`, or `var`.
- No import cycles, no import assignment, and don’t reassign imported bindings.

**Data/Config Files**

- JSON: tabs; width 2; no trailing commas. Comments/trailing commas allowed only in select config files (`package.json`, `tsconfig*.json`, `.vscode/*.json`, `.github/**/*.json`).
- Filenames: ASCII kebab-case (warn). Route files are exempt.

**Overrides**

- Tests: console and `any` allowed; cognitive complexity off.
- Scripts/binaries: console allowed; `process.env` allowed.
- Stories: unused imports/vars allowed. Decls (`*.d.ts`): unused/undeclared allowed.
- Generated/minified/docs/env: linter/formatter disabled.
