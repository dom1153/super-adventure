#!/usr/bin/env bash
cd "$(dirname $0)"
cd ..

if command -v bun &>/dev/null; then
    bun i
    bun run format:check
    bun run lint -- --fix && bun run build
else
    npm i
    npm run format:check
    npm run lint -- --fix && npm run build
fi
