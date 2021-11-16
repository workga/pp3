#!/bin/sh

docker-compose down
docker volume rm clare_postgres_data

rm -rf ./api/api/migrations/*.py

docker container prune -f --filter="label=project=clare"
docker image prune -a -f --filter="label=project=clare"
