---
title: "弹性架构设计"
fullName: "Design Resilient Architectures"
description: "6. 验证客户侧和 AWS 侧都真正使用冗余路径。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "弹性架构设计"
frequency: "阶段性总结"
date: 2026-07-30
updated: 2026-07-31
tags: ["saa-c03","Design Resilient Architectures","AWS"]
notionId: 3a6964dc-ce4a-811a-9170-e1ab378bb690
notionUrl: https://app.notion.com/p/3a6964dcce4a811a9170e1ab378bb690
notionUpdated: "2026-07-29T08:13:07.204Z"
---

## 必须掌握

- 根据故障范围选择 Multi-AZ 或 Multi-Region。
- 识别并消除计算、网络与连接中的 Single Point of Failure。
- ELB、ASG、多 AZ 计算层和 Multi-AZ 数据层组合。
- Route 53 Health Check 与 Failover Routing。
- Global Accelerator Endpoint Health 与快速流量切换。
- NAT Gateway、Site-to-Site VPN、Direct Connect 的冗余设计。
- 数据复制、RTO、RPO 与 Failover 流程。
- CloudFormation / StackSets 重复建设灾备环境。

## 场景判断

| 场景 | 首先考虑 |
| --- | --- |
| 单个实例故障 | ASG 健康替换 + ELB |
| 单个 AZ 故障 | Multi-AZ |
| 整个 Region 故障 | Multi-Region DR |
| DNS 主备端点切换 | Route 53 Failover + Health Check |
| 全球动态端点快速切换 | Global Accelerator |
| 私有子网跨 AZ 出网韧性 | 每 AZ NAT Gateway |
| Site-to-Site VPN 韧性 | 两条隧道 + 客户侧正确配置 |
| 本地到 AWS 关键连接 | 冗余 Direct Connect + VPN 备份 |
| 灾备环境快速重建 | CloudFormation |

## 网络冗余要点

- 一个 VPC 跨多个 AZ，但每个 Subnet 与 NAT Gateway 只在一个 AZ。
- Site-to-Site VPN 通常提供双隧道，客户侧必须真正启用。
- 单条 Direct Connect 不是高可用；连接、设备和地点都要考虑冗余。
- DNS Failover 会受 TTL 影响；应用状态与数据复制仍需单独设计。
- Global Accelerator 可快速改向健康端点，但不自动同步数据。

## 高频陷阱

- 多个实例若都在同一 AZ，仍受同一故障影响。
- Multi-AZ 不等于跨 Region。
- 自动故障切换能力因服务而异。
- 创建冗余资源不等于完成路由优先级和故障演练。
- 低 RTO / RPO 往往意味着更高成本和复杂度。

## 架构回答模板

1. 定义故障范围。
2. 确定 RTO / RPO。
3. 选择计算、数据与网络冗余层级。
4. 设计数据复制。
5. 设计健康检查、路由与流量切换。
6. 验证客户侧和 AWS 侧都真正使用冗余路径。
7. 定期演练恢复。

## Storage 韧性补充

### 数据保护层次
| 风险 / 需求 | 方案 |
| --- | --- |
| S3 对象误覆盖或删除 | Versioning |
| 合规不可修改/删除 | Object Lock |
| 跨 Region S3 副本 | CRR |
| EBS 卷时间点恢复 | EBS Snapshot |
| 多服务统一备份 | AWS Backup |
| 服务器低 RPO/RTO 灾备 | AWS DRS |
| 多 AZ 共享 Linux 文件 | EFS Standard |
| 本地文件/卷/磁带云端副本 | Storage Gateway |
### 高频陷阱
- 持久性、高可用、备份和灾难恢复是不同概念。
- EBS 同 AZ 内复制不等于跨 AZ 卷。
- S3 冗余不防止拥有权限的误删或恶意修改。
- Versioning/Replication 可能同步错误，关键数据仍需隔离备份或 Object Lock。
- AWS DRS 持续复制不替代长期合规备份。
- 任何备份方案都必须进行恢复测试并验证 RTO/RPO。

## Database 韧性补充

| 需求 | 首先考虑 |
| --- | --- |
| RDS 单 AZ / 实例故障自动切换 | RDS Multi-AZ |
| 关系数据库读扩展 | Read Replica / Aurora Replica |
| Aurora 跨 Region 灾备和本地读取 | Aurora Global Database |
| DynamoDB 多 Region 多活 | Global Tables |
| 保留期内恢复到指定时间 | Automated Backup + PITR |
| 多服务集中备份治理 | AWS Backup |
### 高频陷阱
- Read Replica 不能替代 Multi-AZ 的高可用目标。
- Multi-AZ 不等于 Multi-Region。
- 副本与备份解决不同风险；错误可能被复制到副本。
- 自动故障转移仍需应用重连、DNS/Endpoint 和演练设计。
