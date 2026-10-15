---
slug: insurance-platform-metrics-framework
lang: en
title: "Insurance platform metrics: tracing the journey from quote request to policy issuance"
description: "Build a metric framework around product discovery, quote requests, quotations, applications and policy issuance. Define consistent measures and use a hypothetical premium decline to work through the analysis."
date: 2026-10-11
category: metrics
showIntroToc: true
tags: ["Data analysis", "Metric frameworks", "Insurance operations", "Process analysis"]
---

An operator finds a product, requests a quote, receives an offer and submits an insurance application for a customer. Each stage creates activity, but more button clicks do not necessarily mean more issued policies.

Suppose issuance premium falls from CNY 800,000 to CNY 600,000. Should we check traffic, pricing or the application process first? We will follow a request through to issuance and investigate with hypothetical figures. The scope is platform usage and applications, rather than insurer-wide performance or staff assessment.

## 1. What are we trying to improve?

The goal here is to **help more quote requests reach policy issuance, with fewer failures and unnecessary waits.** Policy count and issuance premium show the outcome; conversion, duration and failures help us investigate it.

The immediate problem determines what to check first. Repeated submission failures call for submission success and error reasons. Slow quotation calls for waiting times. Giving every metric equal prominence makes those priorities harder to see.

These measures can sit in separate parts of the dashboard.

| Layer | Question | Example metrics |
| --- | --- | --- |
| Business outcomes | How much valid business was completed? | Issued policy count, total premium, average premium per policy |
| Process efficiency | Where does business progress or stop? | Stage conversion rates, waiting time, completion time |
| Adoption and quality | Who uses the platform, and can they complete their tasks? | Feature users, activity and retention, failure rate, error reasons |

Channel, product, client platform, issuance mode and user type are dimensions for breaking down these metrics. For example, “mobile web” is a value of the client-platform dimension; “application submission success rate on mobile web” is a metric.

Put policy count and issuance premium first, then investigate the process. When premium falls, distinguish fewer policies from a lower average premium per policy. A drop in policy count is a reason to check where journeys stopped.

### Start with the complete mind map

The overview has eight modules. On a first reading, follow business outcomes and the application funnel. Users, features and experience help explain the reasons; claims form a separate optional process. Labels such as B01 and F02 are lookup references, so start with the names and their purposes.

<mind-map-viewer>
  <div class="mind-map-toolbar" data-map-toolbar hidden>
    <strong>KPI overview</strong>
    <div class="mind-map-controls">
      <button type="button" data-map-action="out" aria-label="Zoom out">−</button>
      <output aria-live="polite"></output>
      <button type="button" data-map-action="in" aria-label="Zoom in">+</button>
      <button type="button" data-map-action="width">Fit width</button>
      <button type="button" data-map-action="fit">Fit map</button>
      <button type="button" data-map-action="actual">100%</button>
    </div>
  </div>
  <figure class="insurance-map-figure">
    <div class="mind-map-viewport" data-map-viewport role="region" aria-label="Scrollable insurance mind map · KPI overview" tabindex="0">
      <div class="mind-map-canvas"><a href="/images/blog/insurance-platform-metrics/framework-overview.en.png" target="_blank" rel="noopener"><img data-map-image width="2638" height="4000" src="/images/blog/insurance-platform-metrics/framework-overview.en.png" alt="KPI overview · Start with the relationships between the eight modules, then follow the article stage by stage." loading="lazy" /></a></div>
    </div>
    <figcaption>Start with the relationships between the eight modules, then follow the article stage by stage. <a href="/images/blog/insurance-platform-metrics/framework-overview.en.png" target="_blank" rel="noopener">Open original</a></figcaption>
  </figure>
  <p class="mind-map-hint">Zoom in, then scroll horizontally or vertically. Use “Fit map” to return to the overview.</p>
</mind-map-viewer>

<details class="insurance-metric-note">
  <summary>What does each module explain? (expand table)</summary>

| Module | Measures or content | Question |
| --- | --- | --- |
| Business outcomes and scale | Issued policies, issuance premium, averages, cash receipts | How much business completed, and what explains the amount? |
| Application funnel and efficiency | Stage and end-to-end conversion, non-conversion, time | Where does progress stop or slow down? |
| User scale and retention | Registration, DAU/WAU/MAU, exact-day retention, stickiness | Who continues to use the platform? |
| Product feature usage | Clicks, users, adoption, CTR, search results | Are entry points used, and do they deliver a useful response? |
| Profiles and behavior | Operator accounts, policyholders, insured parties, products | Which segment accounts for the change? |
| Experience and service quality | Failures, reasons, service completion and time | How much business is affected, and do services complete? |
| Claims, optional | Closed paid claims, payment transactions, line distribution | How do claim volumes and actual payments change? |
| Dimensions and data governance | IDs, time zones, currencies, windows, states, freshness | Can reports explain results using consistent rules? |

</details>

## 2. How does one insurance journey reach completion?

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

Instead, define common business stages and map each path onto them. Keep business type separate from entry source: new business and renewal are business types, while frequent-product shortcuts, copy actions and buttons can be entry points or derived paths. They are not all mutually exclusive types of new business.

| Actual path | Analytical treatment |
| --- | --- |
| Standard product enquiry or frequently used product entry | Retain the entry point as a dimension; use a consistent successful quote-request submission stage |
| Copy an existing quote request | Distinguish the original transaction from the new journey; record changes and retries within the same journey separately |
| Agreement-based issuance | Keep a path identifier and confirm which stages actually occur |
| New business or renewal | Compare business types separately, then examine their stage conversions |
| Manual or automatic quotation | Separate quotation methods when comparing success rates and waiting times |
| Batch applications | Link the batch to its child records; measure batch and child completion separately |
| Temporary cover converted to a permanent policy | Link the temporary and permanent records and define counting rules to avoid duplicate business |

The mapping should help readers ask: “Which kinds of business behave differently at the same stage?”

If a path skips a stage, do not force it into a funnel that includes that stage. Compare stages that both paths share, or display the paths separately.

## 3. Answer one question at each stage

Follow one application through the stages, separating each action from its business result.

### 1. Product discovery: can users find the right entry point?

- **Views and clicks:** count page views and button clicks separately.
- **Users:** count different accounts using the entry point. Ten clicks by one account still mean one user.
- **Feature adoption:** among active accounts with permission and an opportunity to use a feature, how many actually use it?

If clicks are low, check whether the entry point is easy to find. If clicks are high but quote requests do not follow, inspect search results, page guidance and the next step.

<details class="insurance-metric-note">
  <summary>Calculation details: CTR, adoption, search and sharing</summary>

- **Page views (PV) and button clicks:** count the two separately. Count valid click events, deduplicated by event_id; a new operation during a retry can remain a separate event.
- **Unique users (UV):** count distinct users performing the action, with a defined platform account or visitor identity.
- **Feature adoption rate:** accounts using the feature divided by active accounts eligible to use it and with an opportunity to do so.
- **Button CTR, by impression instance (P04):** button impressions receiving at least one click divided by valid visible button impressions. Join clicks to exposures with impression_id; repeated clicks on the same impression contribute one clicked impression.

The denominators differ. Adoption measures coverage among eligible active accounts; impression CTR measures response after a valid exposure.

A separate user click rate can count distinct clickers among the same exposed users divided by distinct exposed users. That has a different unit and needs its own name. Without reliable exposure records, do not estimate either click rate.

For example, 40 users generate 100 valid button impressions. Twelve users click 20 of those impressions, producing 35 click events. Impression CTR is 20 ÷ 100 = 20%; user click rate is 12 ÷ 40 = 30%. The 35 events describe operation volume and cannot directly serve as the numerator for either rate. These figures illustrate the different units only.

Search valid-result rate P06 is successful search requests returning at least one valid result divided by all valid search requests. Keep timeouts and API errors in the denominator and show their reasons separately. Usage and useful results answer different questions.

If the same search button appears on several pages, include its page or location as a dimension. Combining all entry points otherwise obscures where users actually found the feature.

Retain share actions and unique sharers. Use successful sharing when a receipt is available; otherwise call it sharing initiated, which does not establish delivery to the recipient. Downstream requests or applications require traceable business records.

</details>

### 2. Quote requests: can users submit their requirements?

Clicking “Request a quote” does not create a valid submitted request. Track how many journeys reach the form, begin filling it out and successfully submit it.

Three useful metrics are:

- **Successfully submitted quote-request journeys:** distinct journeys with a completed submission.
- **Quote-request form completion rate:** the share of the same cohort entering the form stage that submits within the agreed observation window.
- **Form completion time:** time from entering the form stage to the first successful submission.

An observation window gives the next action time to happen. For example, a seven-day window after form entry gives every journey seven days to submit. A group selected from the same starting point is called a cohort; it becomes mature only after the full window has elapsed. Seven days is illustrative, not a fixed industry rule.

If form entries remain stable but completion falls, inspect required fields, validation, document uploads and backend responses. Adding more traffic to the entry point may not resolve the problem.

### 3. Quotation: do submitted requests receive a timely response?

**Quote receipt rate** measures the share of the same cohort of valid quote-request journeys receiving at least one usable quote within the agreed window.

A request may produce several quote versions or involve several quoting parties. A process funnel counts whether a journey receives a quote. A workload report can separately count quote records. These measures have different units.

Also ask how long people wait. P50 is the median wait; P90 helps reveal the slower part of the process. For example, a quote-wait P90 of 30 minutes means roughly nine out of ten journeys that have received a quote waited no more than 30 minutes. An average alone can hide a few particularly slow journeys.

If waiting time includes only journeys that have already received a quote, also show pending quote-request journeys and their current waiting time. Otherwise, excluding slow journeys that are still pending can make the process look faster than it is.

<details class="insurance-metric-note">
  <summary>A closer comparison: manual and automatic quotation</summary>

Show manual and automatic quotations separately. Quotation success rate F05 follows the same mature quotation-processing cohort: distinct requests obtaining a valid quote within W divided by distinct requests submitted for quotation processing. The methods may handle different levels of complexity, so interpret the difference alongside product, channel and document completeness.

Retain the initial and final quotation methods, manual takeover and automatic fallback. Grouping by final method describes outcomes. To evaluate automation, also follow the original cohort assigned to automatic processing; otherwise automatic failures transferred to manual work disappear from the automatic group.

Within that original automatic cohort, distinguish success during automatic processing, transfer to manual handling and eventual receipt of a quote. A quote obtained after manual takeover is an eventual business success, not an automatic-processing success.

</details>


### 4. Application entry and submission: does business continue after a quote?

After quotation, separate two steps:

- **Entering the application stage.** Price, coverage, the customer’s decision and the operator’s follow-up can all affect this step.
- **Submitting successfully after entry.** This is where to inspect form completion and submission.

Calculate the second measure within the same cohort:

> **Application submission success rate = journeys from this application-entry cohort submitting successfully within the agreed window ÷ all journeys in that same cohort.**

The numerator must be a subset of the denominator. Dividing “successful submissions today” by “application entries today” may mix different journeys: a submission completed today may have entered that stage yesterday.

A daily report counts what happened that day. Conversion analysis follows the same journeys over time; dividing those daily totals does not produce a matched-cohort conversion rate.

<details class="insurance-metric-note">
  <summary>Calculation details: matching journeys, windows and end-to-end conversion</summary>

Successful application submissions B09 count distinct application_id records accepted by the backend, rather than clicks. Stage non-conversion F03 is 1 − F01 for the same mature cohort. Non-conversion can include waiting, rejection or completion outside W; it is not all voluntary abandonment.

Request-to-issuance conversion F02 follows a mature cohort of initiated quote requests: requests with at least one successfully issued policy within window W divided by all requests in that cohort. Requests still without a quote or failing later remain in the denominator; one request producing several policies contributes one successful request.

Specify where the observation clock starts. End-to-end conversion starts at request initiation; a single-stage measure can start at that stage's entry. Do not silently mix these windows within one funnel.

</details>


### 5. Business outcomes: how much valid business was completed?

Start with two numbers: how many policies were successfully issued, and how much issuance premium those same policies produced. Use backend-confirmed business outcomes; clicks cannot replace policy counts.

When the policy set and premium definition are consistent:

> **Total premium = policy count × average premium per policy.**

If total premium falls, first check whether policy count, average premium per policy, or both have changed.

- A lower policy count leads to questions about business sources, process conversion and final completion.
- A lower average premium leads to questions about product mix, sum insured, business type and pricing.

<details class="insurance-metric-note">
  <summary>Amount details: first issuance, cash receipts and premium per policyholder</summary>

Here B01 counts distinct policy_id records first confirmed as successfully issued by the backend within the period. B02 sums their premium snapshots at first issuance, separately by currency. Track later cancellations, endorsements, refunds and invalidating reversals separately; do not overwrite historical issuance snapshots.

First-issuance volume and policies still active at a particular time are separate measures. Issuance premium is also distinct from cash collected, earned premium or net premium. Cash receipts B08 use deduplicated successful payment transactions and their receipt dates, with refunds shown separately. Issuance and payment may occur on different dates.

Premium per policyholder B05 is B02 divided by distinct policyholder_id values associated with that same issued-policy set. A policyholder may be an individual or an organization, so the denominator is the policyholding entity. Operator accounts and insured parties cannot substitute for it; other per-entity measures need separate names.

Total and average sum insured can be additional measures, but confirm comparability before comparing across insurance lines. Values that can be added numerically are not necessarily meaningful to compare directly.

</details>


## 4. Who uses the platform, and where do problems occur?

A process change may be concentrated in one user group, product or entry point. Break it down before assuming it affects everyone.

### Platform operators and policyholders are different roles

Platform operators may be sales staff, partner-channel staff or other account holders. Policyholders and insured people are roles in the insurance business. Their actual relationships depend on the platform.

Combining these identities makes activity, retention and premium-per-person measures ambiguous.

For operator accounts, measure newly registered users U01 and distinct accounts performing a meaningful business action within a day, week or month: DAU, WAU and MAU U02. Product queries, search, request initiation, application submission and service activity are candidate events. Version the list against the business goal; mere exposure is not business activity. Use consistent calendar-week, calendar-month and time-zone rules.

Name newly registered accounts separately from first-time business users. Exclude test, machine and internal operational accounts using explicit rules. If employees are real business users, do not exclude them simply because they are employees.

Exact-day retention U03 uses registration-day cohorts: distinct users performing a valid action on day N divided by users in that registration cohort, for N = 1, 7 or 30. D7 means returning on the seventh day, not at any point during the first seven days. Compare only cohorts with a complete observation period. This is platform-user retention, not policy renewal.

Weekly retention after a first core action can be an additional activation measure, displayed separately from registration-day retention.

Stickiness U04 is the month's average DAU divided by that month's MAU; a single day's DAU cannot stand for the month. Interpret usage frequency alongside user roles and the insurance business cycle.

### Profiles explain differences; preferences need exposure context

Policyholder, insured-person, insurance-line and product characteristics can support segmentation: “Which kinds of business account for the change?”

Behavior can suggest preferences, but more clicks alone do not establish stronger preference. A product may receive more exposure, appear higher on a page or be selected by default. Check exposure and entry conditions when interpreting click differences.

### Look beyond failure counts to failure rates and recovery

More failures may mean more problems, or simply more business volume. Distinguish request-level results from affected journeys.

A request is one operation sent to the system, such as submitting a form. The same application can be submitted repeatedly, so failure attempts and affected business journeys must be counted separately.

Failed requests E01 are deduplicated by request_id. In this example, both explicit failures and confirmed timeouts enter the failure numerator: request failure rate E02 = (explicitly failed requests + confirmed timeouts) ÷ valid requests with a terminal outcome. Use the same completion-time period and one terminal outcome per request as of the reporting cutoff. Show pending requests separately and retain error and timeout reasons.

For example, 100 terminal requests comprise 90 successes, 8 explicit failures and 2 confirmed timeouts. Failure rate is (8 + 2) ÷ 100 = 10%. Another 5 pending requests do not enter this denominator. If the actual system defines timeouts separately, give that measure a distinct name and show its rate alongside failures; do not silently combine the definitions.

Affected-journey rate is distinct journeys with at least one failure divided by journeys attempting that operation in the same cohort. It describes business impact rather than request failure probability.

Record retries separately. One journey failing five times and eventually succeeding represents a different experience from five journeys each failing once and all being abandoned.

The report can show:

- Failed request count, to describe unsuccessful outcomes, separating validation, permissions and technical faults by reason.
- Distinct journeys with at least one failure, to describe business impact.
- The share of affected journeys recovering successfully within the observation window, to describe whether users can resolve the problem.

Error reasons may include validation, authentication, permissions and API timeouts; use actual error records to establish the categories. Registration, login, identity verification and online service requests can each have their own journey, linked to the application process where appropriate.

Service completion rate E04 follows the same mature service-request cohort. Service completion time E05 shows P50/P90 for completed requests, alongside pending volume and age. Compare services of the same type.

Claims form an optional separate cycle. C01 counts closed claims with cumulative paid amounts above zero, by closure date. C02 sums actual successful claim-payment transactions by payment date. C03 describes insurance-line distribution within the C01 set. Closure and payment may occur in different periods: C02 is not simply cumulative payments on the C01 claims. Enable this module when claims-system data are available; do not fold it into the application funnel.

## 5. Why can the same metric produce different answers?

Two people may both report “submission success” while one divides by clicks and the other by journeys entering the application stage. Writing down the rules beforehand saves a later reconciliation. Here is a definition table for application submission success.

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

Check duplicate or missing IDs, status ordering, missing joins, duplicates across devices, unusual amounts and late events. Show a zero-denominator measure as N/A; mark unknown or uncollected values as missing. Missing data are not zero.

### Allow each cohort enough observation time

Suppose the agreed window is seven days after entering a stage. A journey that entered one day ago has not had the full opportunity to complete. Comparing it directly with a cohort observed for seven days understates the newer cohort's completion rate.

Show cohorts whose observation windows are complete separately from cohorts still being observed. Seven days is illustrative; the actual window depends on the business cycle. Completions after that window can be tracked separately.

A journey that has not reached the next stage has not necessarily failed. Distinguish pending processing, abandonment, technical failure and non-completion within the time limit wherever possible.

## 6. Work through a 25% premium decline

Return to the opening question: issuance premium has fallen from CNY 800,000 to CNY 600,000. Where should we look?

**The figures and investigation in this section are hypothetical.** Compare the cohorts under these conditions:

- Compare two cohorts of 1,000 successfully submitted quote requests. Each journey is observed for the same W days from quote-request submission, and every observation window has ended.
- Stages occur in order within the same journey. Count each journey once per stage, with at most one issued policy per journey.
- Policies and premiums are the outcomes of those same cohorts within W, in CNY, using the same first-issuance rules. These are not platform-wide monthly totals grouped by issuance date.

| Stage or outcome | Previous cohort | Current cohort |
| --- | ---: | ---: |
| Successfully submitted quote-request journeys | 1,000 | 1,000 |
| Journeys receiving a usable quote | 800 | 800 |
| Journeys entering the application stage | 560 | 560 |
| Journeys submitting an application successfully | 448 | 336 |
| Successfully issued policies | 400 | 300 |
| Average premium per policy | CNY 2,000 | CNY 2,000 |
| Total premium | CNY 800,000 | CNY 600,000 |

This is the partial funnel after successful quote-request submission. It excludes requests initiated but not submitted, so it is not the end-to-end F02 defined earlier.

### Step 1: confirm the results are comparable

Check definitions, observation windows and premium rules before explaining the decline. Data delays, missing events or changed business statuses can also change the reported figures.

If the definition changed, establish its effect before treating the difference as weaker business performance.

### Step 2: split total premium into policy count and average premium

Average premium remains CNY 2,000. Policy count falls from 400 to 300, so total premium falls from CNY 800,000 to CNY 600,000: a 25% decline.

The average has not changed. The next question is where the 100 missing policies were lost along the process.

### Step 3: locate the stage with the clearest change

Divide adjacent stage counts from the main table. Every row here uses the same W-day window starting at quote-request submission.

| Stage | Previous cohort | Current cohort |
| --- | ---: | ---: |
| Submitted request → usable quote | 800 ÷ 1,000 = 80% | 800 ÷ 1,000 = 80% |
| Usable quote → application entry | 560 ÷ 800 = 70% | 560 ÷ 800 = 70% |
| Application entry → successful submission | 448 ÷ 560 = 80% | 336 ÷ 560 = 60% |
| Successful submission → issuance | 400 ÷ 448 ≈ 89.3% | 300 ÷ 336 ≈ 89.3% |

The change is in application entry to successful submission: 80% falls to 60%, a drop of **20 percentage points**. At the earlier 80% rate, the current cohort would have 448 submissions rather than 336, a difference of 112. Post-submission issuance conversion is unchanged, while issued policies fall from 400 to 300.

This accounts for the numerical difference in the table. It does not establish a system fault: customers postponing a decision, unfinished forms and validation failures could all stop a journey here.

### Step 4: break the change down by business segment

Start with the client platform used when entering the application stage. Assign each journey to one group, even if the operator later switches devices. Suppose the 560 application entries break down as follows:

| Platform at application entry | Previous: submissions / entries | Current: submissions / entries |
| --- | ---: | ---: |
| Desktop web | 224 / 280 = 80% | 224 / 280 = 80% |
| Mobile web | 224 / 280 = 80% | 112 / 280 = 40% |
| Total | 448 / 560 = 80% | 336 / 560 = 60% |

Desktop web is unchanged. Mobile web has 112 fewer submissions, matching the gap in the main table. Entry counts and platform shares are also unchanged, so a shift toward mobile web does not explain this example. Investigate mobile submission first, then narrow it by product, channel and form version.

In actual analysis, inspect both conversion within each segment and the segments' shares. Aggregate conversion can fall with no change within any segment if more business moves to a lower-converting segment.

### Step 5: propose an explanation and test it

Continue the hypothetical investigation: one mobile form version has more validation failures and a lower rate of successful resubmission after failure. That makes the form or its validation rules worth investigating; it does not explain the entire decline yet.

1. **Match the affected journeys.** Join error logs to journey IDs and check that the errors occur in this cohort's unsuccessful journeys. Repeated retries within one journey still mean one affected journey.
2. **Inspect the change.** Compare the form release, error codes and field rules, and try to reproduce a mismatch between frontend and backend validation. Investigate journeys without errors separately for postponement, exit or requests for more information.
3. **Assess the fix.** If a fault is confirmed and repaired, compare submission success, duration, recovery after failure and subsequent issuance for comparable business. Keep the same complete observation window. Also track invalidated policies, cancellations and refunds, rather than improving submissions at the expense of downstream quality.

Where appropriate, randomly assign eligible business to the repaired version or the existing version. Do not delay an urgent fix to preserve an experiment. If only before-and-after comparison is possible, check channel mix, product mix and seasonal changes; not every improvement can be attributed to the fix. Keep sample sizes visible so a change of a few journeys is not mistaken for a reliable improvement.

## 7. Establish the core metrics, then expand

For the first dashboard, make policy count, premium, main-funnel conversion and failures reliable. Other measures can follow.

- **P0: establish issuance and application measures.** Confirm issuance and submission states and the relationships between business IDs. Establish B01/B02/B09, F01/F02 and E01/E02; first make counts, amounts, conversion and failure measures reliable.
- **P1: identify where the differences occur.** Add users, features, timing and profiles to explain differences by platform, product, channel and role.
- **P2: connect claims and other services.** Add claims, optional services and finer dimensions while retaining their separate business cycles.

Before launch, agree who owns business definitions, who maintains calculations and how often data refresh. Establish a reliable baseline before setting targets. Choose W, time zones and valid actions for the actual business.

## Use this method in the next analysis

For car sales, a starting sketch might be lead → test drive → quote → contract → delivery. For shopping, it might be browsing → cart → order → payment → fulfillment. Confirm the stages against the product: some purchases may skip the cart entirely.

Success, counting units and waiting times need fresh definitions. An insurance quote request, a car-sales lead and a shopping order are different entities. What carries over is the habit of checking the outcome, then following the process back to the records that explain it.

## Framework and mind-map appendix

The overview appears earlier in the article. The two maps below contain the 33 metric definitions and business paths. Check their business names and state mappings against the actual platform before using them.

The overview above introduces the whole framework. Expand any of the two detailed maps below to zoom and scroll within the page, or open the original image and the three-page PDF.

<p><a href="/downloads/insurance-platform-metrics/insurance-framework.en.pdf" target="_blank" rel="noopener">Open the three-page PDF (English)</a></p>

<details class="insurance-map-sheet">
  <summary>02 · Metric definitions and calculations</summary>

<mind-map-viewer>
  <div class="mind-map-toolbar" data-map-toolbar hidden>
    <strong>Metric definitions and calculations</strong>
    <div class="mind-map-controls">
      <button type="button" data-map-action="out" aria-label="Zoom out">−</button>
      <output aria-live="polite"></output>
      <button type="button" data-map-action="in" aria-label="Zoom in">+</button>
      <button type="button" data-map-action="width">Fit width</button>
      <button type="button" data-map-action="fit">Fit map</button>
      <button type="button" data-map-action="actual">100%</button>
    </div>
  </div>
  <figure class="insurance-map-figure">
    <div class="mind-map-viewport" data-map-viewport role="region" aria-label="Scrollable insurance mind map · Metric definitions and calculations" tabindex="0">
      <div class="mind-map-canvas"><a href="/images/blog/insurance-platform-metrics/framework-definitions.en.png" target="_blank" rel="noopener"><img data-map-image width="2091" height="12000" src="/images/blog/insurance-platform-metrics/framework-definitions.en.png" alt="Metric definitions and calculations · Formulas, measurement rules, purposes and proposed data sources for all 33 metrics." loading="lazy" /></a></div>
    </div>
    <figcaption>Formulas, measurement rules, purposes and proposed data sources for all 33 metrics. <a href="/images/blog/insurance-platform-metrics/framework-definitions.en.png" target="_blank" rel="noopener">Open original</a></figcaption>
  </figure>
  <p class="mind-map-hint">Zoom in, then scroll horizontally or vertically. Use “Fit map” to return to the overview.</p>
</mind-map-viewer>
</details>

<details class="insurance-map-sheet">
  <summary>03 · Business paths and the common funnel</summary>

<mind-map-viewer>
  <div class="mind-map-toolbar" data-map-toolbar hidden>
    <strong>Business paths and the common funnel</strong>
    <div class="mind-map-controls">
      <button type="button" data-map-action="out" aria-label="Zoom out">−</button>
      <output aria-live="polite"></output>
      <button type="button" data-map-action="in" aria-label="Zoom in">+</button>
      <button type="button" data-map-action="width">Fit width</button>
      <button type="button" data-map-action="fit">Fit map</button>
      <button type="button" data-map-action="actual">100%</button>
    </div>
  </div>
  <figure class="insurance-map-figure">
    <div class="mind-map-viewport" data-map-viewport role="region" aria-label="Scrollable insurance mind map · Business paths and the common funnel" tabindex="0">
      <div class="mind-map-canvas"><a href="/images/blog/insurance-platform-metrics/framework-flows.en.png" target="_blank" rel="noopener"><img data-map-image width="4000" height="6177" src="/images/blog/insurance-platform-metrics/framework-flows.en.png" alt="Business paths and the common funnel · Entry points, batch business, renewals, services and exceptions." loading="lazy" /></a></div>
    </div>
    <figcaption>Entry points, batch business, renewals, services and exceptions. <a href="/images/blog/insurance-platform-metrics/framework-flows.en.png" target="_blank" rel="noopener">Open original</a></figcaption>
  </figure>
  <p class="mind-map-hint">Zoom in, then scroll horizontally or vertically. Use “Fit map” to return to the overview.</p>
</mind-map-viewer>
</details>

The maps are native Xmind exports and retain the software watermark.

---

*Source note: The example figures are hypothetical. Confirm the relevant system's business definitions and measurement rules before applying the framework.*
