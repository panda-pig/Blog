---
title: "Route 53 vs CloudFront vs Global Accelerator"
fullName: "Route 53 vs CloudFront vs Global Accelerator"
description: "Route 53 は DNS で接続先を選び、CloudFront は Edge Cache、Global Accelerator は Global Network Path を最適化する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Route 53 vs CloudFront vs Global Accelerator"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-09-29
tags: ["compare","Route 53 vs CloudFront vs Global Accelerator","AWS"]
notionId: 3a6964dc-ce4a-8181-9078-e6e673a1ec22
notionUrl: https://app.notion.com/p/3a6964dcce4a81819078e6e673a1ec22
notionUpdated: "2026-09-28T05:30:47.518Z"
---

## 一言で理解

> Route 53 は DNS で接続先を選び、CloudFront は Edge Cache、Global Accelerator は Global Network Path を最適化する。

## 要点

- Route 53 の Routing Policy と Health Check が Name の解決先を決める。
- CloudFront は HTTP Content、Edge Cache、TLS、WAF、Private Origin 向け CDN。
- Global Accelerator は固定 Anycast IP を提供し、Cache なしで TCP/UDP 通信を高速化する。

## 試験での判断

> DNS、Content Delivery、Network Path の異なる Layer を解決するため、組み合わせてもよい。

## 追加の判断軸

- Route 53 は DNS 時点で Answer を選び、TTL と Resolver Cache の影響を受けます。
- CloudFront は HTTP / HTTPS CDN で、Cache と OAC、WAF、Lambda@Edge / Functions を提供します。
- Global Accelerator は Static Anycast IP と TCP / UDP の AWS Network Path 最適化を提供し、Content Cache は行いません。
- Route 53 → CloudFront / Global Accelerator → Region 内 ALB / NLB と組み合わせられます。
