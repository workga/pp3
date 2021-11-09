FROM nginx:alpine

RUN mkdir /var/log/nginx; \
	ln -sf /dev/stdout /var/log/nginx/access.log; \
	ln -sf /dev/stderr /var/log/nginx/error.log;

WORKDIR /usr/src/client

RUN addgroup -S nginx_group; \
	adduser -S nginx_user -G nginx_group; \

	chown -R nginx_user:nginx_group /usr/src/client; \
	chmod -R 755 /usr/src/client; \

    chown -R nginx_user:nginx_group /var/cache/nginx; \
    chown -R nginx_user:nginx_group /var/log/nginx; \
    chown -R nginx_user:nginx_group /etc/nginx/conf.d \

    mkdir /var/run; \
    touch /var/run/nginx.pid; \
    chown -R nginx_user:nginx_group /var/run/nginx.pid;

USER nginx_user

EXPOSE 8080

CMD ["nginx-debug", "-g", "daemon off;"]

# FROM golang:alpine AS stage0


# FROM scratch AS release
# COPY --from=stage0 /binary0 /bin
# COPY --from=stage1 /binary1 /bin

# FROM golang:alpine AS dev-env
# COPY --from=release / /
# ENTRYPOINT ["ash"]

# FROM golang:alpine AS test
# COPY --from=release / /
# RUN go test …

# FROM release



# ARG BUILD_VERSION=2

# FROM alpine AS base
# RUN touch version0

# FROM base AS branch-version-1
# RUN touch version1

# FROM base AS branch-version-2
# RUN touch version2

# FROM branch-version-${BUILD_VERSION} AS after-condition

# FROM after-condition
# RUN touch version4