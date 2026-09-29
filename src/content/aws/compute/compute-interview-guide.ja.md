---
title: "AWS Compute 面接速習"
fullName: "AWS Compute Interview Guide"
description: "Runtime、Scaling、State、障害復旧の観点で EC2、Lambda、ECS、EKS、Fargate を説明します。"
service: "AWS Compute"
category: compute
kind: topic
lang: ja
topicKey: "AWS Compute Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["compute", "interview", "EC2", "Lambda"]
notionId: 3a6964dc-ce4a-813c-8d13-e550b3642dec
notionUrl: https://app.notion.com/p/3a6964dcce4a813c8d13e550b3642dec
notionUpdated: "2026-09-28T04:09:28.875Z"
---

## 回答フレーム

**Runtime と Control Plane → Scaling → State の場所 → Health と置換 → Cost と制限** の順に説明し、要件へ Service を対応させます。

## 頻出質問

| 質問 | 回答の要点 |
| --- | --- |
| EC2 / Lambda / Fargate | OS 制御と長時間 Process / 短時間 Event Function / Node 運用不要の Container |
| ECS / EKS | AWS Native Orchestration / Kubernetes API と Ecosystem。両方 EC2 / Fargate を利用可能 |
| Task Role / Execution Role | Application の AWS API 権限 / ECS Agent の Image Pull、Log、Startup Secret |
| ASG の自己修復 | Launch Template が構成、ASG が Capacity と Health を維持して置換 |
| Reserved / Provisioned Concurrency | 同時実行を予約・制限 / Environment を事前初期化して Cold Start を低減 |
| EC2 Login / API 権限 | SSH / SSM は OS Access、Instance Profile Role は AWS API Authorization |

## 選択

完全な OS や長時間 Process → EC2、15 分以内の Event Function → Lambda、Node 管理不要の Container → ECS/EKS + Fargate、Kubernetes 要件 → EKS。

## 要点

**誰が何を管理し、State がどこにあり、障害時に誰が置換するかを先に説明します。**
