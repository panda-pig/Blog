---
title: "高性能アーキテクチャの設計"
fullName: "Design High-Performing Architectures"
description: "Workload の Access Pattern と Bottleneck に合わせて Compute、Storage、Database、Network、Cache を選ぶ。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "高性能架构设计"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-31
tags: ["saa-c03","Design High-Performing Architectures","AWS"]
notionId: 3a6964dc-ce4a-8177-89e9-de191f6694c9
notionUrl: https://app.notion.com/p/3a6964dcce4a817789e9de191f6694c9
notionUpdated: "2026-07-30T08:08:43.972Z"
---

## 一言で理解

> Workload の Access Pattern と Bottleneck に合わせて Compute、Storage、Database、Network、Cache を選ぶ。

## 要点

- 可能なら Horizontal Scaling を使い、Scaling Model が合う Managed / Serverless Service を利用する。
- Storage は Object / Block / File、Database は Relational / Key-Value / Document / Graph / Cache で選ぶ。
- CloudFront、Read Replica、DAX、ElastiCache は Data と Consistency 要件に合う場合だけ利用する。

## 試験での判断

> Service 名だけでなく Latency、Throughput、Concurrency、Cost を計測して最適化する。

## Analytics・AI/ML の性能補足

| 性能・アーキテクチャ要件 | まず検討するもの |
| --- | --- |
| S3 を直接アドホック SQL で検索 | Athena + パーティション / 列指向形式 / 圧縮 |
| 長期的・高頻度・複雑な分析と BI | Amazon Redshift |
| リアルタイムストリーム、複数コンシューマー、独自処理 | Kinesis Data Streams |
| 低運用で S3 などへニアリアルタイム配信 | Amazon Data Firehose |
| Serverless ETL とデータカタログ | AWS Glue |
| Spark / Hadoop による大規模な独自処理 | Amazon EMR |
| 自社データでモデルを学習・デプロイ | Amazon SageMaker AI |
| マネージド基盤モデル API で生成 AI を構築 | Amazon Bedrock |

### 設計上の注意

- 本番 DynamoDB と大規模な履歴分析・学習負荷を分離する。
- Athena のスキャン量はパーティション、圧縮、ファイル形式に左右される。
- Firehose はバッファリングするため、必要な配信遅延を満たすか確認する。
- Training と Inference は異なるワークロードとして、計算、スケーリング、監視を個別に設計する。
- モデル品質が低下したら、まずデータ品質、Schema、学習データの鮮度を確認する。
