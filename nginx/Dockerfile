FROM nginx:alpine

EXPOSE 8080

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