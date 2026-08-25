---
title: "AWS Resource Interaction: Console, CLI, SDK, and IaC"
fullName: "AWS Management Console / AWS CLI / AWS SDK / Infrastructure as Code"
description: "All four call AWS APIs, but differ in interface, credential source, and automation level."
service: "AWS Resource Interaction Methods"
category: devops
kind: service
lang: en
topicKey: "AWS 资源交互方式｜Console・CLI・SDK・IaC"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-25
tags: ["devops", "AWS CLI", "AWS SDK", "IaC"]
notionId: 3a6964dc-ce4a-818b-a203-e86b13e2eada
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba203e86b13e2eada
notionUpdated: "2026-08-25T06:01:23.511Z"
---

## In one sentence

**Console, CLI, SDK, and IaC all call AWS APIs; the difference is whether the action comes from clicks, commands, application code, or a declarative template.**

| Method | Best for | Typical credentials |
| --- | --- | --- |
| Console | Exploration and manual operations | Password + MFA or SSO session |
| CLI | Batch and routine automation | Identity Center, roles, profiles |
| SDK | Application integration | Credential provider chain |
| CloudFormation / IaC | Repeatable infrastructure | Caller permissions or service role |

The Region Selector changes the regional resource view. For a missing resource, check account, identity, Region, List / Describe permission, then filters and state. Multi-session keeps login contexts in parallel but creates no account and merges no permissions.

Local CLI uses locally discovered credentials. CloudShell receives temporary rotating credentials for the current console identity. aws configure only stores profile credentials, default Region, and output format; it grants no IAM permissions.

Access key ID identifies a credential, secret access key signs requests, and temporary credentials also require a session token. CLI and SDK do not require long-term keys: people should prefer Identity Center and workloads should use roles.

## Roles and the credential provider chain

CLI and SDK processes running on EC2 should use an IAM role through an instance profile and obtain rotating temporary credentials from IMDS. Do not run aws configure on an instance to store a long-term secret. Passing a role to a service normally requires a narrowly scoped iam:PassRole permission; this differs from the current user assuming the role.

## CloudShell boundaries

CloudShell obtains temporary credentials for the current console identity, includes the AWS CLI, and provides persistent HOME storage separated by Region. A command can override the default Region with --region, but no Region selection bypasses IAM policy. It is useful for temporary administration and troubleshooting, not as a separate identity or a higher-privilege entry point.
