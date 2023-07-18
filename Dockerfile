# 使用Node.js 16作为基础镜像
FROM node:16 AS build

# 设置容器中的工作目录
WORKDIR /app

# 复制Vue 3项目的所有文件到容器中
COPY . .
#RUN yarn config set registry http://registry.npm.taobao.org/

#RUN yarn config set registry http://registry.npm.taobao.org/

# 安装项目依赖项
RUN yarn install

# 构建Vue 3项目
RUN yarn build

# 使用Nginx作为基础镜像
FROM nginx:latest

# 将Vue 3项目构建后的文件复制到Nginx镜像中
COPY --from=build /app/dist /usr/share/nginx/html

# 将容器的80端口公开
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]