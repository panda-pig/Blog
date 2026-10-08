---
title: "AWS Trusted Advisor"
fullName: "AWS Trusted Advisor"
description: "Provide AWS best-practice recommendations for cost, performance, security, fault tolerance, and quotas."
service: "AWS Trusted Advisor"
category: monitoring
kind: service
lang: en
topicKey: "AWS Trusted Advisor"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-10-08
tags: ["monitoring", "AWS Trusted Advisor", "AWS"]
notionId: 3a6964dc-ce4a-8137-9131-d20e8b6589b3
notionUrl: https://app.notion.com/p/3a6964dcce4a81379131d20e8b6589b3
notionUpdated: "2026-10-08T05:04:42.729Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| English | AWS Trusted Advisor |
| Full name | AWS Trusted Advisor |
| Chinese | AWS 最佳实践检查与优化建议 |
| Japanese | AWS Trusted Advisor（ベストプラクティスに基づく最適化推奨） |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | AWS Well-Architected Tool / AWS Config / Compute Optimizer |

## One-line summary

Provide AWS best-practice recommendations for cost, performance, security, fault tolerance, and quotas.

## Core capabilities and use cases

- Runs predefined checks and highlights results by severity.
- Common areas are cost optimization, performance, security, fault tolerance, and service limits.
- Findings can include idle resources, exposed ports, missing root MFA, insufficient backups, or quota pressure.
- Recommendations require business review and are not normally automatic remediation.
- Available checks and automation depth can vary by support plan and feature.

## Exam focus and common pitfalls

- Choose Trusted Advisor when a question spans several best-practice categories.
- Config evaluates custom or managed compliance rules; Inspector scans software vulnerabilities; Compute Optimizer recommends sizing.
- Service Quotas manages quota values and increase requests, while Trusted Advisor can warn about pressure.

## Key takeaway

**Think of Trusted Advisor as an AWS best-practice health check that recommends, rather than automatically fixes.**

## Update: check scope and automation boundaries

- Trusted Advisor provides account- and resource-level best-practice checks across cost, performance, security, fault tolerance, service limits, and operational excellence.
- Available checks and refresh capabilities depend on the support plan and API permissions; do not assume every account has every check in real time.
- Trusted Advisor supplies findings, Well-Architected reviews a workload, and Config evaluates configuration compliance. They are complementary.
