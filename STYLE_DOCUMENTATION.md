# OTOK VIS — Complete Style Documentation for Developers

> **Version:** 2.0  
> **Last Updated:** January 2026  
> **Design System:** Neobrutalist  
> **Stack:** React + Tailwind CSS + TypeScript

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Border System](#5-border-system)
6. [Shadow System](#6-shadow-system)
7. [Component Library](#7-component-library)
8. [Page Templates](#8-page-templates)
9. [Iconography](#9-iconography)
10. [Interactive States](#10-interactive-states)
11. [Animation & Motion](#11-animation--motion)
12. [Accessibility](#12-accessibility)
13. [Dark Mode](#13-dark-mode)
14. [Code Examples](#14-code-examples)
15. [Anti-Patterns](#15-anti-patterns)
16. [File Reference](#16-file-reference)

---

## 1. Design Philosophy

### 1.1 What is Neobrutalism?

Neobrutalism is a modern web design trend characterized by:
- **Raw honesty** — Elements look like what they are
- **Bold contrast** — High visibility through stark color differences
- **Sharp edges** — Zero border radius on all elements
- **Thick borders** — Prominent outlines that define element boundaries
- **Offset shadows** — Solid, geometric shadows without blur
- **Flat colors** — No gradients, no transparency in primary UI

### 1.2 Core Principles

| Principle | Implementation |
|-----------|----------------|
| **No rounded corners** | `border-radius: 0` everywhere, enforced via `--radius: 0` |
| **Thick visible borders** | 3px solid borders on all interactive elements |
| **Harsh offset shadows** | Solid-color shadows offset 4-6px with no blur |
| **High contrast** | Near-black text (#1a1a1a) on light backgrounds |
| **Flat colors** | Solid fills, no gradients, minimal transparency |
| **Honest materials** | No skeuomorphism, no faux 3D effects |

### 1.3 Visual Metaphor

The design evokes:
- Letterpress printing and block printing
- Protest posters and zines
- Early web aesthetics (pre-CSS3)
- Municipal signage and wayfinding

This creates a sense of **trustworthiness**, **authority**, and **directness** appropriate for a municipal application.

---

## 2. Color System

### 2.1 CSS Variable Definitions

All colors are defined in `src/index.css` using HSL format for easy manipulation.

```css
:root {
  /* Primary Palette - Muted & Sophisticated */
  --vis-yellow: 38 93% 67%;      /* Warm Gold #F9B95C */
  --vis-blue: 195 29% 53%;       /* Steel Blue #6398A9 */
  --vis-cyan: 8 48% 67%;         /* Terracotta #D7897F */
  --vis-green: 152 33% 68%;      /* Sage Green #96C7B3 */
  --vis-white: 0 0% 100%;
  --vis-black: 0 0% 0%;
  --vis-emergency: 0 70% 50%;    /* Muted Red */

  /* Semantic Tokens */
  --background: 40 20% 96%;      /* Warm off-white */
  --foreground: 0 0% 10%;        /* Near black */
  --card: 0 0% 100%;             /* Pure white */
  --muted: 40 10% 92%;           /* Subtle gray */
  --muted-foreground: 0 0% 45%; /* Secondary text */
}
```

### 2.2 Color Palette Reference

| Token | HSL | Hex | RGB | Usage |
|-------|-----|-----|-----|-------|
| `--vis-yellow` | `38 93% 67%` | `#F9B95C` | `249, 185, 92` | Warm highlights, warnings, menu accents |
| `--vis-blue` | `195 29% 53%` | `#6398A9` | `99, 152, 169` | Primary actions, headers, sea/water content |
| `--vis-cyan` | `8 48% 67%` | `#D7897F` | `215, 137, 127` | Terracotta warmth, land content, secondary sections |
| `--vis-green` | `152 33% 68%` | `#96C7B3` | `150, 199, 179` | Success states, environmental content, confirmations |
| `--vis-emergency` | `0 70% 50%` | `#CC2626` | `204, 38, 38` | Critical alerts, destructive actions |
| `--background` | `40 20% 96%` | `#F7F5F2` | `247, 245, 242` | Page background |
| `--foreground` | `0 0% 10%` | `#1A1A1A` | `26, 26, 26` | Text, borders |
| `--card` | `0 0% 100%` | `#FFFFFF` | `255, 255, 255` | Card surfaces |
| `--muted` | `40 10% 92%` | `#EDEAE6` | `237, 234, 230` | Disabled states |
| `--muted-foreground` | `0 0% 45%` | `#737373` | `115, 115, 115` | Secondary text |

### 2.3 Tailwind Color Classes

```tsx
// Using vis palette colors
<div className="bg-vis-yellow" />     // Warm Gold background
<div className="bg-vis-blue" />       // Steel Blue background
<div className="bg-vis-cyan" />       // Terracotta background
<div className="bg-vis-green" />      // Sage Green background
<div className="bg-vis-emergency" />  // Emergency red background

// Using semantic colors
<div className="bg-background" />     // Page background
<div className="bg-foreground" />     // Near black
<div className="bg-card" />           // White card
<div className="bg-muted" />          // Subtle gray

// Text colors
<span className="text-foreground" />           // Primary text
<span className="text-muted-foreground" />     // Secondary text
<span className="text-primary-foreground" />   // White (on dark bg)
```

### 2.4 Color Usage Guidelines

| Context | Color Token | Notes |
|---------|-------------|-------|
| Page background | `bg-background` | Warm off-white |
| Card surfaces | `bg-card` | Pure white |
| Primary buttons | `bg-vis-blue` | Steel Blue |
| Secondary buttons | `bg-vis-green` | Sage Green |
| Outline buttons | `bg-card` | White with border |
| Emergency/destructive | `bg-vis-emergency` | Muted red |
| Primary text | `text-foreground` | Near black |
| Secondary text | `text-muted-foreground` | Gray |
| Text on colored bg | `text-primary-foreground` | White |
| Text on vis-green/yellow | `text-foreground` | Keep dark text |
| Borders | `border-foreground` | Near black |
| Disabled elements | `bg-muted opacity-50` | Grayed out |

### 2.5 Tinted Backgrounds

For subtle section differentiation, use 5% or 10% opacity:

```tsx
<div className="bg-vis-blue/5" />   // Very subtle blue tint
<div className="bg-vis-blue/10" />  // Light blue tint
<div className="bg-vis-green/5" />  // Very subtle green tint
```

---

## 3. Typography

### 3.1 Font Stack

| Purpose | Font | Fallback | Load Source |
|---------|------|----------|-------------|
| Primary | Space Grotesk | system-ui, sans-serif | Google Fonts (index.html) |
| Monospace | Space Mono | monospace | Google Fonts (index.html) |

**Font Loading (index.html):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### 3.2 Type Scale

| Element | Size | Weight | Transform | Tracking | Tailwind Classes |
|---------|------|--------|-----------|----------|------------------|
| Page Title (H1) | 28-32px | 800 | UPPERCASE | -0.02em | `text-2xl md:text-3xl font-extrabold uppercase tracking-tight` |
| Section Header (H2) | 18-20px | 700 | UPPERCASE | -0.02em | `text-lg font-bold uppercase tracking-tight` |
| Card Title (H3) | 16px | 700 | Normal | Normal | `text-base font-bold` |
| Subsection (H4) | 14px | 600 | UPPERCASE | 0.05em | `text-sm font-semibold uppercase tracking-wide` |
| Body Text | 14-16px | 400 | Normal | Normal | `text-sm` or `text-base` |
| Small Text | 12px | 400 | Normal | Normal | `text-xs` |
| Labels/Meta | 12px | 500-600 | UPPERCASE | 0.05em | `text-xs font-medium uppercase tracking-wide` |
| Timestamps | 12px | 400 | Normal | Normal | `text-xs text-muted-foreground font-mono` |
| Data/Numbers | 14-16px | 500 | Normal | Normal | `font-mono font-medium` |

### 3.3 Typography Rules

1. **All headings are UPPERCASE** — Applied globally via CSS
2. **Use monospace for data** — Times, dates, numbers, codes
3. **Never use italics** — Use bold or color for emphasis
4. **Minimum body text: 14px** — For readability
5. **Maximum line length: ~65 characters** — Improves readability

### 3.4 Typography Examples

```tsx
// Page title
<h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
  VOZNI REDOVI
</h1>

// Section header
<h2 className="text-lg font-bold uppercase tracking-tight mb-4">
  POMORSKI PROMET
</h2>

// Card title
<h3 className="font-bold text-base">
  Split - Vis
</h3>

// Body text
<p className="text-sm text-foreground">
  Trajektna linija prometuje svakodnevno.
</p>

// Secondary text
<p className="text-sm text-muted-foreground">
  Zadnja izmjena: 01.01.2026.
</p>

// Monospace data
<span className="font-mono text-sm">08:30</span>

// Label
<span className="text-xs font-semibold uppercase tracking-wide">
  Polazak
</span>
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Base unit: **4px**

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `0.5` | 2px | `p-0.5` | Micro spacing |
| `1` | 4px | `p-1` | Icon gaps, tight spacing |
| `2` | 8px | `p-2` | Compact element spacing |
| `3` | 12px | `p-3` | Between related items |
| `4` | 16px | `p-4` | Card padding, standard gaps |
| `5` | 20px | `p-5` | Section padding |
| `6` | 24px | `p-6` | Large section gaps |
| `8` | 32px | `p-8` | Page section separation |
| `10` | 40px | `p-10` | Major visual breaks |
| `12` | 48px | `p-12` | Hero sections |

### 4.2 Component Spacing Guidelines

```
PAGE STRUCTURE:
├── Header: px-4 py-3
├── Page Header (colored): px-4 py-5 or px-5 pt-6 pb-4
├── Content Card: px-4 pt-5 pb-8
│   ├── Section margin-bottom: mb-6
│   ├── Element gap within section: space-y-3 or gap-3
│   └── Inner element padding: p-3 to p-4
└── Footer decoration: mt-8 pb-8
```

### 4.3 Touch Targets

**Minimum touch target size: 44×44px**

```tsx
// Tailwind utility classes
<button className="min-h-touch min-w-touch">...</button>

// Custom values in tailwind.config.ts:
minHeight: { 'touch': '44px' }
minWidth: { 'touch': '44px' }
```

### 4.4 Container & Breakpoints

```typescript
// tailwind.config.ts
container: {
  center: true,
  padding: "1rem",
  screens: {
    sm: "100%",    // Full width on mobile
    md: "768px",   // Max width on tablet+
    lg: "768px",   // Same as md
    xl: "768px",   // Same as md
    "2xl": "768px" // Same as md
  },
}
```

**Container usage:**
```tsx
<div className="max-w-screen-md mx-auto px-4">
  {/* Content */}
</div>
```

### 4.5 Safe Area Insets

For mobile devices with notches:

```tsx
<div className="pt-safe-top pb-safe-bottom">
  {/* Content respects safe areas */}
</div>
```

---

## 5. Border System

### 5.1 Border Width

| Context | Width | Tailwind Class |
|---------|-------|----------------|
| Cards | 3px | `border-[3px]` |
| Buttons | 3px | `border-[3px]` |
| Inputs | 3px | `border-[3px]` |
| Badges | 2px | `border-2` |
| Dividers | 2-3px | `border-t-2` or `border-t-[3px]` |
| Header bottom | 3px | `border-b-[3px]` |

### 5.2 Border Color

| Context | Token | Notes |
|---------|-------|-------|
| Default | `border-foreground` | Near black, high contrast |
| On dark backgrounds | `border-foreground` | Still black for contrast |
| Subtle/dashed | `border-muted-foreground/30` | Low visibility |
| Focus rings | `ring-vis-blue` | Accent color |

### 5.3 Border Radius

**Always zero. No exceptions.**

```css
--radius: 0;  /* Global setting in index.css */
```

❌ Never use:
- `rounded-sm`
- `rounded-md`
- `rounded-lg`
- `rounded-full`
- Any border-radius

### 5.4 Border Examples

```tsx
// Standard card border
<div className="border-[3px] border-foreground">

// Badge border
<span className="border-2 border-foreground">

// Divider
<hr className="border-t-[3px] border-foreground" />

// Dashed border (rare)
<div className="border-2 border-dashed border-muted-foreground/30">
```

---

## 6. Shadow System

### 6.1 Shadow Specifications

Shadows are **solid color, no blur, offset diagonally**.

| Size | X Offset | Y Offset | Blur | Spread |
|------|----------|----------|------|--------|
| Small | 2-3px | 2-3px | 0 | 0 |
| Medium | 4px | 4px | 0 | 0 |
| Large | 6px | 6px | 0 | 0 |

### 6.2 Shadow CSS

```css
/* Small shadow */
box-shadow: 3px 3px 0 hsl(var(--foreground));

/* Medium shadow */
box-shadow: 4px 4px 0 hsl(var(--foreground));

/* Large shadow */
box-shadow: 6px 6px 0 hsl(var(--foreground));
```

### 6.3 Shadow Color Options

| Class | Color | Usage |
|-------|-------|-------|
| `shadow-brutal` | Foreground (black) | Default, high contrast |
| `shadow-brutal-yellow` | Warm Gold | Warm accent |
| `shadow-brutal-blue` | Steel Blue | Cool accent, sea-related |
| `shadow-brutal-cyan` | Terracotta | Warm accent |
| `shadow-brutal-green` | Sage Green | Nature, success |

### 6.4 Shadow Implementation

Since Tailwind can't create offset shadows with palette colors, use inline styles:

```tsx
// Static shadow
<div 
  className="border-[3px] border-foreground"
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>

// Shadow with foreground color
<div 
  className="border-[3px] border-foreground"
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
```

### 6.5 Utility Classes (from index.css)

```tsx
<div className="shadow-brutal" />       // 6px black shadow
<div className="shadow-brutal-sm" />    // 4px black shadow
<div className="shadow-brutal-yellow" />
<div className="shadow-brutal-blue" />
<div className="shadow-brutal-cyan" />
<div className="shadow-brutal-green" />
```

---

## 7. Component Library

### 7.1 VisButton

**Location:** `src/components/ui/VisButton.tsx`

**Variants:**
| Variant | Background | Text | Border | Shadow |
|---------|------------|------|--------|--------|
| `primary` | vis-blue | white | foreground | foreground |
| `secondary` | vis-green | foreground | foreground | foreground |
| `outline` | card | foreground | foreground | foreground |
| `ghost` | transparent | foreground | transparent → foreground | none |
| `emergency` | vis-emergency | white | foreground | foreground |

**Sizes:**
| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| `sm` | 36px | px-3 | text-sm |
| `default` | 44px | px-4 py-2 | text-base |
| `lg` | 56px | px-6 | text-lg |
| `icon` | 44px | 0 | — |

**Usage:**
```tsx
import VisButton from '@/components/ui/VisButton';

<VisButton variant="primary" size="default">
  Submit
</VisButton>

<VisButton variant="outline" size="lg">
  <Ship className="w-5 h-5 mr-2" />
  Ferry Schedule
</VisButton>
```

### 7.2 VisCard

**Location:** `src/components/ui/VisCard.tsx`

**Features:**
- 3px border
- Optional click handler (adds hover/active states)
- Box shadow when interactive

**Usage:**
```tsx
import VisCard from '@/components/ui/VisCard';

// Static card
<VisCard>
  <h3>Title</h3>
  <p>Content</p>
</VisCard>

// Interactive card
<VisCard onClick={() => navigate('/page')}>
  <h3>Clickable Card</h3>
</VisCard>
```

### 7.3 VisBadge

**Location:** `src/components/ui/VisBadge.tsx`

**Variants:**
| Variant | Background | Text |
|---------|------------|------|
| `vis` | vis-blue | white |
| `komiza` | vis-green | foreground |
| `general` | vis-cyan | foreground |
| `emergency` | vis-emergency | white |
| `default` | vis-yellow | foreground |

**Usage:**
```tsx
import VisBadge from '@/components/ui/VisBadge';

<VisBadge variant="vis">VIS</VisBadge>
<VisBadge variant="emergency">HITNO</VisBadge>
```

### 7.4 ColorBlock

**Location:** `src/components/layout/ColorBlock.tsx`

Full-width colored sections for page headers.

**Colors:** `blue`, `yellow`, `cyan`, `green`, `white`

**Usage:**
```tsx
import ColorBlock from '@/components/layout/ColorBlock';

<ColorBlock color="blue">
  <h1>Page Title</h1>
</ColorBlock>

<ColorBlock color="yellow" noPadding>
  {/* Custom padding */}
</ColorBlock>
```

### 7.5 AppHeader

**Location:** `src/components/layout/AppHeader.tsx`

Sticky header with menu and inbox buttons.

**Usage:**
```tsx
import AppHeader from '@/components/layout/AppHeader';

<AppHeader unreadCount={3} />
```

### 7.6 ImageCarousel

**Location:** `src/components/ui/ImageCarousel.tsx`

Horizontal image carousel with arrows and dot indicators.

**Usage:**
```tsx
import ImageCarousel from '@/components/ui/ImageCarousel';

<ImageCarousel 
  images={[image1, image2, image3]} 
  alt="Plant photos" 
/>
```

---

## 8. Page Templates

### 8.1 Standard Page Structure

```
┌─────────────────────────────────────────────────┐
│ HEADER BAR (sticky)                             │
│ [Menu]        OTOK VIS        [Inbox (3)]       │
├─────────────────────────────────────────────────┤
│                                                 │
│ PAGE HEADER (colored background)                │
│ ┌─────────┐                                     │
│ │  Icon   │  PAGE TITLE                         │
│ │  Box    │  Subtitle text                      │
│ └─────────┘                                     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ CONTENT AREA (white card, shadow)               │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │  SECTION 1 (tinted bg, shadow)          │   │
│   │  Content content content                │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   SECTION HEADER                                │
│   ┌─────────────────────────────────────────┐   │
│   │  List item                          ▶   │   │
│   ├─────────────────────────────────────────┤   │
│   │  List item                          ▶   │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   ■ ■ ■ ■  (decorative blocks)                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### 8.2 Page Template Code

```tsx
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import { Icon } from 'lucide-react';

const ExamplePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      
      {/* Page Header */}
      <ColorBlock color="blue">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight text-primary-foreground">
              PAGE TITLE
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Page subtitle or description
            </p>
          </div>
        </div>
      </ColorBlock>
      
      {/* Content Card */}
      <div className="px-4 -mt-2">
        <div 
          className="bg-card border-[3px] border-foreground p-4"
          style={{ boxShadow: '6px 6px 0 hsl(var(--foreground))' }}
        >
          {/* Content sections */}
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3">Section Title</h2>
            {/* Section content */}
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
    </div>
  );
};
```

### 8.3 List Page Template

For pages with navigable list items:

```tsx
{/* List section */}
<div className="space-y-3">
  {items.map((item, index) => (
    <button
      key={item.id}
      onClick={() => navigate(item.path)}
      className="w-full text-left p-4 border-[3px] border-foreground bg-card
                 flex items-center justify-between
                 hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
    >
      <div className="flex items-center gap-3">
        <item.icon className="w-5 h-5" />
        <span className="font-semibold">{item.label}</span>
      </div>
      <ChevronRight className="w-5 h-5" />
    </button>
  ))}
</div>
```

---

## 9. Iconography

### 9.1 Icon Library

Use **Lucide React** exclusively.

```tsx
import { Ship, Calendar, AlertTriangle } from 'lucide-react';
```

### 9.2 Icon Specifications

| Context | Size | Stroke Width | Tailwind |
|---------|------|--------------|----------|
| Inline text | 16px | 2 | `w-4 h-4` |
| Buttons | 20px | 2 | `w-5 h-5` |
| Headers | 20-24px | 2.5 | `w-5 h-5` or `w-6 h-6` |
| Feature boxes | 24-32px | 2 | `w-6 h-6` or `w-8 h-8` |

### 9.3 Icon Usage Rules

- Use **line icons only** (no filled variants)
- Stroke width: **2 to 2.5** for visibility
- Color: inherit from parent or use `text-{color}`
- Never use color-only icons without labels

### 9.4 Icon Box Patterns

```tsx
// Standard icon box
<div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground 
                flex items-center justify-center text-primary-foreground">
  <Ship className="w-5 h-5" />
</div>

// Icon box with shadow
<div 
  className="w-12 h-12 bg-card border-[3px] border-foreground 
             flex items-center justify-center"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
>
  <Calendar className="w-6 h-6 text-vis-blue" />
</div>

// Large feature icon
<div 
  className="w-16 h-16 bg-vis-green border-[3px] border-foreground 
             flex items-center justify-center"
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  <Leaf className="w-8 h-8 text-foreground" />
</div>
```

---

## 10. Interactive States

### 10.1 State Overview

| State | Visual Treatment |
|-------|------------------|
| **Default** | Full shadow, no transform |
| **Hover** | `translate(2px, 2px)`, shadow reduced by 2px |
| **Active/Pressed** | `translate(4px, 4px)`, no shadow |
| **Disabled** | `opacity-50`, `pointer-events-none` |
| **Focus** | `ring-2 ring-{color}`, visible outline |

### 10.2 Interactive Button Pattern

```tsx
<button
  className="
    border-[3px] border-foreground bg-vis-blue text-primary-foreground
    font-bold uppercase px-4 py-3
    transition-all duration-150
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    disabled:opacity-50 disabled:pointer-events-none
    focus:outline-none focus:ring-2 focus:ring-vis-yellow
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  Button Label
</button>
```

### 10.3 Interactive Card Pattern

```tsx
<button
  onClick={handleClick}
  className="
    w-full text-left p-4
    border-[3px] border-foreground bg-card
    transition-all duration-150
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>
  {content}
</button>
```

### 10.4 Selection States

```tsx
// Selected item
<div className={cn(
  'p-3 border-[3px] border-foreground transition-colors',
  isSelected ? 'bg-vis-blue text-primary-foreground' : 'bg-card'
)}>
  {content}
</div>

// Checkbox
<div className={cn(
  'w-7 h-7 border-[3px] border-foreground flex items-center justify-center',
  checked ? 'bg-vis-blue' : 'bg-card'
)}>
  {checked && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
</div>

// Toggle/Switch
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
```

---

## 11. Animation & Motion

### 11.1 Allowed Animations

| Type | Implementation | Duration |
|------|----------------|----------|
| Hover translate | `hover:translate-x-[2px] hover:translate-y-[2px]` | 150ms |
| Active press | `active:translate-x-[4px] active:translate-y-[4px]` | 100ms |
| Color transitions | `transition-colors` | 150ms |
| Transform transitions | `transition-all` or `transition-transform` | 150ms |

### 11.2 Timing Functions

```css
transition-all duration-150  /* Default */
transition-colors            /* Color only */
transition-transform         /* Position only */
```

### 11.3 Keyframe Animations

Defined in `tailwind.config.ts`:

```tsx
// Accordion
className="animate-accordion-down"
className="animate-accordion-up"

// Fade in
className="animate-fade-in"

// Slide up
className="animate-slide-up"
```

### 11.4 Prohibited Animations

❌ **Never use:**
- `blur-*` or `backdrop-blur-*`
- `opacity` fade transitions for main content
- `scale-*` transforms
- Complex keyframe animations
- Parallax scrolling effects
- Bounce or spring animations
- Infinite looping animations (except marquee)

### 11.5 Marquee Animation

For scrolling announcements:

```tsx
<div className="animate-marquee">
  Scrolling announcement text...
</div>
```

---

## 12. Accessibility

### 12.1 Checklist

| Requirement | Implementation |
|-------------|----------------|
| Touch targets | `min-h-touch min-w-touch` (44×44px) |
| Color contrast | 4.5:1 minimum for text |
| Focus visibility | `focus:ring-2 focus:ring-{color}` |
| No color-only meaning | Always include labels |
| Readable text | Minimum 14px body text |
| Clear hierarchy | Uppercase headings, bold titles |
| Interactive affordances | Shadows indicate clickable |
| Keyboard navigation | Proper tab order, Enter/Space activation |

### 12.2 Focus States

```tsx
// Button focus
<button className="focus:outline-none focus:ring-2 focus:ring-vis-blue focus:ring-offset-2">

// Input focus
<input className="focus:outline-none focus:ring-2 focus:ring-vis-blue">

// Card focus
<button className="focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2">
```

### 12.3 ARIA Labels

```tsx
// Icon-only buttons
<button aria-label="Open menu">
  <Menu className="w-6 h-6" />
</button>

// Status indicators
<span aria-live="polite" className="sr-only">
  {unreadCount} unread messages
</span>
```

---

## 13. Dark Mode

### 13.1 Implementation

Dark mode is class-based (`darkMode: ["class"]`).

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

### 13.2 Dark Mode Colors

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `--background` | `40 20% 96%` (off-white) | `0 0% 8%` (near black) |
| `--foreground` | `0 0% 10%` (near black) | `0 0% 95%` (off-white) |
| `--card` | `0 0% 100%` (white) | `0 0% 12%` (dark gray) |
| `--muted` | `40 10% 92%` | `0 0% 20%` |
| `--border` | `0 0% 10%` | `0 0% 95%` |

### 13.3 Dark Mode Considerations

- Borders flip from black to white
- Shadows may need adjustment for visibility
- Palette colors (vis-yellow, vis-blue, etc.) remain the same
- Text on palette colors should be tested for contrast

---

## 14. Code Examples

### 14.1 Complete Button Implementation

```tsx
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'emergency';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface VisButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-vis-blue text-primary-foreground hover:bg-vis-blue/90 border-foreground',
  secondary: 'bg-vis-green text-foreground hover:bg-vis-green/90 border-foreground',
  outline: 'bg-card text-foreground hover:bg-muted border-foreground',
  emergency: 'bg-vis-emergency text-primary-foreground hover:bg-vis-emergency/90 border-foreground',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-11 px-4 py-2 text-base',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-14 px-6 text-lg',
  icon: 'h-11 w-11 p-0',
};

const VisButton = forwardRef<HTMLButtonElement, VisButtonProps>(
  ({ variant = 'primary', size = 'default', children, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold border-[3px]',
          'transition-all duration-150',
          'hover:translate-x-[2px] hover:translate-y-[2px]',
          'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
          'disabled:opacity-50 disabled:pointer-events-none',
          'min-h-touch',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default VisButton;
```

### 14.2 Complete Card Implementation

```tsx
import { cn } from '@/lib/utils';

interface VisCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  shadowColor?: 'foreground' | 'blue' | 'yellow' | 'green' | 'cyan';
}

const shadowColors = {
  foreground: 'hsl(var(--foreground))',
  blue: 'hsl(var(--vis-blue))',
  yellow: 'hsl(var(--vis-yellow))',
  green: 'hsl(var(--vis-green))',
  cyan: 'hsl(var(--vis-cyan))',
};

const VisCard = ({ 
  children, 
  className, 
  onClick, 
  shadowColor = 'foreground' 
}: VisCardProps) => {
  const Component = onClick ? 'button' : 'div';
  const isInteractive = !!onClick;

  return (
    <Component
      onClick={onClick}
      className={cn(
        'w-full bg-card text-card-foreground border-[3px] border-foreground p-4',
        'transition-all duration-150',
        isInteractive && [
          'hover:translate-x-[2px] hover:translate-y-[2px]',
          'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
          'cursor-pointer text-left'
        ],
        className
      )}
      style={{ 
        boxShadow: isInteractive 
          ? `4px 4px 0 ${shadowColors[shadowColor]}` 
          : undefined 
      }}
    >
      {children}
    </Component>
  );
};

export default VisCard;
```

### 14.3 Input Component

```tsx
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface VisInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const VisInput = forwardRef<HTMLInputElement, VisInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wide">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 border-[3px] border-foreground bg-background',
            'text-foreground placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-vis-blue',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-vis-emergency',
            className
          )}
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          {...props}
        />
        {error && (
          <p className="text-xs text-vis-emergency font-medium">{error}</p>
        )}
      </div>
    );
  }
);

export default VisInput;
```

---

## 15. Anti-Patterns

### 15.1 ❌ Never Do This

```tsx
// ❌ Rounded corners
<div className="rounded-lg" />
<button className="rounded-full" />

// ❌ Blur effects
<div className="backdrop-blur-md" />
<div className="blur-sm" />

// ❌ Gradients
<div className="bg-gradient-to-r from-blue-500 to-green-500" />

// ❌ Drop shadows with blur
<div className="shadow-lg" />
<div className="shadow-xl" />

// ❌ Thin borders
<div className="border" />
<div className="border-[1px]" />

// ❌ Direct color classes
<div className="bg-blue-500" />
<div className="text-gray-700" />
<div className="border-black" />

// ❌ Transparency for main elements
<div className="bg-white/50" />
<button className="bg-blue-500/80" />

// ❌ Scale animations
<button className="hover:scale-105" />

// ❌ Fade animations on main content
<div className="animate-pulse" />
```

### 15.2 ✅ Always Do This

```tsx
// ✅ Sharp corners (no class needed, it's default)
<div className="border-[3px]" />

// ✅ Offset shadows
<div style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }} />

// ✅ Flat colors
<div className="bg-vis-blue" />

// ✅ Thick borders
<div className="border-[3px] border-foreground" />

// ✅ Semantic color tokens
<div className="bg-background text-foreground" />
<div className="bg-card border-foreground" />

// ✅ Transform hover effects
<button className="hover:translate-x-[2px] hover:translate-y-[2px]" />

// ✅ Palette colors for accents
<div className="bg-vis-yellow" />
<div className="bg-vis-green" />
```

---

## 16. File Reference

### 16.1 Design System Files

| File | Purpose |
|------|---------|
| `src/index.css` | CSS variables, utility classes, base styles |
| `tailwind.config.ts` | Tailwind theme extension, colors, spacing |
| `index.html` | Font loading (Space Grotesk, Space Mono) |

### 16.2 Component Files

| Component | File Path |
|-----------|-----------|
| VisButton | `src/components/ui/VisButton.tsx` |
| VisCard | `src/components/ui/VisCard.tsx` |
| VisBadge | `src/components/ui/VisBadge.tsx` |
| AppHeader | `src/components/layout/AppHeader.tsx` |
| ColorBlock | `src/components/layout/ColorBlock.tsx` |
| ImageCarousel | `src/components/ui/ImageCarousel.tsx` |

### 16.3 Utility Files

| File | Purpose |
|------|---------|
| `src/lib/utils.ts` | `cn()` utility for class merging |

---

## Quick Reference

```
┌────────────────────────────────────────────────────────┐
│                    QUICK REFERENCE                      │
├────────────────────────────────────────────────────────┤
│ BORDERS:     3px solid (border-[3px] border-foreground) │
│ SHADOWS:     4-6px offset, solid color, NO BLUR         │
│ CORNERS:     0px everywhere (never rounded)             │
│ FONTS:       Space Grotesk / Space Mono                 │
│ HEADINGS:    UPPERCASE, bold, tight tracking            │
│ TOUCH:       44×44px minimum                            │
│ SPACING:     Base 4px, card padding 16-20px             │
│ COLORS:      Warm Gold, Steel Blue, Terracotta, Sage    │
│ HOVER:       translate(2px, 2px), reduce shadow         │
│ ACTIVE:      translate(4px, 4px), no shadow             │
│ DISABLED:    opacity-50, pointer-events-none            │
│ FOCUS:       ring-2 ring-{color}                        │
└────────────────────────────────────────────────────────┘
```

---

*Last updated: January 2026*  
*For questions, refer to the original UI_DESIGN_BRIEF.md or consult the component source files.*
