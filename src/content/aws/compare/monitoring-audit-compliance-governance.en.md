---
title: "Monitoring, Audit, Compliance & Governance"
fullName: "Monitoring, Audit, Compliance & Governance"
description: "Compare AWS monitoring, audit, compliance, multi-account governance, and best-practice services."
service: "AWS"
category: compare
kind: compare
lang: en
topicKey: "监控・审计・合规・治理服务总对比"
frequency: "专题对比"
date: 2026-08-01
updated: 2026-08-01
tags: ["compare", "监控・审计・合规・治理服务总对比", "AWS"]
notionId: 3ae964dc-ce4a-81d6-bc1f-c45a1a2a3a36
notionUrl: https://app.notion.com/p/3ae964dcce4a81d6bc1fc45a1a2a3a36
notionUpdated: "2026-07-31T08:17:20.860Z"
---

## One-line overview

- **Runtime health belongs to CloudWatch; API history to CloudTrail; configuration and compliance rules to Config.**
- **AWS reports and agreements belong to Artifact; customer-environment audit evidence to Audit Manager.**
- **Organizations provides multi-account foundations; Control Tower adds standardized landing-zone governance.**
- **Service Catalog governs approved products; License Manager governs license consumption.**
- **AWS Health reports official events; Trusted Advisor recommends improvements; Access Analyzer checks permission exposure.**

## Service comparison

| Service | Core question | Primary object | Exam keywords |
| --- | --- | --- | --- |
| Amazon CloudWatch | How is the system running now? | Metrics, logs, alarms, dashboards | CPU, latency, error rate, threshold alarm |
| AWS CloudTrail | Who called which API and when? | Account and API activity | Deleted resource, operator history, audit log |
| AWS Config | How did configuration change and does it comply? | Resource configuration and rules | Configuration drift, continuous compliance |
| AWS Artifact | Where are AWS compliance materials? | AWS reports and agreements | SOC/ISO/PCI report, agreement |
| AWS Audit Manager | How do we prepare customer-environment audit evidence? | Frameworks, controls, evidence | Automated evidence collection, assessment |
| AWS Organizations | How are multiple accounts managed centrally? | Accounts, OUs, SCPs, billing | OU, SCP, consolidated billing |
| AWS Control Tower | How is a governed multi-account environment established? | Landing zone, accounts, controls | Account Factory, guardrails, standard accounts |
| AWS Service Catalog | How can users deploy approved solutions safely? | Portfolios, products, constraints | Approved catalog, controlled self-service |
| AWS License Manager | How are software licenses tracked and limited? | License rules, quantities, BYOL | BYOL, overuse, hybrid environment |
| AWS Health Dashboard | Do official AWS events affect us? | Events, planned changes, notifications | AWS incident, maintenance, instance retirement |
| AWS Trusted Advisor | Which best-practice improvements are recommended? | Cost, performance, security, resilience, quotas | Idle resources, root MFA, quota pressure |
| IAM Access Analyzer | Who can access from outside and are permissions too broad? | Resource policies, trust policies, activity | External account, public access, least privilege |
| AWS Well-Architected Tool | Does the workload follow architecture best practices? | Workload and six pillars | Architecture review, risk, milestone |

## High-frequency distinctions

| Pair | How to decide |
| --- | --- |
| CloudWatch vs CloudTrail | Performance, logs, and alarms → CloudWatch; API actions → CloudTrail. |
| CloudTrail vs Config | Actor and API → CloudTrail; before/after configuration and compliance → Config. |
| Artifact vs Audit Manager | AWS reports and agreements → Artifact; customer-environment evidence → Audit Manager. |
| Config vs Audit Manager | Configuration records and rules → Config; multi-source evidence organized by framework → Audit Manager. |
| Organizations vs Control Tower | Accounts, OUs, SCPs, and billing → Organizations; landing zone, Account Factory, and controls → Control Tower. |
| Service Catalog vs Marketplace | Enterprise-approved product catalog → Service Catalog; third-party software/data marketplace → Marketplace. |
| Service Catalog vs License Manager | What may be deployed → Service Catalog; how many licenses may be used → License Manager. |
| AWS Health vs CloudWatch | Official AWS events and maintenance → Health; your resource metrics, logs, and alarms → CloudWatch. |
| Trusted Advisor vs Well-Architected Tool | Automated checks and account recommendations → Trusted Advisor; questionnaire-based workload review → Well-Architected Tool. |
| Trusted Advisor vs IAM Access Analyzer | Broad optimization recommendations → Trusted Advisor; external access and least-privilege analysis → Access Analyzer. |

## Scenario quick reference

- CPU over 80% triggers notification or scaling → CloudWatch Alarm + SNS / Auto Scaling.
- Find who deleted an EC2 instance → CloudTrail.
- Continuously require S3 buckets to remain private → AWS Config rule.
- An auditor requests an AWS SOC report → AWS Artifact.
- Collect PCI audit evidence automatically → AWS Audit Manager.
- Manage accounts centrally and set boundaries with SCPs → AWS Organizations.
- Apply a landing zone to new accounts → AWS Control Tower.
- Developers deploy only approved templates → AWS Service Catalog.
- Track BYOL and prevent license overuse → AWS License Manager.
- Confirm instance retirement or an AWS-side event → AWS Health Dashboard.
- Find idle resources, root MFA risks, and quota pressure → AWS Trusted Advisor.
- Detect an S3 bucket or role shared externally → IAM Access Analyzer.

## Key takeaway

**Watch runtime, Trail actions, Config configuration; Artifact provides AWS materials, Audit Manager collects customer evidence; Organizations manages accounts, Control Tower governs the landing zone; Catalog controls products, License Manager licenses; Health reports AWS events, Trusted Advisor recommends, and Access Analyzer checks permissions.**
