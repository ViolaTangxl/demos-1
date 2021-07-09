## React + NextJS + Node + MongoDB 服务端渲染页面预研项目

### 技术栈

- `Next.js`
- `React`
- `Node`（重要，推荐使用 `NVM` 管理 `Node` 版本，`Node` 版本 `>= 10`）
- `MongoDB`

### 目录结构

- 前端
  - `/apis`：`api` 请求定义和相关的 `interface` 定义
  - `/components`：业务组件 `&& UI` 组件，组件不能放在 `/pages` 目录下面，会被识别成页面路由
  - `/constants`：公用常量定义
  - `/pages`：页面，里面的目录和文件会被识别为页面路由，例如：`/pages/blog/index.tsx` 会被识别为 `/pages/blog` 页面
  - `/public`：静态资源
  - `/typings`：自定义 `modules && type`
  - `/utils`：各种工具 `&&` 函数 `&&` 公用样式 `&&` 字体等
  - `.env`：自定义 `Next.js` 环境变量
  - `next.config.js`：`Next.js` 编译配置文件
- 后端
  - `/node`：`Node` 后端代码

### 命令

本地开发

```bash
# 安装依赖
yarn

# 运行本地开发环境
# 默认是后端渲染页面
yarn dev
```

`Eslint` 检查

```bash
yarn lint
```

### MongoDB

需要在本地 `mongo` 数据库中

- 新建 `blogs` 数据库
- 在 `blogs` 数据库中新建 `blogs` 文档集合
- 目前 `blogs` 文档的数据格式为

```json
{
  id: string // blog 唯一 id
  title: string // blog 页面 title
  description: string // blog 页面 description
  keywords: string // blog 页面 keywords
  content: string // blog 页面内容，html string 格式
}
```

