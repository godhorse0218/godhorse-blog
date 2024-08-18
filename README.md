# godhorse-blog

godhorse博客，分享技术与兴趣

## 运行

### pnpm

* pnpm docs:dev 启动开发服务器
* pnpm docs:build 构建项目并输出
* pnpm docs:clean-dev 清除缓存并启动开发服务器

### yarn

* yarn docs:dev 启动开发服务器
* yarn docs:build 构建项目并输出
* yarn docs:clean-dev 清除缓存并启动开发服务器

### npm

* npm run docs:dev 启动开发服务器
* npm run docs:build 构建项目并输出
* npm run docs:clean-dev 清除缓存并启动开发服务器

### 终止开发服务器

如果需要终止开发服务器，请点击终端，并连续两次按下 `Ctrl + C`。


## 项目结构

```
.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件

```