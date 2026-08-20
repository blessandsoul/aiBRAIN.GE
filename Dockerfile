# syntax=docker/dockerfile:1.7
# The production Next runtime is built from a locally verified standalone output.
# Coolify only pulls this immutable release, avoiding VPS BuildKit font fetches.
FROM localhost:5000/aibrain-app:d3a3abcba75019877032b811c04432ea4ed4d9a1-clean2

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health',(r)=>{process.exit(r.statusCode===200?0:1)})"
