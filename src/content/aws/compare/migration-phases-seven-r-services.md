---
title: "迁移阶段・7R・迁移服务总对比"
fullName: "Migration Phases, 7Rs & AWS Migration Services"
description: "分清迁移项目顺序、应用策略，以及评估、发现、复制、传输与项目管理服务。"
service: "AWS"
category: compare
kind: compare
lang: zh
topicKey: "迁移阶段・7R・迁移服务总对比"
frequency: "高频对比"
date: 2026-08-05
updated: 2026-08-05
tags: ["compare", "migration", "7R", "AWS"]
notionId: 3b3964dc-ce4a-817f-a6d4-dfb52a50e40e
notionUrl: https://app.notion.com/p/3b3964dcce4a817fa6d4dfb52a50e40e
notionUpdated: "2026-08-05T01:44:00.000Z"
---

## 三类知识先分清

| 概念 | 回答的问题 | 核心内容 |
| --- | --- | --- |
| 三阶段迁移流程 | 项目按什么顺序推进 | Assess → Mobilize → Migrate & Modernize |
| AWS CAF | 哪些人参与、需要哪些能力 | Business、People、Governance、Platform、Security、Operations |
| 7R | 每个应用具体怎么处理 | Rehost、Relocate、Replatform、Refactor、Repurchase、Retain、Retire |

## 服务职责图

| 服务 | 负责什么 | 不负责什么 |
| --- | --- | --- |
| Migration Evaluator | TCO、许可、Business Case | 不执行复制 |
| Application Discovery Service | 资产、进程、连接、依赖 | 不专门计算 TCO |
| Migration Hub / AWS Transform | 规划、协作与进度 | 不是主要复制引擎 |
| AWS Transform MGN | 整台服务器持续块级复制 | 不做数据库 Schema 转换 |
| AWS DMS | 数据库 Full Load 与 CDC | 不重写全部应用 SQL |
| AWS SCT | Schema 与代码对象评估/转换 | 不持续搬业务数据 |
| AWS DataSync | 文件和对象在线迁移/同步 | 不是长期挂载接口 |
| AWS Transfer Family | SFTP / FTPS / FTP / AS2 文件交换 | 不是海量批量迁移引擎 |
| Direct Connect | 稳定的专用网络路径 | 本身不复制数据 |
| Snowball Edge | 旧题中的离线物理传输 | 当前不向新客户开放 |

## 数据库与文件选型

- 同构数据库迁移通常用 DMS；异构引擎通常 SCT + DMS。
- 自动迁移大量文件 → DataSync；保留传统文件交换协议 → Transfer Family。
- 长期专用网络 → Direct Connect；经典离线物理迁移题 → Snowball Edge。

## 当前名称

- AWS Application Migration Service 已更名为 AWS Transform MGN，能力、API 和复制引擎保持不变。
- 课程仍会独立使用 Migration Hub、Application Discovery Service 和 Snowball Edge 等旧题名称，实际项目需同时确认当前入口与可用状态。

## 重点记忆

**Evaluator 算，Discovery 查，Hub 管，MGN 搬服务器；SCT 改结构，DMS 搬数据；DataSync 搬文件，Transfer 收文件，Direct Connect 给路径。**
