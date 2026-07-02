# NIST Cybersecurity Framework Basics for Non-IT Staff — Case Study

**Format:** Self-paced interactive e-learning module (~8 minutes)
**Audience:** Non-IT employees at a small-to-midsize organization (managers, operations staff) who need working literacy in NIST CSF, not technical mastery
**Role:** Instructional Designer (needs assessment through build)
**Grounded in:** NIST CSF documentation experience from GRC work at Logical Coders

## 1. Needs Assessment

**The gap:** Organizations adopting the NIST Cybersecurity Framework often train only their IT/security staff in depth, while managers and department heads — who are expected to support the framework's rollout and report on it — are handed a dense NIST publication with no on-ramp. They nod along in meetings without a working mental model of the five functions.

**Why this matters:** A manager who can't distinguish "Identify" from "Respond" can't meaningfully contribute to a risk conversation, flag a gap in their own department, or explain the framework to their team — which slows adoption and creates a bottleneck back to the security team for questions that shouldn't need an expert.

**Constraint:** The NIST CSF is inherently abstract (five functions, dozens of subcategories). The training has to build a simple, memorable mental model first, before any detail — otherwise learners retain nothing usable.

## 2. Learning Objectives

By the end of this module, learners will be able to:
1. Name and describe, in plain language, the five NIST CSF core functions (Identify, Protect, Detect, Respond, Recover)
2. Match a everyday workplace scenario to the correct function
3. Explain why their own department has a role in the framework, not just IT
4. Correctly categorize a realistic incident scenario into the right function via a knowledge check

## 3. Design Decisions

- **A memorable five-part structure, reinforced visually** — each function gets a consistent icon and one-line plain-language definition, repeated throughout so learners build a stable mental model rather than five isolated facts.
- **Scenario matching over definition memorization** — the core interaction has learners match real workplace situations to functions, since that's the actual skill they need (recognizing where something fits), not reciting NIST's official wording.
- **Explicitly non-technical framing** — deliberately avoids IT jargon (no discussion of specific controls or technical subcategories), since the audience's job is to understand the *shape* of the framework, not implement it.

## 4. Storyboard

See [storyboard.md](./storyboard.md).

## 5. Build

See [module.html](./module.html) — built on the shared portfolio component library.

## 6. Evaluation Plan

- **Level 1:** End-of-module reaction question
- **Level 2:** Scenario-matching knowledge check
- **Level 3:** Department heads asked to identify one example from their own team's work for each of the five functions, reviewed in a follow-up workshop
- **Level 4:** Reduction in "who owns this?" escalations to the security team during the framework's first two audit cycles
