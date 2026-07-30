---
title: "Container 与 Virtual Machine"
fullName: "Container 与 Virtual Machine"
description: "VM 通常带完整操作系统；Container 共享宿主机内核，更轻量、启动更快。"
service: "Container 与 Virtual Machine"
category: compute
kind: service
lang: zh
topicKey: "Container 与 Virtual Machine"
frequency: "阶段性总结"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","Container 与 Virtual Machine","AWS"]
notionId: 3a6964dc-ce4a-81b9-8d77-f7bfa14bca29
notionUrl: https://app.notion.com/p/3a6964dcce4a81b98d77f7bfa14bca29
notionUpdated: "2026-07-23T07:17:27.722Z"
---

## 一句话理解
VM 通常带完整操作系统；Container 共享宿主机内核，更轻量、启动更快。
## 核心差异

| 维度 | Virtual Machine | Container |
| --- | --- | --- |
| 操作系统 | 每台通常包含完整 OS | 共享宿主机内核 |
| 启动速度 | 较慢 | 较快 |
| 资源开销 | 较高 | 较低 |
| 隔离 | 通常更强 | 进程级隔离 |
| 可移植性 | 受镜像与虚拟化环境影响 | 镜像封装代码与依赖，便于跨环境运行 |

## 容器解决的问题
- 开发、测试、生产环境不一致
- 依赖缺失或版本冲突
- 部署速度慢
- 难以快速复制与扩展
## 关键概念
- Container Image：只读静态模板
- Container：镜像运行后的实例
- Registry：镜像仓库
- Orchestration：负责部署、调度、扩缩和故障恢复
- Runtime：应用执行所需的软件环境
## 重点记忆
镜像 ≠ 容器；ECR 存镜像，ECS / EKS 编排，EC2 / Fargate 运行。
