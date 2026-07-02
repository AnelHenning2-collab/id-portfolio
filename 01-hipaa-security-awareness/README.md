# HIPAA Security Awareness Training — Case Study

**Format:** Self-paced interactive e-learning module (HTML/JS, ~10 minutes)
**Audience:** Non-technical administrative and clinical support staff at a small healthcare practice
**Role:** Instructional Designer (needs assessment through build)

## 1. Needs Assessment

**Business context:** Small healthcare practices (dental offices, small medical clinics) are required under HIPAA to provide security awareness training to all workforce members with access to Protected Health Information (PHI) — but most front-desk, billing, and clinical support staff have no security background and no time for a lengthy compliance course.

**The gap:** Staff generally know "don't share patient info" as a vague rule, but don't reliably recognize *specific* everyday risk scenarios — a phishing email disguised as an insurance inquiry, leaving a patient chart visible at the front desk, discussing a patient's condition within earshot of the waiting room, texting patient details to a coworker.

**Why this matters to the business:** A single reportable HIPAA breach can cost a small practice tens of thousands of dollars in fines and mandatory breach notification costs, on top of reputational damage. Annual security awareness training is also a direct HIPAA Security Rule requirement (45 CFR § 164.308(a)(5)), not optional.

**Constraint:** Staff have limited time and no patience for a dense policy readout — the training has to be short, scenario-based, and immediately applicable to their actual daily tasks.

## 2. Learning Objectives

By the end of this module, learners will be able to:
1. Identify the three categories of PHI safeguards required under HIPAA (administrative, physical, technical) in the context of their own daily tasks
2. Recognize at least four common everyday scenarios that risk a PHI breach in a small practice setting
3. Correctly identify the first step to take if they suspect a breach has occurred
4. Apply this knowledge to a realistic front-desk scenario via a scored knowledge check

## 3. Design Decisions

- **Scenario-based, not policy-recitation-based** — adult learners retain "what would you do if..." situations far better than a list of regulation citations. The module opens with a relatable scenario before any formal definitions are introduced.
- **Short and modular** — five short screens rather than one long scroll, so staff can complete it in a single break without losing their place.
- **Immediate feedback on the knowledge check** — each quiz answer explains *why* it's correct or incorrect, turning the assessment itself into a teaching moment rather than just a pass/fail gate.
- **No jargon-first approach** — technical terms (e.g., "administrative safeguards") are introduced only after the plain-language scenario that illustrates them, not before.

## 4. Storyboard

See [storyboard.md](./storyboard.md) for the full screen-by-screen structure used to build this module.

## 5. Build

Built as a single self-contained HTML/CSS/JS file — see [module.html](./module.html) — so it can be viewed directly in a browser or hosted via GitHub Pages with no build process or dependencies. In a production environment, this same structure (screens → content → knowledge check → feedback) maps directly onto authoring tools like Articulate Storyline or iSpring Suite for SCORM/LMS deployment.

## 6. Evaluation Plan

- **Level 1 (Reaction):** A one-question "was this useful?" prompt at the end of the module
- **Level 2 (Learning):** The scored knowledge check embedded in the module itself
- **Level 3 (Behavior, post-deployment):** Spot-check audits of workstation screen-lock compliance and clean-desk practice 30 days after training rollout
- **Level 4 (Results):** Track reportable incident/near-miss rate year-over-year following annual training refreshes
