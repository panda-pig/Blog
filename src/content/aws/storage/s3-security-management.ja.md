---
title: "S3 セキュリティと管理"
fullName: "Amazon S3 Security and Management"
description: "S3 のデフォルト非公開、権限ポリシー、バージョニング、暗号化と監査、レプリケーション、Object Lock を体系的に整理します。"
service: "Amazon S3"
category: storage
kind: service
lang: ja
topicKey: "S3 安全与管理"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["S3", "Security", "Versioning", "SAA-C03"]
notionId: 3ac964dc-ce4a-81ed-a53b-d11b4044717f
notionUrl: https://app.notion.com/p/3ac964dcce4a81eda53bd11b4044717f
notionUpdated: "2026-07-30"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | S3 Security & Management |
| 正式名称 | Amazon S3 Security and Management |
| 中国語名 | S3 安全与管理 |
| 日本語名 | S3 セキュリティと管理 |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | IAM Policy / Bucket Policy / ACL / Block Public Access |

## デフォルトのセキュリティ

- S3 Bucket とオブジェクトはデフォルトで非公開です。
- Block Public Access は意図しない公開を防ぎますが、IAM、Bucket Policy、Access Point、CloudFront、Presigned URL で正しく許可されたアクセスまで拒否するものではありません。
- 現在の一般的な設計では Bucket Owner Enforced で ACL を無効化し、主に IAM と Bucket Policy を利用します。

## アクセス制御の手段

| 手段 | 役割 |
| --- | --- |
| IAM Policy | ユーザーまたはロールに付与するアイデンティティポリシー |
| Bucket Policy | Bucket に付与するリソースポリシー |
| Access Point | アプリやチームごとに独立した入口とポリシーを提供 |
| Presigned URL | 署名者の権限範囲で期限付きアクセスを提供 |
| Block Public Access | パブリックアクセス設定を防止 |
| VPC Endpoint Policy | VPC Endpoint 経由のアクセスを制限 |

## Bucket Policy の主要フィールド

- **Effect**：Allow または Deny。
- **Principal**：誰が対象か。
- **Action**：どの API を許可または拒否するか。
- **Resource**：Bucket ARN または Object ARN。
- **Condition**：HTTPS、送信元アカウント、Organization、VPC Endpoint、IP などの条件。

## Versioning と復元

- 同じ Key の複数バージョンを保持します。
- 通常の削除では Delete Marker が作成され、旧バージョンは残ります。
- Delete Marker を削除するか、旧バージョンをコピーして新しい現行バージョンにできます。
- Versioning は一度有効にすると Suspended にしか変更できず、未設定の状態には戻せません。
- 旧バージョンにも料金がかかるため、Lifecycle と組み合わせて管理します。

## 暗号化と監査

- 転送中：HTTPS / TLS。
- 保存時：SSE-S3、SSE-KMS など。
- CloudTrail Management Events：Bucket 設定の操作。
- CloudTrail Data Events：GetObject、PutObject、DeleteObject などのオブジェクト API。
- S3 Server Access Logging：アクセスリクエストのログ。
- S3 Inventory：定期的なオブジェクト一覧。

## オブジェクト管理

- **Key**：オブジェクトの一意な名前。コンソール上のフォルダーは Prefix です。
- **Metadata**：オブジェクトの属性。ユーザーメタデータの変更には通常、コピーまたは再書き込みが必要です。
- **Tags**：個別に管理でき、Lifecycle、権限、コスト分類に利用します。
- **Checksums**：整合性を検証します。
- **Object Lock**：WORM 保持とコンプライアンス保護。
- **Object URL**：単なるアドレスであり、アクセス権を与えるものではありません。

## CORS

CORS はブラウザーに対して試行可能なクロスオリジンリクエストを示す仕組みで、認可ではありません。IAM、Bucket Policy、Presigned URL などで別途許可される必要があります。

## Replication

- Same-Region Replication（SRR）。
- Cross-Region Replication（CRR）。
- コンプライアンス、分離、リージョン別アクセス、災害復旧に利用できます。
- 通常は Versioning が必要で、対象範囲、既存オブジェクト、削除動作をルールとして設計します。

## 頻出シナリオ

- 誤削除や上書きを防ぐ → Versioning。
- 非公開オブジェクトを一時共有する → Presigned URL。
- チームごとに入口を分ける → Access Points。
- 公開を防ぐ → Block Public Access。
- オブジェクト API を監査する → CloudTrail Data Events。
- コンプライアンス上、変更や削除を防ぐ → Object Lock。
- ブラウザーのクロスオリジンアクセス → CORS と通常の認可。
- 非公開コンテンツをグローバル配信する → CloudFront + 非公開 S3 Origin。

## 重点

> **S3 はデフォルトで非公開。Policy は権限、Versioning は履歴、Lifecycle はコスト、Replication は複製、Object Lock は不変性を管理します。**
