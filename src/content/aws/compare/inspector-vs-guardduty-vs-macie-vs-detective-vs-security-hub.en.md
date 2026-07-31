---
title: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
fullName: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
description: "Vulnerability scanning, threat detection, sensitive-data discovery, investigation, and centralized aggregation cover different stages of the security workflow."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
frequency: "High-frequency comparison"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub", "AWS"]
notionId: 3ae964dc-ce4a-81e7-b1fb-e71132a8c36d
notionUrl: https://app.notion.com/p/3ae964dcce4a81e7b1fbe71132a8c36d
notionUpdated: "2026-07-31T04:09:10.477Z"
---

## One-line conclusion

- **Amazon Inspector** scans EC2, ECR images, and Lambda for software vulnerabilities.
- **Amazon GuardDuty** continuously detects suspicious account, network, and workload behavior.
- **Amazon Macie** discovers sensitive data such as PII in S3.
- **Amazon Detective** investigates root causes, relationships, and attack paths.
- **AWS Security Hub** aggregates and standardizes findings from multiple security services.

## Core differences

| Service | Primary scope | Typical keywords | Main output |
| --- | --- | --- | --- |
| Inspector | EC2, ECR, Lambda | CVE, packages, vulnerability scan | Vulnerability findings and remediation |
| GuardDuty | Account, network, workload behavior | Malicious IP, anomalous API, threat intelligence | Threat findings |
| Macie | Amazon S3 data | PII, sensitive data, discovery | Sensitive-data findings |
| Detective | Security-event context | Root cause, timeline, relationship graph | Investigation context and impact |
| Security Hub | Findings from multiple sources | Aggregation, normalization, compliance | Unified security view and insights |

## Combined workflow

Inspector, GuardDuty, and Macie detect issues → Security Hub aggregates and prioritizes → Detective investigates → EventBridge triggers automated response.

## Common traps

- Inspector is not a behavioral threat-detection service.
- GuardDuty does not patch vulnerabilities.
- Macie focuses on sensitive data in S3.
- Detective investigates; it is not the central findings hub.
