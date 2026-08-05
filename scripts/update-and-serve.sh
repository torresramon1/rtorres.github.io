#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-3000}"

cd "$(dirname "${BASH_SOURCE[0]}")/.."

echo "Building static site..."
NODE_OPTIONS="--max-old-space-size=8192" npm run build

echo "Serving out/ on http://localhost:${PORT}"
npx serve out -l "${PORT}"
