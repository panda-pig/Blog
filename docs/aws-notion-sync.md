# AWS Notion → BLOG 同步约定

Notion 是 AWS 知识库的源资料，BLOG 中的 `src/content/aws/` 是适合公开阅读的版本。

## 发布条件

只迁移已经包含真实学习内容的页面。满足以下任一情况时不发布：

- 页面只有统一模板和空标题；
- 页面写有“状态：页面框架已建立。后续学习……”；
- 只有维护清单、建设计划或待办事项；
- 内容仍是未经提炼的课程原文、错题或临时记录。

## 公开版保留内容

- 一句话理解；
- 核心作用、工作原理与使用场景；
- Cloud Practitioner / SAA-C03 考点；
- 常见误区、易混淆服务与面试问题；
- 重点记忆和个人已经形成的理解。

以下内部信息不进入 BLOG：

- 迁移状态、维护清单与下一轮补充；
- 课程来源和学习日期；
- 空白模板字段；
- 只反映学习进度、不提供知识内容的信息。

## 增量更新

每篇 BLOG 笔记的 frontmatter 都保存：

- `notionId`：Notion 页面 ID；
- `notionUrl`：Notion 源页面；
- `notionUpdated`：上次同步时读取到的 Notion 更新时间。

后续同步时，先比较 Notion 的最新编辑时间与 `notionUpdated`。只有 Notion 页面已经产生实质内容变化时才更新正文，并同步修改：

- `updated`：BLOG 展示的整理日期；
- `notionUpdated`：本次同步读取到的 Notion 更新时间。

新页面沿用 `/aws/<category>/<slug>/` 路由。服务知识放入对应领域；跨服务比较统一放入 `compare`。
