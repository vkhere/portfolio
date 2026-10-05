# REQUIREMENTS.md

# 📌 Portfolio Website Requirements

## Project Overview

Build a professional portfolio website for **Vinay Kumar**, an IT Infrastructure professional specializing in Backup & Storage Administration, targeting opportunities in the IT industry.

---

## 1. Functional Requirements

### 1.1 Navigation
- [x] Sticky top navigation bar
- [x] Smooth scroll to sections on link click
- [x] Active section highlighting in nav
- [x] Hamburger menu for mobile devices
- [x] Logo link back to hero section

### 1.2 Hero Section
- [x] Full viewport height hero with name and title
- [x] Typewriter effect cycling through job titles
- [x] CTA buttons: "View Experience" and "Get In Touch"
- [x] Key stats: Years of experience, clients managed, SLA %, certifications
- [x] Scroll-down indicator
- [x] Animated background (grid overlay + glows)

### 1.3 About Section
- [x] Professional summary paragraph
- [x] Contact details (email, phone, location)
- [x] Education summary
- [x] Downloadable resume button

### 1.4 Work Experience Section
- [x] Timeline layout with two positions:
 - Accenture via Alchemy Techsol - Storage & Backup Administrator (Oct 2024 - Oct 2025)
 - TCS - Backup Administrator (Jan 2020 - Aug 2024)
- [x] Daily activities list per role
- [x] Key highlights / achievements for TCS role
- [x] Technology chips per role

### 1.5 Skills Section
- [x] Backup Administration skills with animated progress bars + years
 - EMC Avamar Admin (4.7 yrs)
 - Commvault Admin (3.3 yrs)
 - Rubrik Admin (4.11 yrs)
- [x] Storage Administration skills (NetApp, Snap Center, AIQUM)
- [x] Tools & Platforms grid
- [x] Core Competencies list

### 1.6 Certifications Section
- [x] Rubrik Technical Associate
- [x] Gen AI Foundation
- [x] Agile Way of Working
- [x] ITIL Foundation Certification

### 1.7 Projects Section
- [x] Liquid Pipeline OT Servers Backup (Mission Critical)
- [x] Gas Pipeline OT Servers Backup
- [x] Large-Scale Infrastructure Upgrade (5 IDPAs, 8000+ clients)
- [x] Commvault & Stealthbit Server Patching

### 1.8 Awards Section
- [x] 3× On the Spot Excellence Award
- [x] Service & Commitment Award
- [x] Xcelerate Warrior Award
- [x] Client T-Shirt Award

### 1.9 Education Section
- [x] B.Tech - RKGIT Ghaziabad (2015-2019)
- [x] Intermediate - Udaya Public School (2014)
- [x] High School - Udaya Public School (2012)

### 1.10 Contact Section
- [x] Contact information (email, phone, location)
- [x] Contact form with fields: Name, Email, Subject, Message
- [x] Form validation (required fields, email format)
- [x] Submit feedback message

### 1.11 Footer
- [x] Logo, navigation links
- [x] Copyright notice

---

## 2. Non-Functional Requirements

### 2.1 Performance
- [ ] Page load time < 3 seconds on broadband
- [ ] Optimized CSS (no unused styles from external frameworks)
- [ ] Minimal external dependencies (only Google Fonts)
- [ ] Images compressed for web

### 2.2 Accessibility
- [ ] Alt text on images
- [ ] Semantic HTML5 elements (nav, section, article, footer)
- [ ] ARIA labels on buttons and interactive elements
- [ ] Keyboard navigable
- [ ] Color contrast ratio ≥ 4.5:1

### 2.3 Responsiveness
- [x] Desktop (1200px+)
- [x] Tablet (768px - 1199px)
- [x] Mobile (< 768px)
- [x] Extra small (< 480px)

### 2.4 Browser Compatibility
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

### 2.5 SEO
- [x] Meta description tag
- [x] Semantic headings (h1, h2, h3 hierarchy)
- [ ] Open Graph tags for social sharing
- [ ] Structured data (JSON-LD) for Person schema

---

## 3. Design Requirements

| Requirement          | Specification                              |
|----------------------|--------------------------------------------|
| **Theme**            | Dark tech (professional, modern)           |
| **Primary Color**    | `#00d4ff` (Cyan/Teal)                      |
| **Secondary Color**  | `#7c3aed` (Purple)                         |
| **Accent Color**     | `#10b981` (Green)                          |
| **Background**       | `#0a0f1e` (Deep Navy)                      |
| **Font - Body**      | Inter (Google Fonts)                       |
| **Font - Code**      | Fira Code (Google Fonts)                   |
| **Card Radius**      | 12px                                       |
| **Animation**        | Smooth 300ms transitions, scroll reveals   |

---

## 4. Content Requirements

All content sourced from **Resume_Vinay.pdf / Resume_Vinay.png**:
- [x] Personal bio and tagline from resume
- [x] All work experience bullet points
- [x] All skills with years of experience
- [x] All certifications listed
- [x] All awards mentioned
- [x] All projects described
- [x] Education history
- [x] Contact details

---

## 5. Future Requirements (Backlog)

- [ ] Backend email integration (EmailJS / Formspree)
- [ ] Blog/articles section
- [ ] Dark/light mode toggle
- [ ] Multi-language support (Hindi/English)
- [ ] Analytics integration (Google Analytics / Plausible)
- [ ] LinkedIn/GitHub profile links
- [ ] Testimonials section
- [ ] Printable version of resume inline
