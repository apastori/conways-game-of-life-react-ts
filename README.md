# Conway's Game of Life — Interactive Command Center

An interactive, browser-based implementation of **John Horton Conway's Game of Life**, built with **React**, **TypeScript**, and **Vite**. The application presents a cyberpunk-inspired command-center UI where you can seed patterns, run simulations, step through generations, and edit the grid under configurable rules.

The favicon is a tribute portrait of **John Conway**, the mathematician who invented the Game of Life in 1970.

---

## Table of Contents

- [About John Conway and the Game of Life](#about-john-conway-and-the-game-of-life)
- [The Rules](#the-rules)
- [Patterns and Emergent Behavior](#patterns-and-emergent-behavior)
- [Why the Game of Life Matters](#why-the-game-of-life-matters)
- [Features of This Application](#features-of-this-application)
- [Technologies and Packages](#technologies-and-packages)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [License](#license)

---

## About John Conway and the Game of Life

**John Horton Conway** (1937–2020) was a British mathematician whose work spanned group theory, number theory, topology, and recreational mathematics. In **1970**, he introduced the **Game of Life** (often abbreviated **Life**), a **zero-player game** — meaning the evolution of the system is fully determined by its initial state and rules, with no further input required from a player after setup.

Life is played on an **infinite two-dimensional grid** of square cells. Each cell is either **alive** or **dead**. Time advances in discrete steps called **generations**. At each generation, every cell is updated simultaneously according to a small set of rules based on the number of **live neighbors** (the eight adjacent cells horizontally, vertically, and diagonally).

Despite its simplicity, the Game of Life is **Turing complete**: sufficiently large patterns can simulate a universal computer. That means, in principle, any computation that a conventional computer can perform can be encoded as an initial Life configuration. This discovery cemented Life as one of the most important examples in **cellular automata** — systems where complex global behavior emerges from simple local rules.

Conway designed Life to demonstrate how **surprisingly rich behavior** could arise from rules simple enough to describe in a single sentence. Over decades, mathematicians, programmers, and hobbyists have catalogued thousands of patterns — still lifes, oscillators, spaceships, guns, and more — many with elegant mathematical structure.

This project is a tribute to Conway's legacy: an accessible, visual way to explore the beauty of emergent complexity he helped bring to the world.

---

## The Rules

Life uses **B3/S23** notation in the cellular-automata community:

| Notation | Meaning |
|----------|---------|
| **B3** | A **dead** cell is **born** (becomes alive) if it has exactly **3** live neighbors |
| **S23** | A **live** cell **survives** if it has **2 or 3** live neighbors |

Equivalently, the four classic rules are:

### 1. Underpopulation
If a live cell has **fewer than two** live neighbors, it **dies** (as if from isolation).

### 2. Survival
If a live cell has **two or three** live neighbors, it **remains alive** (stable population).

### 3. Overpopulation
If a live cell has **more than three** live neighbors, it **dies** (as if from overcrowding).

### 4. Reproduction
If a dead cell has **exactly three** live neighbors, it **becomes alive** (as if by reproduction from its neighbors).

All cells are evaluated **at the same time** each generation. The next state of the entire grid is computed from the current state — this is called a **synchronous update**.

In this application, the rules are implemented in `src/Rules.ts` and applied in `src/computeNextGrid.ts`, which counts live neighbors in all eight directions defined in `src/Directions.ts`.

---

## Patterns and Emergent Behavior

Different starting configurations evolve in dramatically different ways. Common categories include:

### Still Lifes
Patterns that **do not change** from one generation to the next.

| Pattern | Description |
|---------|-------------|
| **Block** | A 2×2 square of live cells |
| **Beehive** | A hexagonal cluster of six live cells |
| **Boat, Tub, Loaf** | Other small stable shapes |

### Oscillators
Patterns that **repeat** after a fixed number of generations.

| Pattern | Period | Description |
|---------|--------|-------------|
| **Blinker** | 2 | Three live cells in a row, alternating horizontal/vertical |
| **Toad** | 2 | Two staggered rows of three cells |
| **Beacon** | 2 | Two 2×2 blocks that alternate |
| **Pulsar** | 3 | A large, highly symmetric oscillator |

### Spaceships
Patterns that **translate** across the grid while maintaining their shape.

| Pattern | Description |
|---------|-------------|
| **Glider** | The smallest and most famous spaceship; moves diagonally |
| **Lightweight Spaceship (LWSS)** | Moves horizontally |
| **Middleweight / Heavyweight Spaceship** | Larger variants |

### Guns and Breeders
More advanced structures that **periodically emit** spaceships or other patterns (e.g., the **Gosper Glider Gun**, discovered by Bill Gosper in 1970).

Try drawing a **glider** or **blinker** by hand in the grid, or use **Seed Random** to discover emergent behavior from random noise.

---

## Why the Game of Life Matters

- **Emergence**: Complex global patterns arise from purely local rules — a central theme in complexity science, artificial life, and physics.
- **Computability**: Life is Turing complete; patterns can encode logic gates, memory, and full programs.
- **Mathematical recreation**: Life bridges serious mathematics and accessible play, inspiring generations of researchers and enthusiasts.
- **Computer science education**: Implementing Life is a classic exercise in arrays, simulation loops, and immutable state updates.

---

## Features of This Application

### Simulation Matrix
- **30 × 50** cell grid (configurable in `src/GridConfig.ts`)
- Click cells to toggle them alive/dead
- **Click-and-drag** painting: hold the mouse button and move across cells to draw patterns quickly
- Neon-styled visual feedback for live and dead cells

### Command Console
| Control | Description |
|---------|-------------|
| **Start** | Begin automatic generation stepping |
| **Pause** | Stop automatic stepping |
| **Step** | Advance exactly one generation while paused |
| **Speed** | Slow (1000 ms), Medium (500 ms), Fast (100 ms), or Lightning (50 ms) per generation |
| **Clear** | Reset the grid, stop playback, and reset the generation counter |
| **Seed Random** | Fill the grid randomly (~25% of cells alive) |

### Editing Controls
| Toggle | Behavior |
|--------|----------|
| **Allow Editing While Paused** | When enabled, you can modify the grid after the simulation has started but is paused |
| **Allow Editing While Running** | When enabled, you can modify the grid during active playback |

Before the first **Start**, editing is always allowed regardless of toggle state.

### Status Bar
- Live **generation counter**
- Simulation status indicators (idle, running, paused)
- Current speed display
- Live timestamp

### Design
- Cyberpunk / neon command-center aesthetic
- Glass panels, animated borders, and background particle effects
- Responsive layout: grid and controls side-by-side on large screens, stacked on smaller viewports
- Google Fonts: **Orbitron** (display) and **Rajdhani** (UI text)

---

## Technologies and Packages

### Core Runtime

| Package | Version | Role |
|---------|---------|------|
| [React](https://react.dev/) | ^18.3.1 | UI library; component-based rendering and state management |
| [React DOM](https://react.dev/) | ^18.3.1 | Renders React components to the browser DOM |
| [react-icons](https://react-icons.github.io/react-icons/) | ^5.3.0 | Icon set used across control and status components |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | ^2.5.5 | Merges Tailwind CSS class names without conflicts (used in `twMerge`) |

### Build Tooling

| Package | Version | Role |
|---------|---------|------|
| [Vite](https://vite.dev/) | ^6.0.1 | Fast dev server and production bundler with native ESM support |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | ^4.3.4 | Enables React Fast Refresh and JSX transformation in Vite |
| [TypeScript](https://www.typescriptlang.org/) | ~5.6.2 | Static typing for safer, more maintainable code |

### Styling

| Package | Version | Role |
|---------|---------|------|
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.15 | Utility-first CSS framework for layout, colors, and responsive design |
| [PostCSS](https://postcss.org/) | ^8.4.49 | CSS processing pipeline |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | ^10.4.20 | Automatically adds vendor prefixes to CSS for cross-browser compatibility |

Custom design tokens (neon colors, glow shadows, animations) are defined in `tailwind.config.js` and `src/index.css`.

### Code Quality

| Package | Version | Role |
|---------|---------|------|
| [ESLint](https://eslint.org/) | ^9.15.0 | JavaScript/TypeScript linting |
| [@eslint/js](https://eslint.org/) | ^9.15.0 | Core ESLint recommended rules |
| [typescript-eslint](https://typescript-eslint.io/) | ^8.15.0 | TypeScript-aware lint rules |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | ^5.0.0 | Enforces Rules of Hooks in React components |
| [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) | ^0.4.14 | Validates React Fast Refresh compatibility |
| [globals](https://www.npmjs.com/package/globals) | ^15.12.0 | Global variable definitions for ESLint flat config |

### Type Definitions

| Package | Version | Role |
|---------|---------|------|
| [@types/react](https://www.npmjs.com/package/@types/react) | ^18.3.12 | TypeScript types for React |
| [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) | ^18.3.1 | TypeScript types for React DOM |

### External Resources (CDN)

| Resource | Role |
|----------|------|
| [Google Fonts — Orbitron](https://fonts.google.com/specimen/Orbitron) | Display headings |
| [Google Fonts — Rajdhani](https://fonts.google.com/specimen/Rajdhani) | UI and body text |

### Architecture Highlights

- **Simulation loop**: Recursive `setTimeout` driven by a `useCallback` hook, with refs to read current play state and speed without stale closures
- **Grid computation**: Pure function `computeNextGrid()` — takes the current grid, applies B3/S23 rules on a **finite grid** where out-of-bounds neighbors are treated as dead (edges do not wrap)
- **Type safety**: Branded integer types (`isInteger`, `NonNegativeInteger`) and runtime assertions for grid dimensions and generation counts
- **Modular components**: Separated UI (`Panel`, `ControlButton`, `GridButton`, etc.) from simulation logic (`Rules`, `computeNextGrid`, `canEditGrid`)

---

## Project Structure

```
conways-game-of-life-react-ts/
├── public/
│   └── john-conway-favicon.png   # Tribute favicon
├── src/
│   ├── components/               # React UI components
│   ├── interfaces/               # TypeScript interfaces for props and contracts
│   ├── types/                    # Branded and domain types
│   ├── utils/                    # Grid creation, validation helpers
│   ├── errors/                   # Custom error classes
│   ├── App.tsx                   # Root component
│   ├── GameLife.tsx              # Main simulation UI and state
│   ├── Rules.ts                  # B3/S23 rule definitions
│   ├── computeNextGrid.ts        # Core generation step logic
│   ├── Directions.ts             # Eight neighbor offset vectors
│   ├── GridConfig.ts             # Grid dimensions (rows × columns)
│   ├── canEditGrid.ts            # Editing permission logic
│   ├── index.css                 # Tailwind layers and custom component styles
│   └── main.tsx                  # Application entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── LICENSE.txt                   # GNU General Public License v2
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) (this project uses a `pnpm-lock.yaml`; npm or yarn also work)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production Build

```bash
pnpm build
```

Output is written to the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `pnpm dev` | Start Vite development server with hot module replacement |
| `build` | `pnpm build` | Type-check with TypeScript, then bundle for production |
| `preview` | `pnpm preview` | Serve the production build locally |
| `lint` | `pnpm lint` | Run ESLint across the project |

---

## Configuration

Grid dimensions are set in `src/GridConfig.ts`:

```typescript
const ROWS = 30
const COLUMNS = 50
```

Both values must be positive integers (enforced at runtime via `assertIsInteger`).

Simulation speed options are defined in `src/components/SelectorSpeed.tsx` as millisecond intervals between generations: **1000**, **500**, **100**, and **50**.

---

## License

This project is licensed under the **GNU General Public License v2.0**. See [LICENSE.txt](./LICENSE.txt) for the full license text.

---

## Acknowledgments

- **John Horton Conway** — for the Game of Life and a lifetime of mathematical curiosity
- The cellular automata community — for decades of pattern discovery and documentation
- [LifeWiki](https://conwaylife.com/wiki/) — an extensive reference for Life patterns and history
