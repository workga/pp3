#!/bin/sh

chmod +x ./api/entrypoint.sh
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build