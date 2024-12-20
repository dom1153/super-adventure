#!/usr/bin/env bash
cd "$(dirname $0)"
cd ..

npm i
npm run format:check
npm run lint -- --fix && npm run build
