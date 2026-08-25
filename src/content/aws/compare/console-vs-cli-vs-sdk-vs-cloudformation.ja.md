---
title: "Console vs Local CLI vs CloudShell vs SDK vs CloudFormation"
fullName: "Console, Local CLI, CloudShell, SDK and CloudFormation"
description: "GUI、Local Command、Browser Shell、Application Code、Declarative Infrastructure を比較します。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Console vs CLI vs SDK vs CloudFormation"
frequency: "頻出比較"
date: 2026-07-30
updated: 2026-08-25
tags: ["compare", "Console", "CLI", "SDK", "CloudFormation"]
notionId: 3a6964dc-ce4a-8171-a18c-ca9aeea29add
notionUrl: https://app.notion.com/p/3a6964dcce4a8171a18cca9aeea29add
notionUpdated: "2026-08-25T06:04:30.975Z"
---

## 一言で理解

Console は Click、Local CLI は自分の環境の Command、CloudShell は Browser Command、SDK は Application Code、CloudFormation は Infrastructure Template です。

| 方式 | 適した用途 | Credential |
| --- | --- | --- |
| Console | 探索、一回限りの操作 | Password + MFA、SSO |
| Local CLI / CloudShell | 定型・Batch Task | Identity Center、Role、Profile |
| SDK | Application Integration | Credential Provider Chain |
| CloudFormation | 再現可能な環境 | Caller / Service Role |

Local CLI は Install と Local Credential が必要です。CloudShell は Preconfigured CLI と現在の Console Identity の Temporary Credentials を使い、権限を拡大しません。aws configure は Profile 設定を保存するだけです。

Temporary Credentials は Access Key ID、Secret Access Key、Session Token で構成されます。CLI / SDK は操作方式であり Credential Type ではありません。People は Identity Center、Workload は Role、Secret は Code に入れません。

CloudFormation は Declarative（何を作るか）、CLI Script は通常 Imperative（どの順に行うか）です。

## Credential の解決と Role の受け渡し

- Local CLI / SDK は Credential Provider Chain から Identity Center、AssumeRole、Environment、Container、Instance Role などの認証情報を探索します。
- EC2 は Instance Profile 経由で 1 つの IAM Role を受け取り、Instance 内の Program は IMDS から Temporary Credentials を取得・更新します。
- iam:PassRole は Role を AWS Service へ渡す権限であり、呼び出し元がその Role を Assume することではありません。
- CloudShell は現在の Console Session の Temporary Credentials を使い、IAM を回避したり自動的に Administrator 権限を得たりしません。
- CloudShell の HOME は Region ごとに永続化され、--region は Request の Region Context だけを変え、Authorization は変えません。
