---
title: "AWS Directory Service"
fullName: "AWS Directory Service"
description: "Select Managed Microsoft AD, AD Connector, or Simple AD according to where identities live and whether an on-premises AD already exists."
service: "AWS Directory Service"
category: security
kind: service
lang: en
topicKey: "AWS Directory Service"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Directory Service","AWS"]
notionId: 3f3964dc-ce4a-8120-8453-e3e74bfb9001
notionUrl: https://app.notion.com/p/3f3964dcce4a81208453e3e74bfb9001
notionUpdated: "2026-10-08T00:20:24.463Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | AWS Directory Service |
| Chinese | 托管目录与 Active Directory 集成 |
| Japanese | マネージドディレクトリと Active Directory 連携 |
| Review priority | 考试频率 ⭐⭐⭐⭐ |
| Often confused with | Managed Microsoft AD / AD Connector / Simple AD / IAM Identity Center |

## In one sentence

Select Managed Microsoft AD, AD Connector, or Simple AD according to where identities live and whether an on-premises AD already exists.

## Core summary

Managed Microsoft AD is a real Microsoft AD in AWS; AD Connector proxies authentication to on-premises AD; Simple AD is an independent AD-compatible directory.

## Study points

- Use Managed Microsoft AD for a cloud-hosted Microsoft AD and trust relationships.
- Use AD Connector to reuse on-premises credentials without storing users in AWS.
- Use Simple AD for a small standalone directory without on-premises integration.
- IAM Identity Center still provides workforce SSO across accounts.

## Common pitfalls

- Directory Service, IAM Identity Center, and Cognito solve different identity problems.
- Simple AD cannot establish a trust with on-premises AD.

## Key memory

**Cloud AD: Managed Microsoft AD; proxy: AD Connector; standalone: Simple AD.**
