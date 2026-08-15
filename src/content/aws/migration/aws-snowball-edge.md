---
title: "AWS Snowball Edge"
fullName: "AWS Snowball Edge Storage Optimized"
description: "课程中的经典离线数据迁移与边缘计算设备，并需结合当前可用状态判断。"
service: "AWS Snowball Edge"
category: migration
kind: service
lang: zh
topicKey: "AWS Snowball Edge"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-15
tags: ["migration", "Snowball Edge", "AWS"]
notionId: 3b3964dc-ce4a-8154-bbfc-f52294dcff18
notionUrl: https://app.notion.com/p/3b3964dcce4a8154bbfcf52294dcff18
notionUpdated: "2026-08-05T01:41:27.434Z"
---

## 一句话理解

课程中的经典离线迁移方案：AWS 寄送安全设备，客户写入大量数据后寄回，由 AWS 导入云存储。

## 适用场景与流程

- 网络不可用、带宽不足，或在线传输 TB / PB 级数据耗时过长。
- AWS 寄送设备 → 客户复制并验证数据 → 寄回 → AWS 导入指定存储并擦除设备数据。
- 既有客户也可在断网、偏远或受限环境运行部分边缘计算工作负载。

## 服务可用性变化

- Snowball Edge 已不再向新客户开放；考试旧题仍会使用它代表离线物理迁移。
- 新客户在线传输可评估 DataSync；安全物理传输可评估 Data Transfer Terminal 或合作伙伴方案；边缘计算可评估 Outposts。

## 高频辨析

- DataSync 是在线数据移动；Direct Connect 是专用网络路径；Snowball Edge 是物理设备。
- Snowball Edge 不是长期混合存储接口，也不能跳过加密、链路跟踪和完整性校验。

## 重点记忆

**考试：网络差、数据太大 → Snowball Edge；现实项目：先确认当前可用状态和替代方案。**

## 官方参考

- [AWS Snowball Edge availability change](https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html)
