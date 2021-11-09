#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

if [ "$MIGRATE" -ne 0 ]
then
    python manage.py flush --no-input
    python manage.py migrate
    echo "Migration!!!"
fi

exec "$@"