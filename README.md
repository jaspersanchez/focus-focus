# Focus-focus

## Current Version (v1)

Single user can create a task with a title and description,
list tasks, mark complete, edit, and delete.
No auth, no categories in v1.

## Roadmap

- v2: categorize + priority
- v3: habit tracker
- v4: time blocker
- v5: pomodoro session and timer

## MVP (3 slices)

1. Create a task (title + description)
2. List tasks + mark complete
3. Edit / delete a task

## Stack

- Client: React + Vite → deployed on Vercel
- Server: Express/Node → deployed on Render
- DB: MongoDB

## Environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

## Run locally

cd server && npm run dev
cd client && npm run dev
