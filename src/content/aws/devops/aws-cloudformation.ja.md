---
title: "AWS CloudFormation"
fullName: "AWS CloudFormation"
description: "宣言的 Template から再現可能な Resource Stack を作成・管理する AWS の Infrastructure as Code。"
service: "AWS CloudFormation"
category: devops
kind: service
lang: ja
topicKey: "AWS CloudFormation"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["devops","AWS CloudFormation","AWS"]
notionId: 3a6964dc-ce4a-81fe-8a73-c98ed403b25b
notionUrl: https://app.notion.com/p/3a6964dcce4a81fe8a73c98ed403b25b
notionUpdated: "2026-07-23T08:25:26.418Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS CloudFormation |
| 正式名称 | AWS CloudFormation |
| 中国語名 | AWS 基础设施即代码服务 |
| 日本語名 | AWS CloudFormation |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | AWS CLI / SDK / CDK / Terraform / Elastic Beanstalk |

## 一言で理解

> 宣言的 Template から再現可能な Resource Stack を作成・管理する AWS の Infrastructure as Code。

## 要点

- YAML / JSON Template で Resource、Parameter、Condition、Mapping、Output を宣言する。
- Stack は Resource を一体管理し、Change Set は変更を事前確認し、失敗時には Rollback できる。
- Drift Detection は実環境との差を検出し、StackSets は複数 Account / Region へ展開する。

## 試験での判断

> Console は手動、CLI は Command 自動化、SDK は Application 連携、CloudFormation は宣言的 Infrastructure 管理。
