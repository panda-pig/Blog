---
title: "AWS Resource 操作｜Console・CLI・SDK・IaC"
fullName: "AWS Management Console / AWS CLI / AWS SDK / Infrastructure as Code"
description: "4 方式はすべて AWS API を呼びますが、Interface、Credential、Automation Level が異なります。"
service: "AWS Resource Interaction Methods"
category: devops
kind: service
lang: ja
topicKey: "AWS 资源交互方式｜Console・CLI・SDK・IaC"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-15
tags: ["devops", "AWS CLI", "AWS SDK", "IaC"]
notionId: 3a6964dc-ce4a-818b-a203-e86b13e2eada
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba203e86b13e2eada
notionUpdated: "2026-08-13T08:35:23.512Z"
---

## 一言で理解

**Console、CLI、SDK、IaC はすべて AWS API を呼びます。違いは Click、Command、Application Code、Declarative Template のどれから操作するかです。**

| 方式 | 適した用途 | 主な Credential |
| --- | --- | --- |
| Console | 探索、手動操作 | Password + MFA、SSO Session |
| CLI | Batch、定型 Automation | Identity Center、Role、Profile |
| SDK | Application Integration | Credential Provider Chain |
| CloudFormation / IaC | 再現可能な Infrastructure | Caller Permission、Service Role |

Region Selector は Regional Resource の表示を変えます。Resource が見つからない場合は Account、Identity、Region、List / Describe Permission、Filter / State の順で確認します。Multi-session は Login Context を並行保持するだけです。

Local CLI は Local Credential を使用し、CloudShell は現在の Console Identity の Temporary Credentials を取得します。aws configure は Profile の Credential、Default Region、Output Format を保存するだけで IAM 権限を付与しません。

Access Key ID は識別子、Secret Access Key は署名用秘密、Temporary Credentials は Session Token も必要です。People は Identity Center、Workload は Role を優先します。
