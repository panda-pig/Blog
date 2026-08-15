---
title: "高性能架构设计"
fullName: "Design High-Performing Architectures"
description: "根据工作负载的访问模式与瓶颈，选择计算、存储、数据库、网络和缓存方案。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "高性能架构设计"
frequency: "阶段性总结"
date: 2026-07-30
updated: 2026-08-15
tags: ["saa-c03","Design High-Performing Architectures","AWS"]
notionId: 3a6964dc-ce4a-8177-89e9-de191f6694c9
notionUrl: https://app.notion.com/p/3a6964dcce4a817789e9de191f6694c9
notionUpdated: "2026-08-13T00:40:45.598Z"
---

## 必须掌握

- 选择靠近用户的 Region 降低基础网络延迟。
- CloudFront Edge Location 分发 HTTP/HTTPS 静态和动态内容。
- Route 53 Latency-based Routing 通过 DNS 选择低延迟 Region。
- Global Accelerator 使用静态 Anycast IP 和 AWS 全球网络加速 TCP/UDP。
- Direct Connect 为长期混合云提供稳定、可预测带宽。
- VPC Endpoint 可减少私有子网经 NAT 访问支持服务的路径与成本。
- NAT Gateway 按 AZ 设计，避免不必要的跨 AZ 流量。
- CIDR 与路由最长前缀匹配。

## 场景判断

| 需求 | 首先考虑 |
| --- | --- |
| 全球静态内容与可缓存响应 | CloudFront |
| 基于 DNS 选择低延迟 Region | Route 53 Latency Routing |
| TCP/UDP 全球加速与静态 Anycast IP | Global Accelerator |
| 大量本地数据稳定传输到 AWS | Direct Connect |
| 私有访问 S3 / DynamoDB | Gateway VPC Endpoint |
| 私有访问支持 PrivateLink 的服务 | Interface VPC Endpoint |
| 私有子网访问第三方公网 API | NAT Gateway |
| 多 VPC / 多账户集中互联 | Transit Gateway |

## 网络性能设计

1. 确认协议：DNS、HTTP/HTTPS 或 TCP/UDP。
2. 确认流量来源：互联网用户、本地数据中心、其他 VPC。
3. 确认可缓存性与数据位置。
4. 检查跨 AZ、跨 Region、NAT 与公网路径。
5. 用健康检查、冗余连接和监控验证设计。

## 高频陷阱

- Route 53 不缓存，也不代理连接；DNS 结果可能受 TTL 影响。
- CloudFront 不会自动复制数据库。
- Global Accelerator 不替代应用和数据的 Multi-Region 设计。
- Direct Connect 默认不加密。
- 单个 AZ 的 NAT Gateway 或单条 Direct Connect 仍可能成为依赖点。
- “最近 Region”不一定等于端到端最优，还要考虑服务、网络与架构。

## 复习范围

- CloudFront 与 Edge Location
- Route 53 Routing Policy
- Global Accelerator 对比
- Direct Connect / VPN 选型
- NAT Gateway 与 VPC Endpoint

## Storage 性能补充

### 场景判断
| 性能需求 | 首先考虑 |
| --- | --- |
| 数据库大量小块随机 I/O | EBS io2 / 关注 IOPS |
| 大文件顺序吞吐 | EBS st1 / 关注 Throughput |
| 一般系统盘与应用 | EBS gp3 |
| 多台 Linux 实例共享文件 | EFS |
| HPC / 并行文件处理 | FSx for Lustre |
| 大规模对象与静态内容 | S3 + CloudFront |
| 单 AZ 极低延迟对象访问 | S3 Express One Zone |
### 设计提醒
- IOPS 与 Throughput 是不同指标。
- EBS 卷与 EC2 必须位于同一 AZ。
- EFS 自动扩容是容量能力，吞吐模式仍需评估。
- FSx 要按文件系统、协议与并行性能选型。
- S3 大对象可使用 Multipart Upload。
- 数据所在 Region/AZ、跨 AZ 流量和缓存都会影响端到端性能。

## Database 性能补充

| 性能问题 | 首先考虑 |
| --- | --- |
| RDS 大量不同 SQL 读取 | Read Replica + 索引/查询优化 |
| 重复热点查询、会话、排行榜 | ElastiCache |
| DynamoDB 重复读取要求微秒级 | DAX |
| DynamoDB 查指定 Partition Key | Query，避免无必要 Scan |
| 关系型高读吞吐与更多 Readers | Aurora |
| 全球低延迟 DynamoDB 读写 | Global Tables + 就近应用层 |
### 设计提醒
- 缓存只能加速有命中率的访问模式。
- Partition Key、索引和 SQL 优化通常比盲目扩容更先考虑。
- Read Replica 的复制延迟和缓存陈旧度必须符合业务一致性要求。

## Analytics & AI/ML 性能补充

| 性能 / 架构需求 | 首先考虑 |
| --- | --- |
| 直接对 S3 做临时 SQL 查询 | Athena + 分区 / 列式格式 / 压缩 |
| 长期、高频、复杂分析和 BI | Amazon Redshift |
| 实时流、多消费者、自定义处理 | Kinesis Data Streams |
| 少运维地近乎实时落入 S3 等目标 | Amazon Data Firehose |
| Serverless ETL 和数据编目 | AWS Glue |
| Spark / Hadoop 大规模自定义处理 | Amazon EMR |
| 使用自有数据训练与部署模型 | Amazon SageMaker AI |
| 通过托管基础模型 API 构建生成式 AI | Amazon Bedrock |

### 设计提醒

- 生产 DynamoDB 与大规模历史分析、训练负载应隔离。
- Athena 扫描数据量受分区、压缩和文件格式影响。
- Firehose 会缓冲，延迟要求严格时需确认是否满足。
- ML 的 Training 和 Inference 是不同工作负载，应分别规划计算、扩展与监控。
- 模型质量问题先检查数据质量、Schema 和训练数据新鲜度。

## Region、Edge 与作用域

- Region 选择同时检查 Compliance、Latency、Service Availability 与 Pricing。
- Edge Location / PoP 让 CloudFront、Route 53、Global Accelerator 更靠近用户，但不是普通 EC2 部署位置。
- CloudFront 缓存 HTTP/HTTPS 内容；Route 53 返回 DNS 答案；Global Accelerator 优化 TCP/UDP 网络路径。
- Regional Service 以一个 Region 为作用域；Zonal Resource 位于具体 AZ。
- Service Availability 表示该 Region 是否提供功能，不等于 High Availability。
