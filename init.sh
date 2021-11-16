#!/bin/sh

docker-compose down
docker volume rm clare_postgres_data

# unsafe, only for development:
chmod 777 ./api/api/migrations
rm -rf ./api/api/migrations/*.py

chmod +x ./api/init_db.sh
docker-compose up -d
until [ "'docker inspect -f {{.State.Running}} db'"=="true" ]; do
    sleep 0.1;
done;
until [ "'docker inspect -f {{.State.Running}} api'"=="true" ]; do
    sleep 0.1;
done;
docker exec api ./init_db.sh
docker-compose down
