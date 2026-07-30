---
title: "クライアント—サーバーモデル"
fullName: "客户端—服务器模型"
description: "Client が Network 経由で Request を送り、Server が処理して Response を返す基本モデル。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: ja
topicKey: "客户端—服务器模型"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["cloud-practitioner","客户端—服务器模型","AWS"]
notionId: 3a6964dc-ce4a-811a-9a71-dfdda6cbfba3
notionUrl: https://app.notion.com/p/3a6964dcce4a811a9a71dfdda6cbfba3
notionUpdated: "2026-07-23T07:17:25.788Z"
---

## 一言で理解

> Client が Network 経由で Request を送り、Server が処理して Response を返す基本モデル。

## 要点

- Client が Request を開始し、Server が受信・処理して Response を返す。
- DNS、Network、Compute、Application Layer が連携して 1 つの Request を完了する。
- Managed / Serverless で Server が見えにくくても、基本的な通信モデルは変わらない。

## 試験での判断

> Request Path を理解すると Latency、Availability、Security Boundary を判断しやすい。
