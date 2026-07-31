---
title: "WAF vs Shield vs Security Group"
fullName: "WAF vs Shield vs Security Group"
description: "WAF はレイヤー 7 リクエストを検査し、Shield は DoS/DDoS を緩和し、Security Group はリソース単位のネットワーク接続を制御する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "WAF vs Shield vs Security Group"
frequency: "頻出比較"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "WAF vs Shield vs Security Group", "AWS"]
notionId: 3ae964dc-ce4a-81f3-a948-d9f926c7fcf3
notionUrl: https://app.notion.com/p/3ae964dcce4a81f3a948d9f926c7fcf3
notionUpdated: "2026-07-31T04:09:10.516Z"
---

## ひとことで

- **AWS WAF**：レイヤー 7 の HTTP(S) リクエストを検査する。
- **AWS Shield**：DoS / DDoS を緩和する。
- **Security Group**：リソースまたは ENI へのネットワーク接続を制御する。

## 主な違い

| 観点 | AWS WAF | AWS Shield | Security Group |
| --- | --- | --- | --- |
| 保護対象 | Web アプリケーション | 公開アプリケーションと AWS エッジ入口 | EC2、ENI、ALB などのリソース |
| 注目する内容 | Header、URI、IP、SQL インジェクション、XSS | トラフィック洪水と DDoS | プロトコル、ポート、送信元、宛先 |
| レイヤー | アプリケーション層 | ネットワーク・エッジ DDoS 防御 | リソース単位のステートフル制御 |
| 主な連携 | CloudFront、ALB、API Gateway | CloudFront、Route 53、ELB | VPC 内リソース |

## 選択の近道

Web 攻撃ルールは WAF、DoS / DDoS は Shield、プロトコル・ポート・送信元の制御は Security Group。
