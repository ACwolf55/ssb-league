# SSB League

Tournament tracking site for a growing local Super Smash Bros. league. Built with Next.js and Tailwind CSS.

> **Live site:** [ssb-league.vercel.app](https://ssb-league.vercel.app)
> **Repo:** [github.com/ACwolf55/ssb-league](https://github.com/ACwolf55/ssb-league)

## Project History

This started as a personal project for my local Smash tournament scene. As our events got bigger, more frequent, and more competitive, I needed a cleaner way to track winners, placements, and player rankings.

No rebuild yet — this is the first version. But I am actively planning a backend to move beyond static data.

## What It Does Right Now

- Displays past tournaments with winners and placements
- Player tier list based on Smash skill
- Player profile pages showing mains, tier, and placement history

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (React 19) |
| Styling | Tailwind CSS 4 |
| UI Components | `react-svg-pan-zoom`, `styled-components` |
| Language | TypeScript |
| Deployment | Vercel (frontend) |

## Architecture

Standard Next.js App Router structure (pages-based routing, currently static).

- **`pages/`** — route components (tournament pages, player profiles)
- **`components/`** — reusable UI (bracket viewer, tier list, news ticker)
- **`public/`** — static assets

No universal state management (Redux, etc.) yet. Data is currently static.

## Key Features

- Tournament bracket display using `react-svg-pan-zoom`
- Player profiles with dynamic routing (Next.js `[slug]` pages)
- News ticker component with animated text movement
- Tier list visualization

## Backend Roadmap

Currently static. Planned backend will:

- Store tournament results and player data in **MongoDB or Supabase (PostgreSQL)**
- Expose REST endpoints (starting with GET requests)
- Allow players to update their own profiles in the future
- Fetch external data from a public Smash API (potential future expansion)

Future backend will be deployed to **AWS**.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install

```bash
npm install


## Run

npm run dev

## Roadmap

- [ ] Clean up bracket visuals (make it look nicer)
- [ ] Link every instance of a player name to their profile page
- [ ] Build Node/Express backend + database (MongoDB or Supabase)
- [ ] Move static data to backend and fetch with GET requests
- [ ] Deploy backend to AWS

## What I Learned

- Using bracket visualization libraries (react-svg-pan-zoom)
- Next.js dynamic routing (page parameters in the URL)
- Tailwind CSS utility-first styling
- Animated text movement for a news ticker component
- Planning a migration from static data to a full backend