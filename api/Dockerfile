FROM python:3.9.7-alpine
#ubuntu:22.04

WORKDIR /usr/src/api

#ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt .

RUN	apk add --no-cache \
		gcc \
		postgresql-dev \
		python3-dev \
		musl-dev \
		libc-dev \
		linux-headers;

RUN	pip install --upgrade pip; \
	pip install -r requirements.txt;

RUN addgroup -S api_group && adduser -S api_user -G api_group
USER api_user

ENTRYPOINT ["./entrypoint.sh"]
CMD ["uwsgi", "--http-socket", ":8090", "--module", "app.wsgi"]

EXPOSE 8090