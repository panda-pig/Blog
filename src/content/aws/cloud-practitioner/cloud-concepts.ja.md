---
title: "クラウド概念"
fullName: "Cloud Concepts"
description: "従量課金、Global Infrastructure、責任共有、主要サービス選択に関する Cloud Practitioner のキーワードを整理します。"
service: "CLF-C02"
category: cloud-practitioner
kind: topic
lang: ja
topicKey: "云概念"
frequency: "試験頻度 ★★★★★"
date: 2026-07-30
updated: 2026-08-05
tags: ["Cloud Concepts","CLF-C02","Foundations"]
notionId: 3a6964dc-ce4a-8161-8312-db30847cd94e
notionUrl: https://app.notion.com/p/3a6964dcce4a81618312db30847cd94e
notionUpdated: "2026-08-05T02:08:00.000Z"
---

## 一言で理解

> Cloud Computing は Internet 経由で IT Resource を On-demand に取得し、使用量に応じて支払う仕組みです。

## 必須概念

- Cloud の利点：固定費を変動費へ、規模の経済、容量予測不要、Agility、DC 運用削減、迅速な Global 展開。
- CapEx は資産を先に購入し、OpEx は利用量に応じて変化する。Pay-as-you-go が自動的に安いとは限らない。
- Region は地理領域、AZ は Region 内の分離された障害領域、Edge Location は End User に近い。
- Region 選択では Compliance、Proximity、Service Availability、Price を考える。
- Shared Responsibility：AWS は Security of the Cloud、Customer は Security in the Cloud を担当する。

## 頻出キーワード

- 需要に応じて資源増減 → Elasticity、数分で Resource 作成 → Agility。
- AZ 障害でも継続 → Multi-AZ、Region 障害の DR → Multi-Region。
- Private Subnet の外向き通信 → NAT Gateway、静的 Content Cache → CloudFront。
- Object / Block / File Storage → S3 / EBS / EFS または FSx。
- 複数 Service の集中 Backup → AWS Backup、Server 継続複製 → AWS DRS。

## よくある誤り

- IGW だけでは Internet 接続できず、Route、Public Address、Security Rule も必要。
- Direct Connect は既定で暗号化されず、専用経路と暗号化は別概念。
- Security Group は Stateful・Allow only、NACL は Stateless・Allow/Deny。
- Multi-AZ は Multi-Region ではなく、Managed / Serverless でも Customer 責任は残る。
- S3 は Object、EBS は Block、EFS / FSx は File Storage。

## 重点記憶

> **まず Keyword を捉え、Cost、Elasticity、障害領域、接続対象、責任境界のどれを問うか判断する。**

## 関連ノート

Networking、Storage、Architecture、Shared Responsibility、Cloud Practitioner 試験ポイント。
