---
title: "Amazon Pinpoint (historical)"
fullName: "Amazon Pinpoint"
description: "In course material, Pinpoint organizes multi-channel engagement and analytics through segments, campaigns, and journeys."
service: "Amazon Pinpoint"
category: architecture
kind: service
lang: en
topicKey: "Amazon Pinpoint"
frequency: "课程历史概念 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["architecture","Amazon Pinpoint","AWS"]
notionId: 3f3964dc-ce4a-81f7-91b0-edd84cc2d484
notionUrl: https://app.notion.com/p/3f3964dcce4a81f791b0edd84cc2d484
notionUpdated: "2026-10-08T02:55:11.306Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | Amazon Pinpoint |
| Chinese | 客户分群与多渠道营销触达（历史） |
| Japanese | 顧客セグメント・マルチチャネル施策（旧サービス） |
| Review priority | 课程历史概念 ⭐⭐ |
| Often confused with | Amazon SES / Amazon SNS / AWS End User Messaging |

## In one sentence

In course material, Pinpoint organizes multi-channel engagement and analytics through segments, campaigns, and journeys.

## Core summary

Pinpoint stopped accepting new customers and is scheduled to end support on 2026-10-30. New systems should follow current migration guidance and available services.

## Study points

- SES sends application email.
- SNS provides topic-based pub/sub and fan-out.
- AWS End User Messaging continues to provide SMS, voice, push, and related messaging APIs.
- Audience segmentation, journeys, and campaigns require migration to current capabilities such as Amazon Connect.

## Common pitfalls

- The end of Pinpoint support does not end every SMS or push API.
- An endpoint here is a customer or device destination, not a VPC endpoint.

## Key memory

**SES sends email, SNS fans out events, and Pinpoint historically managed audiences and campaigns.**
