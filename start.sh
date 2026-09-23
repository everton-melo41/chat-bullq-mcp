#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
export CHAT_BULLQ_BASE_URL="${CHAT_BULLQ_BASE_URL:-http://localhost:3001}"

if [ -z "${CHAT_BULLQ_API_KEY:-}" ]; then
  echo "Erro: CHAT_BULLQ_API_KEY deve ser definida no ambiente." >&2
  exit 1
fi

node "$SCRIPT_DIR/dist/index.js" --stdio
