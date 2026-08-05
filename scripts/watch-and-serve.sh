#!/usr/bin/env bash
set -euo pipefail

INTERVAL="${1:-86400}"   # seconds between checks, default 1 day
PORT="${2:-3000}"

cd "$(dirname "${BASH_SOURCE[0]}")"

SERVE_PID=""

start_server() {
    echo "Starting server..."
    setsid ./update-and-serve.sh "$PORT" &
    SERVE_PID=$!
}

stop_server() {
    if [[ -n "$SERVE_PID" ]]; then
        kill -- -"$SERVE_PID" 2>/dev/null || true
        wait "$SERVE_PID" 2>/dev/null || true
        SERVE_PID=""
    fi
}

trap stop_server EXIT

start_server

while true; do
    sleep "$INTERVAL"

    git fetch origin main --quiet

    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})

    if [[ "$LOCAL" != "$REMOTE" ]]; then
        echo "New changes found on GitHub, pulling..."
        stop_server
        git pull --ff-only
        start_server
    fi
done
