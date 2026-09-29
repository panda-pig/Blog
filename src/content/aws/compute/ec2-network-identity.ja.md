---
title: "EC2 のネットワークアイデンティティ：IP、Elastic IP、ENI"
fullName: "EC2 Network Identity: IP Addresses and Elastic Network Interfaces"
description: "EC2、ENI、プライベート／パブリック IP、Elastic IP のライフサイクルとフェイルオーバー境界を整理します。"
service: "Amazon EC2"
category: compute
kind: topic
lang: ja
topicKey: "EC2 Network Identity"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "ENI", "Elastic IP", "networking"]
notionId: 3e8964dc-ce4a-818f-b6e3-c873d6aee0e0
notionUrl: https://app.notion.com/p/3e8964dcce4a818fb6e3c873d6aee0e0
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## ひとことで

**EC2 はコンピューティングを提供し、ENI はネットワーク識別情報を保持します。** Private IP、MAC アドレス、Security Group は主に ENI に紐づき、Elastic IP は再関連付けできる固定 Public IPv4 です。

## アドレスとインターフェイス

| 対象 | 役割 | ライフサイクルの要点 |
| --- | --- | --- |
| Private IPv4 | VPC 内通信 | Primary Private IP は Stop / Start 後も通常維持 |
| Auto-assigned Public IPv4 | 一時的な公開 ID | Stop / Hibernate で解放され、再起動時に通常変更 |
| Elastic IP | 固定 Public IPv4 | 再関連付け可能。未使用時などに料金が発生し得る |
| ENI | 仮想 NIC とネットワーク ID | 1 つの Subnet、つまり 1 つの AZ に所属 |
| Secondary Private IP | 同じ ENI 上の追加アドレス | 2 枚目の NIC ではない |
| Secondary ENI | 独立した追加 NIC | 同じ AZ の互換 EC2 間で移動可能 |

Public IP があるだけでは到達できません。IGW への Route、Security Group / NACL、Host Firewall、Application Listener も必要です。

## 代表的な設計

- 単一リソースの固定公開 IP：Elastic IP。大規模 Web は DNS と Load Balancer を優先。
- 固定送信元 IP：Private EC2 → NAT Gateway + Elastic IP。
- 同一 AZ の Network Identity Failover：Secondary ENI を移動し、Private IP、MAC、SG を維持。
- NAT / Router / Firewall Appliance：通常 Source / Destination Check を無効化。
- 複数 ENI は責務や経路の分離に使い、帯域を自動的に倍増させるものではありません。

## 要点

**IP は「アドレス」、ENI は「ネットワーク ID の所有者」です。ENI は AZ をまたげないため、完全な Multi-AZ HA ではありません。**
