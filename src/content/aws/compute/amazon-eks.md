---
title: "Amazon EKS"
fullName: "Amazon Elastic Kubernetes Service"
description: "EKS 是 AWS 托管的 Kubernetes，用于运行现有或标准化的 K8s 工作负载。"
service: "Amazon EKS"
category: compute
kind: service
lang: zh
topicKey: "Amazon EKS"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","Amazon EKS","AWS"]
notionId: 3a6964dc-ce4a-8197-9431-e9339a24f693
notionUrl: https://app.notion.com/p/3a6964dcce4a81979431e9339a24f693
notionUpdated: "2026-07-23T07:19:34.220Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon EKS |
| 全称 | Amazon Elastic Kubernetes Service |
| 中文 | 托管 Kubernetes 服务 |
| 日文 | Amazon EKS |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | ECS / Kubernetes / Fargate |

## 一句话理解

EKS 是 AWS 托管的 Kubernetes，用于运行现有或标准化的 K8s 工作负载。

## 核心作用

AWS 管理 Kubernetes 控制平面，用户仍要设计工作负载、网络、权限、升级策略和计算节点。

## 计算方式

- EKS + EC2：控制力强，适合特殊节点、大规模平台或自定义硬件。
- EKS + Fargate：部分工作负载无需管理节点，减少基础设施运维。

## 适用场景

- 公司已有 Kubernetes 技术栈。
- 需要 Kubernetes API、生态工具或跨环境兼容。
- 复杂、大规模容器平台。

## Cloud Practitioner 考点

- Kubernetes 是开源容器编排平台。
- EKS 是 AWS 托管 Kubernetes。
- EKS 可使用 EC2 或 Fargate。

## SAA-C03 考点

- EKS 控制平面由 AWS 管理。
- 节点可使用 EC2 Managed Node Groups 或 Fargate。
- ECR、ALB、IAM、VPC CNI 和 CloudWatch 的常见集成。
- 需要在生态兼容、运维复杂度和控制权之间权衡。

## 常见误区

- EKS 不是 Kubernetes 的替代品，它就是 AWS 托管版 Kubernetes。
- 使用 EKS 不代表所有节点都由 AWS 自动管理。
- EKS 与 Fargate不是竞争关系。

## 重点记忆

题目出现 Kubernetes、既有 K8s 工作负载或生态兼容时优先想到 EKS；只需要 AWS 原生简化编排时通常先考虑 ECS。
