---
title: "CLF Final Review"
fullName: "CLF Final Review"
description: "Use global infrastructure, shared responsibility, security, core services, billing, and support plans as the final-review path."
service: "Cloud Practitioner"
category: cloud-practitioner
kind: topic
lang: en
topicKey: "CLF 考前速查"
frequency: "Stage summary"
date: 2026-07-31
updated: 2026-08-04
tags: ["cloud-practitioner","CLF 考前速查","AWS"]
notionId: 3a6964dc-ce4a-81fb-8f92-e11a796893f4
notionUrl: https://app.notion.com/p/3a6964dcce4a81fb8f92e11a796893f4
notionUpdated: "2026-08-04T02:14:24.320Z"
---

## In one sentence

Use global infrastructure, shared responsibility, security, core services, billing, and support plans as the final-review path.

## Key points

- Order: global infrastructure and shared responsibility → IAM/security → EC2/S3/RDS/VPC/Lambda → billing tools → support plans.
- SQL, joins, and transactions → RDS/Aurora; key-value, serverless, and low latency → DynamoDB.
- Multi-Region active-active → DynamoDB Global Tables; microsecond DynamoDB cache → DAX.
- Complex JSON or MongoDB compatibility → DocumentDB; relationship graphs → Neptune; migration → DMS; heterogeneous conversion → SCT.

## One-minute billing and support review

- Current bill and payments → Billing Dashboard; actual or forecast thresholds → AWS Budgets.
- Historical cost, trends, and forecasts → Cost Explorer; pre-deployment estimate → Pricing Calculator.
- Multi-account payment and eligible aggregated discounts → Organizations consolidated billing.
- Project, department, or environment ownership → activated cost-allocation tags.
- Right-sizing advice → Compute Optimizer; broad best-practice checks → Trusted Advisor.
- Third-party software, AMIs, and SaaS → Marketplace; AWS partners → APN.
- Basic has no technical-case SLA; Enterprise emphasizes a TAM; response targets do not guarantee resolution.

## Exam focus

- CLF emphasizes service purpose, responsibility boundaries, and cloud business value rather than every implementation detail.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**Finish with infrastructure, responsibility, security, core services, cost, and support.**
