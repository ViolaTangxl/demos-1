# user-manage

> User management system

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 资源目录说明

## build 目录

项目打包后的文件

## config 目录

开发/产品环境配置项文件

## src 项目源代码文件

1. src/assets 目录

项目代码的一些动态依赖项

- icomoon: 外部引入的图标，图标源文件（svg文件）从iconfont下载，然后经过icomoon处理得到

- images: 项目引入的一些图片

- plugins: 项目引入的插件

2. src/components 目录

项目页面中的组件项

3. src/config 目录

项目中的路由配置/数据配置文件

4. src/layout 目录

项目系统的布局文件

5. src/pages 目录

项目系统的页面文件

6. src/router 目录

设置/引用vue-router

7. src/store 目录

设置/引用vuex

8. src/common.css 文件

项目系统样式的整体/公用设置文件

9. src/Enter.vue 文件

项目系统的主入口vue文件

10. src/main.js 文件

直接引用在index.html文件中，同时是整个系统的主入口

## static 目录

静态资源目录，保存着一些不需要编译的图片等文件

## index.html 文件

系统主入口index文件

## package.json 文件

开发/产品环境依赖项配置文件