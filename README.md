# ApesERP System

这个项目使用[angular-cli](https://github.com/angular/angular-cli) version 1.6.2.

# 安装依赖包
当download 项目之后，需要使用 npm install 安装依赖包

## 开发服务器

运行 `ng serve` 作为一个开发服务器. 浏览器访问 `http://localhost:4200/`. 如果更改任何源文件，该应用程序将自动重新加载
.

## Code scaffolding

运行 `ng generate component component-name` 生成一个新的组件. 你可以使用 `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#配置开发服务器使用的默认HTTP主机和端口
ng serve --host 0.0.0.0 --port 4201

##使用aot编译打包
ng build --prod --aot

#打包
npm run build /ng build --prod --build-optimizer --aot
#发布到tomcat
1、ng build --base-href /angular/ --prod 
2、将dist目录下所有文件拷贝到 tomcat /webapps/angular 下

