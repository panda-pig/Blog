---
title: "VPC Peering vs Transit Gateway vs PrivateLink"
fullName: "VPC Peering vs Transit Gateway vs PrivateLink"
description: "Use peering for a few direct VPC links, Transit Gateway for a network hub, and PrivateLink to expose one service."
service: "VPC Peering vs Transit Gateway vs PrivateLink"
category: compare
kind: compare
lang: en
topicKey: "VPC Peering vs Transit Gateway vs PrivateLink"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","VPC Peering vs Transit Gateway vs PrivateLink","AWS"]
notionId: 3f3964dc-ce4a-8182-ad3f-dd048402b06c
notionUrl: https://app.notion.com/p/3f3964dcce4a8182ad3fdd048402b06c
notionUpdated: "2026-10-08T01:19:18.066Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | VPC Peering vs Transit Gateway vs PrivateLink |
| Chinese | VPC 私网连接方案对比 |
| Japanese | VPC Private 接続方式の比較 |
| Review priority | 高频对比 |
| Often confused with | Network connectivity / Service exposure |

## In one sentence

Use peering for a few direct VPC links, Transit Gateway for a network hub, and PrivateLink to expose one service.

## Core summary

Peering is point-to-point and non-transitive; TGW provides hub-and-spoke routing and segmentation; PrivateLink exposes a service rather than a whole network.

## Study points

- Peering requires non-overlapping CIDRs.
- A TGW association selects the ingress route table; propagation adds reachable routes.
- PrivateLink can provide service access when address spaces overlap.
- IAM, resource policies, endpoint policies, and TLS still apply after the path exists.

## Common pitfalls

- Transitive TGW capability does not create routes automatically.
- PrivateLink is not a general-purpose transit network.

## Key memory

**Peering for two networks, TGW for a hub, PrivateLink for one service.**
