---
title: "云计算与 AWS 的优势"
fullName: "Cloud Computing and Benefits of the AWS Cloud"
description: "通过互联网按需获得计算、存储、数据库、网络等 IT 资源，并按实际使用量付费。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "云计算与 AWS 的优势"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-15
tags: ["cloud-practitioner","云计算与 AWS 的优势","AWS"]
notionId: 3a6964dc-ce4a-8144-9a6a-f2b1f693a058
notionUrl: https://app.notion.com/p/3a6964dcce4a81449a6af2b1f693a058
notionUpdated: "2026-08-13T00:39:01.825Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Cloud Computing & Benefits of AWS Cloud |
| 全称 | Cloud Computing and Benefits of the AWS Cloud |
| 中文释义 | 云计算与 AWS 云优势 |
| 日文释义 | クラウドコンピューティングと AWS クラウドの利点 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Scalability / Elasticity / High Availability / Agility |

## 云计算

通过互联网按需获得计算、存储、数据库、网络等 IT 资源，并按实际使用量付费。

## Cloud 与 On-Premises

| 维度 | On-Premises | AWS Cloud |
| --- | --- | --- |
| 获得资源 | 采购、运输、上架实体设备 | Console、CLI、SDK、IaC 按需创建 |
| 容量 | 提前预测并保留余量 | 按需求扩展、缩减或自动调整 |
| 费用 | 前期 CapEx、长期固定容量 | OpEx、Pay-as-you-go 与多种定价模型 |
| 全球部署 | 自行建设或租用多地机房 | 选择 Regions 与 Edge Network |
| 责任 | 客户管理设施到应用全栈 | AWS 管基础设施，客户责任随服务模型变化 |

## 四个基础能力

| 概念 | 核心含义 | 关键词 |
| --- | --- | --- |
| On-Demand | 需要时获取，不等待采购 | 几分钟创建 |
| Scalability | 扩大处理能力 | 支持更多用户或负载 |
| Elasticity | 容量随需求增减 | 高峰扩、低谷缩 |
| Agility | 更快试验与交付 | 快速创新 |

## AWS 云的核心优势

1. **以可变费用替代固定费用**：不必提前购买大量硬件。
2. **规模经济**：云服务商通过大规模运营降低单位成本。
3. **不必猜测容量**：可以根据需求调整资源。
4. **提高速度与敏捷性**：资源可以在几分钟内获得。
5. **减少数据中心运维**：把精力放在业务和应用上。
6. **轻松实现全球部署**：选择靠近用户的 Region。

## 按实际使用量付费

- 使用多少付多少。
- 不使用时可停止或删除部分资源以减少费用。
- 不等于所有服务都没有固定费用，仍需理解不同服务的计费维度。
- Pay-as-you-go 不等于自动低成本；闲置资源仍需停止、缩容或删除。

## 高频误区

- Elasticity 不等于 High Availability；能扩缩不代表故障时仍可服务。
- On-Demand 是获取与定价思想，不只等于 EC2 On-Demand Instance。
- 托管服务减少底层运维，但 IAM、数据、网络、应用与成本仍由客户设计。
- 云不一定在所有场景更便宜，仍要比较迁移、运行、传输与人员成本。

## 考试关键词

**On-Demand 解决获取速度，Scalability 解决增长能力，Elasticity 解决随负载调整，High Availability 解决故障期间持续服务。**
