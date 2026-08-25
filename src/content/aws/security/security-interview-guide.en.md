---
title: "AWS Security Interview Guide"
fullName: "AWS Security Interview Guide"
description: "Answer AWS security interviews with an identity, network, data, detection, response, and shared-responsibility framework."
service: "AWS Security"
category: security
kind: topic
lang: en
topicKey: "AWS Security Interview Guide"
frequency: "High-frequency interview topic"
date: 2026-08-25
updated: 2026-08-25
tags: ["security", "interview", "IAM", "AWS"]
notionId: 3a6964dc-ce4a-819d-888a-ff9320ed7cf0
notionUrl: https://app.notion.com/p/3a6964dcce4a819d888aff9320ed7cf0
notionUpdated: "2026-08-25T07:25:32.550Z"
---

## Answer framework

Move through **assets and risk → identity and least privilege → network boundaries → data protection → logging and detection → response and recovery**, then cover shared responsibility, automation, and validation.

## High-frequency questions

| Question | Core answer |
| --- | --- |
| Authentication vs authorization | Authentication proves identity; authorization decides permissions. MFA strengthens the former, policies define the latter |
| Why roles beat long-term keys | STS credentials expire, reducing leakage, copying, and forgotten-rotation risk |
| Trust vs permissions policy | Trust decides who may assume; permissions decide what the resulting session may do |
| Multi-account employee access | Organizations + IAM Identity Center + enterprise IdP + permission sets |
| KMS / Secrets Manager / ACM | Encryption keys / secrets and rotation / TLS certificates |
| Protect an internet web app | CloudFront, WAF, Shield, ALB, multi-AZ, Auto Scaling, security groups, ACM |
| GuardDuty / Inspector / Detective / Security Hub | Threat detection / vulnerability scanning / investigation / finding aggregation |
| Sensitive data in S3 | Macie + Block Public Access + policies + KMS + CloudTrail data events |
| Manage EC2 without SSH | Systems Manager Session Manager + instance role + session logging |
| Shared responsibility | AWS secures the cloud; customers secure configuration, identities, data, and workloads |
| Harden a new account | Root MFA, no root key, protected recovery, SSO/roles, billing/budgets, CloudTrail |
| Troubleshoot AccessDenied | Confirm principal/account/region, start with the action, then check allow, explicit deny, boundaries, SCPs, and conditions |
| Choose credentials | Identity Center/federation for people; roles for workloads; long-term keys only for compatibility |
| Review least privilege | Report inventory, Advisor usage, Analyzer paths, Simulator validation, CloudTrail evidence |

## Project answer template

1. Identify the asset, trust boundary, and threat.
2. Explain preventive, detective, and responsive controls.
3. Clarify service responsibilities and selection reasons.
4. Describe audit evidence, alert validation, and recovery testing.
5. State the risk reduction and continuous-improvement step.

## Memory line

**Start with risk and boundaries, then least privilege, defense in depth, traceability, and recovery. Service names are controls inside the design, not the design itself.**
