---
title: "WAF vs Shield vs Security Group"
fullName: "WAF vs Shield vs Security Group"
description: "WAF 过滤第 7 层请求，Shield 缓解 DoS/DDoS，Security Group 控制资源级网络连接。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "WAF vs Shield vs Security Group"
frequency: "高频对比"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "WAF vs Shield vs Security Group", "AWS"]
notionId: 3ae964dc-ce4a-81f3-a948-d9f926c7fcf3
notionUrl: https://app.notion.com/p/3ae964dcce4a81f3a948d9f926c7fcf3
notionUpdated: "2026-07-31T04:09:10.516Z"
---

## 一句话结论

- **AWS WAF**：过滤第 7 层 HTTP(S) 请求。
- **AWS Shield**：缓解 DoS / DDoS。
- **Security Group**：控制资源或 ENI 的网络连接。

## 核心差异

| 维度 | AWS WAF | AWS Shield | Security Group |
| --- | --- | --- | --- |
| 保护对象 | Web 应用 | 公网应用与 AWS 边缘入口 | EC2、ENI、ALB 等资源 |
| 关注内容 | Header、URI、IP、SQL 注入、XSS | 流量洪泛与 DDoS | 协议、端口、源和目标 |
| 层级 | 应用层 | 网络 / 边缘 DDoS 防护 | 资源级有状态网络控制 |
| 典型关联 | CloudFront、ALB、API Gateway | CloudFront、Route 53、ELB | VPC 内资源 |

## 场景判断

Web 攻击规则选 WAF；DoS / DDoS 选 Shield；端口、协议与连接源控制选 Security Group。
