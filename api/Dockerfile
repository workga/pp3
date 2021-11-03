FROM python:3.9.7-alpine


WORKDIR /usr/src/api

#ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache --virtual .build-deps \
		gcc \
		libc-dev \
		linux-headers;

COPY ./requirements.txt .
RUN	pip install --upgrade pip; \
	pip install -r requirements.txt; \
	apk del .build-deps;

RUN addgroup -S api_group && adduser -S api_user -G api_group
USER api_user

EXPOSE 8090