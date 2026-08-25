---
title: "Credentials Report vs Access Advisor vs Access Analyzer vs Policy Simulator"
fullName: "IAM Credentials Report, Access Advisor, Access Analyzer and Policy Simulator"
description: "Separate credential inventory, usage timing, access-path analysis, and request authorization simulation."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "IAM Security Review Tools"
frequency: "High-frequency comparison"
date: 2026-08-25
updated: 2026-08-25
tags: ["compare", "IAM", "Security", "AWS"]
notionId: 3c7964dc-ce4a-81ef-83a8-e4f919ae927a
notionUrl: https://app.notion.com/p/3c7964dcce4a81ef83a8e4f919ae927a
notionUpdated: "2026-08-25T07:25:30.677Z"
---

## One-sentence conclusion

**Credentials Report shows IAM user credential state; Access Advisor shows allowed services/actions and last-accessed timing; Access Analyzer evaluates access paths, unused permissions, and policies; Policy Simulator models a specific request.**

## Core comparison

| Tool | Primary scope | Main question | Does not replace |
| --- | --- | --- | --- |
| IAM Credentials Report | IAM users in an account | What is the password, access-key, and MFA state? | Resource-sharing analysis or per-request authorization |
| IAM Access Advisor / Last Accessed | IAM users, groups, roles, policies, and supported entities | What is allowed, and when was it last accessed? | A complete real-time audit log |
| IAM Access Analyzer | Supported resources, identities, and policies in an account or organization | Is there external, internal, unused access, or a policy risk? | Per-request simulation or vulnerability scanning |
| IAM Policy Simulator | A principal, action, resource, and context | Would this request be allowed or denied? | Long-term trends or credential inventory |

## Scenario shortcuts

- Check MFA and stale access keys across IAM users → **Credentials Report**.
- Determine whether a role's S3 permissions have gone unused → **Access Advisor / Last Accessed**.
- Find an S3 bucket or trust policy open to an external account → **Access Analyzer**.
- Validate a principal's operation on an ARN before release → **Policy Simulator**.
- Draft a tighter policy from observed activity → **Access Analyzer Policy Generation + CloudTrail**.

## Common traps

- Credentials Report does not list temporary credentials for every role.
- “Unused” in last-accessed data does not justify immediate deletion; account for reporting scope, infrequent jobs, and emergency procedures.
- An Access Analyzer finding can describe intended sharing and does not automatically indicate an attack.
- Policy Simulator cannot replace CloudTrail evidence of actual API calls.

## Least-privilege loop

1. Use Credentials Report to find stale, unrotated, or insufficiently protected long-term credentials.
2. Use Last Accessed Information to identify rarely or never used service/action permissions.
3. Use Access Analyzer to evaluate external, internal, and unused access and policy issues.
4. Test critical requests in Policy Simulator after policy changes.
5. Observe actual calls in CloudTrail and review continuously.

## Key memory

**Inventory: Report. Usage time: Advisor. Access paths and policy risk: Analyzer. Request outcome: Simulator. Actual calls: CloudTrail.**

## Credentials Report fields and boundaries

| Group | Common fields | Review goal |
| --- | --- | --- |
| Password | Enabled, last used, last changed, next rotation | Find unused or stale user passwords |
| MFA | MFA active | Find identities without another factor |
| Access key 1 / 2 | Active, last rotated, last used date, region, service | Find idle, unrotated, or suspicious keys |
| Signing certificate | Active, last rotated | Review IAM-managed X.509 certificates |

This account-level CSV includes a root-account row and IAM users. It excludes role temporary credentials and service-specific credentials such as CodeCommit credentials. Access Advisor can also trace the policy source behind service/action last-accessed data.
