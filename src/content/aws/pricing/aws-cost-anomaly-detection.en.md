---
title: "AWS Cost Anomaly Detection"
fullName: "AWS Cost Anomaly Detection"
description: "Uses machine learning to learn normal spending patterns and identify significant deviations with cost impact and root dimensions."
service: "AWS Cost Anomaly Detection"
category: pricing
kind: service
lang: en
topicKey: "AWS Cost Anomaly Detection"
frequency: "复习优先级 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["pricing","AWS Cost Anomaly Detection","AWS"]
notionId: 3f3964dc-ce4a-812d-8472-fefaa4e53df8
notionUrl: https://app.notion.com/p/3f3964dcce4a812d8472fefaa4e53df8
notionUpdated: "2026-10-08T02:55:12.539Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | AWS Cost Anomaly Detection |
| Chinese | AWS 成本异常检测 |
| Japanese | AWS コスト異常検知 |
| Review priority | 复习优先级 ⭐⭐⭐ |
| Often confused with | AWS Budgets / Cost Explorer / CloudWatch |

## In one sentence

Uses machine learning to learn normal spending patterns and identify significant deviations with cost impact and root dimensions.

## Core summary

A cost monitor defines scope, the model creates anomalies, an alert subscription applies notification thresholds, and people investigate and respond.

## Study points

- Scope monitors by service, member account, tag, or cost category.
- Individual alerts use SNS; daily and weekly summaries use email.
- Processed cost data can introduce about a 24-hour delay.
- Use Cost Explorer, CloudWatch, CloudTrail, and change records to find the actual cause.

## Common pitfalls

- It is not a hard billing cap and does not automatically stop all resources.
- Budgets watch thresholds, Explorer analyzes spend, and Anomaly Detection finds deviations.

## Key memory

**Budgets for targets, Explorer for analysis, Anomaly Detection for unexpected deviation.**
