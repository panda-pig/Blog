---
title: "S3 Security & Management"
fullName: "Amazon S3 Security and Management"
description: "A structured review of S3 default privacy, access policies, versioning, encryption, auditing, replication, and Object Lock."
service: "Amazon S3"
category: storage
kind: service
lang: en
topicKey: "S3 安全与管理"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["S3", "Security", "Versioning", "SAA-C03"]
notionId: 3ac964dc-ce4a-81ed-a53b-d11b4044717f
notionUrl: https://app.notion.com/p/3ac964dcce4a81eda53bd11b4044717f
notionUpdated: "2026-07-30"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | S3 Security & Management |
| Full name | Amazon S3 Security and Management |
| Chinese description | S3 安全与管理 |
| Japanese description | S3 セキュリティと管理 |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | IAM Policy / Bucket Policy / ACL / Block Public Access |

## Default security posture

- S3 buckets and objects are private by default.
- Block Public Access prevents accidental public exposure, but it does not block access properly authorized through IAM, a bucket policy, an access point, CloudFront, or a presigned URL.
- Modern architectures commonly use Bucket Owner Enforced, disable ACLs, and rely mainly on IAM and bucket policies.

## Access-control tools

| Tool | Purpose |
| --- | --- |
| IAM Policy | Identity policy attached to a user or role |
| Bucket Policy | Resource policy attached to a bucket |
| Access Point | Independent entry point and policy for an application or team |
| Presigned URL | Time-limited access within the signer’s permissions |
| Block Public Access | Prevent public-access configurations |
| VPC Endpoint Policy | Restrict access through a VPC endpoint |

## Core bucket-policy fields

- **Effect**: Allow or Deny.
- **Principal**: who.
- **Action**: which API operation is allowed or denied.
- **Resource**: the bucket ARN or object ARN.
- **Condition**: HTTPS, source account, organization, VPC endpoint, IP address, and similar constraints.

## Versioning and recovery

- Versioning retains multiple versions of the same key.
- A normal delete usually creates a delete marker while older versions remain.
- Remove the delete marker, or copy an old version so it becomes the new current version.
- Once enabled, Versioning can only be suspended; the bucket cannot return to the never-enabled state.
- Historical versions incur cost and should be managed with Lifecycle.

## Encryption and auditing

- In transit: HTTPS / TLS.
- At rest: SSE-S3, SSE-KMS, and related options.
- CloudTrail Management Events record bucket-configuration operations.
- CloudTrail Data Events record object APIs such as GetObject, PutObject, and DeleteObject.
- S3 Server Access Logging records access requests.
- S3 Inventory produces a periodic object inventory.

## Object management

- **Key**: the unique object name; console folders are prefixes.
- **Metadata**: object attributes; changing user metadata usually requires copying or rewriting the object.
- **Tags**: managed separately and used by Lifecycle, permissions, and cost classification.
- **Checksums**: verify data integrity.
- **Object Lock**: WORM retention and compliance protection.
- **Object URL**: only an address; it does not grant access.

## CORS

CORS tells a browser which cross-origin requests it may attempt. It is not an authorization mechanism; IAM, a bucket policy, or a presigned URL must still permit the request.

## Replication

- Same-Region Replication (SRR).
- Cross-Region Replication (CRR).
- Useful for compliance, isolation, regional access, and disaster recovery.
- Versioning is normally required; scope, historical objects, and delete behavior must be designed explicitly.

## Common scenarios

- Protect against accidental deletion or overwrite → Versioning.
- Temporarily share a private object → Presigned URL.
- Separate entry points for multiple teams → Access Points.
- Prevent public exposure → Block Public Access.
- Audit object APIs → CloudTrail Data Events.
- Prevent compliant data from being modified or deleted → Object Lock.
- Browser cross-origin access → CORS, plus normal authorization.
- Global delivery of private content → CloudFront with a private S3 origin.

## Key takeaway

> **S3 is private by default. Policies control access, Versioning protects history, Lifecycle controls cost, Replication manages copies, and Object Lock enforces immutability.**
