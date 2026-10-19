# Motion and Transformer Visualization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the portfolio a premium, technically credible motion system anchored by an interactive, accessible Three.js Transformer reverse-engineering visual.

**Architecture:** Keep motion concerns in small reusable React components. The portfolio page owns reveal choreography and persuasive copy; `TransformerVisualizer` owns semantic diagram and lazy visibility gating; a separately loaded Three scene owns WebGL rendering, so the larger dependency is not part of the initial interaction path.

**Tech Stack:** React 18, TypeScript, CSS animations, IntersectionObserver, Three.js, @react-three/fiber, Vitest, Testing Library.

**Spec:** User request in this chat: make the portfolio more motion-led and detail-oriented, strengthen recruiter-facing positioning without fabricating claims, and add a Three.js Transformer reverse-engineering motion/diagram.

## Global Constraints

- Use the installed motion-design skill’s premium-technical direction: restrained, purposeful, and accessible.
- Respect `prefers-reduced-motion`; the explanatory Transformer diagram must remain useful without animation or WebGL.
- Load the Three.js canvas only after the Transformer card approaches the viewport and WebGL is available.
- Retain only claim-supported professional outcomes; confident copy must not invent metrics or experience.
- The Vite output directory is `docs/`; plans are stored in `plans/` so builds do not remove them.

## Review Focus

- Browsers without WebGL must show the complete static Transformer sequence instead of a blank canvas.
- Browsers without IntersectionObserver must still reveal the static diagram and portfolio content.
- Reduced-motion users must see a stable diagram with no continuous 3D movement.
- The 3D canvas must not become an accessible duplicate of the adjacent textual explanation.
- The public page must preserve external-link safety (`target="_blank"` with `rel="noreferrer"`).

---

### Task 1: Motion primitives and copy choreography

**Files:**
- Create: `src/components/Portfolio/Reveal.tsx`
- Create: `src/components/Portfolio/Reveal.test.tsx`
- Modify: `src/components/Portfolio/PortfolioPage.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Produces: `Reveal({ children, className?, delay? })` which uses IntersectionObserver when available and immediately reveals when it is unavailable.
- Consumes: existing portfolio sections and CSS class names.

- [ ] **Step 1: Write failing tests** for immediate rendering without IntersectionObserver and semantic content preservation.
- [ ] **Step 2: Run the focused test** and confirm it fails because `Reveal` does not exist.
- [ ] **Step 3: Implement `Reveal`** with viewport-triggered `is-visible` state and a no-observer fallback.
- [ ] **Step 4: Apply `Reveal` and the approved confident copy** to the hero, work, and contact areas; add transform/opacity-only entrance and interaction CSS.
- [ ] **Step 5: Run the focused test and full suite** and confirm they pass.

### Task 2: Transformer visual system

**Files:**
- Create: `src/components/Portfolio/TransformerVisualizer.tsx`
- Create: `src/components/Portfolio/TransformerVisualizer.test.tsx`
- Create: `src/components/Portfolio/TransformerScene.tsx`
- Modify: `src/components/Portfolio/PortfolioPage.tsx`
- Modify: `src/index.css`
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Produces: `TransformerVisualizer()` with a readable stage sequence: Input tokens, attention heads, feed-forward network, and next-token output.
- Consumes: `Reveal` behavior and lazy `TransformerScene` import.

- [ ] **Step 1: Add failing tests** asserting the labelled reverse-engineering diagram and all four architectural stages are available without relying on canvas output.
- [ ] **Step 2: Run the focused test** and confirm it fails because `TransformerVisualizer` does not exist.
- [ ] **Step 3: Add compatible Three.js and React Three Fiber dependencies** and implement the static diagram with intersection/WebGL gates.
- [ ] **Step 4: Implement the lazily loaded `TransformerScene`** with a small animated token-to-attention-to-output scene, no camera controls, and no semantic duplication.
- [ ] **Step 5: Add the visualization to the Transformer project card** and style it for desktop and mobile.
- [ ] **Step 6: Run focused tests, full tests, build, and targeted lint** and confirm they pass.

### Task 3: Browser verification and delivery hygiene

**Files:**
- Modify: generated `docs/` build output

**Interfaces:**
- Consumes: completed production bundle.
- Produces: verified responsive local preview at `http://127.0.0.1:8080/`.

- [ ] **Step 1: Build the production bundle** with `npm run build`.
- [ ] **Step 2: Open the Vite-served site** instead of raw `file://` output and inspect the hero, Transformer card, and mobile layout.
- [ ] **Step 3: Check git status** and commit the completed motion/3D pass.
