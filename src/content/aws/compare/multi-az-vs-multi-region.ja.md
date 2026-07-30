---
title: "Multi-AZ vs Multi-Region"
fullName: "Multi-AZ vs Multi-Region"
description: "Multi-AZ は 1 Region 内の可用性、Multi-Region は Region Disaster、Global Latency、Data Residency に対応する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Multi-AZ vs Multi-Region"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","Multi-AZ vs Multi-Region","AWS"]
notionId: 3a6964dc-ce4a-8107-b0f1-e6c4850f9cb9
notionUrl: https://app.notion.com/p/3a6964dcce4a8107b0f1e6c4850f9cb9
notionUpdated: "2026-07-23T08:23:51.914Z"
---

## 一言で理解

> Multi-AZ は 1 Region 内の可用性、Multi-Region は Region Disaster、Global Latency、Data Residency に対応する。

## 要点

- Multi-AZ は低遅延 Network で接続された隔離 Availability Zone を使う。
- Multi-Region は Replication、Routing、Failover、Consistency、Operation を明示的に設計する。
- Multi-AZ は一般に簡潔で低コストだが、Region 全体の停止は保護できない。

## 試験での判断

> Failure Scope、RTO、RPO、Latency、Compliance、Budget で選ぶ。
