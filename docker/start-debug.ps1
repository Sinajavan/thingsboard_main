Set-Location $PSScriptRoot
$env:DOCKER_API_VERSION = "1.44"
Write-Host "Starting ThingsBoard Minimal Debug Setup (forcing API v1.41)..."
docker compose -f docker-compose.yml -f docker-compose.postgres.yml -f docker-compose.kafka.yml -f docker-compose.valkey.yml up -d tb-core1 tb-mqtt-transport1 tb-web-ui1 tb-http-transport1
