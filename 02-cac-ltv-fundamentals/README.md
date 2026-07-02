# Understanding Customer Acquisition Cost (CAC) & LTV — Case Study

**Format:** Self-paced interactive e-learning module with a live calculator (~8 minutes)
**Audience:** New marketing coordinators/associates with no prior metrics background
**Role:** Instructional Designer (needs assessment through build)
**Source material:** Built while completing the Google Digital Marketing & E-commerce Certificate

## 1. Needs Assessment

**The gap:** Entry-level marketing hires are frequently handed campaign performance reports full of acronyms (CAC, LTV, ROAS) with no grounding in what the numbers actually mean or why they matter. They can recite definitions from a glossary but struggle to reason about whether a given number is *good* or *bad* for the business.

**Why this matters:** A marketing coordinator who understands the CAC:LTV relationship can flag a problem campaign (spending more to acquire a customer than that customer will ever be worth) instead of just reporting numbers upward without context — a real difference in how quickly someone becomes useful on a team.

**Constraint:** Most people learn formulas better by manipulating them than by reading them. A static slide with "CAC = Total Spend / New Customers" doesn't build intuition the way plugging in real numbers and watching the result change does.

## 2. Learning Objectives

By the end of this module, learners will be able to:
1. Define Customer Acquisition Cost (CAC) and Lifetime Value (LTV) in plain language
2. Calculate CAC given campaign spend and new customer count, using an interactive calculator
3. Explain why a healthy CAC:LTV ratio (generally 1:3 or better) matters to the business
4. Identify, given a scenario, whether a campaign's CAC is sustainable relative to its LTV

## 3. Design Decisions

- **Learn-by-manipulating, not learn-by-reading** — the core of this module is a live calculator where learners enter their own numbers and immediately see the CAC result, rather than a static worked example.
- **Concrete before abstract** — a relatable framing (a small coffee shop's Instagram ad spend) is introduced before the formula, so the numbers have a story attached rather than being pure arithmetic.
- **Ratio framing over isolated numbers** — the module deliberately pairs CAC against LTV throughout, since CAC alone is meaningless without knowing what a customer is worth in return.

## 4. Storyboard

See [storyboard.md](./storyboard.md).

## 5. Build

See [module.html](./module.html) — built on the shared component library (`/shared/style.css`, `/shared/module.js`) used across this portfolio, with a custom live-calculation interaction added for this module specifically.

## 6. Evaluation Plan

- **Level 1:** End-of-module reaction question
- **Level 2:** Scored knowledge check scenario (Screen 5)
- **Level 3 (on the job):** New hire is asked to calculate CAC:LTV for one real active campaign within their first two weeks, reviewed with their manager
- **Level 4:** Reduced escalation of "is this campaign working?" questions to senior marketers over the new hire's first quarter
