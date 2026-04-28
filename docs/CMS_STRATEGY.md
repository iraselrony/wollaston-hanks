# Wollaston Hanks — CMS & Backend Strategy

This document compares options for making the Wollaston Hanks website client-manageable. The goal: let Beau log in and edit text, replace images, manage opportunities/developments, and review form submissions — without touching code.

## TL;DR — Recommended Path

**Headless CMS (Sanity or Payload) + keep the existing React/Vite/Vercel stack.**

- Keep everything that already works (Vercel hosting, the polished UI, the stack the developer is fluent in).
- Get a clean admin UI for Beau in 1–2 weeks of work.
- Get a real form-submissions inbox (no more email-only).
- Cost: £0–£40/month for years.

**Don't move to WordPress.** Reasons in §4.

---

## 1. What Beau Needs To Manage

Based on the brief and what's currently hard-coded:

| Content Area              | Where in the code                              | Edit frequency |
|---------------------------|------------------------------------------------|----------------|
| Opportunities (8 entries) | `src/pages/Opportunities.tsx` + homepage       | Weekly         |
| Developments / Case Studies | `src/pages/Developments.tsx`                | Monthly        |
| Hero copy + CTAs          | `src/pages/Index.tsx`                          | Quarterly      |
| Section copy across pages | All page files                                 | Quarterly      |
| Images (hero, projects)   | `src/assets/`                                  | Monthly        |
| Form submissions          | None — currently email only                    | Daily          |
| Insights / press releases | Not built yet                                  | Weekly         |
| Founder bio               | `Index.tsx`, `About.tsx`                       | Rarely         |

---

## 2. Three Real Options

### Option A — Headless CMS + React (RECOMMENDED)

Keep React/Vite/Vercel. Move content to a headless CMS. Beau gets a `/studio` admin URL.

**Best fits:**

| CMS         | Cost (free tier)     | Admin UX | Best for                          |
|-------------|----------------------|----------|-----------------------------------|
| **Sanity**  | Free up to 3 users, then $99/mo | Excellent — real-time, image cropping, draft preview | Editorial-heavy sites, image management |
| **Payload** | Free, self-host on Vercel/Railway (~£0–£15/mo) | Excellent — TypeScript-native, full control | Developer-friendly, owns own data |
| **Strapi**  | Free, self-host (~£10/mo on Render) | Good — slightly older feel | Quick setup, REST/GraphQL out of box |
| **Contentful** | Free up to 5 users | Excellent — but more expensive at scale | Enterprise, if budget grows |

**My pick: Sanity.** Reasons:
- Beau gets the cleanest editor experience (real-time, image cropping built-in)
- Free tier covers a small operator indefinitely
- Image CDN built in — no separate Cloudinary needed
- Great preview mode (Beau sees changes before publishing)

**What stays the same:** the entire React UI, Vercel deployment, the URL `wollaston-hanks.vercel.app`.

**What changes:**
- The arrays of opportunities/developments/clientTypes get fetched from Sanity at build time (or runtime).
- Images become Sanity asset URLs instead of `/src/assets/*.jpg`.
- A new `/studio` route hosts the Sanity admin (Beau logs in there).

**Effort to migrate:** 1–2 weeks for a developer who knows React.

---

### Option B — Headless WordPress (WP backend, React frontend)

Run WordPress somewhere (e.g. Kinsta, WP Engine, or self-hosted), expose content via REST API or GraphQL (WPGraphQL plugin), keep the React frontend pulling from it.

**Pros:**
- Beau may already know WordPress admin
- Massive plugin ecosystem (forms, SEO, shop)

**Cons:**
- Two systems to maintain (WP server + Vercel)
- WP hosting adds £20–£100/month
- WP image management is mediocre vs Sanity
- WPGraphQL needs care to stay performant
- Security patching is your problem

**Use only if:** Beau strongly prefers the WP UI and accepts the operational cost.

---

### Option C — Full WordPress Rebuild

Rebuild the entire site as a WordPress theme. Drop React/Vite/Vercel.

**Don't do this.**

- Throws away weeks of UI polish
- WordPress can't deliver the same animation/perf quality without heavy theme work
- Vercel hosting won't run WP (PHP) — needs a different host
- Most importantly: the bespoke design is a competitive asset. WP themes drift toward looking generic.

---

## 3. Form Submissions — Two Layers

Currently both forms (`/submit-opportunity` and `/contact`) call `src/lib/submitForm.ts`. Today that uses **Web3Forms** (free, email delivery only). Setup:

1. Sign up at https://web3forms.com (free, no card)
2. Verify `contact@wollastonhanks.com` as the recipient
3. Copy the access key
4. Add `VITE_WEB3FORMS_KEY` to Vercel → Project Settings → Environment Variables → Production

Once a CMS is added, replace the body of `submitForm.ts` to also write each submission into the CMS database — Beau then sees a list in the admin with filters (by GDV range, status, date) instead of just emails.

**For Sanity:** create a `submission` document type and POST from `submitForm.ts` using `@sanity/client`.

**For Payload:** same idea — Payload includes form-submission collections out of the box.

---

## 4. Why Not WordPress (Detailed)

| Concern              | WordPress                          | Sanity / Payload                  |
|----------------------|------------------------------------|-----------------------------------|
| Hosting cost         | £20–£100/month minimum             | £0–£40/month                      |
| Security             | Constant patching required         | SaaS handles it (Sanity)          |
| Performance          | Needs caching layers, plugins      | Static + CDN by default           |
| Vercel-compatible    | No (PHP)                           | Yes                               |
| Editor UX for images | Mediocre (Media Library)           | Best-in-class                     |
| Custom design        | Theme constraints                  | None — keeps existing UI          |
| Speed of edits       | Page reloads                       | Real-time                         |
| Founder's vision fit | Pulls toward "generic agency" feel | Stays bespoke / institutional     |

The current site looks like a £200K bespoke build because it is one. WordPress would visibly drag that down.

---

## 5. Recommended 4-Week Plan

**Week 1 — Sanity setup**
- Spin up Sanity project
- Define schemas: `opportunity`, `caseStudy`, `siteSettings`, `submission`, `insight`
- Migrate opportunities + developments arrays to Sanity

**Week 2 — Frontend integration**
- Install `@sanity/client`, swap hard-coded arrays for queries
- Move images to Sanity asset CDN
- Wire `submitForm.ts` to write to Sanity in addition to email

**Week 3 — Admin polish**
- Configure Sanity Studio (input types, validation, preview links)
- Add Beau as admin user, walk through edit flow
- Set up draft preview deploys

**Week 4 — Insights, polish, handover**
- Build Insights/Journal section (new page + Sanity schema)
- Train Beau on the studio
- Document the workflow

---

## 6. Costs Summary

| Item                                | Monthly cost  |
|-------------------------------------|---------------|
| Vercel (hosting, current plan)      | £0 (Hobby) / £18 (Pro) |
| Sanity (Free tier — 3 users, 10k docs) | £0         |
| Web3Forms (free tier, 250 submissions/mo) | £0     |
| Domain (wollastonhanks.com)         | ~£1/mo        |
| **Total to start**                  | **~£1/mo**    |

If volume grows: Sanity Growth £99/mo, Web3Forms paid plan £15/mo. Still tiny vs. WP hosting.

---

## 7. What's Already Done in This Codebase

- `src/lib/submitForm.ts` — single point of integration. Swap the endpoint here later, no other changes needed.
- `.env.example` — placeholders for the access key.
- Form UIs already have loading/error/success states wired (toast + confirmation panels).
- All page content lives in clearly-marked arrays / JSX — easy to move to a schema.

---

## 8. Decision Checklist for Beau

Tick the boxes that match Beau's preference:

- [ ] I want to keep the current visual quality and bespoke design → **Option A (Sanity / Payload)**
- [ ] I want the cheapest long-term hosting → **Option A**
- [ ] I am familiar with the WordPress admin and need that UI specifically → **Option B (Headless WP)**
- [ ] I plan to run a complex multi-author publishing operation → Option A or B
- [ ] I want to manage form submissions in one inbox alongside content → **Option A** (built-in)
- [ ] I want to be able to add/edit Opportunities daily → Option A or B (Option A faster to use)

If 3+ ticks land in Option A, that is the answer.

---

## 9. Next Step

Once Beau confirms Option A, Rasel can begin Week 1. The current `c927b3d`-and-newer codebase is structured to be migrated cleanly — no rewrites needed.
