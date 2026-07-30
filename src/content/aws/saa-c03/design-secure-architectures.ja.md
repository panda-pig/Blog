---
title: "セキュアなアーキテクチャの設計"
fullName: "Design Secure Architectures"
description: "最小権限、Private Access、暗号化、監査、分離された Recovery を組み合わせて AWS Architecture を保護する。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "安全架构设计"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["saa-c03","Design Secure Architectures","AWS"]
notionId: 3a6964dc-ce4a-815e-9db0-d8343bfa6db7
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9db0d8343bfa6db7
notionUpdated: "2026-07-29T08:13:15.938Z"
---

## 一言で理解

> 最小権限、Private Access、暗号化、監査、分離された Recovery を組み合わせて AWS Architecture を保護する。

## 要点

- S3 は Default Private とし、Block Public Access、IAM Role、Bucket Policy、Private CloudFront Origin を使う。
- At-Rest Encryption と In-Transit Encryption を区別し、Key と Credential を適切に管理する。
- Object Audit は CloudTrail Data Events、Private Access は VPC Endpoint、Immutable Protection は Object Lock / Isolated Backup。

## 試験での判断

> CORS は Authorization ではなく、Encryption は Access Control ではなく、Backup 成功だけで Recoverability は証明できない。
