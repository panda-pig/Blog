---
slug: insurance-platform-metrics-framework
lang: en
title: "Insurance platform metrics: tracing the journey from quote request to policy issuance"
description: "Build a metric framework around product discovery, quote requests, quotations, applications and policy issuance. Define consistent measures and use a hypothetical premium decline to work through the analysis."
date: 2026-10-11
category: metrics
tags: ["Data analysis", "Metric frameworks", "Insurance operations", "Process analysis"]
---

An insurance platform can generate many product searches, quote requests, quotations and applications every day. Page views rise and buttons receive more clicks. But does that activity produce more completed business?

Another situation is familiar: total premium falls, and the team quickly lists possible explanations. Traffic is down, quotations take too long, the products do not fit, or the application process has a problem. Each explanation sounds plausible, but it is difficult to decide where to look first.

A metric framework makes the problem more specific. Start with the business outcome, trace the change through the process, then identify explanations to test and actions to take.

This article follows one business journey through an insurance platform. Its scope is platform product operations and the quotation and application process. An insurer's overall financial performance, solvency and staff performance require separate frameworks.

## 1. Define the business goal before choosing metrics

Before listing metrics, I would ask three questions: What outcome should the platform produce? Which stages must users pass through? What can prevent completion?

For this scenario, the metrics form three connected layers.

| Layer | Question | Example metrics |
| --- | --- | --- |
| Business outcomes | How much valid business was completed? | Issued policy count, total premium, average premium per policy |
| Process efficiency | Where does business progress or stop? | Stage conversion rates, waiting time, completion time |
| Adoption and quality | Who uses the platform, and can they complete their tasks? | Feature users, activity and retention, failure rate, error reasons |

Channel, product, client platform, issuance mode and user type are dimensions for breaking down these metrics. For example, “mobile web” is a dimension; “application submission success rate on mobile web” is a metric.

The layers need to be read together. Total premium tells us that an outcome changed, but not where. Click counts tell us what users attempted, but not whether those actions produced completed business.

A dashboard can start with a few outcome metrics and use process and quality metrics to explain them. This gives readers both a relationship between the measures and a clear order for reading them.

## 2. Connect separate pages through one business journey

Set page names aside for a moment and follow one transaction from beginning to end.

<picture>
  <source media="(max-width: 640px)" srcset="/images/blog/insurance-platform-metrics/business-flow.en.mobile.svg" />
  <img src="/images/blog/insurance-platform-metrics/business-flow.en.svg" alt="Insurance platform journey: find a product, submit a quote request, receive a usable quote, enter the application stage, submit the application, and confirm the separately defined policy issuance outcome." loading="lazy" />
</picture>

This is an analytical outline. The actual product may skip stages or add conversations, supporting documents or payment. The final status that counts as successful policy issuance must be confirmed against the real system; a frontend page name alone is insufficient.

### An action does not necessarily mean completion

At the same stage, we can observe at least three different states.

| State | Example | Question it answers |
| --- | --- | --- |
| Intent | Click “Apply for insurance” | Did the user try to continue? |
| Task completion | The backend confirms a successful application submission | Was the submission completed? |
| Business outcome | The policy reaches the agreed successful issuance status | Did this produce valid business? |

These states are not interchangeable. A user may click several times or encounter a validation error after clicking. Even after a successful submission, subsequent processing may still be in progress.

Button clicks help explain interaction, submission results measure task completion, and final business statuses measure outcomes. Policy counts and premium amounts should come from the corresponding business records.

### Paths may differ, but analytical stages need to be comparable

Desktop web and mobile web, standard quote requests and agreement-based issuance, or new business and renewals may use different pages and entry points. Treating every click path as a separate funnel soon produces many reports that are difficult to compare.

Instead, define common business stages and map each path onto them.

| Actual path | Analytical treatment |
| --- | --- |
| Standard product enquiry or frequently used product entry | Retain the entry point as a dimension; use a consistent successful quote-request submission stage |
| Copy an existing quote request | Distinguish the original transaction from the new journey; record changes and retries within the same journey separately |
| Agreement-based issuance | Keep a path identifier and confirm which stages actually occur |
| New business or renewal | Compare business types separately, then examine their stage conversions |
| Manual or automatic quotation | Separate quotation methods when comparing success rates and waiting times |

The mapping should help readers ask: “Which kinds of business behave differently at the same stage?”

If a path skips a stage, do not force it into a funnel that includes that stage. Compare stages that both paths share, or display the paths separately.

## 3. Explain each metric group along the journey

For each stage, ask: What is the user trying to do? How do we know it is complete? If the metric changes, what should we inspect next?

### 1. Product discovery: can users find the right entry point?

Start by checking whether people use the feature.

- **Action count:** count page visits and button clicks separately. If the source uses “PV” for both, label the two measures explicitly.
- **Unique users (UV):** count distinct users performing the action, with a defined identity such as a platform account or visitor identifier.
- **Feature adoption rate:** the share of eligible active accounts that use the feature.
- **Button click-through rate:** the share of users who see the button and then click it. This requires reliable exposure records.

Feature adoption and click-through rate have different denominators. The former asks how broadly a feature is used; the latter asks how often people choose an entry point after seeing it.

If the same search button appears on several pages, include its page or location as a dimension. Combining all entry points otherwise obscures where users actually found the feature.

Share actions and unique sharers can also be measured. To determine whether sharing leads to quote requests or applications, downstream business must be traceable.

### 2. Quote requests: can users submit their requirements?

Clicking “Request a quote” does not create a valid submitted request. Track how many journeys reach the form, begin filling it out and successfully submit it.

Three useful metrics are:

- **Successfully submitted quote-request journeys:** distinct journeys with a completed submission.
- **Quote-request form completion rate:** the share of the same cohort entering the form stage that submits within the agreed observation window.
- **Form completion time:** time from entering the form stage to the first successful submission.

If form entries remain stable but completion falls, inspect required fields, validation, document uploads and backend responses. Adding more traffic to the entry point may not resolve the problem.

### 3. Quotation: do submitted requests receive a timely response?

Next, check whether each request receives a usable quote.

**Quote receipt rate** can be defined as the share of the same cohort of valid quote-request journeys receiving at least one usable quote within the agreed window.

A request may produce several quote versions or involve several quoting parties. A process funnel counts whether a journey receives a quote. A workload report can separately count quote records. These measures have different units.

Waiting time is useful, but an average can conceal a minority of very slow journeys. Show P50, the median, alongside P90 to describe both a typical wait and the slower part of the distribution.

If waiting time includes only journeys that have already received a quote, also show pending quote-request journeys and their current waiting time. Otherwise, excluding slow journeys that are still pending can make the process look faster than it is.

Show manual and automatic quotations separately. They may handle different levels of complexity, so interpret the difference alongside product, channel and document completeness.

### 4. Application entry and submission: does business continue after a quote?

Split this stage into two questions.

First, how many journeys with a usable quote enter the application stage? This describes progress after quotation, but price, coverage, customer decisions and follow-up can all influence it.

Second, how many journeys entering the application stage successfully submit an application? This is closer to completion of the form and submission task.

For the second question, a definition could be:

> **Application submission success rate = journeys from the same application-entry cohort that submit successfully within the observation window ÷ all journeys in that application-entry cohort.**

The numerator must be a subset of the denominator. Dividing “successful submissions today” by “application entries today” may mix different journeys: a submission completed today may have entered that stage yesterday.

Daily operations reports can show the number of events at each stage on a given day. A process funnel must follow the same business cohort. Both are useful, but they answer different questions.

### 5. Business outcomes: how much valid business was completed?

Outcome metrics return to a confirmed business status.

For illustration, count policies reaching successful issuance within a specified issuance-time period, excluding void records according to an agreed rule, and use the premiums recorded for that same policy set under a consistent version rule. A real report must confirm status, version, time and amount rules. Cancellations, endorsements and cash collected can have separate measures.

When the policy set and premium definition are consistent:

> **Total premium = policy count × average premium per policy.**

If total premium falls, first check whether policy count, average premium per policy, or both have changed.

- A lower policy count leads to questions about business sources, process conversion and final completion.
- A lower average premium leads to questions about product mix, sum insured, business type and pricing.

“Premium per person” also needs a defined person. A platform operator, policyholder and insured person represent different denominators and different questions.

Total and average sum insured can be additional measures, but confirm comparability before comparing across insurance lines. Values that can be added numerically are not necessarily meaningful to compare directly.

## 4. Put user and experience metrics in their business context

User scale and experience can help explain process changes, once the analytical entity is clear.

### Platform operators and policyholders are different roles

Platform operators may be sales staff, partner-channel staff or other account holders. Policyholders and insured people are roles in the insurance business. Their actual relationships depend on the platform.

Combining these identities makes activity, retention and premium-per-person measures ambiguous.

For operator accounts, measure acquisition, activity and retention. For example, “distinct accounts completing at least one agreed core business action each week” is more closely tied to process use than a login-only activity measure.

This is a proposed definition; the business goal should determine the core action. Newly created accounts and accounts using a core feature for the first time should also be named separately.

Retention can group accounts by their first completed core action and measure whether they repeat that action in a specified later week. State the cohort origin, return action and time window. “Stickiness” also needs a concrete frequency or activity ratio.

### Profiles explain differences; preferences need exposure context

Policyholder, insured-person, insurance-line and product characteristics can support segmentation: “Which kinds of business account for the change?”

Behavior can suggest preferences, but more clicks alone do not establish stronger preference. A product may receive more exposure, appear higher on a page or be selected by default. Check exposure and entry conditions when interpreting click differences.

### Look beyond failure counts to failure rates and recovery

More failures may mean more problems, or simply more business volume. Compare distinct affected journeys with the corresponding journeys making an attempt.

Record retries separately. One journey failing five times and eventually succeeding represents a different experience from five journeys each failing once and all being abandoned.

A useful report can retain:

- Failed request count, to describe the volume of technical failures.
- Distinct journeys with at least one failure, to describe business impact.
- The share of affected journeys recovering successfully within the observation window, to describe whether users can resolve the problem.

Error reasons may include validation, authentication, permissions and API timeouts; use actual error records to establish the categories. Registration, login, identity verification and online service requests can each have their own journey, linked to the application process where appropriate.

Claims amounts and claims completion belong to a separate business cycle. That part of the source mind map is still undecided, so it is not included in this application funnel.

## 5. Consistent definitions make metrics trustworthy

Two measures with the same name may still be calculated differently. A concise metric card makes core definitions reusable.

Here is an example for application submission success rate.

| Item | What to specify |
| --- | --- |
| Business question | Can journeys submit successfully after entering the application stage? |
| Unit | Distinct business journeys, rather than clicks or people |
| Denominator | Journeys first entering the application stage within the defined cohort-entry period |
| Numerator | Journeys from that denominator with backend-confirmed submission success within the observation window |
| Deduplication and versions | Treatment of retries and identification of newly initiated business |
| Time rules | A consistent time zone; retain both entry and successful submission timestamps |
| Data source | Business statuses or server-side success events; frontend tracking adds behavioral context |
| Dimensions | Product, channel, client platform, issuance mode and quotation method |
| Incomplete business | Distinguish still pending, explicitly failed and outside the observation window |

### Connect records before calculating a funnel

Ideally, an analytical journey identifier connects the stages and maps to quote requests, quotations, applications and policies. This is a data-design recommendation, not a claim that the existing system already has these fields.

A user account alone cannot distinguish several concurrent transactions. Page timestamps alone cannot reliably connect amendments, retries or activity across devices.

If one quote request ultimately produces several policies, count successful journeys and issued policies separately. Policy count divided by quote-request journey count is not an ordinary journey conversion rate.

### Allow each cohort enough observation time

Suppose the agreed window is seven days after entering a stage. A journey that entered one day ago has not had the full opportunity to complete. Comparing it directly with a cohort observed for seven days understates the newer cohort's completion rate.

Show cohorts whose observation windows are complete separately from cohorts still being observed. Seven days is illustrative; the actual window depends on the business cycle. Completions after that window can be tracked separately.

A journey that has not reached the next stage has not necessarily failed. Distinguish pending processing, abandonment, technical failure and non-completion within the time limit wherever possible.

## 6. Work through a hypothetical premium decline

How do these metrics work together? Consider a simplified example.

**All figures below are hypothetical and do not represent actual business performance.** Both cohorts begin with successful quote-request submission and have the same complete observation window. In this example, each journey can issue at most one policy. Both cohorts use the same currency and policy and premium rules.

The policy and premium figures belong to these same quote-request cohorts and represent outcomes within their respective observation windows. They are not separate platform-wide totals aggregated by issuance date.

| Stage or outcome | Previous cohort | Current cohort |
| --- | ---: | ---: |
| Successfully submitted quote-request journeys | 1,000 | 1,000 |
| Journeys receiving a usable quote | 800 | 800 |
| Journeys entering the application stage | 560 | 560 |
| Journeys submitting an application successfully | 448 | 336 |
| Successfully issued policies | 400 | 300 |
| Average premium per policy | CNY 2,000 | CNY 2,000 |
| Total premium | CNY 800,000 | CNY 600,000 |

### Step 1: confirm the results are comparable

Before explaining the decline, check that definitions, observation windows and amount rules match. Look for data delays, missing events or business-status changes.

If a definition changed, explain that first rather than interpreting it directly as weaker performance.

### Step 2: split total premium into policy count and average premium

Average premium remains CNY 2,000, while policy count falls from 400 to 300. Total premium therefore falls from CNY 800,000 to CNY 600,000, a 25% decline.

In this example, policy count accounts for the decline. The next priority is the completion process, rather than the amount on an individual policy.

### Step 3: locate the stage with the clearest change

Submitted quote requests, usable quotes and application entries are unchanged. After application entry, submission success falls from:

> 448 ÷ 560 = 80%

to:

> 336 ÷ 560 = 60%

That is a decline of **20 percentage points**. Percentage points describe the difference between two percentages.

The ratio of issued policies to successfully submitted applications is approximately 89.3% in both cohorts. In this simplified dataset, application entry to successful submission is the first stage to investigate.

This locates the change; it does not establish its cause.

### Step 4: break the change down by business segment

Segment by client platform, channel, product and issuance mode to see whether the decline is concentrated. Also check segment shares: aggregate conversion can fall because a segment performs worse or because the mix shifts toward segments with lower conversion.

If the decline is concentrated in a particular mobile-web issuance path, inspect its data entry, authentication, backend responses and retries.

### Step 5: propose an explanation and test it

Suppose validation failures also increase at one form step, while recovery after failure declines. This supports a hypothesis to test: data entry or validation may be preventing application submission.

Check the cohort's error records, form versions and status transitions to confirm whether the anomalies affect the same journeys. After a fix or adjustment, observe submission success, completion time and failure rates in cohorts with complete observation windows, along with downstream business quality.

The metrics now connect to action: a broad “premium declined” problem becomes a specific process stage that can be inspected, checked and monitored.

## Use this method in the next analysis

The framework can be applied in this order:

1. Define the business goal and final success status.
2. Map the main journey and the stages used by different paths.
3. Define counts, conversion rates and timing at key stages.
4. Specify identities, deduplication, observation windows and data sources.
5. Break changes down by product, channel, client platform and business type.
6. Use failure reasons and recovery to propose and test explanations.

For an insurance platform, the main journey follows quote requests, quotations, application entry, submission and final business outcomes. Car sales and product purchases have different stages, but the analytical order—outcome, process, explanation, action—remains useful.

A good metric framework tells readers what to examine first, where to look when something changes, and what evidence supports the next action.

---

*Source note: The example figures are hypothetical. Confirm the relevant system's business definitions and measurement rules before applying the framework.*
