---
slug: data-analysis-project-workflow
lang: zh
title: "常规业务数据分析项目流程"
description: "从明确业务目标、盘点与准备数据，到探索分析、报告沟通和改善验证，用一张图概览常规业务数据分析流程。"
date: 2026-10-13
category: metrics
tags: ["数据分析", "项目流程", "业务改善"]
cover: /images/data-analysis-workflow/workflow.zh.svg
---

常规业务数据分析项目通常涵盖以下四个阶段、十一个步骤，各环节可根据问题和数据情况往返迭代。

![常规业务数据分析流程：从目标定义、业务理解、指标与数据盘点，经数据准备和探索分析，到改善试点、效果评估与监控迭代。](/images/data-analysis-workflow/workflow.zh.svg)

[查看完整流程图](/images/data-analysis-workflow/workflow.zh.svg)

## 四个阶段

- **理解业务（①～③）：** 明确业务问题与成功标准，理解业务背景，统一指标口径并盘点已有数据。
- **数据准备（④～⑥）：** 优先复用业务数据，按需补充采集；用 SQL／Python 整合、清洗、验证和对账。
- **分析与汇报（⑦～⑧）：** 开展探索分析、分群与趋势比较，按需使用统计方法；通过 Tableau／BI 等可视化并沟通经过验证的结论。
- **改善与验证（⑨～⑪）：** 设计改善方案和评估方法后试点，按条件开展 A/B Test；根据效果决定推广，并持续监控、迭代。

方法参考：[CRISP-DM](https://www.ibm.com/docs/en/spss-modeler/18.6.0?topic=dm-crisp-help-overview) · [NIST 探索性数据分析](https://itl.nist.gov/div898/handbook/eda/section1/eda11.htm) · [Microsoft 实验设计实践](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)。以上为业务分析场景的简化概览。
