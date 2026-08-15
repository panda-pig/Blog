---
title: "Cloud Technology & Services"
fullName: "Cloud Technology & Services"
description: "Recognize compute, storage, database, networking, analytics, and AI services by use case rather than by name alone."
service: "Cloud Practitioner"
category: cloud-practitioner
kind: topic
lang: en
topicKey: "Cloud Technology & Services"
frequency: "Stage summary"
date: 2026-07-31
updated: 2026-08-15
tags: ["cloud-practitioner","Cloud Technology & Services","AWS"]
notionId: 3a6964dc-ce4a-817f-8834-c24908271ac1
notionUrl: https://app.notion.com/p/3a6964dcce4a817f8834c24908271ac1
notionUpdated: "2026-08-05T02:02:43.505Z"
---

## In one sentence

Recognize compute, storage, database, networking, analytics, and AI services by use case rather than by name alone.

## Key points

- S3 is the object store and data lake; Redshift is the warehouse; Athena queries S3 with SQL.
- Glue Data Catalog stores metadata; Glue ETL transforms; Kinesis Streams ingests; Firehose delivers.
- Use AWS AI Services for pretrained capabilities, SageMaker for custom models, and Bedrock for foundation-model APIs.
- RDS and Aurora handle relational transactions; DynamoDB handles large low-latency key-value workloads; DAX or ElastiCache caches.

## Exam focus

- Polly speaks, Transcribe writes, Translate changes language, Comprehend understands text, Textract extracts documents, and Rekognition sees images.
- Multi-AZ is for availability, Read Replica for read scaling; Query is usually more efficient than Scan.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**Start with the use case, then the service; separate responsibilities before eliminating similar options.**

## New services and migration map

| Need | Concept or service |
| --- | --- |
| Migration business case | Migration Evaluator |
| Server and dependency discovery | Application Discovery Service |
| Block-level server replication | AWS Transform MGN |
| Database full load and CDC | AWS DMS; add SCT for heterogeneous schema conversion |
| High-speed file migration | AWS DataSync |
| SFTP / FTPS / FTP / AS2 | AWS Transfer Family |
| GraphQL and real-time data | AWS AppSync |
| Web and mobile build and hosting | AWS Amplify |
| Full desktop / app streaming / isolated browsing | WorkSpaces / WorkSpaces Applications / Secure Browser |
| IoT certificates, MQTT, and rule routing | AWS IoT Core |

Remember **Assess → Mobilize → Migrate & Modernize**, then select the application strategy from the 7Rs.
