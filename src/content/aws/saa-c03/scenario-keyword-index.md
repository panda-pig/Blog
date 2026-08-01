---
title: "场景题关键词索引"
fullName: "Scenario Keyword Index"
description: "先识别业务目标和约束，再用关键词缩小服务与架构选项。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "场景题关键词索引"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-08-01
tags: ["saa-c03", "场景题关键词索引", "AWS"]
notionId: 3a6964dc-ce4a-81d7-bfeb-ed10071385bc
notionUrl: https://app.notion.com/p/3a6964dcce4a81d7bfebed10071385bc
notionUpdated: "2026-07-31T08:22:59.117Z"
---

## 场景题判断维度
1. 业务目标与强制限制。
2. RTO / RPO、一致性、延迟与流量模式。
3. 运维负担、安全、合规与成本优先级。
## 关键词索引

| 题目关键词 | 首先想到的服务或模式 | 排除项 |
| --- | --- | --- |
| 解耦 / 削峰 | SQS | 同步强耦合 |
| 扇出 | SNS + SQS | 单一消费者队列 |
| 无服务器事件处理 | Lambda | 长时间持续任务 |
| 私有访问 AWS 服务 | VPC Endpoint | 必须经过公网 |
| 直接查询 S3 / Serverless SQL | Amazon Athena + Glue Data Catalog | 高频复杂数据仓库查询 |
| 长期、高频、复杂 BI 分析 | Amazon Redshift | 只需临时扫描 S3 |
| 元数据 / Schema / 数据目录 | AWS Glue Data Catalog | 把 Catalog 当成实际数据存储 |
| Serverless ETL / 数据清洗转换 | AWS Glue | 需要完全控制 Spark/Hadoop 集群 |
| Spark / Hadoop / 大数据框架 | Amazon EMR | 只需简单 SQL 查询 S3 |
| 实时数据流、多个消费者、回放 | Kinesis Data Streams | 仅需自动交付到固定目标 |
| 近乎实时自动交付到 S3/Redshift/OpenSearch | Amazon Data Firehose | 需要消费者自由读取和回放 |
| 自己的数据训练和部署 ML 模型 | Amazon SageMaker AI | 只需常见预训练 AI API |
| 基础模型 / 托管生成式 AI API | Amazon Bedrock | 成品企业/开发助手 |
| 在线 DynamoDB + 历史分析/训练 | 变化流入 S3 数据湖，隔离工作负载 | 频繁全表扫描线上 DynamoDB |
| CPU、延迟、错误率、日志与阈值告警 | Amazon CloudWatch | CloudTrail 的 API 审计 |
| 谁调用 API、谁删除或修改资源 | AWS CloudTrail | CloudWatch 的性能指标 |
| 配置历史、持续规则合规 | AWS Config | Artifact 的合规报告 |
| 下载 AWS SOC / ISO / PCI 报告 | AWS Artifact | Audit Manager 的客户证据收集 |
| 按框架自动收集审计证据 | AWS Audit Manager | 把 Artifact 当成客户审计系统 |
| OU、SCP、合并计费 | AWS Organizations | 认为 SCP 会授予权限 |
| Landing Zone、Account Factory、Controls | AWS Control Tower | 认为它替代 Organizations |
| AWS 故障、计划维护、实例退役 | AWS Health Dashboard | 用 CloudWatch 判断 AWS 官方公告 |
