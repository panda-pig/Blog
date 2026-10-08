---
title: "VM Import/Export"
fullName: "VM Import/Export"
description: "Imports eligible VM images to create EC2 images or instances and exports eligible AWS images for external use."
service: "VM Import/Export"
category: migration
kind: service
lang: en
topicKey: "VM Import/Export"
frequency: "考试频率 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","VM Import/Export","AWS"]
notionId: 3f3964dc-ce4a-8103-b195-cff86463077d
notionUrl: https://app.notion.com/p/3f3964dcce4a8103b195cff86463077d
notionUpdated: "2026-10-08T01:44:50.384Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | VM Import/Export |
| Chinese | 虚拟机镜像导入与导出 |
| Japanese | 仮想マシンイメージのインポート／エクスポート |
| Review priority | 考试频率 ⭐⭐ |
| Often confused with | AWS Transform MGN / VMware Cloud on AWS |

## In one sentence

Imports eligible VM images to create EC2 images or instances and exports eligible AWS images for external use.

## Core summary

Prepare an image, upload it to S3, configure the service role, and start an import. Networking, IAM, licensing, and application dependencies remain separate work.

## Study points

- Fits a small number of VMs with an offline window.
- Use MGN for continuous block replication and low-downtime migration.
- Use VMware Cloud on AWS when preserving the VMware operating model.
- An import creates native EC2 resources but does not continuously sync source changes.

## Common pitfalls

- Not every Marketplace AMI, encrypted image, or license is exportable.
- Files stored in S3 can still require completely different restore mechanisms.

## Key memory

**VM Import/Export moves images; MGN continuously moves servers; VMware Cloud preserves the VMware model.**
