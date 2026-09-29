---
title: "EC2 Initialization, Connection, and Permission Errors"
fullName: "EC2 Initialization Connection and Permission Errors"
description: "Troubleshoot EC2 by separating initialization, network reachability, OS login, and AWS API authorization."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "EC2 Initialization Connection and Permission Errors"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "EC2", "troubleshooting", "IAM"]
notionId: 3e8964dc-ce4a-8132-a559-df7d19cc2637
notionUrl: https://app.notion.com/p/3e8964dcce4a8132a559df7d19cc2637
notionUpdated: "2026-09-27T02:35:48.957Z"
---

## Separate the control paths

Most EC2 failures belong to one of four paths: **boot initialization, network reachability, OS login, or AWS API authorization**. Identify the layer before changing controls.

| Symptom | Meaning | Check first |
| --- | --- | --- |
| Application was not deployed | User data or bootstrapping failed | cloud-init logs, script, DNS, egress, package source |
| Connection timeout | No usable network response | address, route, IGW, NACL, SG, corporate firewall |
| Connection refused | The host was reached, but the port rejected the connection | sshd/application listener, host firewall |
| Permission denied | SSH was reached, but authentication failed | private key, OS username, authorized_keys |
| Unable to locate credentials | SDK/CLI found no credentials | instance profile, IMDS, provider chain |
| AccessDenied | An identity exists but lacks authorization | action, resource, condition, explicit deny, SCP, boundary |

## Connection boundaries

- EC2 Instance Connect still uses SSH and needs IAM, the correct OS user, EIC support, and a network path.
- Session Manager uses the SSM agent and outbound channels, so inbound port 22 is unnecessary.
- OS access and AWS API access are separate; the EC2 IAM role controls application permissions.
- EC2 receives temporary role credentials through an instance profile; do not store a human's long-term access key.

## Troubleshooting order

Address and DNS → route/IGW/NAT → NACL → security group → host firewall → service listener → OS authentication → IAM authorization.

## Remember

**Timeout means path, refused means service, permission denied means SSH identity, and AccessDenied means IAM authorization.**
