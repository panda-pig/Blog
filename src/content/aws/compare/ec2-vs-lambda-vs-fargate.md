---
title: "EC2 vs Lambda vs Fargate"
fullName: "EC2 vs Lambda vs Fargate"
description: "1. 是否必须使用完整 OS、特殊硬件或自定义系统配置？是 → EC2。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "EC2 vs Lambda vs Fargate"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","EC2 vs Lambda vs Fargate","AWS"]
notionId: 3a6964dc-ce4a-8171-99fc-f885174daf42
notionUrl: https://app.notion.com/p/3a6964dcce4a817199fcf885174daf42
notionUpdated: "2026-07-23T07:24:07.209Z"
---

## 一句话结论
- **EC2**：需要完整操作系统控制、长期运行或特殊配置。
- **Lambda**：事件驱动、短时函数、希望极少管理基础设施。
- **Fargate**：使用容器、运行时间可较长，但不想管理 EC2 节点。
## 核心差异

| 维度 | EC2 | Lambda | Fargate |
| --- | --- | --- | --- |
| 执行单位 | 虚拟机 | 函数 | 容器 |
| 服务器管理 | 用户管理 OS 与补丁 | AWS 管理 | AWS 管理底层节点 |
| 运行时长 | 适合长期持续运行 | 单次最长 15 分钟 | 适合长期服务或任务 |
| 扩缩 | 通过 ASG 等设计 | 自动并发扩缩 | 由 ECS / EKS 编排扩缩 |
| 控制力 | 最高 | 最低 | 中等，可自定义镜像 |
| 典型计费 | 实例运行时间 | 请求数与执行时长 | 容器请求的 CPU / 内存与运行时间 |
| 典型场景 | 系统级控制、传统服务 | 事件处理、API、自动化 | 容器微服务、后台任务 |

## 选型顺序
1. 是否必须使用完整 OS、特殊硬件或自定义系统配置？是 → EC2。
2. 是否是短时事件函数且不需要完整容器环境？是 → Lambda。
3. 是否已有容器镜像或需要长期容器服务，同时不想维护节点？是 → Fargate。
4. 如果容器成本规模大、需要特殊节点或更强控制，可考虑 ECS / EKS + EC2。
## 常见陷阱
- Serverless 不等于没有服务器。
- Fargate 不是编排器，仍需 ECS 或 EKS。
- Lambda 不适合超过 15 分钟的单次执行。
- EC2 的控制力高，但补丁、高可用和扩缩不会自动完成。
## 面试回答
先说运行单位与运维责任，再说明时长、扩展、控制力和成本，最后结合具体业务约束选型。
