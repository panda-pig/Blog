---
title: "監視・監査・コンプライアンス・ガバナンス総比較"
fullName: "Monitoring, Audit, Compliance & Governance"
description: "AWS の監視、監査、コンプライアンス、マルチアカウント統制、推奨サービスを比較します。"
service: "AWS"
category: compare
kind: compare
lang: ja
topicKey: "监控・审计・合规・治理服务总对比"
frequency: "专题对比"
date: 2026-08-01
updated: 2026-08-01
tags: ["compare", "监控・审计・合规・治理服务总对比", "AWS"]
notionId: 3ae964dc-ce4a-81d6-bc1f-c45a1a2a3a36
notionUrl: https://app.notion.com/p/3ae964dcce4a81d6bc1fc45a1a2a3a36
notionUpdated: "2026-07-31T08:17:20.860Z"
---

## ひとことで全体像

- **稼働状況は CloudWatch、API 履歴は CloudTrail、Resource 構成と Rule Compliance は Config。**
- **AWS の Report と Agreement は Artifact、顧客環境の監査 Evidence は Audit Manager。**
- **Organizations は Multi-Account 基盤、Control Tower は標準 Landing Zone と継続 Governance。**
- **Service Catalog は承認 Product、License Manager は License 消費を管理。**
- **AWS Health は公式 Event、Trusted Advisor は改善推奨、Access Analyzer は権限露出を確認。**

## サービス総比較

| サービス | 中心となる問い | 主な対象 | 試験キーワード |
| --- | --- | --- | --- |
| Amazon CloudWatch | システムは現在どう動いているか？ | Metrics、Logs、Alarms、Dashboards | CPU、Latency、Error Rate、しきい値 Alarm |
| AWS CloudTrail | 誰がいつどの API を実行したか？ | Account Activity と API Event | Resource 削除、操作履歴、監査 Log |
| AWS Config | 構成がどう変化し Rule に準拠するか？ | Resource 構成と Rule | Configuration Drift、継続 Compliance |
| AWS Artifact | AWS の Compliance 資料はどこか？ | AWS Report と Agreement | SOC/ISO/PCI Report、契約 |
| AWS Audit Manager | 顧客環境の監査 Evidence をどう準備するか？ | Framework、Control、Evidence | Evidence 自動収集、Assessment |
| AWS Organizations | 複数 Account をどう一元管理するか？ | Account、OU、SCP、請求 | OU、SCP、一括請求 |
| AWS Control Tower | 統制された Multi-Account 環境をどう構築するか？ | Landing Zone、Account、Controls | Account Factory、Guardrail、標準 Account |
| AWS Service Catalog | 承認済み Solution を安全に Self-Service 提供するには？ | Portfolio、Product、Constraint | 承認 Catalog、統制 Self-Service |
| AWS License Manager | Software License をどう追跡・制限するか？ | License Rule、数量、BYOL | BYOL、超過利用、Hybrid 環境 |
| AWS Health Dashboard | AWS 公式 Event が自分に影響するか？ | Event、計画変更、通知 | AWS 障害、Maintenance、Instance Retirement |
| AWS Trusted Advisor | どの Best Practice 改善が必要か？ | Cost、Performance、Security、耐障害性、Quota | Idle Resource、Root MFA、Quota 逼迫 |
| IAM Access Analyzer | 外部から誰がアクセスでき、権限が広すぎないか？ | Resource Policy、Trust Policy、Activity | External Account、Public Access、最小権限 |
| AWS Well-Architected Tool | Workload は Architecture Best Practice に沿うか？ | Workload と 6 本の柱 | Architecture Review、Risk、Milestone |

## 頻出の見分け方

| Pair | 判断方法 |
| --- | --- |
| CloudWatch vs CloudTrail | 性能、Logs、Alarm → CloudWatch。API 操作 → CloudTrail。 |
| CloudTrail vs Config | 実行者と API → CloudTrail。構成の前後と Compliance → Config。 |
| Artifact vs Audit Manager | AWS Report と Agreement → Artifact。顧客環境 Evidence → Audit Manager。 |
| Config vs Audit Manager | 構成記録と Rule → Config。Framework 別の複数 Source Evidence → Audit Manager。 |
| Organizations vs Control Tower | Account、OU、SCP、請求 → Organizations。Landing Zone、Account Factory、Controls → Control Tower。 |
| Service Catalog vs Marketplace | 企業承認 Product Catalog → Service Catalog。第三者 Software / Data 市場 → Marketplace。 |
| Service Catalog vs License Manager | 配備可能な Product → Service Catalog。利用可能な License 数 → License Manager。 |
| AWS Health vs CloudWatch | AWS 公式 Event と Maintenance → Health。自分の Metrics、Logs、Alarm → CloudWatch。 |
| Trusted Advisor vs Well-Architected Tool | 自動 Check と Account 推奨 → Trusted Advisor。質問形式の Workload Review → Well-Architected Tool。 |
| Trusted Advisor vs IAM Access Analyzer | 幅広い最適化推奨 → Trusted Advisor。外部アクセスと最小権限分析 → Access Analyzer。 |

## シナリオ速見

- CPU 80% 超で通知・Scale → CloudWatch Alarm + SNS / Auto Scaling。
- EC2 を削除した実行者を特定 → CloudTrail。
- S3 非公開を継続 Check → AWS Config Rule。
- 監査担当が AWS SOC Report を要求 → AWS Artifact。
- PCI 監査 Evidence を自動収集 → AWS Audit Manager。
- Account 一元管理と SCP 境界 → AWS Organizations。
- 新規 Account に Landing Zone → AWS Control Tower。
- 承認 Template のみ Developer が配備 → AWS Service Catalog。
- BYOL を追跡し License 超過を防止 → AWS License Manager。
- Instance Retirement や AWS 側 Event を確認 → AWS Health Dashboard。
- Idle Resource、Root MFA、Quota 逼迫を確認 → AWS Trusted Advisor。
- S3 や Role の外部共有を検出 → IAM Access Analyzer。

## 重要ポイント

**Watch は稼働、Trail は操作、Config は構成。Artifact は AWS 資料、Audit Manager は顧客 Evidence。Organizations は Account、Control Tower は Governance。Catalog は Product、License Manager は License。Health は AWS Event、Trusted Advisor は推奨、Access Analyzer は権限です。**
