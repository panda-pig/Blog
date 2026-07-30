---
title: "クラウドサービスモデルと管理責任"
fullName: "云服务模型与管理责任"
description: "IaaS、Managed Platform、FaaS、Serverless は基盤運用を AWS へ移すが、顧客責任をなくすものではない。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: ja
topicKey: "云服务模型与管理责任"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["cloud-practitioner","云服务模型与管理责任","AWS"]
notionId: 3a6964dc-ce4a-81b3-a226-c3c0676e726d
notionUrl: https://app.notion.com/p/3a6964dcce4a81b3a226c3c0676e726d
notionUpdated: "2026-07-29T08:11:48.200Z"
---

## 一言で理解

> IaaS、Managed Platform、FaaS、Serverless は基盤運用を AWS へ移すが、顧客責任をなくすものではない。

## 要点

- EC2 は制御性が高く、Guest OS、Patch、Application、Data は顧客が管理する。
- RDS は Database 基盤をより多く管理するが、Schema、Account、Network、Configuration、Recovery Validation は顧客責任。
- Lambda / DynamoDB は Server 管理を不要にするが、Code、Access、Data Protection、Cost Control は必要。

## 試験での判断

> Managed / Serverless は責任の連続的な移動を表し、無責任を意味しない。
