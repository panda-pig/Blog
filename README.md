# 我的博客

基于 Astro + Tailwind CSS 构建的个人博客。

## 功能特性

- **Astro 静态生成** — 极速加载，SEO 友好
- **Tailwind CSS** — 实用工具类样式
- **暗色模式** — 自动切换 + 手动控制
- **全文搜索** — 基于 Pagefind，支持中文
- **Markdown/MDX** — 轻松撰写文章
- **评论系统** — Giscus（基于 GitHub Discussions）
- **打赏功能** — 支持微信/支付宝收款码
- **RSS 订阅** — 自动生成
- **代码高亮** — Shiki 语法高亮

## 开始使用

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

### 3. 构建

```bash
npm run build
```

构建完成后，搜索索引会自动生成。

## 配置说明

### 修改站点信息

编辑 `astro.config.mjs` 中的 `site` 字段：

```js
site: 'https://your-domain.com',
```

### 修改个人信息

编辑以下文件中的内容：

- `src/components/Header.astro` — 博客标题
- `src/components/Footer.astro` — 页脚信息
- `src/pages/index.astro` — 首页介绍

### 配置评论系统

1. 在 GitHub 上安装 [Giscus App](https://github.com/apps/giscus)
2. 在仓库中启用 Discussions
3. 编辑 `src/components/Giscus.astro`，填入你的仓库信息：

```html
data-repo="panda-pig/Blog"
data-repo-id="YOUR_REPO_ID"
data-category-id="YOUR_CATEGORY_ID"
```

### 配置统计

编辑 `src/layouts/BaseLayout.astro`，修改 Plausible 的 data-domain：

```html
<script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
```

### 添加打赏二维码

1. 将微信和支付宝收款码保存为图片
2. 放入 `public/` 目录（例如 `public/wechat-qr.png` 和 `public/alipay-qr.png`）
3. 编辑 `src/components/Donate.astro`，替换图片路径

## 写作

在 `src/pages/blog/` 目录下创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
date: 2025-01-01
tags: ["标签1", "标签2"]
---

文章内容...
```

## 部署

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 构建命令保持默认（`npm run build`）
4. 输出目录设为 `dist`

### 部署到 Cloudflare Pages

1. 连接 GitHub 仓库
2. 构建设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`

## 技术栈

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Pagefind](https://pagefind.app)
- [Giscus](https://giscus.app)
- [Shiki](https://shiki.matsu.io)
