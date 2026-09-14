# Oddbrew

**Magic works. Usually.**

Oddbrew is a playful AI-powered interactive alchemy experience. You bring an everyday problem, an absurd wish, or a fantasy. Oddbrew brews a magical solution, then adds an unexpected magical price.

The core idea is:

```text
Wish -> Magic -> Price
```

The magic should usually fulfil the wish. The catch is a "Yes, but..." consequence: flying might work perfectly, but landing could come with a very inconvenient condition.

## 🚧 Current Status

**Oddbrew is in development.**

The repository currently contains the initial V0 scaffold:

- React, TypeScript, and Vite frontend
- Node.js, Express, and TypeScript backend
- Separate frontend and backend projects
- `POST /api/brew` as a placeholder route
- Passing frontend and backend builds
- Backend startup on port `3000`

LLM generation and the later AI features described below are planned, not implemented.

## What Is Oddbrew?

Oddbrew is not intended to be a generic chatbot or random potion generator. It is an experiment in **controlled creativity**: using rules, context, retrieval, state, and evaluation to influence an LLM's creative output without making it predictable.

The central question is:

> How can I control an LLM's creativity through context, rules, retrieval, and evaluation without removing the surprise?

Consequences should be related to the wish, surprising, funny or ironic, proportionate, safe, whimsical, and varied enough to avoid quickly repeating the same joke.

## Why I'm Building It

### Engineering and Learning

I have worked on full-stack applications, including team projects. Oddbrew is an opportunity to work through the complete application lifecycle independently and understand the decisions behind its architecture.

I want to practise designing frontend, backend, API, AI, data, and evaluation boundaries; understanding the request lifecycle; testing and debugging; and eventually deploying and iterating. AI coding tools may accelerate implementation, but the architecture and technical decisions remain mine to understand and own.

### Product Curiosity

I wanted to build something I would genuinely want to use and share. The playful premise raises engineering questions: what makes a consequence surprising rather than random, how it stays connected to the original wish, which behaviour belongs in program logic versus the LLM, how to avoid repetition, and how generated outcomes can be evaluated beyond intuition.

## Current Architecture

The repository is intentionally small and split into two applications:

```text
Oddbrew/
├── frontend/   React + TypeScript + Vite
└── backend/    Node.js + Express + TypeScript
```

The backend exposes one route, `POST /api/brew`. V0 has no database or persistent state. The backend is the intended boundary for future LLM integration, keeping provider credentials and output validation away from the browser.

## V0 Goal

The first functional version will stay deliberately simple:

```text
User enters a wish
    -> React sends the request
    -> Express validates the input
    -> Backend calls an LLM
    -> LLM returns structured output
    -> Backend validates the output
    -> Frontend renders the potion
```

The planned response shape is:

```json
{
  "potionName": "...",
  "magicEffect": "...",
  "price": "..."
}
```

Here, `price` means the magical cost or ironic side effect, not a monetary price. This V0 will establish a baseline for understanding what a well-designed single LLM prompt can achieve before adding a more complex pipeline.

## Planned AI and Technical Roadmap

These are future exploration areas, not current functionality.

- **Structured generation:** Make wish interpretation and potion generation more explicit and consistently structured.
- **Consequence engine:** Experiment with consequence strategies and, eventually, candidate generation and ranking.
- **Programmatic random events:** Let application logic choose events such as a normal brew, side effect, failed brew, cartoon explosion, or rare **Reality Leak**.

> The program decides what happened. The LLM decides what it means and how it is expressed.

- **Conditional RAG / Reality Leak:** Retrieve safe, curated scientific context only when relevant to a rare magical event.
- **Profiles, ingredients, and state:** Explore how profiles and ingredients could affect generation, and how persistent state could support history and repetition avoidance.
- **Evaluation:** Compare increasingly complex pipelines with the simple V0 baseline across relevance, creativity, surprise, irony, safety, diversity, and consistency.

No experiments or improvement claims have been made yet.

## Development Philosophy

Oddbrew is being developed in small, understandable stages. RAG, multi-stage generation, ranking, and persistent state should be introduced only when there is a clear reason and, ideally, compared with the simpler baseline.

I use AI-assisted coding to accelerate implementation while personally owning and understanding the architecture, system boundaries, API contracts, data flow, AI pipeline design, evaluation strategy, and technical trade-offs.

## Future Product Ideas

If the core experience becomes genuinely fun, later possibilities could include Brew Again, a Potion Book, risk modes, magic profiles, ingredients, shareable results, user feedback, and playful aggregate statistics. These are ideas, not committed V0 scope.

## Tech Stack

### Current

- React
- TypeScript
- Vite
- Node.js
- Express

### Future Exploration

Possible future additions include an LLM provider SDK, structured-output validation, retrieval, evaluation tooling, and persistent storage. None are part of the current implementation.

## Running Locally

Install dependencies separately for each application:

```bash
cd frontend
npm install

cd ../backend
npm install
```

Run the frontend development server:

```bash
cd frontend
npm run dev
```

Run the backend development server in a second terminal:

```bash
cd backend
npm run dev
```

The backend listens on port `3000` by default. The brew endpoint is currently only a placeholder; LLM integration will be added incrementally.
