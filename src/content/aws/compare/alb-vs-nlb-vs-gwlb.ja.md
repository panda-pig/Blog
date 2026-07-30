---
title: "ALB vs NLB vs GWLB"
fullName: "ALB vs NLB vs GWLB"
description: "HTTP Application Routing は ALB、高性能 Transport Traffic は NLB、Network Appliance 挿入は GWLB。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "ALB vs NLB vs GWLB"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","ALB vs NLB vs GWLB","AWS"]
notionId: 3a6964dc-ce4a-8180-ba10-e743959d6b68
notionUrl: https://app.notion.com/p/3a6964dcce4a8180ba10e743959d6b68
notionUpdated: "2026-07-23T07:04:36.256Z"
---

## 一言で理解

> HTTP Application Routing は ALB、高性能 Transport Traffic は NLB、Network Appliance 挿入は GWLB。

## 要点

- ALB は Layer 7 で Host、Path、Header、Redirect など Application-Aware Routing を行う。
- NLB は Layer 4 で TCP、UDP、TLS、高性能、固定 IP 要件に対応する。
- GWLB は GENEVE を使い、Traffic を Scalable Virtual Appliance へ透過的に送る。

## 試験での判断

> Request 数だけでなく Protocol と Traffic Processing 要件で選ぶ。
