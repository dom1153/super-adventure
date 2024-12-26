#!/usr/bin/env bash
cd "$(dirname $0)"
cd ..

if command -v bun &>/dev/null; then
    bun i
    bun run dev
else
    npm i
    npm run dev
fi
