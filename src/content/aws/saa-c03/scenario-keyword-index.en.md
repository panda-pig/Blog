---
title: "Scenario Keyword Index"
fullName: "Scenario Keyword Index"
description: "Identify the goal and constraints first, then use keywords to narrow service and architecture choices."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "场景题关键词索引"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-08-05
tags: ["saa-c03", "场景题关键词索引", "AWS"]
notionId: 3a6964dc-ce4a-81d7-bfeb-ed10071385bc
notionUrl: https://app.notion.com/p/3a6964dcce4a81d7bfebed10071385bc
notionUpdated: "2026-08-05T02:02:00.000Z"
---

## Decision dimensions

1. Business goal and hard constraints.
2. RTO/RPO, consistency, latency, and traffic pattern.
3. Operational burden, security, compliance, and cost priority.

## Keyword index

| Scenario keyword | First choice | Eliminate |
| --- | --- | --- |
| Decoupling / buffering | SQS | Synchronous tight coupling |
| Fan-out | SNS + SQS | One queue with one consumer path |
| Serverless event processing | Lambda | Long-running continuous jobs |
| Private access to AWS services | VPC endpoint | Mandatory public internet path |
| Direct serverless SQL on S3 | Athena + Glue Data Catalog | Sustained complex warehouse queries |
| Sustained complex BI | Redshift | Occasional S3 scans only |
| Serverless ETL | AWS Glue | Full control of Spark/Hadoop cluster |
| Spark / Hadoop | Amazon EMR | Simple SQL on S3 |
| Stream with multiple consumers and replay | Kinesis Data Streams | Fixed-destination delivery only |
| Managed delivery to S3/Redshift/OpenSearch | Amazon Data Firehose | Consumer-controlled replay |
| Train and deploy your own model | SageMaker AI | Pretrained API only |
| Foundation-model API | Amazon Bedrock | Finished enterprise/developer assistant |
| CPU, latency, errors, logs, alarm | CloudWatch | CloudTrail API audit |
| Who changed or deleted a resource | CloudTrail | CloudWatch performance metrics |
| Configuration history and rule compliance | Config | Artifact compliance reports |
| Download AWS SOC/ISO/PCI report | Artifact | Audit Manager customer evidence |
| Evidence collection by audit framework | Audit Manager | Artifact as customer audit system |
| OU, SCP, consolidated billing | Organizations | Assuming SCP grants permissions |
| Landing zone, Account Factory, controls | Control Tower | Assuming it replaces Organizations |
| AWS incident, maintenance, retirement | AWS Health Dashboard | CloudWatch as official AWS notice |

## Remember

**Keywords narrow the choices; the business constraint and priority still decide the answer.**

## Migration and specialist-solution keywords

| Keywords | Prefer | Avoid confusing with |
| --- | --- | --- |
| Business case, licensing cost, current-state estimate | Migration Evaluator | Application Discovery Service |
| Processes, connections, application dependencies | Application Discovery Service | Migration Hub |
| Low-downtime server replication and cutover | AWS Transform MGN | DMS |
| Heterogeneous database and schema conversion | SCT + DMS | DMS alone when schema conversion is required |
| Partner SFTP endpoint backed by S3/EFS | Transfer Family | DataSync |
| GraphQL, subscriptions, resolvers | AppSync | API Gateway REST APIs |
| Full desktop / single app / isolated website | WorkSpaces / Applications / Secure Browser | Treating all three as the same |
| MQTT, Device Shadow, Rules Engine | IoT Core | SQS |
