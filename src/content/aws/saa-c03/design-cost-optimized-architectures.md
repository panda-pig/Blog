---
title: "成本优化架构设计"
fullName: "Design Cost-Optimized Architectures"
description: "先看访问频率和恢复时间，再算检索、期限、请求、传输与副本成本。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "成本优化架构设计"
frequency: "阶段性总结"
date: 2026-07-30
updated: 2026-08-05
tags: ["saa-c03","Design Cost-Optimized Architectures","AWS"]
notionId: 3a6964dc-ce4a-815e-9274-d95d1853835b
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9274d95d1853835b
notionUpdated: "2026-08-05T02:02:00.000Z"
---

## 必须掌握

- S3 Storage Class 的访问频率、取回时间与总成本。
- Lifecycle vs Intelligent-Tiering。
- Standard-IA vs One Zone-IA。
- Glacier Instant / Flexible / Deep Archive。
- EBS gp3、io2、st1、sc1 的性能与成本。
- EFS Lifecycle 与 One Zone。
- FSx 产品与部署模式。
- Snapshot、旧版本、未完成 Multipart Upload 和孤立资源清理。

## 题目关键词 → 服务

| 需求 | 首先想到 | 还要检查 |
| --- | --- | --- |
| 访问模式未知 | S3 Intelligent-Tiering | 监控费、对象大小 |
| 低频但立即取回 | Standard-IA | 检索费、最短存储期 |
| 极少访问但毫秒取回 | Glacier Instant Retrieval | 最短期限与检索 |
| 可以等待分钟到小时 | Glacier Flexible Retrieval | 恢复层级 |
| 长期封存 | Glacier Deep Archive | 恢复时间 |
| 可重建、接受单 AZ | One Zone-IA | AZ 故障风险 |
| 规则明确的转层/删除 | S3 Lifecycle | 对象版本与过期规则 |
| 一般 EBS 工作负载 | gp3 | IOPS、吞吐与容量 |
| 大文件顺序吞吐 | st1 | 不能作为启动卷 |
| EFS 冷文件 | EFS Lifecycle | IA/Archive 访问费 |

## 总成本判断

不要只看每 GB 存储价格，还要计算：
- 请求费。
- 数据检索费。
- 最短存储期限。
- 数据传输费。
- 跨 AZ / 跨 Region 流量。
- 监控/自动分层费用。
- 旧版本、删除标记和快照。
- 未完成 Multipart Upload。
- NAT Gateway 路径；能否改用 VPC Endpoint。

## 成本优化动作

- 用 Lifecycle 自动转层并清理旧版本。
- 访问模式未知时使用 Intelligent-Tiering。
- 定期清理未附加 EBS Volume 与不再需要的 Snapshot。
- gp3 与性能独立配置，避免只为 IOPS 盲目扩容。
- EFS 使用 Lifecycle，并评估 Regional vs One Zone。
- 使用 S3 / Glacier 替代昂贵文件系统保存长期归档。
- Storage Gateway 将本地冷数据与备份迁入云存储。
- 用标签、Budget、Cost Explorer 跟踪存储成本。

## 高频陷阱

- Glacier Instant Retrieval 不是慢恢复。
- One Zone-IA 便宜，但故障范围更大。
- Intelligent-Tiering 不是所有小对象都必然划算。
- Lifecycle 删除规则错误可能造成不可逆数据丢失。
- 快照是增量的，但所有保留数据块仍会计费。
- 自动扩容不代表自动成本优化。

## 考前一分钟复习

**先看访问频率和恢复时间，再算检索、期限、请求、传输与副本成本。**

## Database 成本补充

- RDS / Aurora 按实际负载选择实例规格、存储和副本数量，清理不再需要的快照。
- 读流量大时比较 Read Replica、Aurora Reader 与 ElastiCache 的总成本，不要只看单项价格。
- DynamoDB 访问不可预测时可评估 On-Demand；流量稳定时比较 Provisioned + Auto Scaling。
- 避免不必要的 Scan、低效 Partition Key 和过度索引，减少读取/写入消耗。
- DAX 可能减少重复读取所需容量，但只有高命中、读多工作负载才值得。
- 自动扩展和 Serverless 不等于自动成本最优；仍需监控容量、存储、副本、备份和跨 Region 流量。

## 计算、数据库与网络成本补充

- EC2 先做 Right Sizing；稳定基础负载评估 Savings Plans / Reserved Instances，可中断任务评估 Spot，波动负载结合 Auto Scaling。
- RDS 同时比较实例规格、存储、副本、备份和缓存成本；Read Replica、Multi-AZ 与 ElastiCache 解决的问题不同。
- 账单异常时用 Cost Explorer 按服务、账户、Region、标签和时间定位；Budgets 负责阈值告警，Pricing Calculator 负责变更前估算。
- Compute Optimizer 给出规格建议，Trusted Advisor 做更广的最佳实践检查，所有建议仍需根据峰值和可靠性验证。
- 数据传输成本取决于流向、Region、AZ 和路径。S3/DynamoDB Gateway Endpoint 无小时费和数据处理费，Interface Endpoint 会收费。

## 定价原则

- Pay as you go；Save when you commit；Pay less by using more。
- 最低单价不等于最低总拥有成本，还要计算请求、检索、传输、运维、可用性和恢复目标。
