# OTOK VIS — Ultimate Design System Documentation

> **Version:** 3.0 ULTIMATE  
> **Last Updated:** January 2026  
> **Design System:** Neobrutalist Mediterranean  
> **Technology Stack:** React 18 + Vite + Tailwind CSS + TypeScript  
> **Target Platform:** Mobile-first PWA, responsive to desktop

---

## 📑 TABLE OF CONTENTS

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Border System](#5-border-system)
6. [Shadow System](#6-shadow-system)
7. [Layout System](#7-layout-system)
8. [Component Library](#8-component-library)
9. [Page Templates](#9-page-templates)
10. [Iconography](#10-iconography)
11. [Interactive States](#11-interactive-states)
12. [Animation & Motion](#12-animation--motion)
13. [Form Elements](#13-form-elements)
14. [Dark Mode](#14-dark-mode)
15. [Accessibility](#15-accessibility)
16. [Responsive Design](#16-responsive-design)
17. [Code Patterns](#17-code-patterns)
18. [Anti-Patterns](#18-anti-patterns)
19. [File Reference](#19-file-reference)
20. [Quick Reference Cards](#20-quick-reference-cards)

---

## 1. DESIGN PHILOSOPHY

### 1.1 What is Neobrutalism?

Neobrutalism is a modern web design trend that emerged from brutalist architecture and early web aesthetics. It prioritizes:

| Principle | Description |
|-----------|-------------|
| **Raw Honesty** | Elements look exactly like what they are—no pretense or skeuomorphism |
| **Bold Contrast** | High visibility through stark color differences |
| **Sharp Geometry** | Zero border radius on ALL elements |
| **Thick Outlines** | Prominent 3px borders that clearly define boundaries |
| **Offset Shadows** | Solid geometric shadows without blur |
| **Flat Colors** | No gradients, minimal transparency |

### 1.2 Core Design Principles

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         NEOBRUTALIST CORE RULES                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ❶ NO ROUNDED CORNERS    → border-radius: 0 everywhere, always             │
│  ❷ THICK VISIBLE BORDERS → 3px solid on all interactive elements           │
│  ❸ HARSH OFFSET SHADOWS  → 4-6px offset, solid color, ZERO blur            │
│  ❹ HIGH CONTRAST         → Near-black (#1A1A1A) on light backgrounds       │
│  ❺ FLAT COLORS           → No gradients, no blur, minimal transparency     │
│  ❻ HONEST MATERIALS      → Elements are what they are, no faux effects     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.3 Visual Metaphor

The design evokes:
- **Letterpress printing** — Bold, stamped quality
- **Protest posters & zines** — Raw, direct communication
- **Early web aesthetics** — Pre-CSS3 simplicity
- **Municipal signage** — Authoritative wayfinding

This creates a sense of **trustworthiness**, **authority**, and **directness** appropriate for a municipal application serving locals and visitors.

### 1.4 Design Goals

| Goal | Implementation |
|------|----------------|
| **Clarity** | High contrast, uppercase headings, clear hierarchy |
| **Speed** | Immediate recognition, obvious touch targets |
| **Trust** | Consistent patterns, official aesthetic |
| **Accessibility** | 44px touch targets, AA+ contrast, visible focus |
| **Memorability** | Distinctive visual identity unlike generic apps |

---

## 2. COLOR SYSTEM

### 2.1 CSS Variable Definitions

All colors are defined in `src/index.css` using HSL format (Hue, Saturation, Lightness) for easy manipulation. The values use space-separated format for Tailwind compatibility.

```css
:root {
  /* ═══════════════════════════════════════════════════════════════════════ */
  /* CORE PALETTE - Mediterranean-Inspired Tones                             */
  /* ═══════════════════════════════════════════════════════════════════════ */
  
  --vis-yellow: 45 70% 58%;           /* Soft Golden — Warm highlights */
  --vis-blue: 200 55% 48%;            /* Mediterranean Blue — Primary actions */
  --vis-cyan: 180 45% 45%;            /* Teal Cyan — Secondary warmth */
  --vis-green: 160 40% 45%;           /* Sea Green — Success, nature */
  --vis-white: 180 20% 97%;           /* Cool White — Clean surfaces */
  --vis-black: 210 30% 12%;           /* Deep Navy — Maximum contrast */
  
  /* ═══════════════════════════════════════════════════════════════════════ */
  /* EXTENDED PALETTE - Supporting Colors                                     */
  /* ═══════════════════════════════════════════════════════════════════════ */
  
  --vis-reddish: 195 50% 40%;         /* Steel Blue — Alternate accent */
  --vis-violet: 220 50% 50%;          /* Ocean Blue — Depth accent */
  --vis-orange: 175 45% 42%;          /* Seafoam — Tertiary accent */
  --vis-purple: 253 33% 81%;          /* Soft Lavender — Subtle accent */
  --vis-deep-blue: 215 60% 35%;       /* Navy Blue — Dark accent */
  --vis-terracotta: 350 40% 65%;      /* Muted Pink — Warm accent */
  --vis-amber: 38 60% 57%;            /* Warm Amber — Golden variant */
  --vis-muted-orange: 28 70% 60%;     /* Warm Orange — Sunset accent */
  --vis-sky: 200 60% 75%;             /* Light Sky Blue — Airy accent */
  
  /* ═══════════════════════════════════════════════════════════════════════ */
  /* SEMANTIC COLORS - Functional Meanings                                    */
  /* ═══════════════════════════════════════════════════════════════════════ */
  
  --vis-emergency: 0 55% 50%;         /* Red Alert — Critical warnings */
  --vis-notice: 35 70% 55%;           /* Amber — Important notices */
  
  /* ═══════════════════════════════════════════════════════════════════════ */
  /* UI SEMANTIC TOKENS                                                       */
  /* ═══════════════════════════════════════════════════════════════════════ */
  
  --background: 45 25% 95%;           /* Warm Mediterranean white */
  --foreground: 210 25% 15%;          /* Deep sea navy text */
  --card: 45 30% 98%;                 /* Slightly warm white */
  --card-foreground: 210 25% 15%;     /* Card text */
  --popover: 45 30% 98%;              /* Popover background */
  --popover-foreground: 210 25% 15%;  /* Popover text */
  --primary: 210 25% 15%;             /* Deep navy primary */
  --primary-foreground: 45 30% 97%;   /* Light text on primary */
  --secondary: 42 75% 65%;            /* Sandy gold secondary */
  --secondary-foreground: 210 25% 15%;/* Dark text on secondary */
  --muted: 45 15% 90%;                /* Subtle gray */
  --muted-foreground: 210 15% 40%;    /* Secondary text */
  --accent: 200 55% 50%;              /* Mediterranean azure */
  --accent-foreground: 45 30% 97%;    /* Text on accent */
  --destructive: 15 55% 50%;          /* Destructive actions */
  --destructive-foreground: 45 30% 97%;/* Text on destructive */
  --border: 210 25% 15%;              /* Border color */
  --input: 210 25% 15%;               /* Input borders */
  --ring: 200 55% 50%;                /* Focus ring */
  
  /* ═══════════════════════════════════════════════════════════════════════ */
  /* NEOBRUTALIST SPECIFIC                                                    */
  /* ═══════════════════════════════════════════════════════════════════════ */
  
  --radius: 0;                        /* NO rounded corners - CRITICAL! */
  --border-thick: 3px;                /* Standard border thickness */
  --shadow-offset: 6px;               /* Standard shadow offset */
}
```

### 2.2 Complete Color Reference Table

| Token | CSS Variable | HSL Value | Approximate Hex | Usage |
|-------|--------------|-----------|-----------------|-------|
| **vis-yellow** | `--vis-yellow` | `45 70% 58%` | `#D4A84A` | Warm highlights, warnings, menu accents |
| **vis-blue** | `--vis-blue` | `200 55% 48%` | `#4A9BBD` | Primary actions, headers, sea content |
| **vis-cyan** | `--vis-cyan` | `180 45% 45%` | `#3FA6A6` | Secondary sections, teal accent |
| **vis-green** | `--vis-green` | `160 40% 45%` | `#45A67D` | Success states, nature, recycling |
| **vis-emergency** | `--vis-emergency` | `0 55% 50%` | `#C44040` | Critical alerts, destructive actions |
| **vis-notice** | `--vis-notice` | `35 70% 55%` | `#D49A3A` | Important notices, amber warnings |
| **background** | `--background` | `45 25% 95%` | `#F5F3EF` | Page background |
| **foreground** | `--foreground` | `210 25% 15%` | `#1D2733` | Text, borders |
| **card** | `--card` | `45 30% 98%` | `#FCFBF9` | Card surfaces |
| **muted** | `--muted` | `45 15% 90%` | `#E8E6E2` | Disabled states |
| **muted-foreground** | `--muted-foreground` | `210 15% 40%` | `#596673` | Secondary text |

### 2.3 Tailwind Color Classes

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* USING VIS PALETTE COLORS                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Background colors
<div className="bg-vis-yellow" />      // Warm gold background
<div className="bg-vis-blue" />        // Mediterranean blue background
<div className="bg-vis-cyan" />        // Teal cyan background
<div className="bg-vis-green" />       // Sea green background
<div className="bg-vis-emergency" />   // Emergency red background

// Extended palette
<div className="bg-vis-purple" />      // Soft lavender
<div className="bg-vis-amber" />       // Warm amber
<div className="bg-vis-sky" />         // Light sky blue
<div className="bg-vis-terracotta" />  // Muted pink

/* ═══════════════════════════════════════════════════════════════════════════ */
/* USING SEMANTIC COLORS                                                       */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Surface colors
<div className="bg-background" />      // Page background
<div className="bg-card" />            // Card surface (white)
<div className="bg-muted" />           // Subtle gray

// Text colors
<span className="text-foreground" />         // Primary text (near black)
<span className="text-muted-foreground" />   // Secondary text (gray)
<span className="text-primary-foreground" /> // White text (on dark)
<span className="text-card-foreground" />    // Card text

/* ═══════════════════════════════════════════════════════════════════════════ */
/* TINTED BACKGROUNDS (5-20% opacity)                                          */
/* ═══════════════════════════════════════════════════════════════════════════ */

// For subtle section differentiation
<div style={{ backgroundColor: 'hsl(var(--vis-blue) / 0.05)' }} />   // 5% blue
<div style={{ backgroundColor: 'hsl(var(--vis-blue) / 0.1)' }} />    // 10% blue
<div style={{ backgroundColor: 'hsl(var(--vis-green) / 0.1)' }} />   // 10% green
<div style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.15)' }} /> // 15% yellow
```

### 2.4 Color Usage Guidelines Matrix

| Context | Background | Text | Border | Shadow |
|---------|------------|------|--------|--------|
| **Page** | `bg-background` | `text-foreground` | — | — |
| **Card (static)** | `bg-card` | `text-card-foreground` | `border-foreground` | Optional |
| **Card (interactive)** | `bg-card` | `text-card-foreground` | `border-foreground` | Required |
| **Primary button** | `bg-vis-blue` | `text-primary-foreground` | `border-foreground` | `foreground` |
| **Secondary button** | `bg-vis-green` | `text-foreground` | `border-foreground` | `foreground` |
| **Outline button** | `bg-card` | `text-foreground` | `border-foreground` | `foreground` |
| **Emergency button** | `bg-vis-emergency` | `text-primary-foreground` | `border-foreground` | `foreground` |
| **Disabled** | `bg-muted` | `text-muted-foreground` | `border-muted-foreground` | None |
| **Page header (blue)** | `bg-vis-blue` | `text-primary-foreground` | `border-foreground` | — |
| **Page header (green)** | `bg-vis-green` | `text-foreground` | `border-foreground` | — |
| **Page header (yellow)** | `bg-vis-yellow` | `text-foreground` | `border-foreground` | — |
| **Badge** | varies by variant | varies | `border-foreground` | None |
| **Input** | `bg-background` | `text-foreground` | `border-foreground` | `vis-blue` |
| **Input focus** | `bg-background` | `text-foreground` | `border-foreground` | + ring |

### 2.5 Text on Color Backgrounds

| Background | Text Color | Notes |
|------------|------------|-------|
| `bg-vis-blue` | `text-primary-foreground` | White text for contrast |
| `bg-vis-green` | `text-foreground` | Dark text works well |
| `bg-vis-yellow` | `text-foreground` | Dark text works well |
| `bg-vis-cyan` | `text-foreground` | Dark text works well |
| `bg-vis-emergency` | `text-primary-foreground` | White text for contrast |
| `bg-vis-purple` | `text-foreground` | Dark text works well |
| `bg-vis-deep-blue` | `text-primary-foreground` | White text for contrast |

---

## 3. TYPOGRAPHY

### 3.1 Font Stack

| Purpose | Font Family | Fallback Stack | Source |
|---------|-------------|----------------|--------|
| **Primary** | Space Grotesk | system-ui, sans-serif | Google Fonts |
| **Monospace** | Space Mono | monospace | Google Fonts |

**Font Loading (index.html):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**Tailwind Config:**
```typescript
fontFamily: {
  sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
  mono: ['Space Mono', 'monospace'],
}
```

### 3.2 Complete Type Scale

| Element | Size | Weight | Transform | Tracking | Line Height | Tailwind Classes |
|---------|------|--------|-----------|----------|-------------|------------------|
| **Display** | 36-40px | 800 | UPPERCASE | -0.03em | 1.1 | `text-4xl font-extrabold uppercase tracking-tighter` |
| **Page Title (H1)** | 28-32px | 800 | UPPERCASE | -0.02em | 1.2 | `text-2xl md:text-3xl font-extrabold uppercase tracking-tight` |
| **Section Header (H2)** | 18-20px | 700 | UPPERCASE | -0.02em | 1.3 | `text-lg font-bold uppercase tracking-tight` |
| **Card Title (H3)** | 16px | 700 | Normal | Normal | 1.4 | `text-base font-bold` |
| **Subsection (H4)** | 14px | 600 | UPPERCASE | 0.05em | 1.4 | `text-sm font-semibold uppercase tracking-wide` |
| **Body Large** | 16px | 400 | Normal | Normal | 1.6 | `text-base` |
| **Body** | 14px | 400 | Normal | Normal | 1.6 | `text-sm` |
| **Body Small** | 12px | 400 | Normal | Normal | 1.5 | `text-xs` |
| **Label** | 12px | 500-600 | UPPERCASE | 0.05em | 1.4 | `text-xs font-medium uppercase tracking-wide` |
| **Caption** | 11px | 400 | Normal | Normal | 1.4 | `text-[11px]` |
| **Timestamp** | 12px | 400 | Normal | Normal | 1.4 | `text-xs text-muted-foreground font-mono` |
| **Data/Numbers** | 14-16px | 500 | Normal | Normal | 1.4 | `font-mono font-medium` |

### 3.3 Typography Rules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          TYPOGRAPHY RULES                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  ✅ All headings (h1-h6) are UPPERCASE — applied globally via CSS           │
│  ✅ Use monospace (font-mono) for data: times, dates, numbers, codes        │
│  ✅ Minimum body text size: 14px (text-sm)                                  │
│  ✅ Maximum line length: ~65 characters for readability                     │
│  ✅ Use bold or color for emphasis, never italics                           │
│  ✅ Keep letter-spacing tight for headings (-0.02em)                        │
│  ✅ Keep letter-spacing wide for labels (+0.05em)                           │
│                                                                             │
│  ❌ Never use italics in the design system                                  │
│  ❌ Never use decorative fonts                                              │
│  ❌ Never use fonts smaller than 11px                                       │
│  ❌ Never use script or handwriting fonts                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.4 Typography Examples

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* PAGE TITLES                                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Main page title
<h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
  VOZNI REDOVI
</h1>

// Page title with subtitle
<div>
  <h1 className="text-2xl font-extrabold uppercase tracking-tight text-primary-foreground">
    TRAJEKTI I BRODOVI
  </h1>
  <p className="text-sm text-primary-foreground/80 mt-1">
    Raspored pomorskog prometa za otok Vis
  </p>
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* SECTION HEADERS                                                             */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Standard section header
<h2 className="text-lg font-bold uppercase tracking-tight mb-4">
  POMORSKI PROMET
</h2>

// Section header with icon
<div className="flex items-center gap-2 mb-4">
  <Ship className="w-5 h-5" />
  <h2 className="text-lg font-bold uppercase tracking-tight">
    POMORSKI PROMET
  </h2>
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* CARD & BODY TEXT                                                            */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Card title
<h3 className="font-bold text-base">Split - Vis</h3>

// Body text
<p className="text-sm text-foreground">
  Trajektna linija prometuje svakodnevno tijekom cijele godine.
</p>

// Secondary/muted text
<p className="text-sm text-muted-foreground">
  Zadnja izmjena: 01.01.2026.
</p>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* LABELS & DATA                                                               */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Uppercase label
<span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
  POLAZAK
</span>

// Monospace time data
<span className="font-mono text-sm font-medium">08:30</span>

// Monospace date
<span className="font-mono text-xs text-muted-foreground">01.01.2026.</span>

// Timestamp
<time className="text-xs text-muted-foreground font-mono">
  Prije 2 sata
</time>
```

---

## 4. SPACING SYSTEM

### 4.1 Spacing Scale

Base unit: **4px**

| Token | Value | Tailwind | Common Uses |
|-------|-------|----------|-------------|
| `0.5` | 2px | `p-0.5`, `m-0.5`, `gap-0.5` | Micro spacing, icon adjustments |
| `1` | 4px | `p-1`, `m-1`, `gap-1` | Icon gaps, tight inline spacing |
| `1.5` | 6px | `p-1.5`, `m-1.5`, `gap-1.5` | Small badge padding |
| `2` | 8px | `p-2`, `m-2`, `gap-2` | Compact element spacing |
| `2.5` | 10px | `p-2.5`, `m-2.5`, `gap-2.5` | Button padding (small) |
| `3` | 12px | `p-3`, `m-3`, `gap-3` | Between related items |
| `4` | 16px | `p-4`, `m-4`, `gap-4` | Card padding, standard gaps |
| `5` | 20px | `p-5`, `m-5`, `gap-5` | Section padding |
| `6` | 24px | `p-6`, `m-6`, `gap-6` | Large section gaps |
| `8` | 32px | `p-8`, `m-8`, `gap-8` | Page section separation |
| `10` | 40px | `p-10`, `m-10`, `gap-10` | Major visual breaks |
| `12` | 48px | `p-12`, `m-12`, `gap-12` | Hero sections |
| `16` | 64px | `p-16`, `m-16`, `gap-16` | Extra large spacing |

### 4.2 Component Spacing Guidelines

```
PAGE STRUCTURE SPACING:
═══════════════════════════════════════════════════════════════════════════════
├── AppHeader
│   └── Padding: px-4 py-3
│
├── Page Header (ColorBlock)
│   └── Padding: px-4 py-5 OR px-5 pt-6 pb-4
│
├── Content Container
│   ├── Outer padding: px-4
│   ├── Top overlap: -mt-2 (overlaps header)
│   └── Content Card
│       ├── Padding: p-4 OR p-5
│       ├── Bottom padding: pb-8
│       │
│       ├── Section
│       │   ├── Margin bottom: mb-6
│       │   ├── Header margin: mb-3 or mb-4
│       │   └── Item gap: space-y-3 or gap-3
│       │
│       └── Decorative Footer
│           └── Margin top: mt-8
│
└── Safe Area: pb-safe-bottom
═══════════════════════════════════════════════════════════════════════════════
```

### 4.3 Touch Targets

**Minimum touch target size: 44×44px** (WCAG 2.1 AAA)

```tsx
// Tailwind utility classes defined in tailwind.config.ts
minHeight: { 'touch': '44px' }
minWidth: { 'touch': '44px' }

// Usage
<button className="min-h-touch min-w-touch">...</button>

// Button sizes that meet touch targets
<button className="h-11">...</button>  // 44px (default size)
<button className="h-14">...</button>  // 56px (large size)

// Icon buttons
<button className="w-11 h-11 flex items-center justify-center">
  <Icon className="w-5 h-5" />
</button>
```

### 4.4 Container Configuration

```typescript
// tailwind.config.ts
container: {
  center: true,
  padding: "1rem",    // 16px horizontal padding
  screens: {
    sm: "100%",       // Full width on mobile
    md: "768px",      // Max 768px on tablet+
    lg: "768px",      // Same as md (mobile-first app)
    xl: "768px",      // Same as md
    "2xl": "768px"    // Same as md
  },
}
```

**Container Usage:**
```tsx
// Use max-w-screen-md for consistent content width
<div className="max-w-screen-md mx-auto px-4">
  {/* Content is centered with 768px max width */}
</div>
```

### 4.5 Safe Area Insets (Mobile)

For devices with notches (iPhone X+) or rounded corners:

```tsx
// Defined in tailwind.config.ts
spacing: {
  'safe-top': 'env(safe-area-inset-top)',
  'safe-bottom': 'env(safe-area-inset-bottom)',
}

// Usage
<div className="pt-safe-top">
  {/* Respects notch */}
</div>

<div className="pb-safe-bottom">
  {/* Respects home indicator */}
</div>
```

---

## 5. BORDER SYSTEM

### 5.1 Border Width Reference

| Context | Width | Tailwind Class | Notes |
|---------|-------|----------------|-------|
| **Cards** | 3px | `border-[3px]` | Primary UI containers |
| **Buttons** | 3px | `border-[3px]` | All button variants |
| **Inputs** | 3px | `border-[3px]` | Text inputs, selects |
| **Textareas** | 3px | `border-[3px]` | Multi-line inputs |
| **Badges** | 2px | `border-2` | Smaller elements |
| **Checkboxes** | 3px | `border-[3px]` | Selection controls |
| **Radio buttons** | 3px | `border-[3px]` | Selection controls |
| **Toggles** | 3px | `border-[3px]` | Switch controls |
| **Dividers** | 2-3px | `border-t-2` or `border-t-[3px]` | Horizontal rules |
| **Header bottom** | 3px | `border-b-[3px]` | App header |
| **Card sides** | 3px | `border-x-[3px]` | Content containers |
| **Icon containers** | 3px | `border-[3px]` | Icon boxes |
| **Decorative blocks** | 2px | `border-2` | Footer decorations |

### 5.2 Border Color

| Context | Token | Tailwind Class | Notes |
|---------|-------|----------------|-------|
| **Default** | `--foreground` | `border-foreground` | Near black, high contrast |
| **On dark backgrounds** | `--foreground` | `border-foreground` | Still black for contrast |
| **Subtle/dashed** | `--muted-foreground` | `border-muted-foreground/30` | Low visibility |
| **Error state** | `--vis-emergency` | `border-vis-emergency` | Red for errors |
| **Focus ring** | `--vis-blue` | `ring-vis-blue` | Accent color |

### 5.3 Border Radius

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ⚠️  CRITICAL: BORDER RADIUS  ⚠️                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   --radius: 0;    ← Set globally in index.css                              │
│                                                                             │
│   ALL ELEMENTS MUST HAVE SHARP 90° CORNERS. NO EXCEPTIONS.                  │
│                                                                             │
│   ❌ NEVER use:                                                             │
│      • rounded-sm                                                           │
│      • rounded-md                                                           │
│      • rounded-lg                                                           │
│      • rounded-xl                                                           │
│      • rounded-full                                                         │
│      • rounded-[any value]                                                  │
│      • Any border-radius property                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.4 Border Examples

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* STANDARD BORDERS                                                            */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Card border
<div className="border-[3px] border-foreground bg-card p-4">
  Card content
</div>

// Button border
<button className="border-[3px] border-foreground bg-vis-blue px-4 py-2">
  Button
</button>

// Input border
<input className="border-[3px] border-foreground bg-background px-4 py-3" />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* BADGE BORDER                                                                */
/* ═══════════════════════════════════════════════════════════════════════════ */

<span className="border-2 border-foreground px-2 py-0.5 text-xs uppercase">
  Badge
</span>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* DIVIDERS                                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Heavy divider
<hr className="border-t-[3px] border-foreground" />

// Light divider
<hr className="border-t-2 border-muted-foreground/30" />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* DASHED BORDERS (rare usage)                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

<div className="border-2 border-dashed border-muted-foreground/30 p-4">
  Optional content area
</div>
```

---

## 6. SHADOW SYSTEM

### 6.1 Shadow Specifications

Shadows are **solid color, NO blur, offset diagonally**.

| Size | X Offset | Y Offset | Blur | Spread | Usage |
|------|----------|----------|------|--------|-------|
| **Tiny** | 2px | 2px | 0 | 0 | Very small elements |
| **Small** | 3px | 3px | 0 | 0 | Icon buttons, badges |
| **Medium** | 4px | 4px | 0 | 0 | Buttons, interactive cards |
| **Large** | 6px | 6px | 0 | 0 | Major cards, hero elements |

### 6.2 Shadow CSS Syntax

```css
/* Tiny shadow */
box-shadow: 2px 2px 0 hsl(var(--foreground));

/* Small shadow */
box-shadow: 3px 3px 0 hsl(var(--foreground));

/* Medium shadow */
box-shadow: 4px 4px 0 hsl(var(--foreground));

/* Large shadow */
box-shadow: 6px 6px 0 hsl(var(--foreground));
```

### 6.3 Shadow Color Options

| Color | CSS Variable | Tailwind Utility | Usage |
|-------|--------------|------------------|-------|
| **Foreground (black)** | `--foreground` | `shadow-brutal` | Default, high contrast |
| **Yellow** | `--vis-yellow` | `shadow-brutal-yellow` | Warm accent, menu items |
| **Blue** | `--vis-blue` | `shadow-brutal-blue` | Cool accent, sea content |
| **Cyan** | `--vis-cyan` | `shadow-brutal-cyan` | Teal accent |
| **Green** | `--vis-green` | `shadow-brutal-green` | Nature, success |

### 6.4 Shadow Utility Classes (from index.css)

```tsx
// Large shadows (6px)
<div className="shadow-brutal" />         // Black shadow
<div className="shadow-brutal-yellow" />  // Yellow shadow
<div className="shadow-brutal-blue" />    // Blue shadow
<div className="shadow-brutal-cyan" />    // Cyan shadow
<div className="shadow-brutal-green" />   // Green shadow

// Small shadow (4px)
<div className="shadow-brutal-sm" />      // Black shadow
```

### 6.5 Shadow Implementation Examples

Since Tailwind can't create custom offset shadows with palette colors inline, use the `style` prop:

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* STATIC ELEMENTS                                                             */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Static card with blue shadow
<div 
  className="border-[3px] border-foreground bg-card p-4"
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>
  Content
</div>

// Static card with foreground shadow
<div 
  className="border-[3px] border-foreground bg-card p-4"
  style={{ boxShadow: '6px 6px 0 hsl(var(--foreground))' }}
>
  Content
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* INTERACTIVE ELEMENTS (hover reduces shadow)                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Interactive button
<button
  className="
    border-[3px] border-foreground bg-vis-blue px-4 py-2
    transition-all duration-150
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  Button
</button>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ICON CONTAINERS                                                             */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Header icon button with yellow shadow
<button
  className="w-11 h-11 border-[3px] border-foreground bg-card flex items-center justify-center"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
>
  <Menu className="w-6 h-6" />
</button>

// Page icon box with shadow
<div
  className="w-12 h-12 border-[3px] border-foreground bg-card flex items-center justify-center"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
>
  <Ship className="w-6 h-6" />
</div>
```

### 6.6 Shadow State Transitions

```
DEFAULT STATE:
┌─────────────┐
│   Button    │▓▓▓
│             │▓▓▓
└─────────────┘▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                    → Shadow: 4px 4px
                    → Transform: none

HOVER STATE:
  ┌─────────────┐
  │   Button    │▓
  │             │▓
  └─────────────┘▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓
                    → Shadow: 2px 2px (reduced)
                    → Transform: translate(2px, 2px)

ACTIVE/PRESSED STATE:
    ┌─────────────┐
    │   Button    │
    │             │
    └─────────────┘
                    → Shadow: none
                    → Transform: translate(4px, 4px)
```

---

## 7. LAYOUT SYSTEM

### 7.1 Page Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              VIEWPORT                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  HEADER BAR (sticky, z-50)                                              │ │
│ │  bg-card, border-b-[3px], px-4 py-3                                     │ │
│ │  ┌────────┐                                  ┌────────┐                 │ │
│ │  │ Menu   │        MOJ VIS                   │ Inbox  │                 │ │
│ │  │ Button │                                  │ Button │                 │ │
│ │  └────────┘                                  └────────┘                 │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  PAGE HEADER (full-width color block)                                   │ │
│ │  bg-vis-{color}, px-4 py-5 or px-5 pt-6 pb-4                           │ │
│ │  ┌──────┐                                                               │ │
│ │  │ Icon │  PAGE TITLE                                                   │ │
│ │  │ Box  │  Subtitle or description text                                 │ │
│ │  └──────┘                                                               │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  CONTENT WRAPPER (px-4, -mt-2 for overlap)                              │ │
│ │  ┌───────────────────────────────────────────────────────────────────┐  │ │
│ │  │  CONTENT CARD                                                     │  │ │
│ │  │  bg-card, border-[3px], border-foreground, p-4 pb-8              │  │ │
│ │  │  optional: shadow-brutal (6px 6px)                                │  │ │
│ │  │                                                                   │  │ │
│ │  │  ┌─────────────────────────────────────────────────────────────┐ │  │ │
│ │  │  │  SECTION 1                                                  │ │  │ │
│ │  │  │  Optional tinted background, shadow                         │ │  │ │
│ │  │  │  mb-6                                                       │ │  │ │
│ │  │  └─────────────────────────────────────────────────────────────┘ │  │ │
│ │  │                                                                   │  │ │
│ │  │  SECTION HEADER (h2)                                              │  │ │
│ │  │  mb-3 or mb-4                                                     │  │ │
│ │  │                                                                   │  │ │
│ │  │  ┌─────────────────────────────────────────────────────────────┐ │  │ │
│ │  │  │  List Item 1                                            ▶  │ │  │ │
│ │  │  ├─────────────────────────────────────────────────────────────┤ │  │ │
│ │  │  │  List Item 2                                            ▶  │ │  │ │
│ │  │  ├─────────────────────────────────────────────────────────────┤ │  │ │
│ │  │  │  List Item 3                                            ▶  │ │  │ │
│ │  │  └─────────────────────────────────────────────────────────────┘ │  │ │
│ │  │                                                                   │  │ │
│ │  │          ■  ■  ■  ■  (decorative footer blocks)                  │  │ │
│ │  │          mt-8, gap-2                                              │  │ │
│ │  │                                                                   │  │ │
│ │  └───────────────────────────────────────────────────────────────────┘  │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  pb-safe-bottom (for devices with home indicators)                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Layout Components

**AppHeader:**
```tsx
<header className="sticky top-0 z-50 w-full bg-card border-b-[3px] border-foreground px-4 py-3">
  <div className="flex items-center justify-between max-w-screen-md mx-auto">
    {/* Menu button (left) */}
    {/* Title (center) */}
    {/* Inbox button (right) */}
  </div>
</header>
```

**ColorBlock (Page Header):**
```tsx
<section className={`w-full bg-vis-${color} px-4 py-5`}>
  <div className="max-w-screen-md mx-auto">
    {/* Icon + Title + Subtitle */}
  </div>
</section>
```

**Content Card:**
```tsx
<div className="flex-1 bg-card border-x-[3px] border-foreground px-5 pt-6 pb-8">
  <div className="max-w-screen-md mx-auto">
    {/* Sections */}
  </div>
</div>
```

### 7.3 Flex and Grid Patterns

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* COMMON FLEX PATTERNS                                                        */
/* ═══════════════════════════════════════════════════════════════════════════ */

// Full-height page container
<div className="min-h-screen bg-background flex flex-col">
  <AppHeader />
  <main className="flex-1 flex flex-col">
    {/* Content */}
  </main>
</div>

// Centered content with max-width
<div className="max-w-screen-md mx-auto px-4">
  {/* Content */}
</div>

// Space-between header row
<div className="flex items-center justify-between">
  <h2>Title</h2>
  <button>Action</button>
</div>

// Icon + text alignment
<div className="flex items-center gap-3">
  <Icon className="w-5 h-5" />
  <span>Label</span>
</div>

// List item with arrow
<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5" />
    <span>Item text</span>
  </div>
  <ChevronRight className="w-5 h-5" />
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* COMMON GRID PATTERNS                                                        */
/* ═══════════════════════════════════════════════════════════════════════════ */

// 2-column grid
<div className="grid grid-cols-2 gap-3">
  <Card />
  <Card />
</div>

// Responsive grid (1 col mobile, 2 cols tablet+)
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card />
  <Card />
</div>

// Auto-fit grid for flexible items
<div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
  {items.map(item => <Card key={item.id} />)}
</div>
```

---

## 8. COMPONENT LIBRARY

### 8.1 VisButton

**File:** `src/components/ui/VisButton.tsx`

| Variant | Background | Text | Border | Shadow | Usage |
|---------|------------|------|--------|--------|-------|
| `primary` | `vis-blue` | white | foreground | foreground | Primary actions |
| `secondary` | `vis-green` | foreground | foreground | foreground | Secondary actions |
| `outline` | `card` | foreground | foreground | foreground | Tertiary actions |
| `ghost` | transparent | foreground | transparent→foreground | none | Subtle actions |
| `emergency` | `vis-emergency` | white | foreground | foreground | Critical actions |

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| `sm` | 36px (h-9) | px-3 | text-sm |
| `default` | 44px (h-11) | px-4 py-2 | text-base |
| `lg` | 56px (h-14) | px-6 | text-lg |
| `icon` | 44px (h-11 w-11) | p-0 | — |

```tsx
import VisButton from '@/components/ui/VisButton';

// Primary button
<VisButton variant="primary">
  Pošalji
</VisButton>

// Secondary with icon
<VisButton variant="secondary" size="lg">
  <Ship className="w-5 h-5 mr-2" />
  Vozni red
</VisButton>

// Icon-only button
<VisButton variant="outline" size="icon">
  <Plus className="w-5 h-5" />
</VisButton>

// Emergency button
<VisButton variant="emergency">
  Prijavi hitno
</VisButton>
```

### 8.2 VisCard

**File:** `src/components/ui/VisCard.tsx`

```tsx
import VisCard from '@/components/ui/VisCard';

// Static card (no shadow)
<VisCard>
  <h3 className="font-bold">Title</h3>
  <p className="text-sm text-muted-foreground">Description</p>
</VisCard>

// Interactive card (has shadow and hover states)
<VisCard onClick={() => navigate('/details')}>
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <Ship className="w-5 h-5" />
      <span className="font-semibold">Split - Vis</span>
    </div>
    <ChevronRight className="w-5 h-5" />
  </div>
</VisCard>

// Card with custom className
<VisCard className="bg-vis-blue/5">
  <p>Tinted content</p>
</VisCard>
```

### 8.3 VisBadge

**File:** `src/components/ui/VisBadge.tsx`

| Variant | Background | Text |
|---------|------------|------|
| `vis` | `vis-blue` | white |
| `komiza` | `vis-green` | foreground |
| `kultura` | `vis-yellow` | foreground |
| `hitno` / `emergency` | `vis-emergency` | white |
| `opcenito` / `general` | `vis-purple` | foreground |
| `default` | `vis-yellow` | foreground |

```tsx
import VisBadge from '@/components/ui/VisBadge';

<VisBadge variant="vis">VIS</VisBadge>
<VisBadge variant="komiza">KOMIŽA</VisBadge>
<VisBadge variant="emergency">HITNO</VisBadge>
<VisBadge variant="kultura">KULTURA</VisBadge>
<VisBadge>DEFAULT</VisBadge>
```

### 8.4 ColorBlock

**File:** `src/components/layout/ColorBlock.tsx`

Colors: `blue`, `yellow`, `cyan`, `green`, `white`

```tsx
import ColorBlock from '@/components/layout/ColorBlock';

// Standard page header
<ColorBlock color="blue">
  <h1 className="text-2xl font-extrabold uppercase tracking-tight text-primary-foreground">
    Page Title
  </h1>
</ColorBlock>

// No padding (custom inner padding)
<ColorBlock color="yellow" noPadding>
  <div className="px-6 py-8">
    Custom padding content
  </div>
</ColorBlock>
```

### 8.5 AppHeader

**File:** `src/components/layout/AppHeader.tsx`

```tsx
import AppHeader from '@/components/layout/AppHeader';

// Without unread count
<AppHeader />

// With unread count (shows badge on inbox)
<AppHeader unreadCount={3} />
```

### 8.6 ImageHeader

**File:** `src/components/layout/ImageHeader.tsx`

For pages with background images.

```tsx
import ImageHeader from '@/components/layout/ImageHeader';
import heroImage from '@/assets/hero.jpg';

<ImageHeader
  image={heroImage}
  title="Page Title"
  subtitle="Page subtitle text"
  icon={<Ship className="w-6 h-6" />}
  iconBg="vis-blue"
  iconShadow="vis-yellow"
  backPath="/previous-page"
/>
```

### 8.7 ImageCarousel

**File:** `src/components/ui/ImageCarousel.tsx`

```tsx
import ImageCarousel from '@/components/ui/ImageCarousel';

const images = [
  { src: image1, alt: 'Description 1' },
  { src: image2, alt: 'Description 2' },
  { src: image3, alt: 'Description 3' },
];

<ImageCarousel 
  images={images}
  badgeText="3 Photos"
  badgeColor="#96C7B3"
/>
```

### 8.8 Decorative Footer Blocks

Standard decorative element for page bottoms:

```tsx
<div className="flex justify-center gap-2 mt-8 pb-4">
  <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
</div>
```

---

## 9. PAGE TEMPLATES

### 9.1 Standard Page Template

```tsx
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import { Ship, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StandardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      
      {/* Page Header */}
      <ColorBlock color="blue">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
          >
            <Ship className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight text-primary-foreground">
              PAGE TITLE
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Page description or subtitle
            </p>
          </div>
        </div>
      </ColorBlock>
      
      {/* Content Card */}
      <div className="flex-1 bg-card border-x-[3px] border-foreground px-5 pt-6 pb-8">
        
        {/* Section with tinted background */}
        <section 
          className="p-4 border-[3px] border-foreground mb-6"
          style={{ 
            backgroundColor: 'hsl(var(--vis-blue) / 0.1)',
            boxShadow: '4px 4px 0 hsl(var(--vis-blue))' 
          }}
        >
          <p className="text-sm">Important information box</p>
        </section>
        
        {/* Regular section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-tight mb-3">
            SECTION TITLE
          </h2>
          <div className="space-y-3">
            {/* List items */}
            <button
              onClick={() => navigate('/item-1')}
              className="w-full text-left p-4 border-[3px] border-foreground bg-card
                         flex items-center justify-between
                         hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
            >
              <span className="font-semibold">List Item 1</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>
        
        {/* Decorative footer */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};
```

### 9.2 Form Page Template

```tsx
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisButton from '@/components/ui/VisButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';

const FormPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      
      <ColorBlock color="yellow">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
          >
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight">
              CONTACT FORM
            </h1>
          </div>
        </div>
      </ColorBlock>
      
      <div className="flex-1 bg-card border-x-[3px] border-foreground px-5 pt-6 pb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              Your Name
            </label>
            <Input
              placeholder="Enter your name..."
              className="border-[3px] border-foreground h-12 rounded-none"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              Message
            </label>
            <Textarea
              placeholder="Your message..."
              rows={5}
              className="border-[3px] border-foreground rounded-none resize-none"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            />
          </div>
          
          <VisButton variant="primary" className="w-full" type="submit">
            Send Message
          </VisButton>
        </form>
      </div>
    </div>
  );
};
```

### 9.3 Success/Confirmation Page Template

```tsx
import { Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VisButton from '@/components/ui/VisButton';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vis-green flex flex-col items-center justify-center px-6 py-12">
      {/* Success Icon */}
      <div 
        className="w-24 h-24 bg-card border-[3px] border-foreground flex items-center justify-center mb-8"
        style={{ boxShadow: '6px 6px 0 hsl(var(--foreground))' }}
      >
        <Check className="w-12 h-12" strokeWidth={3} />
      </div>
      
      {/* Success Message */}
      <h1 className="text-3xl font-extrabold uppercase tracking-tight text-center mb-4">
        SUCCESS!
      </h1>
      <p className="text-center text-foreground/80 mb-8 max-w-sm">
        Your submission has been received. Thank you for your feedback!
      </p>
      
      {/* Back Button */}
      <VisButton 
        variant="outline" 
        onClick={() => navigate('/home')}
        className="bg-card"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </VisButton>
    </div>
  );
};
```

---

## 10. ICONOGRAPHY

### 10.1 Icon Library

**Exclusive library:** Lucide React

```tsx
import { Ship, Calendar, AlertTriangle, ChevronRight } from 'lucide-react';
```

### 10.2 Icon Specifications

| Context | Size | Stroke Width | Tailwind |
|---------|------|--------------|----------|
| **Inline text** | 16px | 2 | `w-4 h-4` |
| **Buttons** | 20px | 2-2.5 | `w-5 h-5` |
| **Section headers** | 20-24px | 2.5 | `w-5 h-5` or `w-6 h-6` |
| **Feature boxes** | 24-32px | 2 | `w-6 h-6` or `w-8 h-8` |
| **Hero icons** | 32-48px | 2 | `w-8 h-8` or `w-12 h-12` |

### 10.3 Icon Rules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ICON RULES                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  ✅ Use LINE icons only (no filled variants)                                │
│  ✅ Stroke width: 2 to 2.5 for visibility                                   │
│  ✅ Color: inherit from parent or use text-{color}                          │
│  ✅ Always pair icons with labels (no icon-only meaning)                    │
│  ✅ Use strokeWidth prop for custom stroke                                  │
│                                                                             │
│  ❌ Never use filled/solid icon variants                                    │
│  ❌ Never use icons without labels for critical actions                     │
│  ❌ Never use thin strokes (< 2)                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.4 Icon Container Patterns

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* STANDARD ICON BOX (colored background)                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

<div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground 
                flex items-center justify-center text-primary-foreground">
  <Ship className="w-5 h-5" />
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ICON BOX WITH SHADOW (for page headers)                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */

<div 
  className="w-12 h-12 bg-card border-[3px] border-foreground 
             flex items-center justify-center"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
>
  <Calendar className="w-6 h-6 text-vis-blue" />
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* LARGE FEATURE ICON                                                          */
/* ═══════════════════════════════════════════════════════════════════════════ */

<div 
  className="w-16 h-16 bg-vis-green border-[3px] border-foreground 
             flex items-center justify-center"
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  <Leaf className="w-8 h-8 text-foreground" />
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ICON BUTTON (header style)                                                  */
/* ═══════════════════════════════════════════════════════════════════════════ */

<button
  className="min-w-touch min-h-touch flex items-center justify-center 
             border-[3px] border-foreground bg-card hover:bg-muted transition-colors"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
  aria-label="Open menu"
>
  <Menu className="w-6 h-6" strokeWidth={2.5} />
</button>
```

---

## 11. INTERACTIVE STATES

### 11.1 State Overview

| State | Transform | Shadow | Other |
|-------|-----------|--------|-------|
| **Default** | none | full (4-6px) | — |
| **Hover** | `translate(2px, 2px)` | reduced (2-4px) | — |
| **Active/Pressed** | `translate(4px, 4px)` | none | — |
| **Focus** | none | full | `ring-2 ring-{color}` |
| **Disabled** | none | none | `opacity-50`, `pointer-events-none` |
| **Selected** | none | reduced | background color change |

### 11.2 Interactive Button Pattern

```tsx
<button
  className="
    /* Base styles */
    border-[3px] border-foreground bg-vis-blue text-primary-foreground
    font-bold uppercase px-4 py-3 min-h-touch
    
    /* Transition */
    transition-all duration-150
    
    /* Hover state */
    hover:translate-x-[2px] hover:translate-y-[2px]
    
    /* Active/pressed state */
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    
    /* Disabled state */
    disabled:opacity-50 disabled:pointer-events-none
    
    /* Focus state */
    focus:outline-none focus:ring-2 focus:ring-vis-yellow focus:ring-offset-2
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  Button Label
</button>
```

### 11.3 Interactive Card Pattern

```tsx
<button
  onClick={handleClick}
  className="
    w-full text-left p-4
    border-[3px] border-foreground bg-card
    transition-all duration-150
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>
  {content}
</button>
```

### 11.4 Selection States

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* SELECTED ITEM                                                               */
/* ═══════════════════════════════════════════════════════════════════════════ */

<div className={cn(
  'p-3 border-[3px] border-foreground transition-colors',
  isSelected ? 'bg-vis-blue text-primary-foreground' : 'bg-card'
)}>
  {content}
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* CHECKBOX                                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

<button
  onClick={() => setChecked(!checked)}
  className={cn(
    'w-7 h-7 border-[3px] border-foreground flex items-center justify-center transition-colors',
    checked ? 'bg-vis-blue' : 'bg-card'
  )}
>
  {checked && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
</button>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* TOGGLE/SWITCH                                                               */
/* ═══════════════════════════════════════════════════════════════════════════ */

<button
  onClick={() => setEnabled(!enabled)}
  className={cn(
    'w-14 h-8 border-[3px] border-foreground relative transition-colors',
    enabled ? 'bg-vis-green' : 'bg-muted'
  )}
>
  <div className={cn(
    'absolute top-0.5 w-5 h-5 bg-card border-2 border-foreground transition-all',
    enabled ? 'left-6' : 'left-0.5'
  )} />
</button>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* RADIO BUTTON                                                                */
/* ═══════════════════════════════════════════════════════════════════════════ */

<button
  onClick={() => setSelected(value)}
  className={cn(
    'w-7 h-7 border-[3px] border-foreground flex items-center justify-center transition-colors',
    isSelected ? 'bg-vis-blue' : 'bg-card'
  )}
>
  {isSelected && <div className="w-3 h-3 bg-primary-foreground" />}
</button>
```

---

## 12. ANIMATION & MOTION

### 12.1 Allowed Animations

| Type | Implementation | Duration | Easing |
|------|----------------|----------|--------|
| **Hover translate** | `hover:translate-x-[2px] hover:translate-y-[2px]` | 150ms | ease |
| **Active press** | `active:translate-x-[4px] active:translate-y-[4px]` | 100ms | ease |
| **Color transitions** | `transition-colors` | 150ms | ease |
| **Transform transitions** | `transition-all` or `transition-transform` | 150ms | ease |
| **Accordion** | `animate-accordion-down` / `animate-accordion-up` | 200ms | ease-out |
| **Fade in** | `animate-fade-in` | 300ms | ease-out |
| **Slide up** | `animate-slide-up` | 300ms | ease-out |
| **Marquee** | `animate-marquee` | 20s | linear, infinite |

### 12.2 Animation Keyframes (tailwind.config.ts)

```typescript
keyframes: {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
  "slide-up": {
    from: { transform: "translateY(10px)", opacity: "0" },
    to: { transform: "translateY(0)", opacity: "1" },
  },
},
animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  "fade-in": "fade-in 0.3s ease-out",
  "slide-up": "slide-up 0.3s ease-out",
},
```

### 12.3 Marquee Animation (index.css)

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

### 12.4 Prohibited Animations

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ❌ PROHIBITED ANIMATIONS ❌                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  • blur-* or backdrop-blur-*         (no blur effects)                      │
│  • opacity fade on main content      (only on overlays)                     │
│  • scale-* transforms                (no scaling)                           │
│  • Complex keyframe animations       (keep it simple)                       │
│  • Parallax scrolling effects        (not brutalist)                        │
│  • Bounce or spring animations       (too playful)                          │
│  • Infinite looping (except marquee) (distracting)                          │
│  • 3D transforms                     (not flat)                             │
│  • Rotation transforms               (keep static)                          │
│  • Skew transforms                   (keep rectangular)                     │
│  • animate-pulse                     (too subtle)                           │
│  • animate-bounce                    (too playful)                          │
│  • animate-spin                      (except loading)                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 13. FORM ELEMENTS

### 13.1 Text Input

```tsx
<div className="space-y-1">
  <label className="text-xs font-semibold uppercase tracking-wide">
    FIELD LABEL
  </label>
  <input
    type="text"
    placeholder="Placeholder text..."
    className="
      w-full px-4 py-3 h-12
      border-[3px] border-foreground bg-background
      text-foreground placeholder:text-muted-foreground
      focus:outline-none focus:ring-2 focus:ring-vis-blue
      disabled:opacity-50 disabled:cursor-not-allowed
      rounded-none
    "
    style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
  />
</div>
```

### 13.2 Textarea

```tsx
<div className="space-y-1">
  <label className="text-xs font-semibold uppercase tracking-wide">
    MESSAGE
  </label>
  <textarea
    placeholder="Your message..."
    rows={5}
    className="
      w-full px-4 py-3
      border-[3px] border-foreground bg-background
      text-foreground placeholder:text-muted-foreground
      focus:outline-none focus:ring-2 focus:ring-vis-blue
      resize-none rounded-none
    "
    style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
  />
</div>
```

### 13.3 Select

```tsx
<div className="space-y-1">
  <label className="text-xs font-semibold uppercase tracking-wide">
    CATEGORY
  </label>
  <select
    className="
      w-full px-4 py-3 h-12
      border-[3px] border-foreground bg-background
      text-foreground appearance-none
      focus:outline-none focus:ring-2 focus:ring-vis-blue
      rounded-none cursor-pointer
    "
    style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
  >
    <option value="">Select an option...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</div>
```

### 13.4 Search Input

```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" strokeWidth={2.5} />
  <input
    type="text"
    placeholder="Pretraži..."
    className="
      w-full pl-11 pr-4 h-12
      border-[3px] border-foreground bg-card
      text-base rounded-none
      focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground
    "
    style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
  />
</div>
```

### 13.5 Form Error State

```tsx
<div className="space-y-1">
  <label className="text-xs font-semibold uppercase tracking-wide">
    EMAIL
  </label>
  <input
    type="email"
    className="
      w-full px-4 py-3 h-12
      border-[3px] border-vis-emergency bg-background
      text-foreground
      focus:outline-none focus:ring-2 focus:ring-vis-emergency
      rounded-none
    "
    style={{ boxShadow: '3px 3px 0 hsl(var(--vis-emergency))' }}
  />
  <p className="text-xs text-vis-emergency font-medium">
    Please enter a valid email address
  </p>
</div>
```

---

## 14. DARK MODE

### 14.1 Implementation

Dark mode uses class-based switching (`darkMode: ["class"]` in Tailwind config).

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Or with a state
const [isDark, setIsDark] = useState(false);
useEffect(() => {
  document.documentElement.classList.toggle('dark', isDark);
}, [isDark]);
```

### 14.2 Dark Mode Color Values

```css
.dark {
  --background: 210 30% 10%;        /* Near black */
  --foreground: 45 25% 92%;         /* Off white */
  
  --card: 210 28% 14%;              /* Dark gray */
  --card-foreground: 45 25% 92%;
  
  --popover: 210 28% 14%;
  --popover-foreground: 45 25% 92%;
  
  --primary: 45 25% 92%;            /* Light primary */
  --primary-foreground: 210 30% 10%;
  
  --secondary: 42 65% 55%;
  --secondary-foreground: 210 30% 10%;
  
  --muted: 210 20% 20%;
  --muted-foreground: 45 15% 65%;
  
  --accent: 185 40% 50%;
  --accent-foreground: 210 30% 10%;
  
  --destructive: 15 50% 45%;
  --destructive-foreground: 45 25% 92%;
  
  --border: 45 20% 85%;             /* Light borders in dark mode */
  --input: 45 20% 85%;
  --ring: 200 55% 50%;
}
```

### 14.3 Dark Mode Considerations

| Element | Light Mode | Dark Mode | Notes |
|---------|------------|-----------|-------|
| **Borders** | Black (`foreground`) | White (`foreground` flipped) | Auto-handled |
| **Shadows** | Black on light | May need visibility check | Test carefully |
| **Palette colors** | Same | Same | vis-blue, vis-green, etc. unchanged |
| **Text on palette** | Check contrast | Check contrast | May need adjustment |

---

## 15. ACCESSIBILITY

### 15.1 Accessibility Checklist

| Requirement | Implementation | Status |
|-------------|----------------|--------|
| Touch targets ≥ 44px | `min-h-touch min-w-touch` | ✅ |
| Text contrast AA+ | Dark text on light, light on dark | ✅ |
| Visible focus states | `focus:ring-2 focus:ring-{color}` | ✅ |
| No color-only meaning | Always use labels + icons | ✅ |
| Readable text size | Minimum 14px body | ✅ |
| Clear hierarchy | Uppercase headings, bold titles | ✅ |
| High-contrast borders | 3px black borders | ✅ |
| Interactive affordances | Shadows = clickable | ✅ |
| Keyboard navigation | Tab order, Enter/Space | ✅ |
| Screen reader support | ARIA labels, semantic HTML | ✅ |

### 15.2 Focus States

```tsx
// Button focus
<button className="focus:outline-none focus:ring-2 focus:ring-vis-blue focus:ring-offset-2">

// Input focus
<input className="focus:outline-none focus:ring-2 focus:ring-vis-blue">

// Card focus
<button className="focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2">
```

### 15.3 ARIA Labels

```tsx
// Icon-only buttons MUST have aria-label
<button aria-label="Open menu">
  <Menu className="w-6 h-6" />
</button>

// Status indicators for screen readers
<span aria-live="polite" className="sr-only">
  {unreadCount} unread messages
</span>

// Loading states
<div aria-busy="true" aria-live="polite">
  Loading...
</div>
```

### 15.4 Semantic HTML

```tsx
// Use semantic elements
<header>...</header>
<main>...</main>
<nav>...</nav>
<article>...</article>
<section>...</section>
<footer>...</footer>

// Use proper heading hierarchy
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>

// Use button for actions, links for navigation
<button onClick={handleAction}>Do Something</button>
<a href="/page">Go to Page</a>
```

---

## 16. RESPONSIVE DESIGN

### 16.1 Breakpoints

| Breakpoint | Width | Tailwind | Usage |
|------------|-------|----------|-------|
| **Mobile** | < 640px | Default | Primary target |
| **sm** | ≥ 640px | `sm:` | Large phones |
| **md** | ≥ 768px | `md:` | Tablets, content max-width |
| **lg** | ≥ 1024px | `lg:` | Desktop (same as md for this app) |
| **xl** | ≥ 1280px | `xl:` | Large desktop (same as md) |
| **2xl** | ≥ 1536px | `2xl:` | Extra large (same as md) |

### 16.2 Mobile-First Approach

Always design for mobile first, then add larger screen overrides:

```tsx
// ✅ Correct: Mobile-first
<h1 className="text-2xl md:text-3xl font-extrabold">

// ❌ Wrong: Desktop-first
<h1 className="text-3xl sm:text-2xl font-extrabold">
```

### 16.3 Responsive Patterns

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* RESPONSIVE TYPOGRAPHY                                                       */
/* ═══════════════════════════════════════════════════════════════════════════ */

<h1 className="text-2xl md:text-3xl font-extrabold">Title</h1>
<p className="text-sm md:text-base">Body text</p>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* RESPONSIVE GRID                                                             */
/* ═══════════════════════════════════════════════════════════════════════════ */

// 1 column on mobile, 2 on tablet+
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* RESPONSIVE SPACING                                                          */
/* ═══════════════════════════════════════════════════════════════════════════ */

<div className="px-4 md:px-6 py-4 md:py-6">
  Content with responsive padding
</div>

/* ═══════════════════════════════════════════════════════════════════════════ */
/* SHOW/HIDE ELEMENTS                                                          */
/* ═══════════════════════════════════════════════════════════════════════════ */

<div className="block md:hidden">Mobile only</div>
<div className="hidden md:block">Tablet+ only</div>
```

---

## 17. CODE PATTERNS

### 17.1 Utility Function: cn()

**File:** `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage:**
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  condition && 'conditional-classes',
  customClassName
)}>
```

### 17.2 Component Structure

```tsx
// Standard component pattern
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'alternate';
  children: React.ReactNode;
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base classes
          'border-[3px] border-foreground',
          // Variant classes
          variant === 'default' && 'bg-card',
          variant === 'alternate' && 'bg-vis-blue text-primary-foreground',
          // Custom className override
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Component.displayName = 'Component';

export default Component;
```

### 17.3 Style Object Patterns

```tsx
// For box shadows (can't be done with Tailwind classes)
const shadowStyles = {
  small: { boxShadow: '3px 3px 0 hsl(var(--foreground))' },
  medium: { boxShadow: '4px 4px 0 hsl(var(--foreground))' },
  large: { boxShadow: '6px 6px 0 hsl(var(--foreground))' },
  blue: { boxShadow: '4px 4px 0 hsl(var(--vis-blue))' },
  yellow: { boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' },
  green: { boxShadow: '4px 4px 0 hsl(var(--vis-green))' },
};

// Usage
<div style={shadowStyles.blue}>Content</div>
```

### 17.4 Navigation Pattern

```tsx
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const NavigableItem = ({ path, label, icon: Icon }) => {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate(path)}
      className="
        w-full text-left p-4 border-[3px] border-foreground bg-card
        flex items-center justify-between
        hover:translate-x-[2px] hover:translate-y-[2px] transition-all
      "
      style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" />
        <span className="font-semibold">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5" />
    </button>
  );
};
```

---

## 18. ANTI-PATTERNS

### 18.1 ❌ NEVER DO THIS

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* ROUNDED CORNERS - FORBIDDEN                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="rounded-lg" />
❌ <button className="rounded-full" />
❌ <input className="rounded-md" />
❌ <div style={{ borderRadius: '8px' }} />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* BLUR EFFECTS - FORBIDDEN                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="backdrop-blur-md" />
❌ <div className="blur-sm" />
❌ <div style={{ filter: 'blur(4px)' }} />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* GRADIENTS - FORBIDDEN                                                       */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="bg-gradient-to-r from-blue-500 to-green-500" />
❌ <div style={{ background: 'linear-gradient(...)' }} />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* DROP SHADOWS WITH BLUR - FORBIDDEN                                          */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="shadow-lg" />
❌ <div className="shadow-xl" />
❌ <div className="shadow-2xl" />
❌ <div style={{ boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* THIN BORDERS - FORBIDDEN                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="border" />           // 1px - too thin
❌ <div className="border-[1px]" />     // 1px - too thin
❌ <div style={{ border: '1px solid' }} />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* DIRECT TAILWIND COLORS - FORBIDDEN                                          */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="bg-blue-500" />      // Use bg-vis-blue
❌ <div className="text-gray-700" />    // Use text-muted-foreground
❌ <div className="border-black" />     // Use border-foreground
❌ <div className="bg-white" />         // Use bg-card or bg-background

/* ═══════════════════════════════════════════════════════════════════════════ */
/* TRANSPARENCY ON MAIN ELEMENTS - FORBIDDEN                                   */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="bg-white/50" />      // Main elements must be solid
❌ <button className="bg-blue-500/80" />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* SCALE ANIMATIONS - FORBIDDEN                                                */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <button className="hover:scale-105" />
❌ <div className="transform scale-110" />

/* ═══════════════════════════════════════════════════════════════════════════ */
/* OTHER FORBIDDEN PATTERNS                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

❌ <div className="animate-pulse" />    // Too subtle
❌ <div className="animate-bounce" />   // Too playful
❌ <em>Italic text</em>                 // Use bold instead
❌ <div className="font-serif" />       // Only Space Grotesk/Mono
```

### 18.2 ✅ ALWAYS DO THIS

```tsx
/* ═══════════════════════════════════════════════════════════════════════════ */
/* CORRECT PATTERNS                                                            */
/* ═══════════════════════════════════════════════════════════════════════════ */

✅ Sharp corners (default, no class needed)
✅ <div className="border-[3px] border-foreground" />

✅ Offset shadows with no blur
✅ <div style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }} />

✅ Flat, solid colors
✅ <div className="bg-vis-blue" />
✅ <div className="bg-card" />

✅ Semantic color tokens
✅ <div className="bg-background text-foreground" />
✅ <div className="text-muted-foreground" />

✅ Transform hover effects
✅ <button className="hover:translate-x-[2px] hover:translate-y-[2px]" />

✅ Bold for emphasis (not italic)
✅ <span className="font-bold">Important</span>

✅ Monospace for data
✅ <span className="font-mono">08:30</span>

✅ Uppercase headings
✅ <h2 className="uppercase font-bold">SECTION TITLE</h2>
```

---

## 19. FILE REFERENCE

### 19.1 Design System Files

| File | Purpose |
|------|---------|
| `src/index.css` | CSS variables, utility classes, base styles |
| `tailwind.config.ts` | Tailwind theme extension, colors, spacing, animations |
| `index.html` | Font loading (Space Grotesk, Space Mono) |

### 19.2 Component Files

| Component | File Path |
|-----------|-----------|
| VisButton | `src/components/ui/VisButton.tsx` |
| VisCard | `src/components/ui/VisCard.tsx` |
| VisBadge | `src/components/ui/VisBadge.tsx` |
| AppHeader | `src/components/layout/AppHeader.tsx` |
| ColorBlock | `src/components/layout/ColorBlock.tsx` |
| ImageHeader | `src/components/layout/ImageHeader.tsx` |
| ImageCarousel | `src/components/ui/ImageCarousel.tsx` |

### 19.3 Utility Files

| File | Purpose |
|------|---------|
| `src/lib/utils.ts` | `cn()` utility for class merging |

### 19.4 Documentation Files

| File | Purpose |
|------|---------|
| `DESIGN_SYSTEM.md` | This file - Complete design documentation |
| `UI_DESIGN_BRIEF.md` | Original design brief |
| `STYLE_DOCUMENTATION.md` | Style documentation v2 |

---

## 20. QUICK REFERENCE CARDS

### 20.1 Core Rules Quick Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         NEOBRUTALIST QUICK REFERENCE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  BORDERS         │ 3px solid • border-[3px] border-foreground               │
│  SHADOWS         │ 4-6px offset • NO BLUR • solid color only                │
│  CORNERS         │ 0px everywhere • NEVER use rounded-*                     │
│  FONTS           │ Space Grotesk (primary) • Space Mono (data)              │
│  HEADINGS        │ UPPERCASE • bold • tight tracking                        │
│  TOUCH TARGETS   │ 44×44px minimum • min-h-touch min-w-touch                │
│  SPACING         │ Base 4px • card padding 16-20px                          │
│  COLORS          │ Use semantic tokens • NEVER direct Tailwind colors       │
│                                                                             │
│  HOVER           │ translate(2px, 2px) • shadow reduces                     │
│  ACTIVE          │ translate(4px, 4px) • shadow gone                        │
│  DISABLED        │ opacity-50 • pointer-events-none                         │
│  FOCUS           │ ring-2 ring-{color}                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 20.2 Color Quick Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           COLOR QUICK REFERENCE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PALETTE COLORS (for accents & backgrounds):                                │
│  ├── bg-vis-yellow    Warm Gold        (warm highlights)                    │
│  ├── bg-vis-blue      Mediterranean    (primary actions)                    │
│  ├── bg-vis-cyan      Teal Cyan        (secondary accent)                   │
│  ├── bg-vis-green     Sea Green        (success, nature)                    │
│  └── bg-vis-emergency Red              (critical alerts)                    │
│                                                                             │
│  SEMANTIC COLORS (for UI structure):                                        │
│  ├── bg-background       Page background                                    │
│  ├── bg-card             Card surfaces                                      │
│  ├── bg-muted            Disabled/subtle                                    │
│  ├── text-foreground     Primary text                                       │
│  ├── text-muted-foreground Secondary text                                   │
│  ├── text-primary-foreground White text (on dark)                           │
│  └── border-foreground   All borders                                        │
│                                                                             │
│  TEXT ON BACKGROUNDS:                                                       │
│  ├── On vis-blue/emergency → text-primary-foreground (white)                │
│  └── On vis-green/yellow/cyan → text-foreground (dark)                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 20.3 Shadow Quick Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          SHADOW QUICK REFERENCE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SIZES:                                                                     │
│  ├── Small:  3px 3px 0  (icon buttons, badges)                              │
│  ├── Medium: 4px 4px 0  (buttons, interactive cards)                        │
│  └── Large:  6px 6px 0  (major cards, hero elements)                        │
│                                                                             │
│  COLORS:                                                                    │
│  ├── hsl(var(--foreground))    Black (default)                              │
│  ├── hsl(var(--vis-yellow))    Warm gold accent                             │
│  ├── hsl(var(--vis-blue))      Cool blue accent                             │
│  ├── hsl(var(--vis-cyan))      Teal accent                                  │
│  └── hsl(var(--vis-green))     Green accent                                 │
│                                                                             │
│  SYNTAX:                                                                    │
│  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}                   │
│                                                                             │
│  UTILITY CLASSES:                                                           │
│  ├── shadow-brutal         6px black                                        │
│  ├── shadow-brutal-sm      4px black                                        │
│  ├── shadow-brutal-yellow  6px yellow                                       │
│  ├── shadow-brutal-blue    6px blue                                         │
│  ├── shadow-brutal-cyan    6px cyan                                         │
│  └── shadow-brutal-green   6px green                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 20.4 Typography Quick Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        TYPOGRAPHY QUICK REFERENCE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Page Title:   text-2xl md:text-3xl font-extrabold uppercase tracking-tight│
│  Section:      text-lg font-bold uppercase tracking-tight                   │
│  Card Title:   text-base font-bold                                          │
│  Subsection:   text-sm font-semibold uppercase tracking-wide                │
│  Body:         text-sm (14px) or text-base (16px)                           │
│  Small:        text-xs                                                      │
│  Label:        text-xs font-medium uppercase tracking-wide                  │
│  Data/Time:    font-mono font-medium                                        │
│  Timestamp:    text-xs text-muted-foreground font-mono                      │
│                                                                             │
│  RULES:                                                                     │
│  ├── All headings (h1-h6) are UPPERCASE                                     │
│  ├── Use font-mono for times, dates, numbers                                │
│  ├── NEVER use italics - use bold or color                                  │
│  ├── Minimum body text: 14px (text-sm)                                      │
│  └── Max line length: ~65 characters                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 20.5 Component Quick Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        COMPONENT QUICK REFERENCE                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  VisButton variants:                                                        │
│  ├── primary     bg-vis-blue + white text                                   │
│  ├── secondary   bg-vis-green + dark text                                   │
│  ├── outline     bg-card + dark text                                        │
│  ├── ghost       transparent → muted hover                                  │
│  └── emergency   bg-vis-emergency + white text                              │
│                                                                             │
│  VisButton sizes:                                                           │
│  ├── sm          h-9 (36px)                                                 │
│  ├── default     h-11 (44px)                                                │
│  ├── lg          h-14 (56px)                                                │
│  └── icon        h-11 w-11 (44×44px)                                        │
│                                                                             │
│  VisBadge variants:                                                         │
│  ├── vis         blue                                                       │
│  ├── komiza      green                                                      │
│  ├── kultura     yellow                                                     │
│  ├── emergency   red                                                        │
│  ├── general     purple                                                     │
│  └── default     yellow                                                     │
│                                                                             │
│  ColorBlock colors:                                                         │
│  ├── blue, yellow, cyan, green, white                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Document Information

| Field | Value |
|-------|-------|
| **Version** | 3.0 ULTIMATE |
| **Created** | January 2026 |
| **Author** | Otok Vis Design Team |
| **Stack** | React 18 + Vite + Tailwind CSS + TypeScript |
| **Design System** | Neobrutalist Mediterranean |

---

*For questions or clarifications, refer to the source files or consult the original UI_DESIGN_BRIEF.md.*
