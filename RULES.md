# RULES.md

# 📏 Coding Rules & Conventions

This document defines the standards and conventions governing the codebase for Vinay Kumar's portfolio website.

---

## 1. General Principles

| Principle             | Description                                                              |
|-----------------------|--------------------------------------------------------------------------|
| **Simplicity**        | No frameworks. Vanilla HTML/CSS/JS only. Reduces dependency overhead.    |
| **Readability**       | Code must be readable by any developer without context.                  |
| **No Redundancy**     | DRY (Don't Repeat Yourself) - reuse CSS classes, don't duplicate styles. |
| **Progressive Enhancement** | Works without JS; JS enhances the experience.                      |
| **Mobile-First**      | Style for mobile first, add complexity with `min-width` media queries.   |

---

## 2. HTML Rules

### 2.1 Structure
```html
<!-- ✅ DO: Use semantic HTML5 elements -->
<nav>, <main>, <section>, <article>, <footer>, <header>

<!-- ❌ DON'T: Use generic divs for semantic structure -->
<div id="nav">, <div class="main">
```

### 2.2 Attribute Order
Always write attributes in this order for consistency:
1. `id`
2. `class`
3. `href` / `src` / `type`
4. `data-*`
5. `aria-*`
6. All other attributes

### 2.3 IDs vs Classes
- **IDs** (`#id`): Only for JavaScript targeting or anchor links. Must be unique.
- **Classes** (`.class`): For styling. Multiple elements can share.

### 2.4 Comments
- Use section comments for major structural blocks:
```html
<!-- ──────────────────── HERO ──── -->
<!-- ──────────────────── ABOUT ─── -->
```

### 2.5 Indentation
- 2 spaces per level (no tabs).

### 2.6 Accessibility
- All `<img>` must have `alt` attributes.
- All interactive elements must have accessible labels.
- Form inputs must have associated `<label>`.

---

## 3. CSS Rules

### 3.1 Architecture
Files are split by concern:
- `style.css` - Core styles, layout, components
- `animations.css` - Keyframes and animation-only classes

### 3.2 CSS Custom Properties (Variables)
All design tokens are in `:root` at the top of `style.css`.

```css
/* ✅ DO: Use variables */
color: var(--accent);
border-radius: var(--radius-md);

/* ❌ DON'T: Hardcode values */
color: #00d4ff;
border-radius: 12px;
```

### 3.3 Selector Naming
Use kebab-case BEM-like naming:
```css
/* Block */     .skill-category { }
/* Element */   .skill-cat-header { }
/* Modifier */  .btn-primary { }
```

### 3.4 Property Order
Within each rule, maintain this order:
1. Positioning (`position`, `top`, `left`, `z-index`)
2. Box model (`display`, `width`, `height`, `padding`, `margin`)
3. Visual (`background`, `border`, `border-radius`, `box-shadow`)
4. Typography (`font-*`, `color`, `text-*`, `line-height`)
5. Animation (`transition`, `animation`, `transform`)

### 3.5 Media Queries
- Mobile-first approach using `max-width` breakpoints:
```css
/* Desktop base styles here */

@media (max-width: 900px)  { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile */ }
```

### 3.6 Colors
Only use colors defined in `:root` variables. No inline color values.

### 3.7 Transitions
Always use the CSS variable:
```css
transition: var(--transition); /* all 0.3s cubic-bezier(0.4,0,0.2,1) */
```

---

## 4. JavaScript Rules

### 4.1 Syntax
- Use `'use strict';` at the top of every JS file.
- Use `const` by default; `let` only when reassignment is needed. Never `var`.
- Use arrow functions for callbacks; named functions for top-level declarations.

### 4.2 DOM Selection
```javascript
// ✅ DO: Select once, store in variable
const navbar = document.getElementById('navbar');

// ❌ DON'T: Query repeatedly inside loops or event handlers
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle(...); // BAD
});
```

### 4.3 Event Listeners
- Use `addEventListener`, never inline `onclick` attributes in HTML.
- Always use passive listeners for scroll/touch for performance:
```javascript
window.addEventListener('scroll', handler, { passive: true });
```

### 4.4 IntersectionObserver
- Prefer `IntersectionObserver` over `scroll` events for visibility detection.
- Always disconnect (`unobserve`) after one-time animations.

### 4.5 Comments
- Document all major JS sections with block comments:
```javascript
/* ══════════════════════════════════════════
   3. TYPEWRITER EFFECT - hero title
   ══════════════════════════════════════════ */
```
- Use inline comments for non-obvious logic.

### 4.6 Error Handling
- Use optional chaining (`?.`) before DOM access that may be null:
```javascript
const el = document.getElementById('typed-title');
if (!el) return;
```

### 4.7 No External Libraries
- No jQuery, no Lodash, no animation libraries.
- All effects implemented with native Web APIs.

---

## 5. File & Folder Rules

```
Portfolio/
├── index.html          # Only one HTML file (SPA-style)
├── css/
│   ├── style.css       # Core - always load first
│   └── animations.css  # Optional enhancement
└── js/
    └── main.js         # Single JS file, bottom of <body>
```

- CSS files loaded in `<head>`
- JS files loaded at end of `<body>` (never in `<head>`)
- Assets (PDF, images) in root of Portfolio folder

---

## 6. Performance Rules

| Rule                              | Why                                        |
|-----------------------------------|--------------------------------------------|
| No render-blocking JavaScript     | Load JS at bottom of body or use `defer`   |
| Use `will-change` sparingly       | Only on elements with known GPU animations |
| Avoid forced synchronous layouts  | Don't read then write DOM in same frame    |
| Limit to 1-2 external font families | Google Fonts adds network round trips     |
| Compress images before deployment  | Reduce file sizes by 50-80%               |

---

## 7. Version Control Conventions

If the project is tracked with Git:

### Commit Message Format
```
<type>(<scope>): <short description>

Types: feat | fix | style | docs | refactor | chore
```

### Examples
```
feat(skills): add animated progress bars with scroll trigger
fix(mobile): correct hamburger menu z-index overlap
style(hero): adjust glow animation opacity values
docs(readme): update project structure section
```

### Branch Strategy
```
main        ← production-ready code
dev         ← active development
feature/*   ← individual features
```

---

## 8. Accessibility Checklist

Before deployment, verify:
- [ ] `lang` attribute on `<html>` element
- [ ] Skip navigation link for screen readers
- [ ] All images have descriptive `alt` text
- [ ] Interactive elements focusable via keyboard
- [ ] Focus styles visible (not removed via `outline: none`)
- [ ] Color contrast ratio ≥ 4.5:1 for body text
- [ ] Form labels associated with inputs via `for`/`id`
- [ ] ARIA roles/labels on dynamic elements
