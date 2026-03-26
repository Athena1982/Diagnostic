# First Ten Pages Diagnostic

This repository contains the rule system for the Screenwriters Online **First Ten Pages Diagnostic**.

## Purpose

Generate a premium, page-based diagnostic report for the first 10 pages of a screenplay using the **Susan-only system**.

The product is:
- a first-ten-pages diagnostic
- a structured early-read assessment
- focused on what the opening is doing to the read by page 10

The product is **not**:
- general screenplay coverage
- development coaching
- beat-sheet analysis
- scoring math
- open-ended workshop feedback

## Source of truth

Use these files in this order:

1. `RUNTIME_PROMPT.md` — controlling execution instructions  
2. `MASTER_SPEC.md` — full doctrine, structure, and constraints  
3. `VOICE_GUIDE_V2_1.md`  
4. `BLOCK_CALIBRATION.md`  
5. `CATEGORY_REFINEMENT.md`  
6. `SOFT_SPOT_HARDENING.md`

If there is tension between files:
- `RUNTIME_PROMPT.md` controls execution
- `MASTER_SPEC.md` controls doctrine and structure
- the remaining files control voice, calibration, and refinement

## Hard constraints

- Do not add new doctrine, categories, or scoring math.
- Stay fully inside the Susan-only system.
- Do not redesign the framework unless explicitly asked.
- Do not import outside screenwriting doctrine.
- Evidence Notes are embedded only inside category blocks.
- Use adaptive section logic correctly.
- Use **anchors the opening** as the default protagonist-strength phrasing.
- Use the recalibrated **page-10 direction** distinction:
  - **clear and consolidated**
  - **clear but distributed / still consolidating**
  - **insufficiently clear**
- Do not treat “not yet fully consolidated” as an automatic failure.
- Do not label a strong professional opening as simply **weak** when the real issue is distributed direction rather than lack of direction.

## Output standard

When asked to analyze a script, produce:

1. the full diagnostic report  
2. the strict audit

## Tone

Premium, restrained, diagnostic, writer-facing.

Not:
- bloggy
- classroom-like
- generic coverage
- motivational
- teacherly
- startup-dashboard language

## Report enforcement rules

- If a real limiting issue exists, do not hide it inside summary prose alone.
- Surface **Core Weaknesses / Risk Areas** as a visible section whenever a core issue is materially affecting the read and deserves summary-level visibility beyond the category blocks.
- Surface **Revision Priorities** as a visible section whenever there is a meaningful action order to recommend.
- Do not compress a meaningfully triggered weakness or action sequence into only **Top-Line Summary** or **Primary Findings**.

- Protagonist-strength language must identify the character who actually organizes the early pages.
- Do not assign the protagonist-strength block to the most vivid or charismatic character unless that character truly organizes the early page sequence.
- Use **anchors the opening** only for the character the opening keeps structurally returning to as the active center of attention.
- If a vivid supporting character is more memorable than the true organizing character, describe that as a separate strength rather than misassigning the protagonist-strength block.
- If no character anchors the opening from page 1, assign protagonist-strength to the character who becomes the organizing center once the opening’s main active line takes over, **if that role is clear by page 10**.
- Do not omit protagonist-strength entirely just because the opening begins in a distributed way, if one character clearly becomes the organizing center by page 10.

- Do not treat a life-story, retrospective, or formative-memory opening as **distributed direction** if its early beats are all clearly serving one unified narrative line.
- Broad formative sequencing is not the same as competing story strands.
- A page-10 direction judgment of **clear and consolidated** is still appropriate when multiple early beats all serve one clearly unified story movement.
- Use **clear but distributed / still consolidating** only when the opening is asking the reader to hold multiple active narrative strands whose hierarchy is not yet clear.

## Review check for Codex

Before finalizing a report, confirm:

1. If a real limiting issue exists, **Core Weaknesses / Risk Areas** appears as its own section.
2. If a real action order exists, **Revision Priorities** appears as its own section.
3. The protagonist-strength block names the character who actually organizes the early pages, not just the most vivid character on the page.
4. No core weakness is hidden only inside summary prose.
5. The page-10 direction judgment distinguishes correctly among:
   - **clear and consolidated**
   - **clear but distributed / still consolidating**
   - **insufficiently clear**
6. If the opening begins in a distributed way but one character clearly becomes the organizing center by page 10, protagonist-strength language reflects that rather than being omitted unnecessarily.
7. If the opening uses retrospective, memoir-like, or formative-memory structure, confirm whether the early beats are all serving one unified narrative line before calling the direction distributed.
8. Do not classify broad but unified life-story movement as distributed direction unless multiple active strands are genuinely competing for priority by page 10.

## Execution reminder

When asked to analyze a script:
- read `AGENTS.md` first
- use `RUNTIME_PROMPT.md` as the controlling instruction set
- use the other system files as supporting guidance
- produce the report and the strict audit only