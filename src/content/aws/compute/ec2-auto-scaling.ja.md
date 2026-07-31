---
title: "Amazon EC2 Auto Scaling"
fullName: "Amazon EC2 Auto Scaling"
description: "負荷に応じて EC2 を追加・削減・置換し、定義した範囲内で容量を需要に合わせます。"
service: "Auto Scaling"
category: compute
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["Compute","Auto Scaling","SAA-C03"]
notionId: 3a6964dc-ce4a-811a-bc62-e247c6def362
notionUrl: https://app.notion.com/p/3a6964dcce4a811abc62e247c6def362
notionUpdated: "2026-07-30T04:28:45.501Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon EC2 Auto Scaling |
| 正式名称 | Amazon EC2 Auto Scaling |
| 中国語の説明 | EC2 自动扩缩 |
| 日本語の説明 | EC2 オートスケーリング |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Elastic Load Balancing / Vertical Scaling |

## 一言で理解

> Auto Scaling Group は EC2 の台数と正常性を維持します。ELB はトラフィック、ASG は容量を管理します。

## 主な役割

- Minimum、Desired、Maximum が容量の下限、現在の目標、上限を定義する。
- Launch Template が Instance 構成を定義し、ASG は複数 AZ で起動して異常 Instance を置換できる。
- CloudWatch の Metric、Alarm、Schedule が Scaling Policy を起動し、Desired Capacity を変更する。

## 試験ポイント

- Target Tracking は指標を目標値付近に保ち、Step Scaling は Alarm の段階に応じて容量を変える。
- Scheduled Scaling は予測可能な Peak、Manual Scaling は一時的な直接調整に向く。
- 代表的な高可用構成は ALB + Multi-AZ ASG + EC2。
- Scale In 前に Connection Draining、Warm-up、Local State、下流容量を確認する。

## よくある誤解

- Auto Scaling は Request を分配せず、ELB は Instance 数を決めない。
- Desired Capacity は Policy により変化し、固定値ではない。
- Maximum を大きくしても DB、Quota、Budget が同じ規模に耐えられるとは限らない。

## 重点記憶

> **Min ≤ Desired ≤ Max。Launch Template が Instance を定義し、Scaling Policy が容量を調整する。**

## 関連サービス

Elastic Load Balancing、CloudWatch、Launch Template、EC2、SQS。
