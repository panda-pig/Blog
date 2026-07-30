---
title: "高可用与容错"
fullName: "High Availability & Fault Tolerance"
description: "如果一个组件故障会导致整个系统不可用，这个组件就是单点故障。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "High Availability & Fault Tolerance"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","High Availability & Fault Tolerance","AWS"]
notionId: 3a6964dc-ce4a-816d-833f-c03167b88b6c
notionUrl: https://app.notion.com/p/3a6964dcce4a816d833fc03167b88b6c
notionUpdated: "2026-07-23T08:25:18.648Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | High Availability & Fault Tolerance |
| 中文 | 高可用与容错 |
| 日文 | 高可用性とフォールトトレランス |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Redundancy / DR / Elasticity |

## Single Point of Failure（SPOF）
如果一个组件故障会导致整个系统不可用，这个组件就是单点故障。
例如：网站只有一台 EC2，没有备用实例，也没有故障切换路径。
## Redundancy
通过增加备用组件、数据副本和网络路径降低单点故障风险。
冗余不是简单“多买一台服务器”，还要确保：
- 备用资源位于独立故障域。
- 流量能够切换。
- 数据保持可恢复或可复制。
- 故障能被检测。
- 切换流程经过测试。
## High Availability
系统能够在组件故障时继续提供服务，并把停机时间控制在可接受范围。
典型 AWS 组合：
- 多 AZ
- ELB 健康检查
- Auto Scaling 替换异常实例
- RDS Multi-AZ
- Route 53 Health Check 与 Failover Routing
## Fault Tolerance
容错要求系统在组件故障时几乎不产生服务中断，通常需要更多冗余、更严格的数据一致性和更高成本。
## Multi-AZ vs Multi-Region
- Multi-AZ：抵御单 AZ 故障，是常见高可用基础。
- Multi-Region：抵御 Region 级故障，或满足全球部署和合规需求。
- 具体服务是否自动 Failover，要根据服务能力和配置判断。
## Disaster Recovery 与 Business Continuity
- Disaster Recovery：灾害后恢复系统和数据。
- Business Continuity：确保关键业务在故障和恢复期间仍能持续。
- 设计时需要明确 RTO 和 RPO。
## 高可用、敏捷性与弹性

| 概念 | 含义 |
| --- | --- |
| High Availability | 组件故障时尽量持续服务 |
| Agility | 快速创建、修改和部署以适应业务变化 |
| Elasticity | 随需求自动增加或减少资源 |
| Scalability | 系统能够承载业务增长 |

## Cloud Practitioner 考点
- 多 AZ、冗余和自动故障转移提高可用性。
- 弹性与高可用不是同一个概念。
- 单点故障需要通过冗余和故障隔离消除。
## SAA-C03 考点
- 根据故障范围选择 Multi-AZ 或 Multi-Region。
- 判断数据复制、健康检查、Failover 和恢复流程。
- 结合成本、复杂度、RTO 与 RPO。
- 不要假设“部署多个实例”就一定高可用，必须检查是否跨故障域且能够切流。
## 重点记忆
冗余消除单点故障；Multi-AZ 防 AZ 故障；Multi-Region 防 Region 级故障；Failover 必须被设计和验证。
