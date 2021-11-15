FROM nginx:alpine
LABEL project="clare"

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