# E-Verifi implementation plan

## Scope
Build a polished, responsive product prototype for E-Verifi with a public marketing site, public credential verification flow, login role selection, and shared role-based dashboard shells. Demo states are explicitly labeled; no real blockchain transaction is claimed.

## Design
- **Alternative styles:** Swiss fintech editorial (0.06); neo-academic institutional (0.07); cyberpunk Web3 (0.03).
- **Chosen movement:** Swiss fintech editorial with academic credibility.
- **Core principles:** quiet confidence, information hierarchy, evidence-first UI, restrained technology cues.
- **Color philosophy:** navy communicates institutional trust, royal blue carries action and progress, cyan is reserved for cryptographic/network accents, and the light background keeps complex flows legible.
- **Layout paradigm:** asymmetric editorial hero with a right-side credential verification artifact; subsequent sections use offset rails, not a uniform centered card grid.
- **Signature elements:** shield-check wordmark, dotted verification rail, blue/cyan evidence chips.
- **Interaction philosophy:** every CTA either navigates to a real route or triggers a visible demo state; hover adds lift and focus states stay high-contrast.
- **Animation:** fast 180–240ms transitions, subtle route fade, pulsing status dots only where they communicate live/delayed states.
- **Typography:** Inter for all UI; extra-bold display headlines with tight tracking, 14–16px body copy and compact labels for audit metadata.
- **Brand essence:** the evidence layer for modern academic credentials — precise, trusted, transparent. Personality: calm, rigorous, forward-looking.
- **Brand voice:** direct and credible. Example lines: “Prove the record. Preserve the trust.” / “Verification should read like evidence, not a promise.”
- **Wordmark & logo:** a shield built from two interlocking outline panels, with a checkmark cut through the center and three small chain nodes on the right edge.
- **Signature brand color:** royal blue #315CF5.

## Structure
- `client/src/pages/Home.tsx`: public marketing layout and navigation.
- `client/src/App.tsx`: route map and app shell.
- `client/src/index.css`: design tokens, responsive layout, and component styles.
- `public/manus-routes.json`: complete route manifest for Preview.
- `server/`: starter backend retained for future auth/database integration.
