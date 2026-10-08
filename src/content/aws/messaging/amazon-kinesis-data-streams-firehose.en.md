---
title: "Amazon Kinesis Data Streams and Data Firehose"
fullName: "Amazon Kinesis Data Streams / Amazon Data Firehose"
description: "Data Streams ingests, retains, and replays real-time streams; Data Firehose buffers and delivers them to analytics destinations with less operational work."
service: "Amazon Kinesis Data Streams & Amazon Data Firehose"
category: messaging
kind: service
lang: en
topicKey: "Amazon Kinesis Data Streams & Data Firehose"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["messaging","Amazon Kinesis Data Streams & Data Firehose","AWS"]
notionId: 3a6964dc-ce4a-8106-bfc9-db1375ab325d
notionUrl: https://app.notion.com/p/3a6964dcce4a8106bfc9db1375ab325d
notionUpdated: "2026-09-28T06:40:09.985Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon Kinesis Data Streams & Amazon Data Firehose |
| Full name | Amazon Kinesis Data Streams / Amazon Data Firehose |
| Chinese description | 实时数据流与托管式数据交付 |
| Japanese description | リアルタイムデータストリームとマネージドデータ配信 |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | Kinesis Data Streams / Amazon Data Firehose / Amazon MSK |

## In one sentence

Data Streams ingests, retains, and replays real-time streams; Data Firehose buffers and delivers them to analytics destinations with less operational work.

## Key points

- Data Streams supports multiple consumers, custom processing, and replay; capacity and shard design still matter.
- Data Firehose scales automatically and delivers to S3, Redshift, OpenSearch, and other targets, with optional Lambda transformation.
- Firehose buffers records, so delivery is near real time rather than immediate per record.

## Exam focus

- Choose Data Streams for multiple consumers, custom reads, or replay.
- Choose Data Firehose for low-operations delivery to a fixed destination.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**Streams is for streaming and replay; Firehose is for buffering and delivery.**

## Update: Streams and Firehose

- Kinesis Data Streams is a replayable real-time stream. The partition key selects a shard and records are ordered within that shard; retention can be extended.
- Shared throughput and enhanced fan-out provide different consumer throughput models.
- Amazon Data Firehose is destination-oriented, near-real-time managed delivery with size/time buffering, transformation, compression, and format conversion.
- Redshift delivery stages data in S3 before COPY. Firehose is not a general replay stream for independent consumers.
