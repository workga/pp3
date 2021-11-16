FROM python:3.9.7-alpine
#ubuntu:22.04
LABEL project="clare"

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

RUN addgroup -S api_group; \
	adduser -S api_user -G api_group; \

	chown -R api_user:api_group /usr/src/api; \
	chmod -R 755 /usr/src/api;

USER api_user


EXPOSE 8090

CMD ["uwsgi", "--ini", "./uwsgi.ini"]
