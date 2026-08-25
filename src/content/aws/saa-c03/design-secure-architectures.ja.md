---
title: "セキュアなアーキテクチャ設計"
fullName: "Design Secure Architectures"
description: "最小権限、Private Access、暗号化、監査、分離 Recovery で AWS Architecture を保護します。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "安全架构设计"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-08-25
tags: ["saa-c03", "安全架构设计", "AWS"]
notionId: 3a6964dc-ce4a-815e-9db0-d8343bfa6db7
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9db0d8343bfa6db7
notionUpdated: "2026-08-25T07:25:29.784Z"
---

## 必須ポイント

- Identity Policy と Resource Policy を区別し、IAM は Default Deny、Explicit Deny が優先されます。
- S3 は既定で非公開です。明確な公開要件がなければ Block Public Access を維持します。
- 保存時暗号化と TLS による転送中暗号化を区別し、KMS、ACM、Secrets Manager を使い分けます。
- Versioning、Replication、Object Lock、分離 Backup で誤削除や Ransomware に備えます。
- CloudTrail Management Events と S3 Data Events は監査範囲が異なります。
- Security Group、NACL、VPC Endpoint は異なる Network Layer を保護します。

## Storage Security の判断

| 要件 | 最初の選択 | 追加確認 |
| --- | --- | --- |
| S3 の意図しない公開を防止 | Block Public Access | Bucket Policy、ACL、Access Point |
| Private Object の一時共有 | Presigned URL | 署名者権限と有効期限 |
| GetObject / DeleteObject の監査 | CloudTrail Data Events | Trail、Cost、Log 保存先 |
| 改変不能な Compliance 保持 | S3 Object Lock | Versioning と Retention Mode |
| S3 への Private Access | Gateway VPC Endpoint | Endpoint / Bucket Policy |
| Backup の削除防止 | 分離 Vault / 不変 Policy | 権限分離と Restore Test |

## Identity と Application 保護

- EC2、Lambda、Cross-Account Access には Role と Temporary Credentials を優先します。
- IAM Password Policy は IAM User Console Password だけを対象とし、Root、Access Key、Identity Center Password は制御しません。
- Group は User のみを含み入れ子不可。1 User は複数の職務 Group に所属できます。
- Managed Policy は User / Group / Role に Attach、Inline Policy は 1 つの User / Group / Role に Embed します。
- Identity-based Policy は Principal を書かず、Resource-based / Trust Policy は通常 Principal を指定します。
- User を Group から外すとその Group の継承権限だけが失われ、Direct または他 Group の権限は残り得ます。
- Access Denied は失敗 Action、Principal、Direct / Inherited Policy、Explicit Deny、Boundary、SCP、Resource、Condition を確認します。
- Temporary Credentials は Session Token を含み期限切れになります。CLI / SDK に長期 IAM User Key は必須ではありません。
- 従業員の Multi-Account SSO → IAM Identity Center、顧客 Sign-up / Sign-in → Cognito。
- SQL Injection、XSS、Header、IP、Rate Rule → AWS WAF、DDoS → AWS Shield。
- Security Group は Resource / ENI 単位の Stateful、NACL は Subnet 単位の Stateless 制御です。

## Data、検出、Response

- KMS は暗号 Key、ACM は統合 TLS Certificate、Secrets Manager は Secret と Rotation を管理します。
- Macie は S3 Sensitive Data、Inspector は EC2/ECR/Lambda の脆弱性を検出します。
- GuardDuty は不審動作、Security Hub は Finding 集約、Detective は根本原因調査を担います。
- Finding 確認後、EventBridge、Lambda、Systems Manager Automation で Response を実装できます。

## Monitoring、Audit、Governance

- API 実行者と操作 → CloudTrail、構成履歴と Rule → Config。
- AWS SOC/ISO/PCI Report → Artifact、監査 Framework の Evidence 収集 → Audit Manager。
- 外部・Public Access Path → IAM Access Analyzer。
- Multi-Account 権限上限 → Organizations SCP、標準 Landing Zone → Control Tower。

## 最終確認

**Default Private、最小権限、暗号化、監査、Versioning / 不変性、分離 Backup、確認済みの自動 Response。**

## Workload Identity と Role 設計

- EC2 は Instance Profile 経由で IAM Role を関連付け、Instance 内の SDK / CLI は IMDS から Temporary Credentials を取得・更新します。
- Trust Policy は誰が Role を Assume できるかを、Permissions Policy は Role Session が何へアクセスできるかを定義します。
- Role の作成だけでは Service は利用しません。Service との関連付けを行い、Deploy 担当者には範囲を限定した iam:PassRole を付与します。
- 長期 Access Key を Code、AMI、User Data、Container Image、aws configure に保存しません。
- Cross-account Access では Trust Policy、Caller Permission、Resource Policy、Organizations の制限を合わせて確認します。

## Least Privilege の検証ループ

1. Credentials Report で IAM User の Password、Access Key、MFA を棚卸しします。
2. Access Advisor / Last Accessed で低頻度・未使用権限を特定します。
3. Access Analyzer で External、Internal、Unused Access と Policy を分析します。
4. Policy Simulator で重要な Principal / Action / Resource Request を検証します。
5. CloudTrail で実際の API Call を確認し、継続的に権限を縮小・再評価します。

## ID監査と認証情報ライフサイクル

人には IAM Identity Center / Federation、Workload には Role を使います。Credentials Report で棚卸し、Access Advisor で利用と権限元、Access Analyzer で経路と Policy、Policy Simulator で Request、CloudTrail で実活動を確認します。新しい長期 Key を作成・検証してから旧 Key を無効化・削除します。
