---
title: "云概念"
fullName: "Cloud Concepts"
description: "汇总 Cloud Practitioner 中按需付费、全球基础设施、责任共担和核心服务选型关键词。"
service: "CLF-C02"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "云概念"
frequency: "考试频率 ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Cloud Concepts","CLF-C02","Foundations"]
notionId: 3a6964dc-ce4a-8161-8312-db30847cd94e
notionUrl: https://app.notion.com/p/3a6964dcce4a81618312db30847cd94e
notionUpdated: "2026-07-30T01:09:09.956Z"
---

## 一句话理解

> 云计算是通过互联网按需获得 IT 资源，并根据实际使用量付费。

## 必须掌握

- 云的优势：可变费用替代固定费用、规模经济、不猜容量、敏捷、减少机房运维、快速全球部署。
- CapEx 是提前购买资产；OpEx 随业务使用变化。Pay-as-you-go 不代表自动低成本。
- Region 是地理区域，AZ 是 Region 内隔离的故障域，Edge Location 靠近最终用户。
- 选择 Region 要考虑合规、邻近性、服务可用性和价格。
- Shared Responsibility：AWS 负责 Security of the Cloud，客户负责 Security in the Cloud。

## 高频关键词

- 资源随需求增减 → Elasticity；快速创建资源 → Agility。
- AZ 故障仍服务 → Multi-AZ；Region 级灾备 → Multi-Region。
- 私有子网主动出网 → NAT Gateway；静态内容缓存 → CloudFront。
- 对象 / 块 / 文件存储 → S3 / EBS / EFS 或 FSx。
- 多服务统一备份 → AWS Backup；服务器持续复制恢复 → AWS DRS。

## 高频易错点

- 有 IGW 不代表实例自动上网，还需要路由、公网地址和安全规则。
- Direct Connect 默认不加密；专用路径和加密是不同概念。
- Security Group 有状态且只允许，NACL 无状态且可允许或拒绝。
- Multi-AZ 不等于 Multi-Region，Managed / Serverless 也不代表客户没有责任。
- S3 是对象存储，EBS 是块存储，EFS / FSx 是文件存储。

## 重点记忆

> **考试先抓关键词，再判断题目是在考成本、弹性、故障域、连接对象还是责任边界。**

## 关联笔记

Networking、Storage、Architecture、Shared Responsibility、Cloud Practitioner 高频考点。
