---
title: "AWS Security 面接速習"
fullName: "AWS Security Interview Guide"
description: "ID、Network、Data、Detection、Response、責任共有の枠組みで AWS Security 面接に答えます。"
service: "AWS Security"
category: security
kind: topic
lang: ja
topicKey: "AWS Security Interview Guide"
frequency: "面接頻出"
date: 2026-08-25
updated: 2026-08-25
tags: ["security", "interview", "IAM", "AWS"]
notionId: 3a6964dc-ce4a-819d-888a-ff9320ed7cf0
notionUrl: https://app.notion.com/p/3a6964dcce4a819d888aff9320ed7cf0
notionUpdated: "2026-08-25T07:25:32.550Z"
---

## 回答フレーム

**Asset と Risk → ID と最小権限 → Network Boundary → Data Protection → Logging / Detection → Response / Recovery** の順で説明し、最後に責任共有、自動化、検証方法を補足します。

## 頻出質問

| 質問 | 回答の要点 |
| --- | --- |
| Authentication vs Authorization | 前者は本人確認、後者は権限判断。MFA は認証、Policy は認可 |
| Role が長期 Key より安全な理由 | STS の一時認証情報は期限付きで、漏えい・複製・更新忘れを軽減 |
| Trust vs Permissions Policy | Trust は誰が Assume できるか、Permissions は Session が何をできるか |
| Multi-account 従業員 Access | Organizations + IAM Identity Center + Enterprise IdP + Permission Set |
| KMS / Secrets Manager / ACM | 暗号鍵 / Secret と Rotation / TLS Certificate |
| Internet Web App の保護 | CloudFront、WAF、Shield、ALB、Multi-AZ、Auto Scaling、SG、ACM |
| GuardDuty / Inspector / Detective / Security Hub | 脅威検知 / 脆弱性 Scan / 調査 / Finding 集約 |
| S3 の機密 Data | Macie + Block Public Access + Policy + KMS + CloudTrail Data Events |
| SSH なしで EC2 管理 | Systems Manager Session Manager + Instance Role + Session Log |
| Shared Responsibility | AWS は Cloud 自体、Customer は設定・ID・Data・Workload を保護 |
| 新 Account の Harden | Root MFA、Root Key なし、Recovery 保護、SSO/Role、Billing/Budgets、CloudTrail |
| AccessDenied 調査 | Principal/Account/Region、Action、Allow、Explicit Deny、Boundary、SCP、Condition を確認 |
| 認証情報選択 | 人は Identity Center/Federation、Workload は Role、長期 Key は互換用途のみ |
| 最小権限監査 | Report で棚卸し、Advisor で利用、Analyzer で経路、Simulator で検証、CloudTrail で証跡 |

## プロジェクト回答テンプレート

1. Business Asset、Trust Boundary、Threat を定義。
2. 予防・検知・対応 Control を説明。
3. Service の役割分担と選定理由を示す。
4. Audit Evidence、Alert 検証、Recovery Test を説明。
5. 低減した Risk と継続改善を示す。

## 覚え方

**Risk と Boundary から始め、最小権限、Defense in Depth、Traceability、Recovery へ進む。Service 名は設計内の Control です。**
