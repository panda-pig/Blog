---
title: "Client VPN vs Site-to-Site VPN vs PrivateLink vs Direct Connect"
fullName: "Client VPN vs Site-to-Site VPN vs PrivateLink vs Direct Connect"
description: "接続主体、Network 全体か Service Private Access か、専用線が必要かで選択する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Client VPN vs Site-to-Site VPN vs PrivateLink vs Direct Connect"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","Client VPN vs Site-to-Site VPN vs PrivateLink vs Direct Connect","AWS"]
notionId: 3aa964dc-ce4a-8142-a285-e9bc3d39fe63
notionUrl: https://app.notion.com/p/3aa964dcce4a8142a285e9bc3d39fe63
notionUpdated: "2026-07-27T05:39:17.789Z"
---

## 一言で理解

> 接続主体、Network 全体か Service Private Access か、専用線が必要かで選択する。

## 要点

- Client VPN は個々の Remote User を接続する。
- Site-to-Site VPN は Internet 上の暗号化 IPsec で Network 同士を接続する。
- PrivateLink / VPC Endpoint は Network 全体を公開せず、Service へ Private Access を提供する。

## 試験での判断

> Direct Connect は安定した専用 Private Connection だが、標準では暗号化されない。
