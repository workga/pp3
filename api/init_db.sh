#!/bin/sh

# python manage.py migrate
python manage.py makemigrations api
python manage.py migrate

python manage.py shell -c \
      "from django.contrib.auth.models \
      import User; \
      User.objects.create_superuser('$ADMIN_NAME', '$ADMIN_EMAIL', '$ADMIN_PASSWORD')"