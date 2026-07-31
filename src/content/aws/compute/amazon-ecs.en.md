---
title: "Amazon ECS"
fullName: "Amazon Elastic Container Service"
description: "AWS-native container orchestration for deploying, scheduling, scaling, and maintaining container workloads."
service: "Amazon ECS"
category: compute
kind: service
lang: en
topicKey: "Amazon ECS"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","Amazon ECS","AWS"]
notionId: 3a6964dc-ce4a-8132-9a5c-c4a14b839c97
notionUrl: https://app.notion.com/p/3a6964dcce4a81329a5cc4a14b839c97
notionUpdated: "2026-07-23T07:19:31.706Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon ECS |
| Full name | Amazon Elastic Container Service |
| Chinese description | AWS 原生容器编排服务 |
| Japanese description | AWS ネイティブのコンテナオーケストレーションサービス |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | EKS / Fargate / ECR |

## In one sentence

> AWS-native container orchestration for deploying, scheduling, scaling, and maintaining container workloads.

## Key points

- Task Definition is the run template, Task is one execution, Service maintains desired tasks, and Cluster groups capacity.
- ECS can run on EC2 for more control or on Fargate to avoid managing servers.
- Images are stored in ECR; EC2 or Fargate supplies compute while ECS performs orchestration.

## Exam takeaway

> A common path is code → image → ECR → Task Definition → ECS Service → ALB and Auto Scaling.
