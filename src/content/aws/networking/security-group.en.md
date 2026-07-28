---
title: Security Group
fullName: Security Group
description: A stateful, allow-only virtual firewall attached to an ENI or supported resource, central to resource-level least privilege in AWS.
service: Security Group
category: networking
kind: service
lang: en
frequency: "Exam frequency ★★★★★"
date: 2026-07-27
updated: 2026-07-27
tags: [Security Group, ENI, Stateful, SAA-C03]
notionId: 3a6964dc-ce4a-8158-822a-c4539e3bd96c
notionUrl: https://app.notion.com/p/3a6964dcce4a8158822ac4539e3bd96c
notionUpdated: "2026-07-27T05:38:22.272Z"
---

## In one sentence

> A security group is a **stateful, allow-only** virtual firewall attached to an ENI or supported resource.

## Core purpose

- Control traffic entering and leaving an ENI.
- Define rules by protocol, port, source or destination CIDR, or another security group.
- Combine the allow rules of every security group attached to the same ENI.
- Express least-privilege relationships without explicit deny rules.

## What does stateful mean?

When an inbound request is allowed, its related return traffic is automatically allowed without a matching outbound rule, and vice versa.

“Stateful” means tracking an allowed connection; it does not mean that all unrelated reverse traffic bypasses the rules.

## Default behavior

- A new security group has no inbound allow rules.
- It normally allows all outbound traffic by default.
- The default security group also has an inbound rule allowing members of the same default group to communicate.
- Defaults can be changed, so troubleshooting should always use the actual configuration.

## Three-tier pattern

- **ALB SG**: allow internet traffic to port 443.
- **Application SG**: allow the ALB security group to the application port.
- **RDS SG**: allow the application security group to the database port.

Referencing security groups expresses “who may reach whom” more clearly than fixed IP addresses.

## Exam focus

- Resource or ENI level.
- Stateful behavior.
- Allow rules only.
- Rules from multiple security groups are combined.
- Use security group references for ALB → application → database access.
- Troubleshoot together with routes, NACLs, host firewalls, and application listeners.

## Common misconceptions

- Security groups cannot contain explicit deny rules.
- They are not attached directly to an entire subnet.
- Stateful does not mean that every outbound restriction is ignored.
- An open security group alone does not guarantee connectivity.

## Security Group vs Network ACL

| Dimension | Security Group | Network ACL |
| --- | --- | --- |
| Scope | ENI or resource | Subnet boundary |
| State | Stateful | Stateless |
| Rules | Allow only | Allow and deny |
| Evaluation | All allow rules combined | Lowest-numbered first match |

## Key takeaway

> **A security group is a resource guard: it issues passes and remembers established connections.**
