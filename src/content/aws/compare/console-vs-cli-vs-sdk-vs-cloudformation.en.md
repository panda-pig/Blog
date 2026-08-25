---
title: "Console vs Local CLI vs CloudShell vs SDK vs CloudFormation"
fullName: "Console, Local CLI, CloudShell, SDK and CloudFormation"
description: "Compares graphical operations, local commands, browser shell, application code, and declarative infrastructure."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "Console vs CLI vs SDK vs CloudFormation"
frequency: "High-frequency comparison"
date: 2026-07-30
updated: 2026-08-25
tags: ["compare", "Console", "CLI", "SDK", "CloudFormation"]
notionId: 3a6964dc-ce4a-8171-a18c-ca9aeea29add
notionUrl: https://app.notion.com/p/3a6964dcce4a8171a18cca9aeea29add
notionUpdated: "2026-08-25T06:04:30.975Z"
---

## In one sentence

Console uses clicks, local CLI uses commands on your machine, CloudShell provides commands in the browser, SDK uses application code, and CloudFormation declares infrastructure.

| Method | Best for | Credentials |
| --- | --- | --- |
| Console | Exploration and one-off work | Password + MFA or SSO |
| Local CLI / CloudShell | Routine and batch tasks | Identity Center, roles, profiles |
| SDK | Application integration | Credential provider chain |
| CloudFormation | Repeatable environments | Caller or service role |

Local CLI requires installation and local credential discovery. CloudShell is preconfigured and uses temporary rotating credentials for the current console identity; it is not a privileged bypass. aws configure saves profile settings but grants no permissions.

Temporary credentials include access key ID, secret access key, and session token. CLI and SDK are interaction methods, not credential types. Prefer Identity Center for people, roles for workloads, and never put secrets in code.

CloudFormation is declarative (“what state”), while CLI scripts are usually imperative (“which steps”).

## Credential resolution and role delivery

- Local CLI and SDK tools use a credential provider chain to discover Identity Center, AssumeRole, environment, container, or instance-role credentials.
- EC2 receives one IAM role through an instance profile; programs on the instance obtain and rotate temporary credentials through IMDS.
- iam:PassRole authorizes passing a role to an AWS service; it does not mean the caller assumes that role.
- CloudShell uses temporary credentials for the current console session. It neither bypasses IAM nor automatically grants administrator access.
- CloudShell persists HOME by Region; --region changes request context, not authorization.
