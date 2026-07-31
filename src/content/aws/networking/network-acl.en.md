---
title: Network ACL
fullName: "Network Access Control List"
description: A stateless subnet-boundary access control list that supports both allow and deny rules.
service: NACL
category: networking
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [Network ACL, Subnet, Stateless, SAA-C03]
notionId: 3a6964dc-ce4a-8196-a268-c8bdca7d4d53
notionUrl: https://app.notion.com/p/3a6964dcce4a8196a268c8bdca7d4d53
notionUpdated: "2026-07-27T05:38:24.209Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Network ACL |
| Full name | Network Access Control List |
| Chinese description | 网络访问控制列表 |
| Japanese description | ネットワーク ACL |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Security Group |

## In one sentence

> A Network ACL is a **stateless, allow-and-deny** traffic control list applied at a subnet boundary.

## Core purpose

- Apply coarse-grained control to traffic entering or leaving a subnet.
- Allow or deny traffic by protocol, port, and CIDR.
- Add a second layer beyond security groups, such as blocking a known malicious network.

## Rule evaluation

- Rules are evaluated from the lowest number to the highest.
- The first matching rule is applied immediately.
- More specific rules are therefore usually given lower numbers.
- An implicit deny remains at the end.

## What does stateless mean?

A NACL does not track connections. Allowing the request direction does not automatically allow the return direction. Return traffic often uses ephemeral client ports, whose ranges vary by operating system and client.

For HTTPS access, for example, inbound TCP 443 may be allowed while outbound rules must also allow the client’s ephemeral port range.

## Default behavior

- The default NACL allows all inbound and outbound traffic.
- A new custom NACL begins with no allow rules and therefore denies all traffic.
- Rules can be changed, so troubleshooting should inspect the current configuration.

## Scope

A NACL is associated with a subnet and is evaluated when traffic crosses the subnet boundary. Communication between resources in the same subnet does not cross that boundary and is primarily controlled with security groups and host-level controls.

## Exam focus

- Numbered first-match evaluation.
- Both inbound and outbound directions must be permitted.
- Ephemeral ports.
- Default versus custom NACL behavior.
- Combined troubleshooting with security groups.

## Common misconceptions

- NACLs are not stateful.
- Allowing an inbound port does not automatically allow return traffic.
- A high-numbered deny may never run if a lower-numbered rule already matches.
- A NACL does not replace resource-level security groups.

## Key takeaway

> **A NACL is a subnet checkpoint: every direction is evaluated independently, and the first matching number wins.**
