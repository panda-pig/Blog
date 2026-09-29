---
title: "AWS Compute Interview Guide"
fullName: "AWS Compute Interview Guide"
description: "Answer EC2, Lambda, ECS, EKS, and Fargate questions through runtime, scaling, state, and failure recovery."
service: "AWS Compute"
category: compute
kind: topic
lang: en
topicKey: "AWS Compute Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["compute", "interview", "EC2", "Lambda"]
notionId: 3a6964dc-ce4a-813c-8d13-e550b3642dec
notionUrl: https://app.notion.com/p/3a6964dcce4a813c8d13e550b3642dec
notionUpdated: "2026-09-28T04:09:28.875Z"
---

## Answer framework

Explain **runtime and control plane → scaling → state location → health and replacement → cost and limits**, then map constraints to a service.

## Frequent questions

| Question | Strong answer |
| --- | --- |
| EC2 vs Lambda vs Fargate | OS control and long-running process / short event function / containers without node operations |
| ECS vs EKS | AWS-native orchestration / Kubernetes API and ecosystem; both can use EC2 or Fargate |
| Task role vs execution role | Application AWS API access / ECS agent image pull, logs, and startup secrets |
| How an ASG self-heals | A launch template defines instances; the ASG maintains capacity and replaces unhealthy instances |
| Reserved vs provisioned concurrency | Reserve and cap concurrency / keep environments initialized to reduce cold starts |
| EC2 login vs API access | SSH or SSM enters the OS; the instance-profile role authorizes AWS API calls |

## Decision cues

- Full OS, specialized hardware, or long-running process → EC2.
- Event-driven execution of at most 15 minutes → Lambda.
- Containers without node management → ECS/EKS + Fargate.
- Kubernetes compatibility and ecosystem → EKS.
- Predictable time-based load → scheduled/predictive scaling; maintain a metric target → target tracking.

## Remember

**Explain who manages what, where state lives, and who replaces failures before discussing performance and price.**
