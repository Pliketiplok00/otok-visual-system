# OTOK VIS — Design Reproduction Guide

> **Purpose:** Complete reproduction manual for the Neobrutalist Mediterranean design system  
> **Audience:** Developers who need to build pages that perfectly match the existing style  
> **How to Use:** Follow templates exactly, copy code blocks verbatim, reference measurements precisely

---

## TABLE OF CONTENTS

1. [Quick Reference Card](#1-quick-reference-card)
2. [Foundation: The 10 Commandments](#2-foundation-the-10-commandments)
3. [Color Reproduction Guide](#3-color-reproduction-guide)
4. [Typography Reproduction Guide](#4-typography-reproduction-guide)
5. [Border & Shadow Reproduction Guide](#5-border--shadow-reproduction-guide)
6. [Component Building Blocks](#6-component-building-blocks)
7. [Page Layout Templates](#7-page-layout-templates)
8. [Template A: Simple Header Page](#8-template-a-simple-header-page)
9. [Template B: Image Header Page](#9-template-b-image-header-page)
10. [Template C: List Page with Search](#10-template-c-list-page-with-search)
11. [Template D: Form Page](#11-template-d-form-page)
12. [Template E: Detail Page](#12-template-e-detail-page)
13. [Template F: Grid Page](#13-template-f-grid-page)
14. [Interactive Patterns](#14-interactive-patterns)
15. [Common UI Patterns](#15-common-ui-patterns)
16. [Spacing Cheatsheet](#16-spacing-cheatsheet)
17. [File Structure Reference](#17-file-structure-reference)

---

## 1. QUICK REFERENCE CARD

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    NEOBRUTALIST DESIGN — QUICK REFERENCE                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  BORDERS        │ Always 3px                    │ border-[3px]               ║
║  BORDER COLOR   │ Always foreground             │ border-foreground          ║
║  CORNERS        │ Always sharp (0px)            │ NEVER use rounded-*        ║
║  SHADOWS        │ Solid, no blur, offset        │ 4-6px offset diagonally    ║
║                                                                              ║
║  FONTS          │ Space Grotesk (primary)       │ font-sans                  ║
║                 │ Space Mono (data/timestamps)  │ font-mono                  ║
║                                                                              ║
║  HEADINGS       │ Always UPPERCASE              │ uppercase                  ║
║                 │ Always bold/extrabold         │ font-bold or font-extrabold║
║                 │ Tight tracking                │ tracking-tight             ║
║                                                                              ║
║  TOUCH TARGETS  │ Minimum 44×44px               │ min-h-touch min-w-touch    ║
║                                                                              ║
║  PAGE PADDING   │ Horizontal: 16-20px           │ px-4 or px-5               ║
║                 │ Vertical: 24px top, 32px bot  │ pt-6 pb-8                  ║
║                                                                              ║
║  SECTION GAPS   │ Between sections: 24px        │ mb-6                       ║
║  ITEM GAPS      │ Between list items: 12-16px   │ space-y-3 or space-y-4     ║
║                                                                              ║
║  TRANSITIONS    │ Duration: 150ms               │ transition-all             ║
║                 │ Hover shift: 2px              │ hover:translate-x-[2px]    ║
║                 │ Active shift: 4px             │ active:translate-x-[4px]   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 2. FOUNDATION: THE 10 COMMANDMENTS

These rules are ABSOLUTE and apply to EVERY element in the application.

### Commandment 1: NO ROUNDED CORNERS
```tsx
// ❌ NEVER
<div className="rounded-lg">
<button className="rounded-md">
<input className="rounded">

// ✅ ALWAYS
<div className="">  // sharp corners by default
<button className="">
<input className="rounded-none">  // override shadcn defaults
```

### Commandment 2: 3px BORDERS ON INTERACTIVE ELEMENTS
```tsx
// ❌ NEVER
<div className="border">           // 1px is too thin
<button className="border-2">      // 2px is too thin

// ✅ ALWAYS
<div className="border-[3px] border-foreground">
<button className="border-[3px] border-foreground">
```

### Commandment 3: SOLID OFFSET SHADOWS (NO BLUR)
```tsx
// ❌ NEVER
style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}  // blur shadow
className="shadow-lg"  // Tailwind default shadows

// ✅ ALWAYS
style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}  // solid offset
style={{ boxShadow: '6px 6px 0 hsl(var(--vis-blue))' }}    // colored offset
```

### Commandment 4: UPPERCASE HEADINGS
```tsx
// ❌ NEVER
<h1>Page Title</h1>
<h2 className="font-bold">Section Header</h2>

// ✅ ALWAYS
<h1 className="uppercase font-extrabold">PAGE TITLE</h1>
<h2 className="uppercase font-bold">SECTION HEADER</h2>
```

### Commandment 5: SEMANTIC COLOR TOKENS ONLY
```tsx
// ❌ NEVER
className="bg-white text-black"
className="bg-slate-100 text-gray-900"
className="text-[#1a1a1a]"

// ✅ ALWAYS
className="bg-card text-card-foreground"
className="bg-background text-foreground"
className="bg-vis-blue text-primary-foreground"
```

### Commandment 6: MINIMUM 44px TOUCH TARGETS
```tsx
// ❌ NEVER
<button className="w-8 h-8">  // 32px is too small

// ✅ ALWAYS
<button className="min-w-touch min-h-touch">  // 44px minimum
<button className="w-11 h-11">  // 44px explicit
<button className="px-4 py-3">  // padding to achieve minimum
```

### Commandment 7: CONSISTENT SPACING
```tsx
// Standard padding values:
px-4      // 16px horizontal (content areas)
px-5      // 20px horizontal (page headers)
py-3      // 12px vertical (buttons)
py-4      // 16px vertical (cards)
pt-6      // 24px top (content start)
pb-8      // 32px bottom (content end)
mb-6      // 24px (between sections)
space-y-3 // 12px (between list items)
gap-2     // 8px (small gaps)
gap-3     // 12px (medium gaps)
gap-4     // 16px (standard gaps)
```

### Commandment 8: INTERACTIVE = SHADOW
```tsx
// Visual hierarchy rule:
// - If it's clickable → it MUST have a shadow
// - If it's static → shadow is optional

// ✅ Interactive elements with shadows
<button style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}>
<div onClick={...} style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}>

// ✅ Static elements (shadow optional)
<div className="border-[3px] border-foreground">  // no shadow needed
```

### Commandment 9: HOVER = TRANSLATE + REDUCE SHADOW
```tsx
// Interactive elements must translate on hover and press
<button
  className="
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    transition-all
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
```

### Commandment 10: MONO FOR DATA
```tsx
// ❌ NEVER
<span className="text-sm">12:30</span>
<span>021 711 025</span>

// ✅ ALWAYS
<span className="text-sm font-mono">12:30</span>
<span className="font-mono">021 711 025</span>

// Monospace for: times, dates, phone numbers, coordinates, prices, IDs
```

---

## 3. COLOR REPRODUCTION GUIDE

### 3.1 Primary Palette Colors

| Name | CSS Variable | Tailwind BG | Tailwind Text | Text On Top |
|------|--------------|-------------|---------------|-------------|
| Yellow | `--vis-yellow` | `bg-vis-yellow` | `text-vis-yellow` | `text-foreground` |
| Blue | `--vis-blue` | `bg-vis-blue` | `text-vis-blue` | `text-primary-foreground` |
| Cyan | `--vis-cyan` | `bg-vis-cyan` | `text-vis-cyan` | `text-foreground` |
| Green | `--vis-green` | `bg-vis-green` | `text-vis-green` | `text-foreground` |
| Emergency | `--vis-emergency` | `bg-vis-emergency` | `text-vis-emergency` | `text-primary-foreground` |

### 3.2 Extended Palette Colors

| Name | CSS Variable | Tailwind BG | Common Usage |
|------|--------------|-------------|--------------|
| Purple | `--vis-purple` | `bg-vis-purple` | Soft accent, event cards |
| Violet | `--vis-violet` | `bg-vis-violet` | Shadow color, depth |
| Deep Blue | `--vis-deep-blue` | `bg-vis-deep-blue` | Shadow color, nav |
| Terracotta | `--vis-terracotta` | `bg-vis-terracotta` | Warm accent |
| Amber | `--vis-amber` | `bg-vis-amber` | Golden variant |
| Sky | `--vis-sky` | `bg-vis-sky` | Light accent |
| Orange | `--vis-orange` | `bg-vis-orange` | Seafoam accent |

### 3.3 Semantic UI Colors

| Purpose | Background | Text | Border |
|---------|------------|------|--------|
| Page background | `bg-background` | `text-foreground` | — |
| Cards | `bg-card` | `text-card-foreground` | `border-foreground` |
| Muted/disabled | `bg-muted` | `text-muted-foreground` | `border-muted-foreground` |
| Primary action | `bg-primary` | `text-primary-foreground` | `border-foreground` |

### 3.4 Text on Colored Backgrounds

```tsx
// DARK TEXT (text-foreground) works on:
<div className="bg-vis-yellow text-foreground">
<div className="bg-vis-cyan text-foreground">
<div className="bg-vis-green text-foreground">
<div className="bg-vis-purple text-foreground">
<div className="bg-vis-amber text-foreground">

// LIGHT TEXT (text-primary-foreground) required on:
<div className="bg-vis-blue text-primary-foreground">
<div className="bg-vis-emergency text-primary-foreground">
<div className="bg-vis-deep-blue text-primary-foreground">
<div className="bg-foreground text-primary-foreground">
```

### 3.5 Tinted Backgrounds (Subtle Sections)

```tsx
// Use inline style for tinted backgrounds:
<div style={{ backgroundColor: 'hsl(var(--vis-blue) / 0.05)' }}>   // 5% blue
<div style={{ backgroundColor: 'hsl(var(--vis-blue) / 0.1)' }}>    // 10% blue
<div style={{ backgroundColor: 'hsl(var(--vis-green) / 0.1)' }}>   // 10% green
<div style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.15)' }}> // 15% yellow
```

---

## 4. TYPOGRAPHY REPRODUCTION GUIDE

### 4.1 Font Family
```tsx
// Primary font (everything by default)
font-family: 'Space Grotesk', system-ui, sans-serif;
// Tailwind: (default, no class needed)

// Monospace (data, timestamps, codes)
font-family: 'Space Mono', monospace;
// Tailwind: font-mono
```

### 4.2 Complete Type Scale

| Element | Tailwind Classes | Example |
|---------|------------------|---------|
| Page title (H1) | `text-2xl md:text-3xl font-extrabold uppercase tracking-tight` | `PAGE TITLE` |
| Section header (H2) | `text-lg font-bold uppercase tracking-tight` | `SECTION TITLE` |
| Card title (H3) | `text-base font-bold` or `font-bold text-lg` | `Card Title` |
| Subsection (H4) | `text-sm font-semibold uppercase tracking-wide` | `SUBSECTION` |
| Body text | `text-sm` or `text-base` | Regular paragraph |
| Small text | `text-xs` | Meta info |
| Caption | `text-[11px]` | Very small text |
| Label | `text-xs font-semibold uppercase tracking-wide` | `FIELD LABEL` |
| Timestamp | `text-xs text-muted-foreground font-mono` | `12:30` |

### 4.3 Typography Examples

```tsx
// Page Title
<h1 className="text-2xl font-extrabold uppercase tracking-tight">
  PAGE TITLE
</h1>

// Page Title with Emoji
<h1 className="text-3xl font-extrabold uppercase">
  <span className="text-vis-blue">Imenik</span> kontakti 📞
</h1>

// Section Header
<h2 className="text-lg font-bold uppercase tracking-tight mb-3">
  SECTION TITLE
</h2>

// Section Header with Icon
<div className="flex items-center gap-2 mb-3">
  <Calendar className="w-5 h-5" strokeWidth={2.5} />
  <h2 className="font-bold uppercase tracking-wide">DANAS NA OTOKU</h2>
</div>

// Card Title
<h3 className="font-bold text-lg">{title}</h3>

// Label
<label className="text-xs font-semibold uppercase tracking-wide">
  FIELD NAME
</label>

// Muted Description
<p className="text-sm text-muted-foreground">Description text here</p>

// Timestamp/Data
<span className="text-xs text-muted-foreground font-mono">12:30</span>
```

---

## 5. BORDER & SHADOW REPRODUCTION GUIDE

### 5.1 Border Specifications

| Element | Width | Color | Class |
|---------|-------|-------|-------|
| Cards | 3px | foreground | `border-[3px] border-foreground` |
| Buttons | 3px | foreground | `border-[3px] border-foreground` |
| Inputs | 3px | foreground | `border-[3px] border-foreground` |
| Icon containers | 3px | foreground | `border-[3px] border-foreground` |
| Badges | 2px | foreground | `border-2 border-foreground` |
| Decorative blocks | 2px | foreground | `border-2 border-foreground` |
| Header bottom | 3px | foreground | `border-b-[3px] border-foreground` |
| Content sides | 3px | foreground | `border-x-[3px] border-foreground` |
| Image bottom | 3px | foreground | `border-b-[3px] border-foreground` |

### 5.2 Shadow Specifications

| Size | Offset | CSS Value |
|------|--------|-----------|
| Tiny | 2px | `2px 2px 0 hsl(var(--color))` |
| Small | 3px | `3px 3px 0 hsl(var(--color))` |
| Medium | 4px | `4px 4px 0 hsl(var(--color))` |
| Large | 6px | `6px 6px 0 hsl(var(--color))` |

### 5.3 Shadow Color Usage

```tsx
// Default (high contrast)
style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}

// Colored shadows (for variety)
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-violet))' }}
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-deep-blue))' }}
```

### 5.4 Complete Card with Shadow

```tsx
<div 
  className="p-4 border-[3px] border-foreground bg-card"
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  Card content here
</div>
```

### 5.5 Interactive Card with Hover

```tsx
<button
  className="
    w-full text-left p-4 
    border-[3px] border-foreground bg-card
    hover:translate-x-[2px] hover:translate-y-[2px]
    transition-all
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>
  Clickable card
</button>
```

---

## 6. COMPONENT BUILDING BLOCKS

### 6.1 Icon Container (Standard)

```tsx
<div 
  className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center"
>
  <Ship className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
</div>
```

### 6.2 Icon Container (With Shadow)

```tsx
<div 
  className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
>
  <Calendar className="w-6 h-6" strokeWidth={2} />
</div>
```

### 6.3 Badge

```tsx
<span className="inline-block bg-vis-blue text-primary-foreground px-2 py-0.5 text-xs font-bold uppercase tracking-wider border-2 border-foreground">
  VIS
</span>
```

### 6.4 Button (Primary)

```tsx
<button
  className="
    px-6 py-3 min-h-touch
    bg-vis-blue text-primary-foreground
    border-[3px] border-foreground
    font-bold uppercase
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    transition-all
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  BUTTON TEXT
</button>
```

### 6.5 Button (Outline)

```tsx
<button
  className="
    px-6 py-3 min-h-touch
    bg-card text-foreground
    border-[3px] border-foreground
    font-bold uppercase
    hover:bg-muted
    hover:translate-x-[2px] hover:translate-y-[2px]
    transition-all
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  OUTLINE BUTTON
</button>
```

### 6.6 Input Field

```tsx
<div className="space-y-1">
  <label className="text-xs font-semibold uppercase tracking-wide">
    FIELD LABEL
  </label>
  <input
    type="text"
    placeholder="Placeholder..."
    className="
      w-full px-4 py-3 h-12
      border-[3px] border-foreground bg-background
      rounded-none
      focus:outline-none focus:ring-2 focus:ring-vis-blue
    "
    style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
  />
</div>
```

### 6.7 Search Input

```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
  <input
    type="text"
    placeholder="Pretraži..."
    className="
      w-full pl-10 pr-4 py-3
      border-[3px] border-foreground bg-card
      rounded-none
      focus:outline-none focus:ring-2 focus:ring-vis-blue
    "
    style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
  />
</div>
```

### 6.8 Toggle Switch

```tsx
const [enabled, setEnabled] = useState(false);

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

### 6.9 Decorative Footer Blocks

```tsx
<div className="flex justify-center gap-2 mt-8">
  <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
</div>
```

### 6.10 Tinted Info Box

```tsx
<div 
  className="p-4 border-[3px] border-foreground"
  style={{ 
    backgroundColor: 'hsl(var(--vis-blue) / 0.1)',
    boxShadow: '4px 4px 0 hsl(var(--vis-blue))' 
  }}
>
  <p className="text-sm">Important information here</p>
</div>
```

### 6.11 Empty State

```tsx
<div className="p-6 border-[3px] border-dashed border-muted-foreground/30 text-center">
  <p className="text-muted-foreground">
    Nema rezultata
  </p>
</div>
```

---

## 7. PAGE LAYOUT TEMPLATES

### 7.1 Layout Types Overview

| Type | Header | Use Case | Example Pages |
|------|--------|----------|---------------|
| **Type A** | Color block with icon | Settings, List pages | Settings, Directory, Schedules |
| **Type B** | Image with overlay | Detail pages, Features | Flora, Wine Routes |
| **Type C** | Color block + Search | Searchable lists | Directory, Contacts |
| **Type D** | Minimal (form focus) | Forms, Feedback | Feedback, Report |
| **Type E** | Full-width sections | Detail views | Event Detail, Route Detail |
| **Type F** | Grid layout | Home, Selection | Home, Menu |

### 7.2 Standard Page Structure

```
┌───────────────────────────────────────────────────────────────┐
│ AppHeader (sticky)                                            │
│ ┌──────────┐                    MOJ VIS         ┌──────────┐  │
│ │  Menu    │                                    │  Inbox   │  │
│ └──────────┘                                    └──────────┘  │
├───────────────────────────────────────────────────────────────┤
│ Page Header (bg-vis-{color})                                  │
│ px-5 pt-6 pb-4                                                │
│ ┌────────┐                                                    │
│ │  Icon  │  PAGE TITLE                                        │
│ │  Box   │  Subtitle text                                     │
│ └────────┘                                                    │
├───────────────────────────────────────────────────────────────┤
│ Content Area (bg-card)                                        │
│ border-t-[3px] border-x-[3px] border-foreground               │
│ px-4 or px-5, pt-5 or pt-6, pb-8                             │
│ ┌─────────────────────────────────────────────────────────┐   │
│ │ Section 1 (tinted info box)                    mb-6     │   │
│ └─────────────────────────────────────────────────────────┘   │
│ SECTION HEADER                                   mb-3         │
│ ┌─────────────────────────────────────────────────────────┐   │
│ │ List items with space-y-3 or space-y-4                  │   │
│ ├─────────────────────────────────────────────────────────┤   │
│ │ Each item has border, shadow, and hover effect          │   │
│ └─────────────────────────────────────────────────────────┘   │
│ ┌─┐┌─┐┌─┐┌─┐ Decorative blocks                   mt-8         │
│ └─┘└─┘└─┘└─┘                                                  │
└───────────────────────────────────────────────────────────────┘
```

---

## 8. TEMPLATE A: SIMPLE HEADER PAGE

**Use for:** Settings, configuration, list pages without images

**Visual Structure:**
- Colored header block (full-width)
- Icon box with title/subtitle
- Content card with sections

```tsx
import AppHeader from '@/components/layout/AppHeader';
import { Settings, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SimpleHeaderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vis-yellow">
      {/* App Header (sticky navigation) */}
      <AppHeader />

      {/* Page Header - Colored background */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          {/* Icon box with shadow */}
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" 
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
          >
            <Settings className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase">PAGE TITLE</h1>
            <p className="text-sm opacity-80">Subtitle or description</p>
          </div>
        </div>
      </div>

      {/* Content Card - White background with borders */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        
        {/* Tinted info section */}
        <div 
          className="p-4 border-[3px] border-foreground mb-6"
          style={{ 
            backgroundColor: 'hsl(var(--vis-blue) / 0.05)',
            boxShadow: '4px 4px 0 hsl(var(--vis-blue))' 
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
            </div>
            <h2 className="font-bold text-lg uppercase">SECTION TITLE</h2>
          </div>
          <p className="text-sm mt-2">Section description or content</p>
        </div>

        {/* List section */}
        <div className="space-y-3">
          {/* List item */}
          <button
            onClick={() => navigate('/item-1')}
            className="
              w-full text-left p-4 
              border-[3px] border-foreground bg-card
              flex items-center justify-between
              hover:translate-x-[2px] hover:translate-y-[2px] 
              transition-all
            "
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <span className="font-semibold">List Item Title</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

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

export default SimpleHeaderPage;
```

**Color Variations:**
- `bg-vis-yellow` → Dark text (`text-foreground`)
- `bg-vis-blue` → Light text (`text-primary-foreground`)
- `bg-vis-green` → Dark text (`text-foreground`)
- `bg-vis-cyan` → Dark text (`text-foreground`)

---

## 9. TEMPLATE B: IMAGE HEADER PAGE

**Use for:** Feature pages, detail pages, pages with hero imagery

**Visual Structure:**
- Image with gradient overlay
- Back button (optional)
- Title overlay on image
- Content sections with images

```tsx
import ImageHeader from '@/components/layout/ImageHeader';
import { Leaf, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const ImageHeaderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Image Header Component */}
      <ImageHeader
        image={heroImage}
        title="Page Title"
        subtitle="SUBTITLE OR CATEGORY"
        icon={<Leaf className="w-6 h-6" strokeWidth={2.5} />}
        iconBg="bg-vis-green"
        iconShadow="hsl(var(--foreground))"
        backPath="/previous-page"  // Optional: shows back button
      />

      {/* Main content */}
      <main className="p-4 pb-8">
        {/* Colored intro box */}
        <div 
          className="border-[3px] border-foreground bg-vis-green p-6 mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="font-mono text-xl uppercase font-bold mb-3">Section Title</h2>
          <p className="font-sans text-sm leading-relaxed">
            Introductory paragraph with important information about this page.
          </p>
        </div>

        {/* Image card with content */}
        <div 
          className="border-[3px] border-foreground bg-card mb-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
        >
          {/* Card image */}
          <div className="aspect-[16/9] overflow-hidden border-b-[3px] border-foreground">
            <img 
              src={heroImage} 
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Colored title bar */}
          <div className="bg-vis-green p-3 border-b-[3px] border-foreground">
            <h3 className="font-mono uppercase font-bold">Card Title</h3>
          </div>
          {/* Card content */}
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Card content and description text.
            </p>
          </div>
        </div>

        {/* Decorative footer */}
        <div className="flex gap-2 mt-8 justify-center">
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
        </div>
      </main>
    </div>
  );
};

export default ImageHeaderPage;
```

---

## 10. TEMPLATE C: LIST PAGE WITH SEARCH

**Use for:** Directories, contacts, searchable content

**Visual Structure:**
- Colored header
- Search input
- Filter chips (optional)
- Scrollable list

```tsx
import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import { Search, Phone, Mail, Building, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  category: string;
  phone: string;
  email?: string;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

const categories: Category[] = [
  { id: 'all', label: 'Sve', icon: Users, color: 'bg-muted' },
  { id: 'municipality', label: 'Općina', icon: Building, color: 'bg-vis-blue' },
];

const ListPageWithSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const items: Item[] = [
    { id: '1', name: 'Item One', category: 'municipality', phone: '021 711 025', email: 'email@example.com' },
  ];

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-vis-yellow">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <h1 className="text-3xl font-extrabold uppercase">
          <span className="text-vis-blue">Directory</span> Contacts 📞
        </h1>
        <p className="opacity-80 mt-1">All important numbers in one place</p>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-180px)] px-4 pt-5 pb-8">
        
        {/* Search input */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-[3px] border-foreground bg-card focus:outline-none focus:ring-2 focus:ring-vis-blue rounded-none"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
          />
        </div>

        {/* Category filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-3 py-2 border-[3px] border-foreground whitespace-nowrap transition-all ${
                selectedCategory === cat.id 
                  ? `${cat.color} ${cat.color === 'bg-vis-blue' ? 'text-primary-foreground' : 'text-foreground'}` 
                  : 'bg-card'
              }`}
              style={{ boxShadow: selectedCategory === cat.id ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
            >
              <cat.icon className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Contact list */}
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center text-primary-foreground shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm uppercase">{item.name}</p>
                  <a 
                    href={`tel:${item.phone.replace(/\s/g, '')}`}
                    className="text-vis-blue font-semibold text-sm hover:underline font-mono"
                  >
                    {item.phone}
                  </a>
                </div>
              </div>
              
              {item.email && (
                <div className="flex gap-2 mt-3 pt-3 border-t-2 border-border">
                  <a 
                    href={`mailto:${item.email}`}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-mono"
                  >
                    <Mail className="w-3 h-3" />
                    {item.email}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No results for "{searchQuery}"</p>
          </div>
        )}

        {/* Decorative blocks */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-violet border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-orange border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default ListPageWithSearch;
```

---

## 11. TEMPLATE D: FORM PAGE

**Use for:** Feedback forms, contact forms, report submission

**Visual Structure:**
- Colored header with icon
- Form fields with labels
- Submit button
- Optional helper text

```tsx
import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import { MessageSquare, Send } from 'lucide-react';

const FormPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-vis-cyan">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" 
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
          >
            <MessageSquare className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase">CONTACT US</h1>
            <p className="text-sm opacity-80">Send us your feedback</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              YOUR NAME
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="
                w-full px-4 py-3 h-12
                border-[3px] border-foreground bg-background
                rounded-none
                focus:outline-none focus:ring-2 focus:ring-vis-blue
              "
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            />
          </div>

          {/* Message field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              YOUR MESSAGE
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows={5}
              className="
                w-full px-4 py-3
                border-[3px] border-foreground bg-background
                rounded-none resize-none
                focus:outline-none focus:ring-2 focus:ring-vis-blue
              "
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="
              w-full px-6 py-4 min-h-touch
              bg-vis-blue text-primary-foreground
              border-[3px] border-foreground
              font-bold uppercase
              flex items-center justify-center gap-2
              hover:translate-x-[2px] hover:translate-y-[2px]
              active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
              transition-all
            "
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <Send className="w-5 h-5" />
            SEND MESSAGE
          </button>
        </form>

        {/* Helper text */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          We will respond within 24-48 hours
        </p>
      </div>
    </div>
  );
};

export default FormPage;
```

---

## 12. TEMPLATE E: DETAIL PAGE

**Use for:** Event details, item details, article pages

**Visual Structure:**
- Image header with overlay
- Content sections
- Action buttons
- Related items

```tsx
import { useNavigate } from 'react-router-dom';
import ImageHeader from '@/components/layout/ImageHeader';
import { Calendar, MapPin, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import eventImage from '@/assets/event-image.jpg';

interface DetailItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const DetailPage = () => {
  const navigate = useNavigate();
  
  const item: DetailItem = {
    id: 1,
    title: 'Event Title',
    date: '15. srpnja 2025.',
    time: '20:00',
    location: 'Trg sv. Jurja, Vis',
    description: 'Long description of the event goes here. This can be multiple paragraphs of text describing the event in detail.',
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Image Header */}
      <ImageHeader
        image={eventImage}
        title={item.title}
        subtitle="EVENT"
        icon={<Calendar className="w-6 h-6" strokeWidth={2.5} />}
        iconBg="bg-vis-blue"
        iconShadow="hsl(var(--vis-yellow))"
        backPath="/events"
      />

      {/* Content */}
      <main className="p-4 pb-8">
        {/* Quick info box */}
        <div 
          className="border-[3px] border-foreground bg-vis-yellow p-4 mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <div className="flex flex-wrap gap-4 text-sm font-mono">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {item.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {item.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <div 
          className="border-[3px] border-foreground bg-card p-4 mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
        >
          <h2 className="font-bold uppercase mb-3">ABOUT</h2>
          <p className="text-sm leading-relaxed">{item.description}</p>
        </div>

        {/* Action button */}
        <button
          onClick={() => {/* Handle action */}}
          className="
            w-full px-6 py-4 min-h-touch
            bg-vis-green text-foreground
            border-[3px] border-foreground
            font-bold uppercase
            flex items-center justify-center gap-2
            hover:translate-x-[2px] hover:translate-y-[2px]
            active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
            transition-all
          "
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          ADD TO CALENDAR
        </button>

        {/* Related section */}
        <h3 className="font-bold uppercase mt-8 mb-3">RELATED EVENTS</h3>
        <div className="space-y-3">
          <button
            onClick={() => navigate('/events/2')}
            className="
              w-full text-left p-4 
              border-[3px] border-foreground bg-card
              flex items-center justify-between
              hover:translate-x-[2px] hover:translate-y-[2px]
              transition-all
            "
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
          >
            <div>
              <p className="font-bold text-sm">Related Event Title</p>
              <p className="text-xs text-muted-foreground font-mono">16. srpnja • 19:00</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Decorative footer */}
        <div className="flex gap-2 mt-8 justify-center">
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
```

---

## 13. TEMPLATE F: GRID PAGE

**Use for:** Home pages, selection screens, menus

**Visual Structure:**
- Welcome/title section
- Grid of action cards
- Featured item card
- Bottom navigation/action

```tsx
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, Calendar, Camera, Leaf, MessageSquare, ChevronRight, Clock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface QuickAction {
  icon: LucideIcon;
  label: string;
  path: string;
  bgColor: string;
  shadowColor: string;
}

const GridPage = () => {
  const navigate = useNavigate();

  const quickActions: QuickAction[] = [
    {
      icon: Ship,
      label: 'SCHEDULES',
      path: '/schedules',
      bgColor: 'bg-vis-blue',
      shadowColor: 'hsl(var(--vis-orange))'
    },
    {
      icon: Camera,
      label: 'REPORT',
      path: '/report',
      bgColor: 'bg-vis-green',
      shadowColor: 'hsl(var(--vis-purple))'
    },
    {
      icon: Leaf,
      label: 'NATURE',
      path: '/geopark',
      bgColor: 'bg-vis-yellow',
      shadowColor: 'hsl(var(--vis-violet))'
    },
    {
      icon: Calendar,
      label: 'EVENTS',
      path: '/events',
      bgColor: 'bg-vis-cyan',
      shadowColor: 'hsl(var(--vis-deep-blue))'
    },
  ];

  const featuredEvent = {
    id: 1,
    title: 'SUMMER FESTIVAL',
    time: '20:00',
    location: 'Main Square'
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      {/* Welcome section */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-5xl font-bold tracking-tighter">
          Welcome
        </h1>
        <p className="text-muted-foreground font-mono mt-1 uppercase tracking-wide">
          GREETINGS FROM VIS
        </p>
      </div>

      {/* Quick Actions Grid */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const textColor = action.bgColor === 'bg-vis-blue' ? 'text-background' : 'text-foreground';
            
            return (
              <button
                key={action.path}
                onClick={() => navigate(action.path)}
                className={`
                  ${action.bgColor} ${textColor}
                  p-5 border-[3px] border-foreground 
                  flex flex-col items-center justify-center gap-3 
                  aspect-square
                  hover:translate-x-[2px] hover:translate-y-[2px] 
                  transition-all
                `}
                style={{ boxShadow: `6px 6px 0 ${action.shadowColor}` }}
              >
                <action.icon className="w-10 h-10" strokeWidth={2} />
                <span className="font-bold text-lg tracking-tight text-center">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured event section */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5" strokeWidth={2.5} />
          <h2 className="font-bold uppercase tracking-wide">TODAY</h2>
        </div>
        
        <button
          onClick={() => navigate(`/events/${featuredEvent.id}`)}
          className="
            w-full bg-vis-purple p-5 
            border-[3px] border-foreground 
            shadow-brutal
            hover:translate-x-[2px] hover:translate-y-[2px] 
            hover:shadow-brutal-sm 
            transition-all text-left
          "
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-3xl border-[3px] border-foreground">
              🎉
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block bg-foreground text-background px-2 py-0.5 text-xs font-bold uppercase tracking-wider mb-2">
                EVENT
              </span>
              <h3 className="font-bold text-xl leading-tight mb-2">{featuredEvent.title}</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredEvent.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {featuredEvent.location}
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Bottom action */}
      <div className="px-4 pb-8">
        <button
          onClick={() => navigate('/feedback')}
          className="
            w-full bg-background 
            border-[3px] border-foreground 
            px-5 py-4 
            flex items-center gap-3 
            hover:bg-muted transition-colors
          "
          style={{ boxShadow: '6px 6px 0 hsl(var(--vis-violet))' }}
        >
          <MessageSquare className="w-8 h-8" strokeWidth={2} />
          <div className="flex-1 text-left">
            <p className="font-bold uppercase tracking-wide">HAVE A SUGGESTION?</p>
            <p className="text-sm font-mono text-muted-foreground">Share your ideas with us</p>
          </div>
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default GridPage;
```

---

## 14. INTERACTIVE PATTERNS

### 14.1 Clickable Card with Hover Effect

```tsx
<button
  onClick={handleClick}
  className="
    w-full text-left p-4
    border-[3px] border-foreground bg-card
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    transition-all duration-150
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  {/* Content */}
</button>
```

### 14.2 Selection State (Radio-like)

```tsx
const [selected, setSelected] = useState<string | null>(null);

{options.map((option) => (
  <button
    key={option.id}
    onClick={() => setSelected(option.id)}
    className={`
      p-4 border-[3px] border-foreground transition-all
      ${selected === option.id 
        ? 'bg-vis-blue text-primary-foreground' 
        : 'bg-card hover:bg-muted'
      }
    `}
    style={{ 
      boxShadow: selected === option.id 
        ? '2px 2px 0 hsl(var(--foreground))' 
        : 'none' 
    }}
  >
    {option.label}
    {selected === option.id && <Check className="w-4 h-4" />}
  </button>
))}
```

### 14.3 Navigation Button with Chevron

```tsx
<button
  onClick={() => navigate('/path')}
  className="
    w-full text-left p-4
    border-[3px] border-foreground bg-card
    flex items-center justify-between
    hover:translate-x-[2px] hover:translate-y-[2px]
    transition-all
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>
  <div>
    <p className="font-bold">{title}</p>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
  <ChevronRight className="w-5 h-5 text-muted-foreground" />
</button>
```

### 14.4 Accordion/Expandable Section

```tsx
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

<Collapsible>
  <CollapsibleTrigger className="
    w-full p-4 border-[3px] border-foreground bg-card
    flex items-center justify-between
    [&[data-state=open]>svg]:rotate-180
  "
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
  >
    <span className="font-bold uppercase">Section Title</span>
    <ChevronDown className="w-5 h-5 transition-transform" />
  </CollapsibleTrigger>
  <CollapsibleContent className="p-4 border-x-[3px] border-b-[3px] border-foreground bg-card">
    Content here
  </CollapsibleContent>
</Collapsible>
```

---

## 15. COMMON UI PATTERNS

### 15.1 Alert/Warning Banner

```tsx
<div 
  className="p-4 border-[3px] border-foreground bg-vis-emergency text-primary-foreground"
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  <div className="flex items-start gap-3">
    <AlertTriangle className="w-6 h-6 shrink-0" />
    <div>
      <p className="font-bold uppercase">IMPORTANT NOTICE</p>
      <p className="text-sm mt-1">Alert message text goes here.</p>
    </div>
  </div>
</div>
```

### 15.2 Info/Notice Banner

```tsx
<div 
  className="p-4 border-[3px] border-foreground bg-vis-notice text-foreground"
  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
>
  <div className="flex items-start gap-3">
    <Info className="w-6 h-6 shrink-0" />
    <p className="text-sm">Information message text.</p>
  </div>
</div>
```

### 15.3 Image Card Grid

```tsx
<div className="grid grid-cols-2 gap-3">
  {items.map((item) => (
    <div 
      key={item.id}
      className="border-[3px] border-foreground bg-card overflow-hidden"
      style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
    >
      <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 bg-vis-green">
        <h4 className="font-mono font-bold text-sm">{item.title}</h4>
        <p className="text-xs text-muted-foreground">{item.description}</p>
      </div>
    </div>
  ))}
</div>
```

### 15.4 Horizontal Scroll Section

```tsx
<div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
  {items.map((item) => (
    <button
      key={item.id}
      className="flex-shrink-0 px-4 py-2 border-[3px] border-foreground bg-card whitespace-nowrap"
      style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
    >
      {item.label}
    </button>
  ))}
</div>
```

### 15.5 Stats/Metric Display

```tsx
<div className="grid grid-cols-2 gap-3">
  <div 
    className="p-4 border-[3px] border-foreground bg-vis-blue text-primary-foreground"
    style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
  >
    <p className="text-3xl font-bold font-mono">42</p>
    <p className="text-xs uppercase opacity-80">EVENTS</p>
  </div>
  <div 
    className="p-4 border-[3px] border-foreground bg-vis-green text-foreground"
    style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
  >
    <p className="text-3xl font-bold font-mono">12</p>
    <p className="text-xs uppercase opacity-80">LOCATIONS</p>
  </div>
</div>
```

---

## 16. SPACING CHEATSHEET

### 16.1 Page-Level Spacing

| Location | Class | Pixels | Usage |
|----------|-------|--------|-------|
| Page horizontal | `px-4` or `px-5` | 16-20px | Standard content padding |
| Content top | `pt-5` or `pt-6` | 20-24px | Space after header |
| Content bottom | `pb-8` | 32px | Space before page end |
| Between sections | `mb-6` | 24px | Standard section gap |

### 16.2 Component-Level Spacing

| Location | Class | Pixels | Usage |
|----------|-------|--------|-------|
| Card padding | `p-4` | 16px | Standard card padding |
| Card tight | `p-3` | 12px | Small cards |
| Card spacious | `p-5` or `p-6` | 20-24px | Feature cards |
| Between items | `space-y-3` | 12px | List items |
| Between items tight | `space-y-2` | 8px | Dense lists |
| Grid gap | `gap-3` or `gap-4` | 12-16px | Grid layouts |
| Icon to text | `gap-2` or `gap-3` | 8-12px | Icon + label |

### 16.3 Typography Spacing

| Location | Class | Pixels | Usage |
|----------|-------|--------|-------|
| After heading | `mb-3` or `mb-4` | 12-16px | Before content |
| After paragraph | `mt-2` | 8px | Following paragraph |
| Before section | `mt-6` or `mt-8` | 24-32px | New sections |

---

## 17. FILE STRUCTURE REFERENCE

### 17.1 Key Files

```
src/
├── index.css                   # Color tokens, base styles
├── lib/utils.ts                # cn() utility function
├── components/
│   ├── layout/
│   │   ├── AppHeader.tsx       # Sticky navigation header
│   │   ├── ImageHeader.tsx     # Image header with overlay
│   │   └── ColorBlock.tsx      # Colored section blocks
│   └── ui/
│       ├── VisButton.tsx       # Custom neobrutalist button
│       ├── VisBadge.tsx        # Location/category badges
│       ├── VisCard.tsx         # Custom neobrutalist cards
│       └── [shadcn components] # Modified shadcn components
├── pages/                      # All page components
└── assets/                     # Images and static files
```

### 17.2 Import Patterns

```tsx
// Layout components
import AppHeader from '@/components/layout/AppHeader';
import ImageHeader from '@/components/layout/ImageHeader';
import ColorBlock from '@/components/layout/ColorBlock';

// Custom UI components
import VisButton from '@/components/ui/VisButton';
import VisBadge from '@/components/ui/VisBadge';

// shadcn components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Utilities
import { cn } from '@/lib/utils';

// Icons
import { Ship, Calendar, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Assets
import heroImage from '@/assets/hero-image.jpg';

// Navigation
import { useNavigate } from 'react-router-dom';
```

---

## FINAL CHECKLIST

Before completing any page, verify:

- [ ] **No rounded corners** anywhere
- [ ] **All interactive elements** have 3px borders
- [ ] **All clickable items** have offset shadows
- [ ] **Hover states** translate 2px diagonally
- [ ] **All headings** are uppercase and bold
- [ ] **Touch targets** are minimum 44px
- [ ] **Data/numbers** use monospace font
- [ ] **Color tokens** used (no hardcoded colors)
- [ ] **Decorative footer blocks** included
- [ ] **Consistent spacing** throughout

---

*This guide is the single source of truth for design reproduction. Follow it exactly for consistent results.*
