# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the HRG (Hacker Residency Group) website - a Next.js application showcasing a hacker residency program in Southeast Asia. The site features rich 3D graphics, animations, and integrations with Notion for content management.

## Development Commands

### Core Commands
- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm clean` - Clean Next.js build artifacts

### Testing & Quality
- `pnpm test` - Run all tests (includes lint, format, and build)
- `pnpm test:lint` - Run ESLint (with cache)
- `pnpm test:format` - Check Prettier formatting

### Notes
- This project uses **pnpm** as the package manager (enforced via preinstall hook)
- Node.js version requirement: **>=20**
- Pre-commit hooks run automatically via simple-git-hooks for linting and formatting

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (with @total-typescript/ts-reset)
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion + GSAP
- **UI Components**: Radix UI primitives (Avatar, Label, Slot, Tooltip)
- **Content**: Notion API via react-notion-x

### Directory Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── home/                 # Home page sections (hero, team, location, CTA)
│   ├── batch-0/             # Batch 0 cohort page
│   ├── apply/               # Application page
│   ├── faq/                 # FAQ page
│   ├── waitlist/            # Waitlist page
│   ├── hooks/               # React hooks (e.g., use-theme)
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # UI primitives (button, input, avatar, etc.)
│   ├── three-text/          # Complex 3D text rendering with shaders
│   ├── particle-animation/  # Particle effects
│   ├── header/              # Site header
│   ├── footer/              # Site footer
│   └── [various].tsx        # Other components (globe, card, etc.)
├── lib/
│   ├── config.ts            # Site-wide config (URLs, metadata, env vars)
│   ├── notion.ts            # Notion API client
│   ├── bootstrap.ts         # App initialization
│   └── utils.ts             # Utility functions
└── icons/                   # Custom icon components
```

### Key Patterns

**Configuration**
- All site-wide configuration lives in `src/lib/config.ts` (URLs, metadata, author info, keywords)
- Environment detection via `isDev`, `isProd`, `isTest` flags
- Environment variables prefixed with `NEXT_PUBLIC_` for client-side access

**Notion Integration**
- Notion content rendered via `react-notion-x` and custom `NotionBlock` component
- Notion API client instantiated in `src/lib/notion.ts`
- Used primarily for FAQ and batch information pages

**3D Graphics & Animation**
- Complex 3D scenes in `src/components/three-text/` with custom shaders
- Globe visualization using `cobe` library
- Particle effects system in `src/components/particle-animation/`
- GSAP used for scroll-based animations (see `animated-story-text.tsx`)

**Styling**
- Tailwind CSS v4 with custom configuration
- shadcn/ui-inspired component structure in `components/ui/`
- CSS modules for specific components (header, footer, hero-button, markdown)
- Global styles in `app/globals.css` and `app/notion.css`

**Component Composition**
- Home page built from modular sections (HeroSection, TeamSection, LocationSection, etc.)
- Each major section is its own component in `src/app/home/`
- Reusable UI primitives in `src/components/ui/`

## Code Style

This project follows strict TypeScript conventions defined in `.cursor/rules/general.mdc`:

- **Imports**: Always use ESM, never file extensions in imports, prefer named exports
- **TypeScript**: No semicolons, avoid `any`, use object parameters for functions
- **Node.js**: Use `node:` protocol for Node.js imports, prefer web standard APIs (fetch, URL)
- **File naming**: kebab-case for files and directories
- **Error handling**: Prefer async/await over .then()/.catch()
- **Comments**: Use JSDoc format

### TypeScript Build Note
- TypeScript build errors are ignored in `next.config.ts` due to GSAP's JS files having implicit any types
- This is intentional and should not be changed

## Git Workflow

- Pre-commit hooks auto-format and lint staged TypeScript files
- Combine git add and commit using `git commit -am` when possible
- CI runs on every push via GitHub Actions (linting, formatting, and build)

## Common Tasks

### Adding a New Page
1. Create directory in `src/app/[page-name]/`
2. Add `page.tsx` with default export
3. Follow existing page patterns (see `src/app/faq/page.tsx`)

### Adding UI Components
1. Place in `src/components/ui/` for reusable primitives
2. Use Radix UI for accessible component foundations
3. Style with Tailwind + class-variance-authority for variants

### Working with 3D Graphics
- Three.js components go in `src/components/`
- Use `@react-three/fiber` for React integration
- See `src/components/globe.tsx` for simple 3D examples
- See `src/components/three-text/` for advanced shader usage

### Notion Content
- Fetch pages using the `notion` client from `src/lib/notion.ts`
- Render using `NotionBlock` component or `react-notion-x` directly
- Custom styles in `src/app/notion.css`
