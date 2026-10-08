---
title: "HPC on AWS"
fullName: "High Performance Computing on AWS"
description: "Identify whether compute, node communication, storage I/O, or data movement is the bottleneck before combining AWS components."
service: "High Performance Computing on AWS"
category: architecture
kind: topic
lang: en
topicKey: "High Performance Computing on AWS"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["architecture","High Performance Computing on AWS","AWS"]
notionId: 3f3964dc-ce4a-81ce-9e10-ef23fdb9fa6b
notionUrl: https://app.notion.com/p/3f3964dcce4a81ce9e10ef23fdb9fa6b
notionUpdated: "2026-10-08T02:16:00.587Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | High Performance Computing on AWS |
| Chinese | AWS 高性能计算架构 |
| Japanese | AWS の高性能コンピューティング |
| Review priority | 考试频率 ⭐⭐⭐ |
| Often confused with | AWS Batch / ParallelCluster / EFA / FSx for Lustre |

## In one sentence

Identify whether compute, node communication, storage I/O, or data movement is the bottleneck before combining AWS components.

## Core summary

Loosely coupled work fits Batch and elastic nodes; tightly coupled MPI emphasizes single-AZ cluster placement, EFA, and parallel file systems.

## Study points

- ENA improves ordinary IP networking; EFA targets supported low-latency communication.
- FSx for Lustre serves parallel file I/O while S3 holds durable datasets and results.
- Batch manages jobs and queues; ParallelCluster manages HPC clusters.
- Spot needs retryable jobs or recoverable checkpoints.

## Common pitfalls

- More instances are not automatically faster; communication or storage can be the bottleneck.
- A cluster placement group improves communication but does not provide Multi-AZ fault isolation.

## Key memory

**HPC is compute, low-latency communication, parallel storage, and scheduling.**
