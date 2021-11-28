#!/bin/sh

python manage.py makemigrations api
python manage.py migrate

python manage.py shell -c \
      "from api.models import CustomUser; \
      CustomUser.objects.create_superuser( \
            '$ADMIN_EMAIL', '$ADMIN_FIRST_NAME', '$ADMIN_LAST_NAME', '$ADMIN_PASSWORD')"

python manage.py loaddata test_db.json