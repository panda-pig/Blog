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
updated: 2026-08-15
tags: ["compare", "Console", "CLI", "SDK", "CloudFormation"]
notionId: 3a6964dc-ce4a-8171-a18c-ca9aeea29add
notionUrl: https://app.notion.com/p/3a6964dcce4a8171a18cca9aeea29add
notionUpdated: "2026-08-13T08:38:08.489Z"
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
