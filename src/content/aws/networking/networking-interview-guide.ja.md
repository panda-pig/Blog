---
title: "AWS Networking 面接速習"
fullName: "AWS Networking Interview Guide"
description: "DNS、Route、Subnet Control、Load Balancing、Host Service の Layer で AWS Network を調査します。"
service: "AWS Networking"
category: networking
kind: topic
lang: ja
topicKey: "AWS Networking Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["networking", "interview", "VPC", "Route 53"]
notionId: 3a6964dc-ce4a-81c4-b497-e67b87637a6a
notionUrl: https://app.notion.com/p/3a6964dcce4a81c4b497e67b87637a6a
notionUpdated: "2026-09-27T07:54:44.333Z"
---

## Layer 別に回答

Source / Destination → DNS → Route / IGW / NAT → Subnet / NACL → Security Group → Host Firewall → Application Listener → Log / VPC Flow Logs。

## 頻出質問

| 質問 | 回答の要点 |
| --- | --- |
| SG / NACL | ENI、Stateful、Allow-only / Subnet、Stateless、Allow-Deny、Rule Number |
| ALB / NLB / GWLB | HTTP Content / L4・固定 IP / Security Appliance |
| ALB だけ EC2 へ許可 | App SG の Source に ALB SG を参照し、ALB IP を固定しない |
| Timeout / Refused / Permission Denied | Network Path / Service Listener / SSH Identity |
| Route 53 Policy | Weighted、Latency、Failover、Geo、IP-based は DNS Answer 選択 |
| Hybrid DNS | On-prem → AWS は Inbound、AWS → On-prem は Outbound + Resolver Rule |
| CloudFront / Global Accelerator | HTTP Cache・Edge / TCP-UDP Anycast IP・Path 最適化 |

## 境界

- Public IP があっても Internet 到達性は保証されません。
- Route 53 Failover は DNS Answer を変えるだけで、既存 Connection の移行や完全な DR ではありません。
- Alias は Zone Apex で対応 AWS Target を指せますが、CNAME は使えません。
- ELB が Active でも Target が Healthy とは限りません。
- ASG は Capacity と置換、ELB は Healthy Target への分散を担当します。

## 要点

**Network は Layer ごとに調査し、Timeout を Security Group だけで解決しようとしません。**
