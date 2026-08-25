---
title: "Credentials Report・Access Advisor・Access Analyzer・Policy Simulator 比較"
fullName: "IAM Credentials Report, Access Advisor, Access Analyzer and Policy Simulator"
description: "認証情報の棚卸し、利用時刻、アクセス経路分析、Request の権限シミュレーションを整理します。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "IAM Security Review Tools"
frequency: "頻出比較"
date: 2026-08-25
updated: 2026-08-25
tags: ["compare", "IAM", "Security", "AWS"]
notionId: 3c7964dc-ce4a-81ef-83a8-e4f919ae927a
notionUrl: https://app.notion.com/p/3c7964dcce4a81ef83a8e4f919ae927a
notionUpdated: "2026-08-25T06:00:03.628Z"
---

## 一言でいうと

**Credentials Report は IAM User の認証情報状態、Access Advisor は許可された Service / Action と最終利用時刻、Access Analyzer はアクセス経路・未使用権限・Policy、Policy Simulator は個別 Request の結果を確認します。**

## 基本比較

| ツール | 主な範囲 | 主に答える質問 | 代替できないもの |
| --- | --- | --- | --- |
| IAM Credentials Report | Account 内の IAM Users | Password、Access Key、MFA の状態はどうか | Resource Sharing 分析、個別 API の許可判定 |
| IAM Access Advisor / Last Accessed | User、Group、Role、Policy など | 何が許可され、最後にいつ利用したか | 完全なリアルタイム監査ログ |
| IAM Access Analyzer | Account / Organization の対応 Resource、Identity、Policy | External、Internal、Unused Access や Policy Risk があるか | 個別 Request の模擬、脆弱性 Scan |
| IAM Policy Simulator | Principal、Action、Resource、Context | Request が Allow / Deny されるか | 長期 Trend、認証情報一覧 |

## シナリオ判定

- IAM User 全体の MFA と古い Access Key を確認 → **Credentials Report**。
- Role の S3 権限が長期間使われていないか確認 → **Access Advisor / Last Accessed**。
- S3 Bucket や Trust Policy が外部 Account に開いているか確認 → **Access Analyzer**。
- Release 前に Principal の ARN に対する操作を検証 → **Policy Simulator**。
- 実際の Activity からより狭い Policy を作成 → **Access Analyzer Policy Generation + CloudTrail**。

## よくある誤り

- Credentials Report は各 Role の Temporary Credentials を一覧化しません。
- Last Accessed が未使用でも、集計範囲・低頻度 Job・緊急処理を考えずに即削除してはいけません。
- Access Analyzer Finding は意図した Sharing の場合もあり、必ずしも攻撃ではありません。
- Policy Simulator は実際の API Call を記録する CloudTrail の代わりにはなりません。

## Least Privilege の閉ループ

1. Credentials Report で未使用・未ローテーション・MFA 不足の長期認証情報を特定します。
2. Last Accessed Information で低頻度・未使用の Service / Action 権限を探します。
3. Access Analyzer で External、Internal、Unused Access と Policy 問題を確認します。
4. Policy 変更後、Policy Simulator で重要 Request を検証します。
5. CloudTrail で実際の Call を観測し、継続的に再評価します。

## 重点記憶

**認証情報は Report、利用時刻は Advisor、アクセス経路と Policy Risk は Analyzer、Request 結果は Simulator、実際の Call は CloudTrail。**
