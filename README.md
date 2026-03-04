# VCET — Vidyavardhini's College of Engineering and Technology

**Live reference (old website):** https://vcet.edu.in

This repository is the full redevelopment of the official VCET website.
The old website is the single source of truth for all content — text, numbers, names, dates, department information, faculty details, and any other factual data.
You are free to redesign layouts, improve UI/UX, and add new features, but the information displayed must be accurate and consistent with the old website at all times.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Repository Structure](#repository-structure)
3. [Getting Started](#getting-started)
4. [API Reference](#api-reference)
5. [Database Schema](#database-schema)
6. [Content Rules](#content-rules)
7. [Contributing — Git Workflow](#contributing--git-workflow)
8. [GitHub Rules and Engineering Standards](#github-rules-and-engineering-standards)

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 19, TypeScript, Vite 6            |
| Styling   | Tailwind CSS                            |
| Routing   | React Router v7                         |
| Animation | Framer Motion                           |
| Backend   | PHP 8+ (Apache, shared hosting)         |
| Database  | MySQL 5.7+ / MariaDB 10.3+              |
| Hosting   | Bluehost Pro Shared (Apache + cPanel)   |

---

## Repository Structure

```
vcet.edu.in/
|
|-- App.tsx                    # Root router — all lazy-loaded page routes
|-- index.tsx                  # React entry point
|-- index.html                 # HTML shell
|-- types.ts                   # Shared TypeScript types
|-- vite.config.ts             # Vite build config
|-- tsconfig.json
|-- package.json
|
|-- components/                # Reusable UI components (homepage sections + shared layout)
|   |-- TopBanner.tsx          # Top bar with logos and contact
|   |-- Header.tsx             # Navigation menu
|   |-- Hero.tsx               # Hero / banner section
|   |-- About.tsx              # About stats block
|   |-- Departments.tsx        # Departments overview
|   |-- Placements.tsx         # Placements highlights
|   |-- Recruiters.tsx         # Recruiter logos
|   |-- Achievements.tsx       # Achievements section
|   |-- ExploreUs.tsx          # Explore VCET section
|   |-- Gallery.tsx            # Photo gallery
|   |-- Testimonials.tsx       # Student testimonials
|   |-- Facilities.tsx         # Facilities showcase
|   |-- Naac.tsx               # NAAC accreditation block
|   |-- Footer.tsx             # Site footer
|   |-- PageLayout.tsx         # Shared wrapper for all inner pages
|   |-- PageBanner.tsx         # Page-level hero banner
|   |-- SectionHeader.tsx      # Reusable section heading
|   |-- Button.tsx             # Shared button component
|   |-- ScrollToTop.tsx        # Scroll restoration on route change
|   |-- SplashScreen.tsx       # Initial splash/loader
|   |-- DepartmentPage.tsx     # Generic department page template
|   |-- Admissions.tsx         # Admissions info component
|
|-- pages/                     # All route-level page components (lazy loaded)
|   |-- about/                 # Institute information
|   |   |-- AboutVCET.tsx
|   |   |-- PresidentsDesk.tsx
|   |   |-- PrincipalsDesk.tsx
|   |   |-- GoverningCouncil.tsx
|   |   |-- OrganizationalStructure.tsx
|   |   |-- Administration.tsx
|   |   |-- StrategicPlan.tsx
|   |   |-- CodeOfConduct.tsx
|   |
|   |-- admissions/            # Admissions information
|   |   |-- CoursesIntake.tsx
|   |   |-- FeesStructure.tsx
|   |   |-- Scholarships.tsx
|   |   |-- Brochure.tsx
|   |   |-- DocumentsRequired.tsx
|   |   |-- CutOff.tsx
|   |
|   |-- departments/           # Department pages (one per dept)
|   |   |-- DeptComputerEngg.tsx
|   |   |-- DeptCSDS.tsx
|   |   |-- DeptIT.tsx
|   |   |-- DeptAIDS.tsx
|   |   |-- DeptMech.tsx
|   |   |-- DeptENTC.tsx
|   |   |-- DeptCivil.tsx
|   |   |-- DeptFE.tsx
|   |
|   |-- academics/             # Academic programs and resources
|   |   |-- DeanAcademics.tsx
|   |   |-- AcademicCalendar.tsx
|   |   |-- TeachingLearning.tsx
|   |   |-- SwayamNPTEL.tsx
|   |   |-- HonoursMinor.tsx
|   |   |-- ExamCell.tsx
|   |   |-- Downloads.tsx
|   |
|   |-- research/              # Research and publications
|   |   |-- ResearchIntro.tsx
|   |   |-- FundedResearch.tsx
|   |   |-- Publications.tsx
|   |   |-- ConsultancyProjects.tsx
|   |   |-- ResearchFacility.tsx
|   |   |-- ResearchConventions.tsx
|   |   |-- ResearchPolicy.tsx
|   |   |-- NIRF.tsx
|   |
|   |-- facilities/            # Campus facilities
|   |   |-- CentralComputing.tsx
|   |   |-- Library.tsx
|   |   |-- CounselingCell.tsx
|   |   |-- LadiesCommonRoom.tsx
|   |   |-- SportsGymkhana.tsx
|   |   |-- HealthFacilities.tsx
|   |   |-- DifferentlyAbled.tsx
|   |
|   |-- student-life/          # Student activities and organizations
|   |   |-- CareerAtVCET.tsx
|   |   |-- StudentsCouncil.tsx
|   |   |-- CulturalCommittee.tsx
|   |   |-- SportsCommittee.tsx
|   |   |-- Literati.tsx
|   |   |-- NSS.tsx
|   |   |-- EBSB.tsx
|   |   |-- StudentsClub.tsx
|   |   |-- Hackathon.tsx
|   |   |-- NSDC.tsx
|   |   |-- Training.tsx
|   |   |-- ECell.tsx
|   |   |-- IIIC.tsx
|   |   |-- Parents.tsx
|   |
|   |-- clubs/                 # Technical and professional clubs
|   |   |-- IEEE.tsx
|   |   |-- CSI.tsx
|   |   |-- IETE.tsx
|   |   |-- ISHRAE.tsx
|   |   |-- VMEA.tsx
|   |   |-- IGBC.tsx
|   |   |-- IIC.tsx
|   |
|   |-- committees/            # Statutory and welfare committees
|   |   |-- CollegeDevelopmentCommittee.tsx
|   |   |-- IQAC.tsx
|   |   |-- GrievanceRedressal.tsx
|   |   |-- SRGCCommittee.tsx
|   |   |-- AntiRagging.tsx
|   |   |-- SCSTCommittee.tsx
|   |   |-- InternalComplaint.tsx
|   |   |-- EqualOpportunity.tsx
|   |   |-- SEDGCell.tsx
|   |
|   |-- naac/                  # NAAC accreditation documents
|   |   |-- NAACScore.tsx
|   |   |-- SSS.tsx
|   |   |-- SSSReport.tsx
|   |   |-- SSRCycle1.tsx
|   |   |-- SSRCycle2.tsx
|   |   |-- BestPractices.tsx
|   |
|   |-- contact/
|       |-- ContactUs.tsx
|
|-- api/                       # PHP REST API (backend)
|   |-- config/
|   |   |-- config.php         # DB credentials and constants (never commit real values)
|   |   |-- helpers.php        # Shared helpers: db(), json_ok(), json_error(), method()
|   |-- auth/
|   |   |-- login.php          # POST /api/auth/login
|   |   |-- logout.php         # POST /api/auth/logout
|   |-- events/
|   |   |-- index.php          # GET  /api/events/
|   |-- notices/
|   |   |-- index.php          # GET  /api/notices/
|   |-- placements/
|       |-- index.php          # GET  /api/placements/
|
|-- admin/                     # PHP admin panel (cPanel-hosted, not part of React)
|   |-- index.php              # Login page
|   |-- dashboard.php          # Admin dashboard
|   |-- events.php             # Manage events
|   |-- events_form.php        # Add / edit event
|   |-- notices.php            # Manage notices
|   |-- notices_form.php       # Add / edit notice
|   |-- placements.php         # Manage placements
|   |-- placements_form.php    # Add / edit placement
|   |-- logout.php
|   |-- assets/                # Admin CSS and JS
|   |-- includes/              # Shared admin partials (header, footer, auth, db)
|
|-- db/
|   |-- schema.sql             # Full database schema — run once on setup
|   |-- seed.php               # Creates default admin user — delete after use
|
|-- public/                    # Static assets served by Vite at root /
|   |-- Images/
|       |-- Banner/
|       |-- gallery/
|       |-- Home background/
|       |-- LOGO/
|       |-- Packages/
|       |-- PLACEMENT/
|       |-- recriters/
|       |-- Remarkable Acheivements/
|       |-- testimonials/
|
|-- Images/                    # Source image assets (mirrored to public/Images/)
|-- uploads/                   # Runtime file uploads from admin panel (not in Git)
|-- .htaccess                  # Apache rewrite rules for SPA routing
|-- DEPLOYMENT.md              # Step-by-step Bluehost deployment guide
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Production build

```bash
npm run build
```

Output goes to `dist/`. See [DEPLOYMENT.md](./DEPLOYMENT.md) for full hosting instructions.

---

## API Reference

All API endpoints are read-only (GET) and public unless noted.
The base URL in production is `https://vcet.edu.in/api`.

---

### Authentication

| Method | Endpoint           | Auth required | Description                        |
|--------|--------------------|---------------|------------------------------------|
| POST   | `/api/auth/login`  | No            | Admin login — returns session cookie |
| POST   | `/api/auth/logout` | Yes (session) | Destroys admin session             |

**POST /api/auth/login — Request body**

```json
{
  "username": "admin",
  "password": "yourpassword"
}
```

**Response**

```json
{
  "status": "ok",
  "data": {
    "id": 1,
    "username": "admin",
    "full_name": "Administrator",
    "role": "super"
  }
}
```

---

### Events

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| GET    | `/api/events/`                   | All active events                    |
| GET    | `/api/events/?id=N`              | Single event by ID                   |
| GET    | `/api/events/?upcoming=1`        | Only future events (event_date >= today) |

**Response fields:** `id`, `title`, `description`, `event_date`, `event_time`, `venue`, `image`, `category`, `is_featured`, `sort_order`, `created_at`

---

### Notices

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| GET    | `/api/notices/`         | All active notices        |
| GET    | `/api/notices/?id=N`    | Single notice by ID       |

**Response fields:** `id`, `title`, `description`, `attachment`, `link_url`, `is_new`, `sort_order`, `created_at`

---

### Placements

| Method | Endpoint                            | Description                       |
|--------|-------------------------------------|-----------------------------------|
| GET    | `/api/placements/`                  | All active placement records      |
| GET    | `/api/placements/?year=2024`        | Filter by batch year              |
| GET    | `/api/placements/?featured=1`       | Featured placements only          |

**Response fields:** `id`, `student_name`, `department`, `company_name`, `package_lpa`, `role_title`, `batch_year`, `student_photo`, `company_logo`, `is_featured`, `sort_order`, `created_at`

---

### Standard API response envelope

All endpoints return JSON in this shape:

```json
{ "status": "ok",    "data": { ... } }
{ "status": "error", "message": "...", "code": 404 }
```

---

## Database Schema

Four tables — `admin_users`, `notices`, `events`, `placements`.
The full DDL is in [`db/schema.sql`](./db/schema.sql).
Run it once via phpMyAdmin during initial setup. Never modify the schema in production without coordinating with the team lead.

---

## Content Rules

These rules are non-negotiable for every contributor.

1. **The old website is the content reference.**
   Every page on this site has a corresponding page on https://vcet.edu.in.
   All facts — NAAC grade, NBA status, intake numbers, fee structure, faculty names, department info, placement statistics — must match or be more current. Do not invent, estimate, or copy from unofficial sources.

2. **Design is yours to own.**
   You can redesign any page from scratch — layout, colors, typography, animations, component structure. Creativity is encouraged. The constraint is on content, not presentation.

3. **New features are welcome but must be relevant.**
   Additions like a live event ticker, a placement graph, a course comparison tool, or a campus map are accepted. Features that are off-brand, unrelated to a college website, or that compromise performance without clear benefit will be rejected in review.

4. **Do not rewrite or modify any PHP API file** (`api/` directory) without explicit written permission from the project lead. The API is consumed by the admin panel and the frontend simultaneously. Breaking changes here affect production data.

5. **Never commit credentials.**
   `api/config/config.php` contains database credentials. The file exists in the repo as a template with placeholder values only. Your real credentials must never be committed. If you accidentally commit credentials, notify the project lead immediately.

6. **Image assets go into `public/Images/`.**
   Any new images you add must be placed in the correct subfolder under `public/Images/`. Do not use external image URLs for content that should be hosted locally.

---

## Contributing — Git Workflow

### Branch strategy

```
main              <- production-ready code. Protected. No direct commits.
develop           <- integration branch. Merge your feature branches here.
feature/<name>    <- your working branch for any new feature or page
fix/<name>        <- bug fixes
chore/<name>      <- refactoring, dependency updates, tooling
```

### Step-by-step for every change

```bash
# 1. Always start from an updated develop branch
git checkout develop
git pull origin develop

# 2. Create your branch
git checkout -b feature/your-feature-name

# 3. Work, commit often with clear messages
git add <specific files>
git commit -m "feat(admissions): add animated fee breakdown table"

# 4. Push your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request into develop — never into main
```

### Pull Request rules

- Every PR must have a clear title and a short description of what changed and why.
- A PR must be reviewed and approved by at least one other team member before merging.
- The author of a PR cannot approve their own PR.
- A PR with failing TypeScript checks will not be merged.
- Resolve all review comments before requesting a re-review.

### Commit message format (Conventional Commits)

```
<type>(<scope>): <short summary>

Types:
  feat      — a new feature or page
  fix       — a bug fix
  style     — visual/CSS changes with no logic change
  refactor  — code restructure with no behavior change
  chore     — tooling, dependencies, config
  docs      — documentation only
  content   — text, image, or data updates

Examples:
  feat(departments): add DeptENTC page with faculty table
  fix(header): correct mobile menu z-index overlap
  content(placements): update 2025 batch placement data
  chore(deps): upgrade framer-motion to v12
```

---

## GitHub Rules and Engineering Standards

These are the practices followed by professional engineering teams at companies like Google, Meta, Microsoft, and Netflix. Treat this project with the same discipline.

### 1. main is always deployable

The `main` branch must at all times contain code that builds successfully and is safe to deploy. No exceptions. If something is broken in `main`, fixing it is the highest priority for the entire team.

### 2. Never force push to shared branches

Force-pushing to `main` or `develop` rewrites history that others have based their work on. It causes irreversible divergence. This is a hard ban.

### 3. Small, focused pull requests

A PR should do one thing. A PR that adds a new page, refactors the header, updates three dependencies, and fixes a typo is difficult to review and hard to revert if something breaks. Keep PRs atomic. If you are working on a large feature, break it into sequential PRs.

### 4. Review code, not people

All PR comments must be about the code. Be specific, constructive, and objective. Suggest an improvement, explain the reason, and if needed, provide an example. Never leave a vague comment like "this is wrong". Write "this approach causes unnecessary re-renders — consider memoizing with useMemo because...".

### 5. Do not leave dead code

If you remove a feature, remove all associated code, imports, and assets. Dead code increases cognitive load for everyone who reads the file after you. If you are unsure whether something will be needed, use a comment with a date and your name explaining why it was left.

### 6. Self-review before requesting review

Before opening a PR, read your own diff from top to bottom as if you are the reviewer. Check for console logs, commented-out code, placeholder text, hardcoded values that should be constants, and TypeScript errors. The result is a cleaner PR and faster reviews.

### 7. Keep dependencies intentional

Do not add an npm package to solve a problem that can be solved with 10 lines of standard code. Every dependency is a maintenance liability and a potential security surface. Any new dependency requires a comment in the PR explaining why it was chosen over alternatives.

### 8. No hardcoded environment-specific values

Strings like API base URLs, site names, or feature flags that change between environments must not be scattered across components. Define them in a central config file or use `vite.config.ts` environment variables.

### 9. Write code for the next developer

Variable names must be descriptive. Functions must do one thing. A developer who has never seen this codebase should be able to read a component and understand what it does without running the app. Readability is not optional.

### 10. Sync with the base branch before opening a PR

Before opening a PR, rebase or merge the latest `develop` into your branch. Submitting a PR that is 30 commits behind the base wastes review time and creates merge conflicts.

```bash
git fetch origin
git rebase origin/develop
```

### 11. Tag releases

When a version is ready to go live, create a Git tag on `main`.

```bash
git tag -a v1.0.0 -m "Initial production release"
git push origin v1.0.0
```

### 12. The Git log is documentation

Your commit history tells the story of this project. Write commit messages as if the person reading them has no context. A message like `fix stuff` is useless six months later. A message like `fix(hero): remove duplicate IntersectionObserver on remount` tells exactly what broke and where.

