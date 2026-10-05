# PRD.md

# 📄 Product Requirements Document (PRD)

**Product:** Vinay Kumar - Personal Portfolio Website  
**Version:** 1.0.0  
**Date:** October 2025  
**Owner:** Vinay Kumar  
**Status:** Released

---

## 1. Executive Summary

This PRD defines the scope, goals, and feature specifications for building a personal portfolio website for **Vinay Kumar**, a Backup & Storage Administrator with 5+ years of experience in IT infrastructure. The website will serve as a digital resume and professional branding tool to attract career opportunities in the IT industry.

---

## 2. Problem Statement

> **Problem:** Recruiters and hiring managers need a fast, comprehensive way to evaluate Vinay's technical expertise and professional achievements beyond a standard PDF resume.

A static PDF resume:
- Cannot be easily shared or linked
- Doesn't showcase personality or modern technical awareness
- Has no interactive elements to demonstrate key metrics
- Is not accessible on mobile devices without downloads

A portfolio website solves all of the above.

---

## 3. Goals & Success Metrics

### 3.1 Primary Goals
- **G1:** Create a single-page portfolio that fully represents Vinay's professional profile
- **G2:** Make it visually compelling to stand out to IT recruiters
- **G3:** Enable easy contact via a form or direct email/phone
- **G4:** Showcase key metrics (5+ years, 8000+ clients, 99% SLA) prominently

### 3.2 Success Metrics (KPIs)

| Metric                        | Target             |
|-------------------------------|--------------------|
| Page load time                | < 3 seconds        |
| Mobile responsiveness score   | 95+ (Lighthouse)   |
| Accessibility score           | 90+ (Lighthouse)   |
| Sections covering resume data | 100%               |
| Contact form submission rate  | > 5% of visitors   |

---

## 4. Target Audience

| Audience              | Need                                                   |
|-----------------------|--------------------------------------------------------|
| **IT Recruiters**     | Quick snapshot of skills, experience, and achievements |
| **Hiring Managers**   | Detailed experience, tools used, project impact        |
| **Professional Network** | LinkedIn connections seeking profile                |
| **Potential Employers** | Evaluate cultural fit and communication ability      |

---

## 5. Feature Specifications

### Feature 1: Hero Section
**Priority:** P0 (Must Have)  
**Description:** Full-screen hero with name, animated title, key stats, and CTAs.  
**Acceptance Criteria:**
- Typewriter cycling through 6+ job titles
- Stats (Years, Clients, SLA %, Certifications) animate on scroll
- Two CTAs: "View Experience" → scrolls to experience, "Get In Touch" → scrolls to contact
- Scroll-down indicator fades on scroll

---

### Feature 2: Work Experience Timeline
**Priority:** P0 (Must Have)  
**Description:** Vertical timeline showing both positions with responsibilities and highlights.  
**Acceptance Criteria:**
- Two cards: TCS (Jan 2020 - Aug 2024) and Accenture (Oct 2024 - Oct 2025)
- Bullet points matching resume daily activities
- Key highlights grid for notable achievements
- Technology chips per role
- Cards fade-in on scroll

---

### Feature 3: Skills with Progress Bars
**Priority:** P0 (Must Have)  
**Description:** Animated progress bars representing years of experience in each tool.  
**Acceptance Criteria:**
- 4 skill categories: Backup Admin, Storage Admin, Tools, Competencies
- Bars animate from 0% to target width when section enters viewport
- Years displayed alongside each bar
- Tool chips for platforms

---

### Feature 4: Certifications Grid
**Priority:** P1 (Should Have)  
**Description:** 4 certification cards with icons and descriptions.  
**Acceptance Criteria:**
- Rubrik Technical Associate, Gen AI Foundation, Agile Way of Working, ITIL Foundation
- Cards have top accent border and hover lift effect

---

### Feature 5: Projects Showcase
**Priority:** P1 (Should Have)  
**Description:** 4 project cards highlighting key delivery work.  
**Acceptance Criteria:**
- Liquid Pipeline OT, Gas Pipeline OT, Infrastructure Upgrade, Monthly Patching
- Each card has icon, title, type badge, description, and tags

---

### Feature 6: Awards Recognition
**Priority:** P1 (Should Have)  
**Description:** Award cards with counts and descriptions.  
**Acceptance Criteria:**
- 4 award cards (3× On the Spot, Service, Xcelerate, Client T-Shirt)
- Gold accent hover effect
- Count badge for repeated awards

---

### Feature 7: Contact Form
**Priority:** P0 (Must Have)  
**Description:** Validated contact form with success/error feedback.  
**Acceptance Criteria:**
- Fields: Name, Email, Subject, Message
- Client-side validation with error messages
- Success state displayed on submit
- Email and phone shown prominently alongside form

---

### Feature 8: Responsive Design
**Priority:** P0 (Must Have)  
**Description:** Full responsiveness across all device sizes.  
**Acceptance Criteria:**
- Mobile: single column, hamburger menu
- Tablet: 2-column grids where appropriate
- Desktop: 3-4 column layouts

---

## 6. User Journey

```
Landing → Hero (first impression)
       → About (who is Vinay?)
       → Experience (career history)
       → Skills (technical depth)
       → Certifications (credentials)
       → Projects (real-world delivery)
       → Awards (recognition)
       → Education (background)
       → Contact (reach out)
```

---

## 7. Technical Constraints

- **No frameworks or libraries** (vanilla HTML/CSS/JS only for speed and simplicity)
- **No backend** in v1.0 - contact form simulates submission
- **No database** - fully static site
- **Self-hosted** on any static host (GitHub Pages, Netlify, Vercel, etc.)
- **Google Fonts** for Inter and Fira Code

---

## 8. Out of Scope (v1.0)

- Backend email sending
- CMS for content updates
- Blog/articles
- Multi-language support
- Dark/light mode toggle
- Analytics

---

## 9. Timeline

| Phase        | Task                            | Duration |
|--------------|---------------------------------|----------|
| Design       | Color palette, layout wireframe | 1 day    |
| Development  | HTML structure + CSS styling    | 2 days   |
| Development  | JavaScript interactivity        | 1 day    |
| Testing      | Cross-browser & responsive QA   | 1 day    |
| Documentation| MD files + README               | 1 day    |
| **Total**    |                                 | **6 days** |

---

## 10. Risks & Mitigations

| Risk                               | Probability | Impact | Mitigation                              |
|------------------------------------|-------------|--------|-----------------------------------------|
| Google Fonts unavailable offline   | Low         | Medium | Add system font fallbacks               |
| Contact form not sending emails    | High (v1)   | Low    | Simulate with setTimeout; add Formspree in v1.1 |
| Skill bar % don't reflect reality  | Medium      | Low    | Base widths on actual years experience  |
| Mobile layout breaks               | Low         | High   | Test on Chrome DevTools mobile emulator |
