# EV Charger Analysis

A data visualization dashboard presenting statistical analysis of electric vehicle charging infrastructure. Displays research findings through heatmaps, forest plots, linear regression models, and correlation analyses.

## What It Does

Takes the results of an EV charger analysis study and presents them in a clean, interactive web dashboard. The visualizations help make sense of relationships between charger locations, usage patterns, and infrastructure variables — making research data accessible to stakeholders who aren't going to read a raw dataset.

## Visualizations

- **Heatmaps** — Correlation matrices showing relationships between key variables in the EV charger dataset.
- **Forest plots** — Effect size comparisons across different analysis factors.
- **Linear regression** — Trend lines and model fits for key predictor variables.
- **Statistical summaries** — Key metrics presented in clean card layouts using shadcn/ui components.

## Architecture Decisions

**Why a static dashboard instead of a notebook?**
Jupyter notebooks are great for analysis, but terrible for sharing with non-technical stakeholders. A web dashboard gives everyone the same clean view without needing Python installed or knowing how to navigate cells.

**Why Next.js for a dashboard?**
It's a single-page app that could have been pure HTML, but Next.js gave us component reusability (the card layouts repeat), image optimization for the chart PNGs, and easy Vercel deployment.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14, React, TypeScript |
| UI Components | Radix UI (shadcn/ui) |
| Charts | Recharts + pre-rendered PNG visualizations |
| Styling | Tailwind CSS |
| Deployment | Vercel |

## Running Locally

```bash
npm install
npm run dev
```

No environment variables needed — all data is static.
