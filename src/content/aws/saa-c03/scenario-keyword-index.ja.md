---
title: "シナリオ問題キーワード索引"
fullName: "Scenario Keyword Index"
description: "Business Goal と制約を先に確認し、Keyword で Service と Architecture の候補を絞ります。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "场景题关键词索引"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-08-05
tags: ["saa-c03", "场景题关键词索引", "AWS"]
notionId: 3a6964dc-ce4a-81d7-bfeb-ed10071385bc
notionUrl: https://app.notion.com/p/3a6964dcce4a81d7bfebed10071385bc
notionUpdated: "2026-08-05T02:02:00.000Z"
---

## シナリオ判断の軸

1. Business Goal と必須制約。
2. RTO / RPO、Consistency、Latency、Traffic Pattern。
3. 運用負担、Security、Compliance、Cost の優先順位。

## Keyword Index

| シナリオ Keyword | 最初の選択 | 除外 |
| --- | --- | --- |
| Decoupling / Buffering | SQS | 同期的な密結合 |
| Fan-out | SNS + SQS | 単一 Consumer Path |
| Serverless Event Processing | Lambda | 長時間の継続 Job |
| AWS Service への Private Access | VPC Endpoint | Public Internet 必須経路 |
| S3 を Serverless SQL で直接 Query | Athena + Glue Data Catalog | 長期・複雑な Warehouse Query |
| 長期・複雑な BI | Redshift | 一時的な S3 Scan のみ |
| Serverless ETL | AWS Glue | Spark/Hadoop Cluster の完全制御 |
| Spark / Hadoop | Amazon EMR | S3 の単純 SQL |
| 複数 Consumer と Replay が必要な Stream | Kinesis Data Streams | 固定先への Delivery のみ |
| S3/Redshift/OpenSearch へ自動 Delivery | Amazon Data Firehose | Consumer 主導の Replay |
| 独自 Model の Training / Deployment | SageMaker AI | Pretrained API のみ |
| Foundation Model API | Amazon Bedrock | 完成済み Assistant |
| CPU、Latency、Error、Logs、Alarm | CloudWatch | CloudTrail の API 監査 |
| Resource を変更・削除した実行者 | CloudTrail | CloudWatch Performance Metric |
| 構成履歴と Rule Compliance | Config | Artifact の Compliance Report |
| AWS SOC/ISO/PCI Report の取得 | Artifact | Audit Manager の顧客 Evidence |
| 監査 Framework 別 Evidence 収集 | Audit Manager | Artifact を顧客監査 System と誤認 |
| OU、SCP、一括請求 | Organizations | SCP が権限を付与すると誤認 |
| Landing Zone、Account Factory、Controls | Control Tower | Organizations の代替と誤認 |
| AWS 障害、Maintenance、Retirement | AWS Health Dashboard | CloudWatch を公式通知と誤認 |

## 重要ポイント

**Keyword で候補を絞り、最終的には Business Constraint と優先順位で決定します。**

## Migration と専門 Solution の Keyword

| Keyword | 選ぶもの | 混同しないもの |
| --- | --- | --- |
| Business Case、License Cost、現状評価 | Migration Evaluator | Application Discovery Service |
| Process、Connection、Application Dependency | Application Discovery Service | Migration Hub |
| 低 Downtime Server Replication、Cutover | AWS Transform MGN | DMS |
| 異種 Database、Schema Conversion | SCT + DMS | Schema 変換が必要なのに DMS のみ |
| S3/EFS Backend の Partner SFTP | Transfer Family | DataSync |
| GraphQL、Subscription、Resolver | AppSync | API Gateway REST API |
| Full Desktop / Single App / 分離 Website | WorkSpaces / Applications / Secure Browser | 3 Service の混同 |
| MQTT、Device Shadow、Rules Engine | IoT Core | SQS |
