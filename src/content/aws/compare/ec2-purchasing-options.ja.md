---
title: "EC2 購入オプション：割引、容量保証、分離"
fullName: "EC2 Purchasing Options Capacity and Isolation"
description: "Instance 性能、価格 Commitment、中断、Capacity 保証、Hardware Isolation を分けて選びます。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "EC2 Purchasing Options Capacity and Isolation"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "EC2", "pricing", "capacity"]
notionId: 3e8964dc-ce4a-818e-a142-d10683591ae3
notionUrl: https://app.notion.com/p/3e8964dcce4a818ea142d10683591ae3
notionUpdated: "2026-09-27T02:35:48.957Z"
---

## 5 つの問いを分ける

Instance Type は「どの Machine か」、Purchasing Option は「どう買うか・中断されるか」、Capacity Reservation は「特定 AZ に容量があるか」、Tenancy は「Hardware が分離されるか」を決めます。

| 選択肢 | 主な交換条件 | 中断 | Capacity 保証 | 適する用途 |
| --- | --- | --- | --- | --- |
| On-Demand | 長期 Commitment なし | なし | なし | 短期・予測不能・中断不可 |
| Standard / Convertible RI | 1 / 3 年 Commitment で割引 | なし | Regional なし、Zonal あり | 安定した EC2 |
| Savings Plans | 時間当たり利用額 Commitment で割引 | なし | なし | 長期 Compute 利用 |
| Spot | 低価格と回収 Risk | あり | なし | Retry 可能、Stateless、Batch |
| Dedicated Instance | 他 Customer から物理分離 | なし | Host-level Control なし | Compliance |
| Dedicated Host | 物理 Host 全体、Socket / Core 可視 | なし | Host Capacity | BYOL、Host Control |
| Capacity Reservation | 特定 AZ / 構成の容量を確保 | なし | あり | 必ず起動できる必要 |

## 境界

- Savings Plans と Regional RI は主に価格向けで、特定 AZ 容量を保証しません。
- Capacity Reservation 自体には長期割引がなく、未使用容量も通常課金されます。
- Zonal RI は割引と該当 AZ の容量上の利点を持ちます。
- Spot Notice は Best Effort なので、状態は継続的に外部へ Checkpoint します。
- Spot Capacity Pool は Instance Type、AZ、Platform などで分かれ、分散で Risk を下げます。
- 新しい Spot Workload は通常 price-capacity-optimized を優先します。

## 選択順序

中断可否、利用期間と安定性、Hardware Isolation、特定 AZ の Capacity 保証を順に判断します。

## 要点

**割引・容量・分離は独立した軸です。Savings Plans、RI、Capacity Reservation を同じものとして扱いません。**
