---
title: "CLF 考前速查"
fullName: "CLF Final Review"
description: "最后一轮以全球基础设施、责任共担、安全、核心服务、计费与支持计划为主线复习。"
service: "Cloud Practitioner"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "CLF 考前速查"
frequency: "阶段性总结"
date: 2026-07-31
updated: 2026-08-15
tags: ["cloud-practitioner","CLF 考前速查","AWS"]
notionId: 3a6964dc-ce4a-81fb-8f92-e11a796893f4
notionUrl: https://app.notion.com/p/3a6964dcce4a81fb8f92e11a796893f4
notionUpdated: "2026-08-05T02:02:38.341Z"
---

## 一句话理解

最后一轮以全球基础设施、责任共担、安全、核心服务、计费与支持计划为主线复习。

## 核心要点

- 顺序：全球基础设施与责任共担 → IAM/安全 → EC2/S3/RDS/VPC/Lambda → 计费工具 → 支持计划。
- SQL/JOIN/事务 → RDS/Aurora；Key-Value/Serverless/低延迟 → DynamoDB。
- Multi-Region Multi-Active → DynamoDB Global Tables；微秒级 DynamoDB 缓存 → DAX。
- 复杂 JSON/MongoDB 兼容 → DocumentDB；复杂关系网络 → Neptune；迁移 → DMS，异构转换 → SCT。

## 计费与支持一分钟速查

- 当前账单与付款 → Billing Dashboard；预算阈值与预测超支 → AWS Budgets。
- 历史成本、趋势和预测 → Cost Explorer；部署前估算 → Pricing Calculator。
- 多账户统一付款与聚合符合条件的优惠 → Organizations Consolidated Billing。
- 项目、部门和环境成本归属 → Cost Allocation Tags。
- Right Sizing 建议 → Compute Optimizer；综合最佳实践检查 → Trusted Advisor。
- 购买第三方软件、AMI、SaaS → Marketplace；寻找 AWS 合作伙伴 → APN。
- Basic 无技术案例 SLA；Enterprise 强调 TAM；响应时间是首次响应目标，不是解决保证。

## 考试重点

- CLF 更强调识别服务用途、责任边界和云的商业价值，不要求所有实现细节。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**基础设施、责任、安全、核心服务、费用与支持，按这五块收尾。**

## 迁移与专业服务一分钟补充

- 三阶段：Assess → Mobilize → Migrate & Modernize；7R 决定每个应用怎么处理。
- Evaluator 做商业案例，Discovery 找依赖，Transform MGN 搬服务器，DMS 搬数据库，DataSync 搬文件。
- AppSync = GraphQL，Amplify = 前端全栈平台，Connect = 联络中心，SES = 应用邮件。
- WorkSpaces 是完整桌面，WorkSpaces Applications 只串流应用，Secure Browser 只提供隔离浏览会话。
