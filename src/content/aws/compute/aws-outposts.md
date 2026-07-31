---
title: "AWS Outposts"
fullName: "AWS Outposts"
description: "AWS 把专用的 AWS 硬件安装到客户的数据中心或指定地点，由 AWS 运营和维护，让客户在本地使用与 AWS 云一致的部分服务和 API。"
service: "AWS Outposts"
category: compute
kind: service
lang: zh
topicKey: "AWS Outposts"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["compute","AWS Outposts","AWS"]
notionId: 3a6964dc-ce4a-81a2-9dc8-e2d635fedd31
notionUrl: https://app.notion.com/p/3a6964dcce4a81a29dc8e2d635fedd31
notionUpdated: "2026-07-30T08:30:11.875Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Outposts |
| 全称 | AWS Outposts |
| 中文释义 | AWS 本地部署的托管基础设施 |
| 日文释义 | AWS Outposts（オンプレミス向け AWS マネージドインフラストラクチャ） |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | Local Zones / Wavelength / On-premises |

## 一句话理解

AWS 把专用的 AWS 硬件安装到客户的数据中心或指定地点，由 AWS 运营和维护，让客户在本地使用与 AWS 云一致的部分服务和 API。

## 到底怎么“放到自己的机房”

大致流程是：
1. 企业申请并选择 Outposts 配置。
2. AWS 评估机房的空间、电力、散热和网络条件。
3. AWS 或合作方把机架或服务器设备运到客户地点。
4. 设备安装后连接 AWS Parent Region。
5. 客户在熟悉的 AWS 控制台和 API 中管理资源。
6. AWS 负责 Outposts 硬件的监控、维护和更换。
所以它不是“企业自己买普通服务器装 AWS”，而是 AWS 提供并管理的专用硬件。

## 使用场景

- 对本地系统有极低延迟要求。
- 数据处理必须在指定地点完成。
- 本地旧系统与 AWS 云需要一致的管理体验。
- 工厂、运营设施或数据中心需要本地计算。

## Data Residency

Outposts 可以帮助满足某些本地数据处理和驻留要求，但是否满足具体法律或行业合规不能只凭“用了 Outposts”判断，还需要确认：
- 数据实际存放位置
- 控制面、日志和备份的数据流向
- 使用服务的具体配置
- 适用法规和审计要求

## Hybrid Cloud

本地 Outposts + AWS Region 共同工作，属于混合云架构的一种实现。

## Cloud Practitioner 考点

关键词：本地运行 AWS 服务、低延迟、本地数据处理、混合云、一致的 AWS API。

## SAA-C03 考点

- Outposts 与 Parent Region 的连接关系。
- 本地服务可用性与限制。
- 与 Direct Connect、VPN、Local Zones 和 Wavelength 的区别。
- 不能简单假设 Outposts 自动解决全部数据驻留与合规问题。

## 常见误区

- 不是把公有云完整复制到客户机房。
- 不是客户自己维护普通服务器。
- 不是所有 AWS 服务都能在 Outposts 本地运行。
- “数据必须留在本地”仍需核对具体数据流和法规。

## 重点记忆

Outposts = AWS 专用硬件运到客户地点，由 AWS 管理，在本地提供一致的 AWS 体验。
