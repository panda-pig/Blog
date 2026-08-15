---
title: "Security and Compliance"
fullName: "Security and Compliance"
description: "A Cloud Practitioner summary of shared responsibility, IAM, data protection, detection, evidence, and multi-account governance."
service: "CLF-C02"
category: cloud-practitioner
kind: topic
lang: en
topicKey: "安全与合规"
frequency: "Exam frequency ★★★★★"
date: 2026-08-13
updated: 2026-08-15
tags: ["Security", "Compliance", "CLF-C02", "AWS"]
notionId: 3a6964dc-ce4a-8119-86e2-cb66c29308cd
notionUrl: https://app.notion.com/p/3a6964dcce4a811986e2cb66c29308cd
notionUpdated: "2026-08-13T08:35:26.054Z"
---

## Essential boundaries

AWS secures **of** the cloud; customers secure what they configure and place **in** the cloud. IAM denies by default, explicit Deny wins, root is reserved for root-only tasks, and workloads should use roles with temporary credentials.

Groups contain users only and cannot be nested. Identity-based policies omit Principal, while resource-based and trust policies normally name it. Password policy applies to IAM user console passwords, not root, access keys, or Identity Center passwords.

## Service selection

| Requirement | Service |
| --- | --- |
| Workforce access across accounts | IAM Identity Center |
| Application customer sign-up and sign-in | Cognito |
| Workload access | IAM Role |
| Encryption keys | KMS |
| Secrets and rotation | Secrets Manager |
| Public TLS certificates | ACM |
| Web request filtering / DDoS | WAF / Shield |
| Threat detection / vulnerabilities / sensitive S3 data | GuardDuty / Inspector / Macie |
| Investigation / finding aggregation | Detective / Security Hub |

CloudWatch covers metrics, logs, and alarms; CloudTrail records API activity; Config tracks configuration and compliance; Artifact provides AWS reports; Audit Manager gathers customer-environment evidence.

Organizations manages accounts, OUs, SCPs, and consolidated billing. SCPs restrict but do not grant. Control Tower adds a landing zone, Account Factory, and controls.
