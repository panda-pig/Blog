---
title: "Amazon EC2 Auto Scaling"
fullName: "Amazon EC2 Auto Scaling"
description: "根据负载自动增加、减少或替换 EC2 实例，让容量在边界内跟随需求变化。"
service: "Auto Scaling"
category: compute
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Compute","Auto Scaling","SAA-C03"]
notionId: 3a6964dc-ce4a-811a-bc62-e247c6def362
notionUrl: https://app.notion.com/p/3a6964dcce4a811abc62e247c6def362
notionUpdated: "2026-07-30T01:09:11.112Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon EC2 Auto Scaling |
| 全称 | Amazon EC2 Auto Scaling |
| 中文释义 | EC2 自动扩缩 |
| 日文释义 | EC2 オートスケーリング |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Elastic Load Balancing / Vertical Scaling |

## 一句话理解

根据需求自动增加、减少或替换 EC2 实例，让容量跟随负载变化。

## Auto Scaling Group（ASG）

ASG 管理一组 EC2 实例，并维护三个关键容量值：
| 容量 | 含义 |
| --- | --- |
| Minimum Capacity | 无论负载多低都至少保留的实例数 |
| Desired Capacity | 当前希望维持的实例数 |
| Maximum Capacity | 扩展时允许达到的实例上限 |

## 工作原理

Launch Template 定义实例配置 → ASG 跨 AZ 启动实例 → CloudWatch 指标触发 Scaling Policy → ASG 调整 Desired Capacity → 失败实例被替换。

## 横向与纵向扩展

- Scale Out / In：增加或减少实例数量，更符合云的弹性设计。
- Scale Up / Down：提高或降低单台实例规格，可能需要停机且存在上限。

## 与 ELB 的关系

- ELB：把请求分配到健康目标。
- Auto Scaling：调整和维护实例数量。
- 常见组合：用户 → ALB → Multi-AZ ASG → EC2。

## Cloud Practitioner 考点

- 根据负载自动扩缩。
- 减少人工容量规划。
- 可替换不健康实例。

## 常见扩缩策略

- **Target Tracking**：把 CPU、每个目标请求数等指标维持在目标值附近，自动调整容量。
- **Step Scaling**：CloudWatch 告警跨越不同阈值时，按设定的不同幅度扩缩。
- **Scheduled Scaling**：在可预测的高峰到来前，按时间计划调整容量。
- **Manual Scaling**：人工修改 Desired Capacity，适合临时调整。

## SAA-C03 考点

- Minimum / Desired / Maximum 的含义与边界。
- 根据负载是否可预测选择 Target Tracking、Step 或 Scheduled Scaling。
- 与 ELB Health Check、CloudWatch Alarm 和 Launch Template 配合。
- 多 AZ 部署提高可用性。
- Scale In 时考虑连接排空、任务状态、预热时间和下游容量。

## 常见误区

- Auto Scaling 不负责分发流量。
- Desired Capacity 不是固定不变，可被策略动态调整。
- 最大容量不代表日常运行数量。
- 自动扩展不等于自动优化应用内部性能。

## 重点记忆

ELB 管流量，ASG 管容量；ASG 的核心是 Min ≤ Desired ≤ Max。

## 官方参考

- [EC2 Auto Scaling 容量边界](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html)
- [Target Tracking Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html)
