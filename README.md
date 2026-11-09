# E-Verifi — Academic Credential Verification

E-Verifi is a polished React/Express product prototype for blockchain-aware academic credential management and public verification. It communicates a clear evidence chain from issuance to verification while keeping demo records, live integrations, and privacy boundaries explicit.

## Delivered experience

The current frontend includes the E-Verifi landing page, Features, How It Works, Security, About, Contact, Login, public credential verification, and role-based dashboard routes for administrators, faculty, and students. The verification portal accepts a credential ID and demonstrates verified, revoked, and not-found states using clearly labeled sample records. The role selector on Login routes into dashboard shells with responsive side navigation, sample-data banners, summary cards, charts, activity, quick actions, and network-layer status.

The interface uses E-Verifi's official navy, royal blue, cyan, and light background palette, a shield/checkmark identity mark, responsive navigation, formal certificate preview art, and accessible interaction states. The app does not claim real blockchain confirmations, issuer identity, or connected storage: those are intentionally marked as next-phase integrations.

## Technology stack

- React 19 + TypeScript + Vite
- Wouter for route navigation
- Tailwind v4 base utilities plus a project-owned CSS design system
- Lucide React icons
- Recharts dependency available for future live analytics wiring
- Express + tRPC + Drizzle starter backend
- Managed MySQL capability initialized by the Webdev project

## Run locally in the managed project

```bash
pnpm install
pnpm dev
```

The development server listens on `PORT` (default `3000`). Use `pnpm check` for TypeScript diagnostics, `pnpm build` for a production bundle, and `pnpm test` for the starter test suite.

## Environment and integrations

The current prototype keeps private credentials server-side and does not require external provider keys. The next integration phase can connect managed authentication, database tables, secure PDF storage, SHA-256 hashing, IPFS/Pinata, Ethereum Sepolia via ethers.js, wallet authorization, QR decoding, and real verification records. Full student names, email addresses, marks, and other unnecessary confidential information should not be written to a public blockchain.

## Data and demo mode

The visible records are intentionally sample data and are marked as such in the public verification portal and dashboards. A valid hash proves that a document matches a registered document; it does not independently prove that the original issuer is legitimate. Real deployments should only display a successful verification result after document hash comparison, on-chain reference lookup, and revocation status checks succeed.

## Project structure

- `client/src/pages/Home.tsx` contains the public pages, verification workflow, login flow, and dashboard shells.
- `client/src/App.tsx` owns the route map.
- `client/src/index.css` contains the E-Verifi design system and responsive layout.
- `client/public/manus-routes.json` declares the complete route set for Preview.
- `client/public/everifi-mark.svg` is the product mark used by the project metadata.
- `server/` contains the initialized Express/tRPC/Drizzle backend foundation.
- `plan.md` and `TODO.md` document design decisions and remaining implementation outcomes.
