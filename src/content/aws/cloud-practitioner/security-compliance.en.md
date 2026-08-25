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
updated: 2026-08-25
tags: ["Security", "Compliance", "CLF-C02", "AWS"]
notionId: 3a6964dc-ce4a-8119-86e2-cb66c29308cd
notionUrl: https://app.notion.com/p/3a6964dcce4a811986e2cb66c29308cd
notionUpdated: "2026-08-25T07:25:33.650Z"
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

## IAM credential and permission review

| Exam keyword | Think first |
| --- | --- |
| Password, access-key, and MFA state for every IAM user | IAM Credentials Report |
| Allowed services/actions and last-accessed time for an identity or policy | IAM Access Advisor / Last Accessed |
| External, internal, or unused access; policy validation and generation | IAM Access Analyzer |
| Simulate whether a principal's action on a resource is allowed | IAM Policy Simulator |
| API calls that actually occurred | AWS CloudTrail |

Access Advisor is not limited to users; it also applies to roles, groups, policies, and other supported entities. Last-accessed data is not complete real-time audit evidence, so consider business cycles and validate with CloudTrail before removing permissions.

## Modern identity and credential review

Prefer IAM Identity Center / federation and temporary credentials for people, and roles for workloads. Credentials Report inventories the root-account row and IAM-user passwords, MFA, access keys, and signing certificates. Access Advisor shows service/action last-accessed data and grant sources. Keep and rotate long-term keys only for compatibility.
