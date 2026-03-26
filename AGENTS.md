# First Ten Pages Diagnostic

This repository contains the rule system for the Screenwriters Online First Ten Pages Diagnostic.

## Purpose
Generate a premium, page-based diagnostic report for the first 10 pages of a screenplay using the Susan-only system.

## Source of truth
Use these files in this order:
1. `RUNTIME_PROMPT.md` — controlling execution instructions
2. `MASTER_SPEC.md` — full doctrine and constraints
3. `VOICE_GUIDE_V2_1.md`
4. `BLOCK_CALIBRATION.md`
5. `CATEGORY_REFINEMENT.md`
6. `SOFT_SPOT_HARDENING.md`

## Hard constraints
- Do not add new doctrine, categories, or scoring math.
- Stay inside the Susan-only system.
- Do not redesign the framework unless explicitly asked.
- Evidence Notes are embedded only inside category blocks.
- Use adaptive section logic correctly.
- Use `anchors the opening` as the default protagonist-strength phrasing.
- Use the recalibrated page-10 direction distinction:
  - clear and consolidated
  - clear but distributed / still consolidating
  - insufficiently clear

## Output standard
When asked to analyze a script, produce:
1. the full diagnostic report
2. the strict audit

## Tone
Premium, restrained, diagnostic, writer-facing.
Not bloggy, not classroom-like, not generic coverage.