---
title: "Password Policy・MFA・Access Key・Temporary Credentials 総比較"
fullName: "Password Policy, MFA, Access Key and Temporary Credentials"
description: "Password Rule、追加認証、長期 Key、期限付き認証情報を区別します。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Password Policy・MFA・Access Key・Temporary Credentials 总对比"
frequency: "頻出比較"
date: 2026-08-13
updated: 2026-08-25
tags: ["compare", "MFA", "Access Key", "IAM"]
notionId: 3bb964dc-ce4a-816d-962e-c17440cc39cc
notionUrl: https://app.notion.com/p/3bb964dcce4a816d962ec17440cc39cc
notionUpdated: "2026-08-25T07:27:36.055Z"
---

## 一言で理解

**Password Policy は IAM User の Password Rule、MFA は追加 Authentication、Access Key は API 署名、Temporary Credentials は自動的に期限切れになる認証情報です。**

## 境界

Password Policy は IAM User の Console Password にだけ作用し、Root Password、Access Key、IAM Identity Center Password は制御しません。MFA は Authentication を強化しますが Authorization は付与せず、Policy Condition で MFA Context を要求できます。

Long-term Credentials は Access Key ID と Secret Access Key で構成され、自動期限切れになりません。Temporary Credentials は Session Token を追加し、有効期限を持ちます。People は IAM Identity Center / Federation、Workload は Role を優先します。

Console は通常 Password + MFA または SSO Session を使います。CLI / SDK は Identity Center、AssumeRole、Workload Role、Access Key を利用できます。aws configure は Profile 設定を保存するだけで権限は付与せず、CloudShell も現在の Identity 権限を超えません。

Secret は共有・ハードコードせず、漏えい時は直ちに無効化または Rotation し、CloudTrail と露出範囲を調査します。

## 安全なローテーションと現代的なID選択

長期 Key は **新規作成 → 全利用先を更新・検証 → 旧 Key を無効化 → 異常がないことを確認して削除** の順でローテーションします。Secret 漏えい時は即時失効または更新し、CloudTrail と露出範囲を調査します。Git Commit の削除だけでは不十分です。

| 主体 | 推奨方式 |
| --- | --- |
| 従業員・管理者 | IAM Identity Center / Federation + MFA + 一時認証情報 |
| AWS 上の Workload | Instance Profile、Task Role、Execution Role |
| AWS 外の Workload | Roles Anywhere、OIDC / SAML Federation |
| 一時認証情報非対応の旧 System | 専用 IAM User + 最小権限 Key + ローテーションと監視 |
