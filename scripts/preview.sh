#!/usr/bin/env bash
cd "$(dirname $0)"
cd ..

npm i
npm run preview
if command -v bun &>/dev/null; then
    bun i
    bun run preview
else
    npm i
    npm run preview
fi
