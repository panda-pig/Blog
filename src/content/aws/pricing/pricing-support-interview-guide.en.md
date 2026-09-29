---
title: "AWS Pricing & Support Interview Guide"
fullName: "AWS Pricing and Support Interview Guide"
description: "Separate billing, budgets, cost analysis, estimates, optimization guidance, and support plans."
service: "AWS Pricing"
category: pricing
kind: topic
lang: en
topicKey: "AWS Pricing and Support Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["pricing", "interview", "billing", "support"]
notionId: 3b2964dc-ce4a-8137-8374-c4dfd5457a3c
notionUrl: https://app.notion.com/p/3b2964dcce4a81378374c4dfd5457a3c
notionUpdated: "2026-09-27T02:41:12.754Z"
---

## Tool responsibilities

| Need | Tool |
| --- | --- |
| Current bill, invoices, and payments | Billing and Cost Management |
| Threshold, forecast, usage, and RI/SP coverage alerts | AWS Budgets |
| Historical cost, grouping, filtering, and trends | Cost Explorer |
| Pre-deployment architecture estimate | Pricing Calculator |
| Detailed usage and cost records | Cost and Usage Report |
| Idle-resource and rightsizing guidance | Compute Optimizer / Trusted Advisor |
| Technical cases and response targets | AWS Support Plan |

## Frequent boundaries

- A budget does not stop resources by default; it alerts unless an action is explicitly configured.
- Cost Explorer analyzes incurred and forecast cost; Pricing Calculator estimates a planned design.
- Savings Plans and RIs mainly discount usage; they do not guarantee capacity in an AZ.
- Support response targets depend on severity and plan; support does not automatically repair the system.
- A Zero Spend Budget helps detect the first unexpected charge beyond Free Tier.
- Cost allocation tags must be activated before they become useful for attribution.

## Answer structure

Cost ownership → visibility → budget guardrails → optimization advice → purchase commitments → support and incident response.

## Remember

**Billing says how much, Cost Explorer says where, Budgets say when to alert, and Pricing Calculator says what a proposed design may cost.**
