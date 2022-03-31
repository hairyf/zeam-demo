## 项目说明

项目框架：vue3 + naive-ui + TypeScript + windicss

项目部署：通过 github action，自动部署 github pages 服务

![1648709530](public/1648709530.jpg)

地址：https://github.com/TuiMao233/zeam-demo

Page：https://tuimao233.github.io/zeam-demo

为什么是 windicss？

> When my project became larger and there were about dozens of components, the initial compilation time reached 3s, and hot updates took more than 1s with Tailwind CSS. - @voorjaar

以及 [Auto-infer](https://windicss.org/features/value-auto-infer.html)

```html
<!-- sizes and positions -->
<div class="p-5px mt-[0.3px]"></div>

<!-- colors -->
<button class="bg-hex-b2a8bb"></button>
<button class="bg-[#b2a8bb]"></button>
<button class="bg-[hsl(211.7,81.9%,69.6%)]"></button>

<!-- grid template -->
<div class="grid-cols-[auto,1fr,30px]"></div>
```

## 项目使用

```
# dev
yarn dev
# build
yarn build
```

## 项目目录

```
|-- .eslintignore        # cli/config
|-- .eslintrc.js         # cli/config
|-- .gitignore           # cli/config
|-- commitlint.config.js # cli/config
|-- components.d.ts      # volar 插件全局组件提示
|-- index.html
|-- package.json
|-- prettier.config.js   # cli/config
|-- README.md
|-- tsconfig.json
|-- vite.config.ts
|-- windi.colors.ts      # 原子 css 配置
|-- windi.config.ts      # 原子 css 配置
|-- windi.utils.ts       # 原子 css 配置
|-- yarn.lock
|-- src                  # 源码目录
|   |-- api              # 存放 API
|   |-- components
|       |-- button       # 按钮相关
|       |-- control      # 控件相关
|       |-- input        # 输入框相关
|   |-- config           # 配置相关（theme.json）
|   |-- layout           # 布局相关（客户端布局/桌面布局）
|   |-- router           # 路由相关
|   |-- setup            # app 挂载相关          
|   |-- store            # 数据管理（pinia）
|   |-- style            # 样式相关
|   |-- typings          # 通用类型
|   |-- views            # 视图层
|-- .github              # actions 脚本
|   |-- workflows
|       |-- .build.yml
|-- .husky
|   |-- _
|       |-- .gitignore
|       |-- husky.sh
|-- .vscode
|   |-- extensions.json

```