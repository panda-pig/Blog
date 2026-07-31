---
title: "WAF vs Shield vs Security Group"
fullName: "WAF vs Shield vs Security Group"
description: "WAF filters Layer 7 requests, Shield mitigates DoS and DDoS, and security groups control resource-level network connections."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "WAF vs Shield vs Security Group"
frequency: "High-frequency comparison"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "WAF vs Shield vs Security Group", "AWS"]
notionId: 3ae964dc-ce4a-81f3-a948-d9f926c7fcf3
notionUrl: https://app.notion.com/p/3ae964dcce4a81f3a948d9f926c7fcf3
notionUpdated: "2026-07-31T04:09:10.516Z"
---

## One-line conclusion

- **AWS WAF** filters Layer 7 HTTP(S) requests.
- **AWS Shield** mitigates DoS and DDoS.
- **Security groups** control network connections to resources or ENIs.

## Core differences

| Dimension | AWS WAF | AWS Shield | Security group |
| --- | --- | --- | --- |
| Protected target | Web applications | Public applications and AWS edge entry points | EC2, ENIs, ALBs, and other resources |
| Focus | Headers, URI, IP, SQL injection, XSS | Traffic floods and DDoS | Protocol, port, source, and destination |
| Layer | Application layer | Network and edge DDoS protection | Stateful resource-level network control |
| Typical integrations | CloudFront, ALB, API Gateway | CloudFront, Route 53, ELB | Resources inside a VPC |

## Scenario shortcut

Choose WAF for web attack rules, Shield for DoS or DDoS, and security groups for protocol, port, and source control.
