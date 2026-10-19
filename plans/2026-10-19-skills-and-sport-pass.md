# Skills and Sport Proof Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Remove the artificial project whitespace, add the existing Team India motion asset as credible personal proof, and modernize the skills section around AI-native engineering capabilities.

**Architecture:** Retain the existing project grid but stop giving CodeArena a two-row track. Keep the sports media local in public and use an HTML video with a static poster fallback. Expand only the skills data and let existing capability cards render the new categories.

**Tech Stack:** React, TypeScript, CSS, Vitest, existing public MP4/JPG assets.

**Spec:** User request in this chat; code inspection found the CodeArena row span and 38rem minimum height to be the whitespace root cause.

## Global Constraints

- Do not fabricate professional AI-agent delivery claims; use capability framing and current working-tool familiarity.
- The sports asset must be muted, inline, looped, and have a still image poster.
- Reduced-motion users must see the poster instead of auto-playing media.
- Keep CodeArena’s content and its evidence unchanged while removing forced height.

## Review Focus

- Narrow viewports must stack the sports video beneath its copy without overflow.
- Video failure must leave a meaningful poster and caption.
- CodeArena must not retain either the row span or 38rem minimum height.
- Added AI capability language must describe a skill area, not an unsubstantiated shipped system.

---

### Task 1: Prove layout and content contracts

**Files:**
- Modify: src/components/Portfolio/PortfolioPage.test.tsx
- Modify: src/data/portfolio.test.ts

- [ ] **Step 1: Write failing tests** for the labelled Team India video and agentic/AI-native capability categories.
- [ ] **Step 2: Run the focused tests** and confirm they fail on the missing behavior.

### Task 2: Implement the compact project and proof-rich personal section

**Files:**
- Modify: src/index.css
- Modify: src/components/Portfolio/PortfolioPage.tsx
- Modify: src/data/portfolio.ts

- [ ] **Step 1: Remove the CodeArena row span and fixed tall minimum height** so grid track sizing follows its real content.
- [ ] **Step 2: Add the Team India video with its poster, caption, and reduced-motion fallback.**
- [ ] **Step 3: Add focused Agentic workflows and AI-native delivery capability cards.**
- [ ] **Step 4: Run focused tests, all tests, production build, and targeted lint.**
