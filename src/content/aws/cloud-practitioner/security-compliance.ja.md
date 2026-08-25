---
title: "セキュリティとコンプライアンス"
fullName: "Security and Compliance"
description: "責任共有、IAM、Data Protection、Detection、Audit Evidence、Multi-account Governance を整理します。"
service: "CLF-C02"
category: cloud-practitioner
kind: topic
lang: ja
topicKey: "安全与合规"
frequency: "試験頻度 ★★★★★"
date: 2026-08-13
updated: 2026-08-25
tags: ["Security", "Compliance", "CLF-C02", "AWS"]
notionId: 3a6964dc-ce4a-8119-86e2-cb66c29308cd
notionUrl: https://app.notion.com/p/3a6964dcce4a811986e2cb66c29308cd
notionUpdated: "2026-08-25T06:02:23.344Z"
---

## 必須境界

AWS は Security **of** the Cloud、Customer は Security **in** the Cloud を担当します。IAM は Default Deny、Explicit Deny 優先、Root は Root-only Task に限定し、Workload は Role と Temporary Credentials を使います。

Group は User のみを含み、入れ子にできません。Identity-based Policy は Principal を書かず、Resource-based / Trust Policy は通常 Principal を指定します。Password Policy は IAM User Console Password だけが対象です。

## Service 選択

| 要件 | Service |
| --- | --- |
| 従業員の Multi-account Access | IAM Identity Center |
| Application Customer Login | Cognito |
| Workload Access | IAM Role |
| Encryption Key | KMS |
| Secret と Rotation | Secrets Manager |
| Public TLS Certificate | ACM |
| Web Filter / DDoS | WAF / Shield |
| Threat / Vulnerability / S3 Sensitive Data | GuardDuty / Inspector / Macie |
| Investigation / Finding 集約 | Detective / Security Hub |

CloudWatch は Metrics・Logs・Alarm、CloudTrail は API Activity、Config は構成と Compliance、Artifact は AWS Report、Audit Manager は Customer Environment の Evidence を担当します。

Organizations は Account、OU、SCP、一括請求を管理し、SCP は制限するだけで権限を付与しません。Control Tower は Landing Zone、Account Factory、Controls を提供します。

## IAM 認証情報・権限レビュー

| 問題のキーワード | 最初に考えるもの |
| --- | --- |
| 全 IAM User の Password、Access Key、MFA 状態 | IAM Credentials Report |
| Identity / Policy が許可された Service / Action と最終利用時刻 | IAM Access Advisor / Last Accessed |
| External、Internal、Unused Access、Policy 検証・生成 | IAM Access Analyzer |
| Principal の Action が Resource に対して許可されるかを模擬 | IAM Policy Simulator |
| 実際に発生した API Call | AWS CloudTrail |

Access Advisor は User だけでなく Role、Group、Policy などにも利用できます。Last Accessed は完全なリアルタイム監査証拠ではないため、権限削除前に業務周期を考慮し、CloudTrail で確認します。
