# 编译前端文件
FROM node:10 as node-builder

WORKDIR /app

COPY . .
RUN yarn config set registry https://registry.npm.taobao.org && yarn && yarn build

# 编译后端文件
FROM golang:1.11 as go-builder

WORKDIR /app
# 复制前端编译后文件
COPY --from=node-builder /app/dist ./dist/
COPY main.go go.* ./
ARG GOPROXY=https://mod.gokit.info
run go mod download \
    && pwd && ls && go install github.com/gobuffalo/packr/packr && \
    CGO_ENABLED=0 packr build -o app

# 最终构建
FROM alpine:latest as prod

WORKDIR /root/
COPY --from=go-builder /app/app .

EXPOSE 3000
ENTRYPOINT ["./app", "-addr", ":3000"]
