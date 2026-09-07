# PROJECT_MAP — modern-portfolio

> Architectural map + live state tracker. Last sync: **2026-09-05**.
> Scope: the **whole project** → production-ready completion (no feature creep).

---

## [TECH_STACK]

Verified **2026-09-05** against the official npm registry (latest stable on that date). No installed package is deprecated.

| Package | Installed | Latest stable | Action |
|---|---|---|---|
| next | 16.3.3 | 16.3.4 | bump (exact pin) |
| eslint-config-next | 16.3.3 | 16.3.4 | bump (exact pin, must match next) |
| react / react-dom | 19.2.8 | 19.2.8 | up to date |
| framer-motion | ^13.1.1 | 13.2.0 | update |
| @tsparticles/engine | ^4.3.2 | 4.4.0 | update |
| @tsparticles/react | ^4.3.2 | 4.4.0 | update |
| tsparticles | ^4.3.2 | 4.4.0 | update |
| react-countup | ^6.4.2 | 6.5.3 | update |
| react-google-recaptcha-v3 | ^1.11.0 | 1.11.0 | up to date |
| react-hot-toast | ^2.6.0 | 2.6.0 | up to date |
| react-icons | ^5.7.0 | 5.7.0 | up to date |
| resend | ^6.22.1 | 6.26.0 | update |
| swiper | ^14.1.0 | 14.2.0 | update |
| @tailwindcss/postcss | ^4.3.3 | 4.3.3 | up to date |
| tailwindcss | ^4.3.3 | 4.3.3 | up to date |
| postcss | ^8.5.26 | 8.5.28 | update |
| @types/react | ^19.2.18 | 19.2.18 | up to date |
| @types/react-dom | ^19.2.5 | 19.2.7 | update |
| @types/node | ^26.3.0 | 26.4.1 | update |
| typescript | ^6.0.3 | **7.0.2** (major) | **hold** — breaking major, dev-only; defer |
| eslint | ^9.39.5 | **10.10.0** (major) | **hold** — breaking major, dev-only; defer |

**Decisions:**
- All patch/minor bumps are non-breaking (semver `^` ranges). Applied in M1.
- TypeScript 7 / ESLint 10 held intentionally: breaking majors on dev tooling, zero runtime value for this product. Documented here, re-evaluated when upstream ecosystem settles.
- `pnpm` is the package manager (`pnpm-lock.yaml` present).

---

## [SYSTEM_FLOW]

Single user journey (portfolio visitor), 1 nav rail, 6 routes + 1 API route.

```
/            hero: "Transforming Ideas Into Digital Reality" + particles + avatar + CTA → /work
/about       bio + react-countup stats (10y/250/650/8) + tabbed panel (skills/awards/experience/credentials)
/services    swiper carousel: 5 service cards (Branding/Design/Dev/Copywriting/SEO)
/work        swiper carousel: 2×2 work tiles → LIVE PROJECT (external)
/testimonials swiper carousel: 3 testimonial cards
/contact     form: client validation → reCAPTCHA v3 token → POST /api/contact → server re-validate
             → reCAPTCHA siteverify (score≥0.5, action="contact") → Resend batch (2 templated emails)
             → { ok:true } → toast.success + form reset | errors → structured JSON + toast.error
```

Cross-cutting: `template.tsx` + `Transition.tsx` = page-curtain animation (AnimatePresence keyed by pathname). Global `TopLeftImg`, `Nav`, `Header` (logo + `Socials`), `<Toaster>` in `layout.tsx`.

---

## [ARCHITECTURE]

### Split
- **Server components (no directive):** `Avatar`, `Bulb`, `Circles`, `Header`, `ProjectsBtn`, `Socials`, `TopLeftImg`.
- **Client components (`"use client"`):** `Nav`, `ParticlesContainer`, `ServiceSlider`, `TestimonialSlider`, `Transition`, `WorkSlider`, contact form UI.
- **Shared logic (`lib/`):** `contact.ts` — validation + constants reused by client form AND API route (single source of truth). No other shared layer exists → none needed (Simplicity First).

### Flow of shared pieces
- `variants.ts` — `fadeIn(direction, delay)` motion variants, consumed by every animated page/component.
- Data lives **inline** in each feature component (`Nav.tsx`, `Socials.tsx`, `ServiceSlider.tsx`, `TestimonialSlider.tsx`, `WorkSlider.tsx`, `app/about/page.tsx`). No repetition → extraction to a data/ layer would be premature.

### Key references
| Responsibility | File |
|---|---|
| Contact validation/constants | `lib/contact.ts` |
| Contact API (reCAPTCHA server + Resend) | `app/api/contact/route.ts` |
| Contact UI + reCAPTCHA provider | `app/contact/page.tsx` |
| Motion variants | `variants.ts` |
| Theme/base CSS (Tailwind v4 `@theme`) | `app/globals.css` |
| Env typing | `environment.d.ts` (+ `.env.example`) |

### Styling
Tailwind v4, CSS-first config (no `tailwind.config.*`): colors `primary #131424` / `secondary #393a47` / `accent #f13024`, `--background-image-*` theme vars, `--animate-spin-slow`, base `.btn/.input/.textarea` layer. Font: Sora. Custom arbitrary spacing (e.g. `w-46.25`).

---

## [ORPHANS & PENDING]

| # | Item | Kind | Status |
|---|---|---|---|
| P1 | `next` 16.3.3→16.3.4, `eslint-config-next`→16.3.4 + all caret dep updates | code | pending → M1 |
| P2 | Missing resilient boundaries: no `error.tsx`, `not-found.tsx`, `loading.tsx` | code | pending → M2 |
| P3 | No logging layer in API route (raw `console.error`) | code | pending → M3 |
| P4 | `Header.tsx:8` — invalid class `xl-px-0` (should be `xl:px-0`) | code | pending → M4 |
| P5 | `globals.css:14` — dead theme key `--background-image-circles` pointing to missing `/bg-circles.png` (unused; asset absent) | code | pending → M4 |
| P6 | `WorkSlider.tsx:10` — unused `swiper/css/free-mode` import (no FreeMode module used) | code | pending → M4 |
| P7 | `environment.d.ts` — reCAPTCHA env typed required though app degrades when absent; `NEXT_TELEMETRY_DISABLED` untyped | code | pending → M4 |
| P8 | Website content is template placeholder: hero lorem-ipsum, service/testimonial lorem-ipsum, work titles `"title"` + links `http://example.com`, socials → bare domains | owner content | **decision required** |
| P9 | TypeScript 7 / ESLint 10 majors | decision | held (documented) |
| P10 | Test infra: repo has none; verification via lint+build+flow simulation | decision | recommended: skip adding runner (Simplicity First) |
| P11 | `next.config.ts` — `agentRules: false` (nonstandard key) | observation | leave (author intent, non-breaking) |
| P12 | `netlify.toml` — build-ignore only; no deploy settings | observation | out of scope (platform config, owner) |

---

## [MILESTONES] — Verifiable Goals

| Milestone | Deliverable | Success criteria (must all pass) |
|---|---|---|
| **M0** Baseline | — | `pnpm install` clean; `pnpm lint` = 0 errors; `pnpm build` = success (on unchanged code) |
| **M1** Deps freshness | package.json + lock updated | versions ≥ npm-latest-stable (non-major) installed; `pnpm build`+`lint` green; contact flow untouched |
| **M2** Resilient UI | `app/error.tsx`, `app/not-found.tsx`, `app/loading.tsx` | themed 404 on unknown route; themed error w/ retry; build+lint green; no regression on / |
| **M3** Safe Logging | `lib/logger.ts` (levels: info/warn/error, async, dep-free) wired into `/api/contact` | API status codes unchanged (400/403/500/502); all route error paths routed through logger; no naked `console.error` left in route; build+lint green |
| **M4** Defect sweep | P4–P7 fixed | grep shows `xl:px-0`, no `bg-circles` var, no `free-mode` import; build+lint green |
| **M5** Sync & gate | `PROJECT_MAP.md` updated | ORPHANS section contains only approved owner-content/decision items; `pnpm lint`+`pnpm build` green at end |

Endpoint verified by flow simulation: `POST /api/contact` (missing token → 400; bad body → 400; missing server secret → 403/502) — no email sent during simulation.

---

## [LOG STRATEGY]

Target: **non-blocking, minimal, leveled, dep-free**, safe for a serverless route.
- `lib/logger.ts`: `logger.info/warn/error(fn, message, extra?)` → single-line structured JSON via `console.*` (fire-and-forget, never awaited).
- Server-side only (API route). Client keeps existing UX toasts; a console logger there adds noise with zero value.
- Level filtering: simple internal `LOG_LEVEL` (default `info`), env-overridable, no external ingestion.