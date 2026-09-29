---
title: "EC2 Purchasing Options: Discounts, Capacity, and Isolation"
fullName: "EC2 Purchasing Options Capacity and Isolation"
description: "Separate instance performance, pricing commitments, interruption risk, capacity guarantees, and hardware isolation."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "EC2 Purchasing Options Capacity and Isolation"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "EC2", "pricing", "capacity"]
notionId: 3e8964dc-ce4a-818e-a142-d10683591ae3
notionUrl: https://app.notion.com/p/3e8964dcce4a818ea142d10683591ae3
notionUpdated: "2026-09-27T02:35:48.957Z"
---

## Separate five questions

Instance type answers “what machine.” A purchasing option answers “how to pay and whether it can be interrupted.” Capacity Reservation answers “will matching capacity exist in this AZ.” Tenancy answers “is the hardware isolated.”

| Option | Main trade-off | Interruptible | Capacity guarantee | Best fit |
| --- | --- | --- | --- | --- |
| On-Demand | No long commitment | No | None | Short, unpredictable, non-interruptible |
| Standard / Convertible RI | 1- or 3-year commitment for discount | No | Regional: no; Zonal: yes | Stable EC2 usage |
| Savings Plans | Hourly spend commitment for flexible discount | No | None | Long-term compute usage |
| Spot | Low price for reclamation risk | Yes | None | Retryable, stateless, batch |
| Dedicated Instance | Physical isolation from other customers | No | No host-level control | Compliance isolation |
| Dedicated Host | An entire host with socket/core visibility | No | Host capacity | BYOL and host control |
| Capacity Reservation | Reserve matching capacity in an AZ | No | Yes | Must be able to launch |

## Exam boundaries

- Savings Plans and Regional RIs mainly address price, not AZ capacity.
- A capacity reservation adds no long-term discount by itself, and unused capacity is normally billed.
- A matching Zonal RI combines billing benefit with an AZ capacity benefit.
- Spot interruption notices are best effort; continuously checkpoint external state.
- A Spot capacity pool is defined by attributes such as instance type, AZ, and platform; diversification reduces single-pool risk.
- New Spot workloads usually prefer price-capacity-optimized over lowest-price-only allocation.

## Decision order

Ask whether interruption is acceptable, then evaluate duration and stability, and finally decide whether hardware isolation or an AZ capacity guarantee is required.

## Remember

**Discount, capacity, and isolation are independent axes. Savings Plans, RIs, and Capacity Reservations are not the same mechanism.**
