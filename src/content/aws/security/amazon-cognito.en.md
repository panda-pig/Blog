---
title: "Amazon Cognito"
fullName: "Amazon Cognito"
description: "Provides sign-up, sign-in, and access control for web and mobile applications."
service: "Amazon Cognito"
category: security
kind: service
lang: en
topicKey: "Amazon Cognito"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["security", "Amazon Cognito", "AWS"]
notionId: 3a6964dc-ce4a-8127-8404-f710d2103003
notionUrl: https://app.notion.com/p/3a6964dcce4a81278404f710d2103003
notionUpdated: "2026-09-28T07:51:39.985Z"
---

## Basic information

| Field | Content |
| --- | --- |
| English | Amazon Cognito |
| Full name | Amazon Cognito |
| Chinese | 应用用户身份服务 |
| Japanese | アプリユーザー認証 |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | IAM / IAM Identity Center |

## In one sentence

Provides sign-up, sign-in, and access control for web and mobile applications.

## Stage summary

- **Core role**：Provides sign-up, sign-in, and access control for web and mobile applications.
- **Exam frequency**：4 / 5
- **Compare with**：IAM / IAM Identity Center

## Memory hook

Amazon Cognito = Provides sign-up, sign-in, and access control for web and mobile applications.

+## Update: user pools and identity pools

- A user pool is an application user directory and authentication service that issues ID, access, and refresh tokens.
- An identity pool exchanges a user-pool or external-IdP identity for temporary AWS credentials constrained by IAM roles.
- Application tokens can be validated by API Gateway or ALB, but they are not AWS access keys.
- Workforce identity normally uses IAM Identity Center; Cognito targets customer-facing application users.
