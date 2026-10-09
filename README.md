# panda-pig 的博客

我的个人博客，记录想法、技术和生活碎片。

**在线地址**: [https://panda-blog.com](https://panda-blog.com)

## 关于

这是我的数字花园，存放我在学习和生活中产生的思考。在这里我会分享：

- 技术学习笔记和心得
- 工具、软件和效率方法
- 生活随笔和读书笔记

## 技术栈

- [Astro](https://astro.build) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - 样式框架
- [Pagefind](https://pagefind.app) - 全文搜索
- [Giscus](https://giscus.app) - 基于 GitHub Discussions 的评论系统

## 本地运行

```bash
npm install
npm run dev
```

## 写作

在 `src/content/blog/` 目录下创建 Markdown 文件，参考已有的文章格式即可。中文使用 `slug.md`，英文和日文分别使用 `slug.en.md`、`slug.ja.md`，三种语言共用同一个 `slug` 和 `category`。

文章通过 frontmatter 中的 `category` 归入一个主分类，`tags` 保留具体主题：

| category | 分类 |
| --- | --- |
| `development` | 个人开发 |
| `metrics` | 数据分析-指标体系 |

文章可通过 `cover` 字段指定 `public/` 下已有的项目截图作为列表缩略图，三语言版本使用相同路径。分类名称与介绍统一维护在 `src/data/articleCategories.js`。未填写分类的文章默认归入「个人开发」；标记为 `draft: true` 的文章不会出现在公开列表或分类数量中。AWS 笔记继续保留独立专题入口。

## 部署

项目已配置为推送到 GitHub 后自动部署到 Vercel。

---

panda-pig © 2026
