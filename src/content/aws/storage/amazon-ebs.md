---
title: Amazon EBS
fullName: "Amazon Elastic Block Store"
description: 为 EC2 提供独立于宿主机、可配置容量与性能的持久块存储卷。
service: EBS
category: storage
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-08-15
tags: [Storage, Block Storage, EC2]
notionId: 3a6964dc-ce4a-8126-968f-e04a57570ada
notionUrl: https://app.notion.com/p/3a6964dcce4a8126968fe04a57570ada
notionUpdated: "2026-08-13T04:38:31.288Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon EBS |
| 全称 | Amazon Elastic Block Store |
| 中文释义 | 弹性块存储 |
| 日文释义 | Amazon EBS（EC2 向けの永続ブロックストレージ） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Instance Store / EFS / S3 |

## 一句话理解

为 EC2 提供可预置容量与性能、独立于宿主机的持久块存储卷。

## Instance Store vs EBS

| 维度 | Instance Store | Amazon EBS |
| --- | --- | --- |
| 位置 | EC2 宿主机本地盘 | AWS 托管独立块存储 |
| 持久性 | 临时 | 持久 |
| Stop / Terminate | 数据丢失 | 取决于卷与删除设置 |
| Reboot | 通常保留 | 保留 |
| 典型场景 | Cache、Buffer、Scratch Data | OS、数据库、业务数据 |
| 快照 | 不能直接创建 EBS Snapshot | 支持 Snapshot |
Instance Store 适合可重新生成的数据；重要数据必须复制到持久存储。

## EBS 工作方式

1. 在某个 AZ 创建卷。
2. 指定容量、卷类型和性能。
3. 附加到同一 AZ 的 EC2。
4. 在操作系统中创建文件系统并挂载。
5. 可在线调整部分容量和性能配置。
6. 通过 Snapshot 备份或迁移。
EBS 会在同一 AZ 内复制数据以降低组件故障风险，但它仍是单 AZ 资源。

## 资源归属与可见性

- EBS Volume 属于指定 AWS Account、Region 与 AZ，不属于创建它的 IAM User 私人所有。
- 同一 Account、同一 Region 中，Root 或拥有 `ec2:DescribeVolumes` 的 Principal 可以查看卷。
- 成功创建卷不代表之后一定能查看、修改或删除；每个 API Action 都会重新进行权限评估。
- 不同 Account 的资源默认隔离，另一个 Account 的 Root 也不会自动看到该卷。
- Console 中看不到卷时依次检查 Account、Region、Describe 权限、筛选条件与资源状态。
- 卷按 Region 查看，但附加到 EC2 时必须处于同一 AZ。

## 生命周期

- Stop EC2：EBS 数据保留。
- Terminate EC2：是否删除取决于 Delete on Termination。
- 根卷常默认随实例终止删除，数据卷行为需查看实际配置。
- 卷可分离并重新附加到同一 AZ 中的兼容实例。
- 跨 AZ：Snapshot → 目标 AZ 创建新卷。

## IOPS vs Throughput

- IOPS：每秒读写操作次数，数据库、小块随机 I/O 更关注。
- Throughput：每秒传输数据量，大文件、日志顺序处理更关注。

## 常见卷类型

| 类型 | 介质/定位 | 典型场景 |
| --- | --- | --- |
| gp3 / gp2 | 通用 SSD | 系统盘、一般应用、中小数据库 |
| io2 / io1 | Provisioned IOPS SSD | 关键数据库、高 IOPS、低延迟 |
| st1 | Throughput Optimized HDD | 大数据、日志、大文件顺序吞吐 |
| sc1 | Cold HDD | 低频、低成本、大容量 |
st1 和 sc1 不能作为启动卷。卷类型选择必须同时看 IOPS、吞吐、容量与成本。

## Snapshot 与 DLM

- Snapshot 是增量块级时间点备份。
- 可用于恢复、跨 AZ 新卷、跨 Region 复制和 AMI。
- DLM 根据标签与计划自动创建、保留和删除 Snapshot。
- 快照不自动保证数据库/应用事务一致性。
另见《EBS 快照与生命周期管理》。

## Cloud Practitioner 考点

- 临时高速、可丢失 → Instance Store。
- 持久系统盘/数据库 → EBS。
- 数据库随机 I/O → 关注 IOPS。
- EBS 与 EC2 生命周期相对独立。

## SAA-C03 考点

- 卷类型与性能指标。
- EBS 单 AZ、Snapshot 跨 AZ 恢复。
- Delete on Termination。
- Snapshot 增量机制与应用一致性。
- DLM vs AWS Backup。
- Multi-Attach 只适用于特定卷/实例组合，仍需集群感知应用和文件系统。

## 常见误区

- “EBS 持久”不代表终止 EC2 时一定保留。
- EBS 不是多 AZ 卷。
- EBS Snapshot 不是用户 Bucket 中的普通 S3 对象。
- IOPS 高不等于顺序吞吐一定最佳。
- EBS 不是 EFS 那样天然供多台服务器共享文件目录。
- 谁创建 EBS 不等于谁私人拥有 EBS；资源归属 Account / Region / AZ，访问由 Policy 决定。
- Multi-session 中看不到卷也可能是 Region、权限或 Console Filter 不同。

## 面试高频问题

1. Instance Store 与 EBS 如何选择？
2. gp3、io2、st1 的性能目标有何不同？
3. 如何把 EBS 数据迁移到另一 AZ？
4. 如何保证数据库快照的应用一致性？

## 重点记忆

**临时本地盘用 Instance Store；持久云硬盘用 EBS；跨 AZ 通过 Snapshot 重建；资源属于 Account，访问由 Policy 决定。**
