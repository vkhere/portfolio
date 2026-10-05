# WALKTHROUGH.md

# 🚶 Feature Walkthrough Guide

A complete tour of Vinay Kumar's portfolio website - section by section, feature by feature.

---

## How to Use This Guide

Open `index.html` in your browser and follow along with each section below.
Each section explains what you see, the interactions available, and how it maps to the resume.

---

## 🏠 Section 1: Navbar (Top Navigation)

**Location:** Fixed at the top of every page

### What You See
- **Logo** `VK.` - with cyan dot
- **Navigation Links:** About | Experience | Skills | Certifications | Projects | Awards | Contact
- **Hamburger Menu:** Visible on mobile screens only

### Interactions
| Interaction           | Behavior                                          |
|-----------------------|---------------------------------------------------|
| Scroll down the page  | Navbar gains dark background + blur glass effect  |
| Click any nav link    | Smooth scrolls to that section                    |
| Scroll to a section   | That section's nav link turns cyan                |
| Click hamburger (mobile) | Full-screen nav menu opens                     |
| Click any menu link   | Menu closes and scrolls to section                |

### Implementation
- CSS class `.scrolled` added via JS at 60px scroll depth
- Active link highlighting via `IntersectionObserver`

---

## 🦸 Section 2: Hero Section

**Location:** Full-screen (100vh) opening screen

### What You See
- **Greeting:** "👋 Hello, I'm"
- **Name:** "Vinay Kumar" (large gradient text)
- **Animated Title:** Cycling typewriter showing 6 job titles
- **Tagline:** Professional summary from resume
- **CTA Buttons:** "View Experience" (primary) | "Get In Touch" (outline)
- **Stats Bar:** 5+ Years | 8000+ Clients | 99% SLA | 4 Certifications
- **Background:** Grid overlay + 2 glowing spheres (cyan + purple)
- **Particles:** 40 subtle floating cyan dots
- **Scroll Indicator:** Animated mouse scroll

### Interactions
| Interaction              | Behavior                                           |
|--------------------------|----------------------------------------------------|
| Wait 1 second            | Typewriter starts cycling titles                   |
| Hover CTA buttons        | Lift + glow effect                                 |
| Scroll to stats          | Numbers count up from 0 to target values           |
| Click "View Experience"  | Smooth scroll to Experience section                |
| Click "Get In Touch"     | Smooth scroll to Contact section                   |
| Scroll past hero         | Scroll indicator fades out                         |
| Click scroll indicator   | Jumps to About section                             |

### Typewriter Titles Cycle
1. Backup Administrator
2. Storage Administrator
3. IT Infrastructure Expert
4. EMC Avamar Specialist
5. Rubrik & Commvault Admin
6. ITIL Certified Professional

---

## 👤 Section 3: About Me

**Location:** Scrolling down from hero

### What You See
- **Avatar:** Spinning gradient ring with "VK" initials and a "TCS & Accenture" badge
- **Professional Bio:** 3 paragraphs summarizing experience, expertise, and achievements
- **Contact Info Grid:** Location | Email | Phone | Education
- **Resume Download Button:** Downloads `Resume_Vinay.pdf`

### Interactions
| Interaction              | Behavior                            |
|--------------------------|-------------------------------------|
| Avatar ring             | Continuously rotates (CSS animation) |
| Hover email link         | Underline effect; click opens mailto  |
| Click "Download Resume"  | Browser downloads the PDF             |

---

## 💼 Section 4: Work Experience

**Location:** Alternate (lighter) background section

### What You See
**Two timeline cards on a vertical timeline:**

#### Card 1: Accenture via Alchemy Techsol (Oct 2024 - Oct 2025)
- Role: Storage & Backup Administrator
- 10 bullet points of daily activities
- Technology chips: NetApp Ontap, Snap Center, AIQUM, Stealthbit, SANnav

#### Card 2: TCS (Jan 2020 - Aug 2024)
- Role: Backup Administrator
- 7 bullet points of daily activities
- 4 highlight achievement cards (upgrade scale, Rubrik clusters, IDPAs shutdown, SLA %)
- Technology chips: Rubrik, Commvault, Dell EMC Avamar, NetApp, Servicenow

### Interactions
| Interaction              | Behavior                                    |
|--------------------------|---------------------------------------------|
| Scroll to section        | Cards fade-in from bottom (staggered)        |
| Hover card               | Card lifts 3px + cyan border glow           |
| Timeline dot             | Glowing cyan dot on left timeline line      |

### Resume Mapping
- All bullet points from "Daily Activities" section of resume preserved
- All "Highlights" from TCS section shown as highlight cards
- Technology chips sourced from "Tools" and "Skills" sections

---

## 🛠 Section 5: Skills

**Location:** Light background section

### What You See
Four skill category cards:

| Card | Category | Contents |
|------|----------|----------|
| 1 | Backup Administration | 3 animated bars: Avamar, Commvault, Rubrik |
| 2 | Storage Administration | 3 animated bars: NetApp, Snap Center, AIQUM |
| 3 | Tools & Platforms | 10 purple tech chips |
| 4 | Core Competencies | 8 bullet points with cyan dots |

### Interactions
| Interaction              | Behavior                                      |
|--------------------------|-----------------------------------------------|
| Scroll to Skills section | All 4 cards fade-in                           |
| Cards enter viewport     | Progress bars animate from 0% to target width  |
| Hover skill category     | Card gets subtle border glow                  |

### Skill Bar Percentages
```
EMC Avamar Admin:  94%  (4.7 yrs)
Commvault Admin:   82%  (3.3 yrs)
Rubrik Admin:      97%  (4.11 yrs)
NetApp Ontap:      70%  (9 months)
Snap Center:       68%  (9 months)
AIQUM / SANnav:    65%  (9 months)
```

---

## 🏅 Section 6: Certifications

**Location:** Alternate background section

### What You See
4 certification cards in a grid:
1. 🏅 Rubrik Technical Associate
2. 🤖 Gen AI Foundation
3. 🔄 Agile Way of Working
4. 📋 ITIL Foundation Certification

### Interactions
| Interaction    | Behavior                                         |
|----------------|--------------------------------------------------|
| Hover a card   | Lifts 5px + cyan border glow + shadow            |
| Scroll to section | Cards fade-in staggered from bottom           |

---

## 🚀 Section 7: Projects

**Location:** Primary background section

### What You See
4 project cards in a 2×2 grid:

| Project | Type | Key Tech |
|---------|------|----------|
| Liquid Pipeline OT Backup | Mission Critical | OT/ICS, Backup Config |
| Gas Pipeline OT Backup | Enterprise | VIP Engagement |
| Infrastructure Upgrade (IDPAs, Avamar) | Enterprise-Wide | Avamar, Rubrik, IDPA |
| Commvault & Stealthbit Patching | Security | Commvault, Patching |

### Interactions
| Interaction         | Behavior                                         |
|---------------------|--------------------------------------------------|
| Hover a project card | Lifts 4px + cyan border + gradient overlay     |
| Odd cards           | Subtle floating animation (CSS keyframe)         |
| Even cards          | Floating animation with 3s delay                |

---

## 🏆 Section 8: Awards

**Location:** Alternate background section

### What You See
4 award cards:
1. 🏆 On the Spot Excellence Award (**×3 badge**)
2. ⭐ Service & Commitment Award
3. ⚡ Xcelerate Warrior Award
4. 🎽 Client T-Shirt Award

### Interactions
| Interaction         | Behavior                                    |
|---------------------|---------------------------------------------|
| Hover an award card | Gold border glow + lift 5px                 |
| ×3 badge            | Gold pill badge in top-right of first card  |

---

## 🎓 Section 9: Education

**Location:** Primary background section (centered)

### What You See
3 horizontal education cards:
1. 🎓 B.Tech - RKGIT Ghaziabad (2015-2019)
2. 📚 Intermediate - Udaya Public School (2014)
3. 🏫 High School - Udaya Public School (2012)

### Interactions
| Interaction        | Behavior                               |
|--------------------|----------------------------------------|
| Hover an edu card  | Card slides right 5px + border glow    |

---

## 📬 Section 10: Contact

**Location:** Alternate background section

### What You See
**Left Side - Contact Info:**
- Intro paragraph
- Email card (click to open mail client)
- Phone card (click to call)
- Location card

**Right Side - Contact Form:**
- Name, Email, Subject, Message fields
- "Send Message ✉" button

### Interactions
| Interaction                     | Behavior                                          |
|---------------------------------|---------------------------------------------------|
| Click email card                | Opens mail client (mailto:)                        |
| Click phone card                | Opens dialer (tel:) on mobile                     |
| Fill form + Submit              | 1.5s simulated send → green success message       |
| Submit with empty fields        | Red error "Please fill in all fields"              |
| Submit with invalid email       | Red error "Please enter a valid email address"    |
| Focus any form input            | Cyan border glow focus indicator                  |
| Hover contact info cards        | Slides right 5px                                  |

---

## 🦶 Section 11: Footer

**Location:** Bottom of page

### What You See
- Logo `VK.` (links back to hero)
- Footer nav links: About | Experience | Skills | Certs | Contact
- Copyright notice
- Subtitle: "Built with ❤ - Backup & Storage Administrator"

### Interactions
| Interaction        | Behavior                         |
|--------------------|----------------------------------|
| Click footer logo  | Scrolls back to hero section     |
| Click footer links | Smooth scrolls to section        |

---

## 📱 Mobile Experience

On screens < 768px wide:

| Feature                | Mobile Behavior                                    |
|------------------------|----------------------------------------------------|
| Navbar                 | Hamburger menu; links in full-screen overlay        |
| Hero Stats             | Dividers hidden; stats stack in 2 columns           |
| About Section          | Avatar centered above bio text                      |
| Experience Cards       | Full-width single column                            |
| Highlight Grid         | Single column (not 2-column)                        |
| Skills Grid            | Single column (not 2-column)                        |
| Projects Grid          | Single column (not 2-column)                        |
| Contact Section        | Info stacked above form                             |
| Footer                 | Links stack vertically                              |

---

## ⚡ Performance Notes

- Google Fonts loaded via `<link>` with `preconnect` for DNS pre-resolution
- All animations use `transform` and `opacity` (GPU composited - no layout reflow)
- `IntersectionObserver` used for lazy animation (not scroll event polling)
- No external JS libraries - 100% vanilla JavaScript
- CSS totals ~850 lines - no unused rule sets from frameworks
