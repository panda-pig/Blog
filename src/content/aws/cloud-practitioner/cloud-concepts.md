---
title: "云概念"
fullName: "Cloud Concepts"
description: "汇总 Cloud Practitioner 中按需付费、全球基础设施、责任共担和核心服务选型关键词。"
service: "CLF-C02"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "云概念"
frequency: "考试频率 ★★★★★"
date: 2026-07-30
updated: 2026-08-15
tags: ["Cloud Concepts","CLF-C02","Foundations"]
notionId: 3a6964dc-ce4a-8161-8312-db30847cd94e
notionUrl: https://app.notion.com/p/3a6964dcce4a81618312db30847cd94e
notionUpdated: "2026-08-13T00:40:37.629Z"
---

## 01 云简介补充

### 必须掌握
- Cloud Computing：通过互联网按需获取 IT 资源，并按使用量付费。
- Client–Server Model：客户端发送请求，服务器处理后返回响应；服务器可以是虚拟机、容器、函数或托管服务。
- 云的六项优势：可变费用替代固定费用、规模经济、不必猜测容量、速度与敏捷性、减少数据中心运维、快速全球部署。
- CapEx vs OpEx：从提前购买硬件的资本支出，转向随用量变化的运营支出。
- Pay-as-you-go 不等于自动低成本，仍要停止、删除或调整闲置资源。
- Shared Responsibility：AWS 负责 Security of the Cloud，客户负责 Security in the Cloud；具体边界随服务模型变化。
### 关键词 → 答案
| 关键词 | 首先想到 |
| --- | --- |
| 按需获取、按使用量付费 | Cloud Computing / Pay-as-you-go |
| 不提前购买大量硬件 | 可变费用替代固定费用 |
| 几分钟内获得资源 | Agility |
| 资源随需求自动增减 | Elasticity |
| AWS 管物理基础设施 | Security of the Cloud |
| 客户管数据、身份和配置 | Security in the Cloud |

## 必须掌握

- Region、Availability Zone、Edge Location。
- 选择 Region：合规、邻近性、服务可用性、价格。
- VPC 是逻辑隔离网络；Subnet 用于组织和隔离资源。
- Public Subnet、Private Subnet、IGW、NAT Gateway。
- Security Group 有状态且只允许；NACL 无状态且可允许/拒绝。
- Client VPN、Site-to-Site VPN、PrivateLink、Direct Connect 的连接对象。
- Route 53、CloudFront、Global Accelerator 的职责。
- Multi-AZ、Multi-Region、冗余与单点故障。
- CloudFormation 是 AWS IaC 服务。
- AWS Shared Responsibility Model。

## 关键词 → 答案

| 关键词 | 首先想到 |
| --- | --- |
| 逻辑隔离虚拟网络 | Amazon VPC |
| 子网直接互联网路由 | Internet Gateway |
| 私有子网主动出网 | NAT Gateway |
| 资源级、有状态、只允许 | Security Group |
| 子网级、无状态、允许/拒绝 | Network ACL |
| 远程员工、个人设备 | Client VPN |
| 数据中心/分支机构、加密、成本优先 | Site-to-Site VPN |
| 指定服务私密访问 | AWS PrivateLink |
| 专用连接、稳定带宽、大量数据 | Direct Connect |
| DNS、域名、健康检查 | Route 53 |
| 全球内容低延迟、缓存 | CloudFront |
| 静态 IP、全球动态 TCP/UDP、快速切换 | Global Accelerator |
| AZ 故障、高可用 | Multi-AZ |
| Region 故障、区域级灾备 | Multi-Region |
| 客户机房运行 AWS | Outposts |
| 一致、可重复创建资源 | CloudFormation |

## 高频易错点

- 私有子网可以通过 NAT 主动访问互联网。
- 有 IGW 不等于实例自动可上网；还需要路由、公网地址和安全规则。
- Direct Connect 默认不加密；专用路径与加密是不同概念。
- Site-to-Site VPN 连接整个站点；Client VPN 连接个人用户。
- Route 53 不缓存内容，也不承载应用流量。
- CloudFront 缓存并分发 HTTP/HTTPS 内容；Global Accelerator 不缓存。
- Multi-AZ 不等于跨 Region；Multi-Region 不会自动完成数据同步。
- Edge Location 不是 Region 或 AZ。
- Managed / Serverless 不代表客户没有配置、安全和数据责任。

## 06 存储补充

### 必须掌握
- Block / Object / File Storage。
- Instance Store vs EBS。
- S3 vs EBS vs EFS vs FSx。
- S3 Storage Class、Lifecycle、Versioning。
- Storage Gateway 三种类型。
- AWS Backup vs EBS Snapshot vs AWS DRS。
### 关键词 → 答案
| 关键词 | 首先想到 |
| --- | --- |
| 图片、视频、备份、静态网站 | Amazon S3 |
| EC2 系统盘、数据库、Block、高 IOPS | Amazon EBS |
| 临时高速、缓存、可丢失 | Instance Store |
| Linux、NFS、多 EC2 共享目录 | Amazon EFS |
| Windows、SMB、Active Directory | FSx for Windows |
| HPC、机器学习、Lustre | FSx for Lustre |
| 访问模式未知 | S3 Intelligent-Tiering |
| 低频但立即取回 | S3 Standard-IA |
| 极少访问但毫秒取回 | Glacier Instant Retrieval |
| 长期封存 | Glacier Deep Archive |
| 本地 NFS/SMB 文件进入 S3 | S3 File Gateway |
| 替代物理磁带 | Tape Gateway |
| 多服务统一备份 | AWS Backup |
| 服务器持续块复制、快速恢复 | AWS DRS |
### 高频易错点
- S3 是对象存储，EBS 是块存储，EFS/FSx 是文件存储。
- S3 文件夹是 Key Prefix。
- EBS 是单 AZ；Snapshot 可用于在另一 AZ 建卷。
- EBS 持久不代表 Terminate 后必然保留。
- S3 高持久不防止授权用户误删。
- Glacier Instant Retrieval 是毫秒级取回。
- EFS 是 Region 级，不是天然全球文件系统。
- Backup 保存数据，DRS 面向服务器级快速恢复。

## SAA 起步：账户与全球基础设施

- Root User 是账户固有的最高权限身份，不是 IAM User；只用于恢复和少数 Root-only Tasks。
- Region 包含多个 AZ；AZ 是故障隔离边界；Edge Location / PoP 靠近终端用户。
- Global、Regional 与 Zonal 描述作用域；服务管理范围与具体资源位置要分开判断。
- 选择 Region：Compliance、Latency、Service Availability、Pricing。
- 切换 Region 后看不到 EC2 / EBS，先切回资源所在 Region，再核对 Account 与权限。
- Multi-AZ 抵御 AZ 故障；Multi-Region 才用于 Region 级灾备，但不会自动复制或 Failover。
