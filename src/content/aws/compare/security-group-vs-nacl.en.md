---
title: Security Group vs NACL
fullName: Security Group and Network ACL
description: A comparison of stateful resource-level security and stateless subnet-level access control, including their roles in design and troubleshooting.
service: Networking Security
category: compare
kind: compare
lang: en
frequency: "Common exam comparison"
date: 2026-07-27
updated: 2026-07-27
tags: [Security Group, NACL, Networking, SAA-C03]
notionId: 3a6964dc-ce4a-8166-b3cb-f4eaffa60db0
notionUrl: https://app.notion.com/p/3a6964dcce4a8166b3cbf4eaffa60db0
notionUpdated: "2026-07-27T05:38:26.424Z"
---

## One-sentence decision

> Use **security groups** for everyday resource-level least privilege. Use **network ACLs** when you need explicit CIDR denies or an additional coarse-grained control at the subnet boundary.

## Core differences

| Dimension | Security Group | Network ACL |
| --- | --- | --- |
| Scope | ENI or supported resource | Subnet boundary |
| State | Stateful | Stateless |
| Rule type | Allow only | Allow and deny |
| Evaluation | All allow rules combined | Lowest-numbered first match |
| Return traffic | Automatically allowed for an established connection | Must be allowed explicitly |
| Default | New SG has no inbound rules and normally allows outbound | Default NACL allows all; custom NACL starts by denying all |
| Typical use | ALB → application → database least privilege | Block a CIDR or add subnet-boundary protection |
| SG references | Supported | Not supported |

## Typical architecture

`Internet → ALB SG (443) → Application SG (ALB SG only) → Database SG (Application SG only)`

NACLs sit at subnet boundaries. They can allow expected business traffic and ephemeral ports or deny a specific CIDR.

## Stateful vs stateless

- A security group automatically permits the return traffic for an allowed connection.
- A NACL evaluates each direction independently, so return traffic often requires explicit ephemeral-port rules.

## Exam scenarios

- **Only the ALB may reach EC2** → security group reference.
- **Block a source IP or CIDR** → network ACL.
- **Return traffic is automatically allowed** → security group.
- **Rule numbers, allow/deny, or ephemeral ports** → network ACL.
- **A new custom NACL caused an outage** → verify both inbound and outbound allow rules.

## Common traps

- A correct security group does not overcome a bad route, NACL, or application listener.
- A low-numbered NACL rule can shadow a higher-numbered rule.
- Default and newly created security groups do not have identical inbound rules.
- NACLs are not the only control for communication between resources in the same subnet.

## Interview summary

> I use security groups for stateful, resource-level least privilege. I use NACLs as a stateless subnet-boundary supplement when explicit CIDR denies are needed. For troubleshooting, I check routing → NACL rules in both directions → security groups → host firewall → application listener.

## Memory aid

> **SG: resource guard, allow only, remembers. NACL: subnet checkpoint, can deny, does not remember, evaluates by number.**
