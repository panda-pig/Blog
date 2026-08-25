---
title: "Design Secure Architectures"
fullName: "Design Secure Architectures"
description: "Apply least privilege, private access, encryption, auditing, and isolated recovery to secure AWS architectures."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "安全架构设计"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-08-25
tags: ["saa-c03", "安全架构设计", "AWS"]
notionId: 3a6964dc-ce4a-815e-9db0-d8343bfa6db7
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9db0d8343bfa6db7
notionUpdated: "2026-08-25T07:25:29.784Z"
---

## Must know

- Identity policies versus resource policies; IAM defaults to deny and explicit deny wins.
- S3 is private by default; retain Block Public Access unless public access is explicitly required.
- Distinguish encryption at rest from TLS in transit; use KMS, ACM, and Secrets Manager for their specific roles.
- Use versioning, replication, Object Lock, and isolated backups for deletion and ransomware protection.
- CloudTrail management events and S3 data events have different audit scope.
- Security groups, NACLs, and VPC endpoints protect different network layers.

## Storage security decisions

| Requirement | First choice | Also verify |
| --- | --- | --- |
| Prevent accidental S3 exposure | Block Public Access | Bucket policy, ACL, access point |
| Share a private object temporarily | Presigned URL | Signer permissions and expiry |
| Audit GetObject / DeleteObject | CloudTrail data events | Trail, cost, log destination |
| Immutable compliance retention | S3 Object Lock | Versioning and retention mode |
| Private S3 access | Gateway VPC endpoint | Endpoint and bucket policies |
| Protect backups from deletion | Isolated backup vault / immutability | Separate permissions and restore tests |

## Identity and application protection

- Use roles and temporary credentials for EC2, Lambda, and cross-account access.
- IAM password policy applies to IAM user console passwords, not root passwords, access keys, or Identity Center passwords.
- Groups contain users only and cannot be nested; a user may join multiple job-role groups.
- Managed policies attach to users, groups, or roles; inline policies embed in one user, group, or role.
- Identity-based policies omit Principal; resource-based and trust policies normally name it.
- Removing a user from a group removes only that inherited permission source; direct and other group permissions may remain.
- For Access Denied, inspect the failed Action, current principal, direct and inherited policies, explicit denies, boundaries, SCPs, resources, and conditions.
- Temporary credentials include a session token and expire; CLI and SDK do not require long-term IAM user keys.
- Employee multi-account SSO → IAM Identity Center; customer registration and sign-in → Cognito.
- SQL injection, XSS, header, IP, and rate rules → AWS WAF; DDoS protection → AWS Shield.
- Security groups are stateful at the resource/ENI level; NACLs are stateless at the subnet level.

## Data, detection, and response

- KMS manages encryption keys; ACM manages integrated TLS certificates; Secrets Manager manages and rotates secrets.
- Macie discovers sensitive data in S3; Inspector scans EC2, ECR, and Lambda vulnerabilities.
- GuardDuty detects suspicious behavior; Security Hub aggregates findings; Detective supports root-cause investigation.
- EventBridge, Lambda, or Systems Manager Automation can implement response after findings are reviewed.

## Monitoring, audit, and governance

- API actor and action → CloudTrail; configuration history and rules → Config.
- AWS SOC/ISO/PCI reports → Artifact; audit-framework evidence collection → Audit Manager.
- External/public access paths → IAM Access Analyzer.
- Multi-account permission ceiling → Organizations SCP; standardized landing zone → Control Tower.

## Final review

**Private by default, least privilege, encryption, audit, versioning/immutability, isolated backups, and reviewed automated response.**

## Workload identity and role design

- EC2 associates an IAM role through an instance profile; SDK and CLI processes on the instance obtain and rotate temporary credentials through IMDS.
- A trust policy defines who may assume the role, while a permissions policy defines what the role session may access.
- Creating a role does not mean a service uses it. Complete the service association and give deployers a narrowly scoped iam:PassRole permission.
- Never place long-term access keys in code, AMIs, user data, container images, or aws configure.
- For cross-account access, evaluate the trust policy, caller permissions, resource policy, and Organizations guardrails together.

## Least-privilege validation loop

1. Use Credentials Report to inventory IAM user passwords, access keys, and MFA.
2. Use Access Advisor / last-accessed information to find rarely or never used permissions.
3. Use Access Analyzer to evaluate external, internal, and unused access and validate policies.
4. Use Policy Simulator to verify critical principal/action/resource requests.
5. Observe actual API calls in CloudTrail, then continue tightening and reviewing permissions.

## Identity review and credential lifecycle

Use IAM Identity Center / federation for people and roles for workloads. Credentials Report inventories credentials; Access Advisor shows use and sources; Access Analyzer checks paths and policies; Policy Simulator validates requests; CloudTrail records real activity. Replace and verify a new long-term key before deactivating and deleting the old one.
