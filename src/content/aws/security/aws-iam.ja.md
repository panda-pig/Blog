---
title: "AWS IAM"
fullName: "AWS Identity and Access Management"
description: "誰が Request しているかを確認し、Policy でどの Resource に何ができるかを判断します。"
service: "AWS IAM"
category: security
kind: service
lang: ja
topicKey: "AWS IAM"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-25
tags: ["security", "AWS IAM", "AWS"]
notionId: 3a6964dc-ce4a-814c-981d-d23eb8d66e71
notionUrl: https://app.notion.com/p/3a6964dcce4a814c981dd23eb8d66e71
notionUpdated: "2026-08-25T07:25:28.538Z"
---

## 一言で理解

**IAM は誰が Request しているかを確認し、Policy でどの Resource にどの Action を許可するか決めます。**

## Identity

Root は Account 固有の Identity で、Recovery と Root-only Task に限定します。IAM User は長期 Identity。Group は User のみを含み、入れ子にできず、1 User は複数 Group に所属できます。Role は Assume 可能で Temporary Credentials を提供します。

従業員の Multi-account Access は IAM Identity Center / Federation、Workload は Role を優先します。

## Password、MFA、API Credential

IAM Password Policy は IAM User Console Password だけを制御し、Root、Access Key、Identity Center Password は対象外です。MFA は Authentication を強化しますが Authorization は付与しません。

Long-term Credentials は Access Key ID + Secret Access Key、Temporary Credentials は Session Token を追加して期限切れになります。Secret はハードコードせず、Temporary Credentials を優先します。

Console は Password + MFA または SSO。CLI は Identity Center、AssumeRole、Profile、Workload Role を利用でき、SDK は Credential Provider Chain を使います。aws configure は設定保存だけで権限を付与しません。

## Policy

Version は Policy Language Version、Statement は規則、Effect は Allow / Deny、Action は API、Resource は Scope、Condition は Context 制限です。Principal は Resource-based / Trust Policy で使い、Identity-based Policy には書きません。

Managed Policy は再利用でき、Inline Policy は User、Group、Role のいずれか一つに埋め込みます。User 権限は Direct、Group 経由、Inline の複数 Source から成ります。

## Evaluation

初期状態は Implicit Deny。適用される Allow があり、Explicit Deny がない場合だけ許可されます。Explicit Deny は Allow より優先し、Boundary、Session Policy、SCP は権限を制限するだけです。

## 重点記憶

**Group は入れ子不可、User は複数 Group 可、Policy は権限、People は SSO、Workload は Role、Explicit Deny 優先です。**

## IAM Role、Instance Profile、PassRole

| 構成要素 | 答える質問 | 要点 |
| --- | --- | --- |
| Trust Policy | 誰が Role を Assume できるか | AWS Service、Account、User、Role、Federated Principal を信頼できる |
| Permissions Policy | Role Session は何を実行できるか | 必要な Action と Resource のみに限定する |
| STS Temporary Credentials | API Request をどう署名するか | Access Key ID、Secret Access Key、Session Token、有効期限を含む |

EC2 は **Instance Profile** を通じて Role を利用します。Instance Profile は 1 つの IAM Role を EC2 Instance に渡すコンテナで、Instance 内の CLI / SDK は IMDS から Temporary Credentials を自動取得・更新します。Role を作成しただけでは EC2 は利用せず、対応する Instance Profile の関連付けが必要です。

iam:PassRole は指定した Role を AWS Service へ渡す権限であり、呼び出し元自身が AssumeRole する操作とは異なります。本番環境では渡せる Role と対象 Service の両方を制限します。

## IAM セキュリティレビュー用ツール

| ツール | 主に答える質問 |
| --- | --- |
| Credentials Report | IAM User の Password、Access Key、MFA の状態はどうか |
| Access Advisor / Last Accessed | Identity / Policy が何にアクセスでき、最後にいつ利用したか |
| Access Analyzer | External、Internal、Unused Access や Policy Risk があるか |
| Policy Simulator | Principal の Action が Resource に対して Allow / Deny されるか |

Last Accessed は完全なリアルタイム監査ログではありません。権限を削減する前に業務周期を考慮し、CloudTrail で実際の API Call を確認します。

## 認証情報ライフサイクルと現代的なID

人には IAM Identity Center / Federation、AWS Workload には Role を使います。長期 Key は互換用途に限定し、新規作成、利用先更新・検証、旧 Key 無効化、削除の順でローテーションします。

Credentials Report は Root Account 行と IAM User の Password、MFA、2本の Access Key、Signing Certificate、最終利用・更新情報を含む Account レベル CSV です。Role の一時認証情報や Service 固有認証情報は含みません。Access Advisor は User、Group、Role、Policy の Service / Action 最終利用時刻と権限元を確認できます。
