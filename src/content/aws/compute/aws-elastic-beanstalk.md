---
title: "AWS Elastic Beanstalk"
fullName: "AWS Elastic Beanstalk"
description: "上传应用代码后，Elastic Beanstalk 自动创建和配置运行 Web 应用常用的 AWS 基础设施。"
service: "AWS Elastic Beanstalk"
category: compute
kind: service
lang: zh
topicKey: "AWS Elastic Beanstalk"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["compute","AWS Elastic Beanstalk","AWS"]
notionId: 3a6964dc-ce4a-810b-bd1c-f6e6f99c0865
notionUrl: https://app.notion.com/p/3a6964dcce4a810bbd1cf6e6f99c0865
notionUpdated: "2026-07-30T08:30:10.060Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Elastic Beanstalk |
| 全称 | AWS Elastic Beanstalk |
| 中文释义 | 应用部署与托管服务 |
| 日文释义 | AWS Elastic Beanstalk（アプリケーションのデプロイ・管理サービス） |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | CloudFormation / ECS / Lambda |

## 一句话理解

上传应用代码后，Elastic Beanstalk 自动创建和配置运行 Web 应用常用的 AWS 基础设施。

## 工作原理

应用代码 → Elastic Beanstalk Environment → 自动配置 EC2、ELB、Auto Scaling、Security Group、CloudWatch 等资源。
底层通常仍是可见的 AWS 资源，所以它不是一台新服务器，而是自动部署和管理平台。

## 适用场景

- Spring Boot、Java、.NET、Python、Node.js、Docker Web 应用。
- REST API、移动后端、传统 Web 项目。
- 希望快速部署，同时保留对底层资源的访问。

## Cloud Practitioner 考点

- PaaS 风格。
- 上传代码后自动预置、部署、扩展、负载均衡和健康监控。
- 用户主要关注应用，AWS 自动化基础设施操作。

## SAA-C03 考点

- 与 CloudFormation 的区别：Beanstalk 面向应用平台；CloudFormation 面向通用基础设施声明。
- 底层资源仍可配置和管理。
- 适合标准 Web 应用，不适合所有复杂基础设施场景。

## 常见误区

- Beanstalk 不是新的计算引擎。
- 使用 Beanstalk 不等于看不到底层 EC2、ELB 和 ASG。
- Beanstalk 与 CloudFormation 关注层次不同。

## 重点记忆

Elastic Beanstalk = 自动帮你部署 Web 应用；底层常见组合仍是 EC2 + ELB + ASG + CloudWatch。
