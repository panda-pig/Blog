---
title: "S3 存储类别与生命周期"
fullName: "Amazon S3 Storage Classes and Lifecycle Management"
description: "根据访问频率、取回时间、可用区范围与总成本选择 S3 存储类别，并使用 Lifecycle 自动转换或清理对象。"
service: "Amazon S3"
category: storage
kind: service
lang: zh
topicKey: "S3 存储类别与生命周期"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["S3", "Storage Classes", "Lifecycle", "SAA-C03"]
notionId: 3ac964dc-ce4a-8181-99e4-d57c78a2df22
notionUrl: https://app.notion.com/p/3ac964dcce4a818199e4d57c78a2df22
notionUpdated: "2026-07-30"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | S3 Storage Classes & Lifecycle |
| 全称 | Amazon S3 Storage Classes and Lifecycle Management |
| 中文释义 | S3 存储类别与生命周期 |
| 日文释义 | S3 ストレージクラスとライフサイクル |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Standard / IA / Glacier / Intelligent-Tiering |

## 选择逻辑

先问四个问题：
1. 数据多久访问一次？
2. 取回时必须立即获得，还是可以等待？
3. 数据能否重建，是否能接受单 AZ 风险？
4. 除存储费外，检索费、最短存储期限和请求费是多少？

## 主要存储类别

| 存储类别 | 适合场景 | 核心记忆 |
| --- | --- | --- |
| S3 Standard | 频繁访问、动态网站、数据湖 | 多 AZ、低延迟、默认类别 |
| S3 Intelligent-Tiering | 访问模式未知或变化 | 自动在访问层之间移动，有监控/自动化费用 |
| S3 Standard-IA | 不常访问但需要毫秒级取回 | 多 AZ、较低存储费、有检索费 |
| S3 One Zone-IA | 可重建的低频数据 | 单 AZ、成本更低 |
| S3 Express One Zone | 极高性能、延迟敏感 | 单 AZ、Directory Bucket、个位数毫秒访问 |
| Glacier Instant Retrieval | 极少访问但仍要毫秒取回 | 归档数据即时访问 |
| Glacier Flexible Retrieval | 可以等待分钟到小时 | 灵活恢复、归档 |
| Glacier Deep Archive | 长期封存、极少恢复 | 最低成本层级之一，恢复时间最长 |
| S3 on Outposts | 本地对象存储 | 数据驻留、低延迟、混合云 |

## Lifecycle Policy

按规则自动：
- 把对象或旧版本转换到更低成本类别。
- 在保留期后使对象过期。
- 清理旧版本和删除标记。
- 中止未完成的 Multipart Upload。
Lifecycle 适合访问规律明确的数据，例如“30 天后转 IA，180 天后归档，7 年后删除”。

## Intelligent-Tiering vs Lifecycle

- **访问规律明确**：Lifecycle。
- **访问规律未知或变化**：Intelligent-Tiering。
- 二者可组合，但必须核算监控费、检索费、最短存储期限与对象大小限制。

## 高频场景

- 常用对象 → Standard。
- 少用但随时取回 → Standard-IA。
- 极少用但必须毫秒取回 → Glacier Instant Retrieval。
- 能等分钟到小时 → Glacier Flexible Retrieval。
- 长期合规封存 → Deep Archive。
- 可重建、可接受单 AZ → One Zone-IA。
- 单 AZ 极高性能 → Express One Zone。

## 常见误区

- 存储单价最低不代表总成本最低。
- Glacier Instant Retrieval 不是“恢复很慢”。
- One Zone 类别并非“不安全”，而是故障范围与多 AZ 类别不同。
- Lifecycle 规则不会替你判断业务价值，错误规则可能提前归档或删除数据。
- S3 on Outposts 的对象数据位于 Outposts；合规仍取决于配置、数据流和管理方式。

## 记忆口诀

**常用 Standard；少用即取 IA；极少即取 Glacier Instant；可以等待 Flexible；长期封存 Deep Archive；规律不明 Intelligent-Tiering。**
