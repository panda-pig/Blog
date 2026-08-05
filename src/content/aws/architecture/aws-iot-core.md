---
title: "AWS IoT Core"
fullName: "AWS IoT Core"
description: "让大量物理设备安全连接 AWS、发布遥测并接收命令。"
service: "AWS IoT Core"
category: architecture
kind: service
lang: zh
topicKey: "AWS IoT Core"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "IoT", "AWS"]
notionId: 3b3964dc-ce4a-81d4-8b8d-e0b62575728a
notionUrl: https://app.notion.com/p/3b3964dcce4a81d48b8de0b62575728a
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一句话理解

让大量物理设备使用证书和加密连接 AWS，通过 Topic 发布遥测并接收云端命令。

## 核心组件

- Device Gateway 和证书负责设备连接与身份。
- Message Broker 使用 MQTT Topic 完成发布/订阅。
- Rules Engine 把消息路由到 Lambda、S3、DynamoDB、Kinesis 等服务。
- Device Shadow 保存期望状态和已报告状态，协调离线设备。

## 考试重点与误区

- 设备身份、安全连接、遥测、双向命令 → IoT Core。
- 边缘本地处理和离线运行 → IoT Greengrass。
- Kinesis 是通用流数据服务；IoT Core 还处理设备身份、协议、Topic 和状态。
- IoT Core 不负责长期保存全部数据，需路由到下游存储或分析服务。

## 重点记忆

**设备证书 + MQTT Topic + Rules Engine + Device Shadow。**
