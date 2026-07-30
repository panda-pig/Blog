---
title: "Amazon ECR"
fullName: "Amazon Elastic Container Registry"
description: "A managed container image registry integrated with ECS, EKS, IAM, scanning, and deployment workflows."
service: "Amazon ECR"
category: compute
kind: service
lang: en
topicKey: "Amazon ECR"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","Amazon ECR","AWS"]
notionId: 3a6964dc-ce4a-81a9-9648-e0852b505c1e
notionUrl: https://app.notion.com/p/3a6964dcce4a81a99648e0852b505c1e
notionUpdated: "2026-07-23T07:17:27.703Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon ECR |
| Full name | Amazon Elastic Container Registry |
| Chinese name | 容器镜像仓库 |
| Japanese name | Amazon ECR（コンテナレジストリ） |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | ECS / EKS / Fargate |

## In one sentence

> A managed container image registry integrated with ECS, EKS, IAM, scanning, and deployment workflows.

## Key points

- ECR stores and versions container images; it does not run containers.
- ECS, EKS, or other runtimes pull images from repositories when starting workloads.
- IAM controls access, and image scanning and lifecycle policies support security and cleanup.

## Exam takeaway

> Remember the separation: ECR stores, ECS/EKS orchestrates, and EC2/Fargate runs.
