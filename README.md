# GetHelpIndia Platform

This repository contains two main parts:
- **hanauma**: Backend (Node.js/Express with Knex)
- **pennantia**: Frontend (Next.js/React)

## Quick Start

1. Run `docker-compose up -d` to start Postgres.
2. In `hanauma`, run `npm install` then `npx knex migrate:latest` and `npm run dev`.
3. In `pennantia`, run `npm install` and `npm run dev`.
4. Visit `http://localhost:3000` for the frontend.
