# Storyboard — HIPAA Security Awareness Training

Fixed-template format: each screen is defined by the same five fields, filled in sequence rather than freely laid out. This keeps the sequencing decision (what goes where) separate from the visual layout decision (how it looks), which the build step (module.html) handles with a consistent, reusable screen template.

---

### Screen 1 — Hook / Scenario

| Field | Content |
|---|---|
| **Objective served** | Establish relevance before any formal content |
| **On-screen text** | "It's 4:45pm. A patient's chart is still open on the front-desk monitor while you help someone check out. Is that a problem?" |
| **Visual** | Simple illustrated front-desk scene (static image or icon-based) |
| **Interaction** | "Yes" / "No" / "Not sure" buttons — no wrong answer, just primes thinking |
| **Transition** | Auto-advances to Screen 2 regardless of answer |

### Screen 2 — Core Concept: The Three Safeguards

| Field | Content |
|---|---|
| **Objective served** | Objective 1 |
| **On-screen text** | "HIPAA requires three types of safeguards to protect patient information: Administrative (policies & training), Physical (locked doors, screen privacy), Technical (passwords, encryption). The scenario you just saw is a **Physical Safeguard** issue." |
| **Visual** | Three-icon row (clipboard / door-lock / computer-lock), each expandable on click |
| **Interaction** | Click each icon to reveal one real example per category |
| **Transition** | "Next" button |

### Screen 3 — Common Risk Scenarios

| Field | Content |
|---|---|
| **Objective served** | Objective 2 |
| **On-screen text** | "Here are four situations that happen in almost every practice. Tap each one to see why it's a risk." |
| **Visual** | Four scenario cards: (1) unlocked screen, (2) hallway conversation about a patient, (3) texting patient details to a coworker, (4) suspicious "insurance verification" email |
| **Interaction** | Click-to-reveal explanation under each card |
| **Transition** | "Next" button, enabled only after all four cards are viewed (ensures exposure to all content, not just speed-clicking through) |

### Screen 4 — What To Do If You Suspect a Breach

| Field | Content |
|---|---|
| **Objective served** | Objective 3 |
| **On-screen text** | "If you think patient information may have been exposed — even if you're not sure — the first step is always the same: tell your Privacy Officer immediately. You will not be punished for reporting a possible mistake." |
| **Visual** | Simple 3-step numbered flow: Notice → Report to Privacy Officer → Officer investigates |
| **Interaction** | None — this screen is deliberately simple and declarative, since it's the single most important action step |
| **Transition** | "Take the Knowledge Check" button |

### Screen 5 — Knowledge Check

| Field | Content |
|---|---|
| **Objective served** | Objective 4 (applied assessment) |
| **On-screen text** | Scenario: "A coworker asks you to text her a patient's test results because she's running late. What do you do?" |
| **Visual** | Multiple choice: (a) Text it, it's faster (b) Tell her to check the secure patient portal instead (c) Ignore the request |
| **Interaction** | Select an answer → immediate feedback explaining why (b) is correct and why (a) is a Technical Safeguard violation |
| **Transition** | Completion screen with Level-1 reaction question ("Was this useful? Yes/No") |

---

**Why this template format, not free-form layout:** each screen is defined by the same five fields in the same order every time. Sequencing decisions (what content goes on which screen) are made once, in this table, separate from visual design decisions (which the HTML build handles with one reusable screen template) — this keeps the two cognitively different tasks from having to happen at the same time.
