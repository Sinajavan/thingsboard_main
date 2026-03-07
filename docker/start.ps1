Set-Location $PSScriptRoot
Write-Host "Starting ThingsBoard Minimal Setup (NORMAL MODE)..."
docker compose -f docker-compose.yml -f docker-compose.postgres.yml -f docker-compose.kafka.yml -f docker-compose.valkey.yml up -d tb-core1 tb-mqtt-transport1 tb-web-ui1 tb-http-transport1
