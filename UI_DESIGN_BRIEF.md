# OTOK VIS APP — UI Design Brief (Neobrutalist Edition)

## Overview
This document defines the visual language for the Otok Vis municipal app. The design follows a **Neobrutalist** aesthetic—characterized by raw, bold, high-contrast elements with sharp edges, thick borders, and harsh offset shadows. The style conveys honesty, directness, and a utilitarian confidence.

---

## Product Goals
- Provide clear, fast access to official island information and services
- Make critical alerts and updates immediately visible without ambiguity
- Support locals (daily use) and visitors (quick orientation)
- Deliver a memorable, distinctive visual identity that stands out from generic municipal apps

---

## User Types
| User | Needs | Access Level |
|------|-------|--------------|
| **Locals (registered)** | Timely alerts, schedules, reporting, feedback, settings | Full |
| **Visitors** | Essential info, schedules, emergency contacts | Limited |

---

## Design Philosophy: Neobrutalism

### Core Principles
1. **No rounded corners** — All elements use sharp, 90° edges
2. **Thick visible borders** — 3px solid black borders on all interactive elements
3. **Harsh offset shadows** — Solid-color shadows offset 4-6px (no blur)
4. **High contrast** — Near-black text on light backgrounds
5. **Flat colors** — No gradients, no blur effects, no transparency in key elements
6. **Honest materials** — Elements look like what they are; no mimicking real-world textures

### Visual Metaphor
The design evokes **letterpress printing, protest posters, and early web aesthetics**—intentionally raw and unapologetic. This creates a sense of trustworthiness and municipal authority while remaining visually engaging.

---

## Color Palette

### Primary Colors (Muted, Sophisticated)

| Token | HSL Value | Hex | Usage |
|-------|-----------|-----|-------|
| `--vis-yellow` | `38 93% 67%` | `#F9B95C` | Warm Gold — Highlights, warnings, accents |
| `--vis-blue` | `195 29% 53%` | `#6398A9` | Steel Blue — Primary actions, headers, sea-related content |
| `--vis-cyan` | `8 48% 67%` | `#D7897F` | Terracotta — Secondary sections, warmth, land-related |
| `--vis-green` | `152 33% 68%` | `#96C7B3` | Sage Green — Confirmations, environmental, recycling |

### Semantic Colors

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `40 20% 96%` | Warm off-white page background |
| `--foreground` | `0 0% 10%` | Near-black text and borders |
| `--card` | `0 0% 100%` | Pure white card surfaces |
| `--muted` | `40 10% 92%` | Disabled states, subtle backgrounds |
| `--muted-foreground` | `0 0% 45%` | Secondary text, metadata |
| `--vis-emergency` | `0 70% 50%` | Critical alerts, destructive actions |

### Color Block Rules

```
┌─────────────────────────────────────┐
│  HEADER BLOCK (vis-blue/green/etc)  │  ← Full-width colored header
│  Page title + icon                  │
├─────────────────────────────────────┤
│                                     │
│  CONTENT CARD (white, --card)       │  ← Main content area
│  ┌─────────────────────────────┐    │
│  │  SECTION (colored bg/5)     │    │  ← Sections with tinted backgrounds
│  │  3px border, offset shadow  │    │
│  └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

**Rules:**
- Use full-width color blocks for page headers
- Cards sit on `--card` (white) background
- Sections within cards use `{color}/5` or `{color}/10` tints
- Never use gradients
- Never use blur effects (no `blur-*` classes)

---

## Typography

### Font Stack

| Purpose | Font Family | Fallback |
|---------|-------------|----------|
| **Primary** | Space Grotesk | system-ui, sans-serif |
| **Monospace** | Space Mono | monospace |

### Hierarchy

| Element | Size | Weight | Transform | Letter Spacing | Class |
|---------|------|--------|-----------|----------------|-------|
| Page Title | 28-32px | 800 (ExtraBold) | UPPERCASE | -0.02em | `text-3xl font-extrabold uppercase` |
| Section Header | 18-20px | 700 (Bold) | UPPERCASE | -0.02em | `text-lg font-bold uppercase` |
| Card Title | 16px | 700 (Bold) | Normal | Normal | `font-bold` |
| Body Text | 14-16px | 400 (Regular) | Normal | Normal | `text-sm` or default |
| Labels/Meta | 12px | 500-600 | UPPERCASE | 0.05em | `text-xs font-medium uppercase font-mono` |
| Timestamps | 12px | 400 | Normal | Normal | `text-xs text-muted-foreground font-mono` |

### Typography Rules
- All headings (h1-h6) are **UPPERCASE** by default
- Use `font-mono` class for data, times, and technical labels
- Avoid italics; use bold or color for emphasis
- Minimum body text size: 14px

---

## Spacing System

### Base Unit: 4px

| Token | Value | Common Uses |
|-------|-------|-------------|
| `1` | 4px | Icon gaps |
| `2` | 8px | Tight element spacing |
| `3` | 12px | Between related items |
| `4` | 16px | Card padding, section gaps |
| `5` | 20px | Section padding |
| `6` | 24px | Large section gaps |
| `8` | 32px | Page section separation |

### Component Spacing

```
Page Structure:
├── Header padding: px-5 pt-6 pb-4
├── Content card: px-4 pt-5 pb-8
│   ├── Section margin-bottom: mb-6
│   ├── Element gap within section: space-y-3
│   └── Inner element padding: p-3 to p-4
```

### Minimum Touch Targets
- All interactive elements: **44×44px minimum** (`min-h-touch min-w-touch`)
- Button height: **44-56px** depending on context
- Icon buttons: **44×44px** with centered icon

---

## Border System

### Border Width

| Context | Width | Class |
|---------|-------|-------|
| Cards, buttons, inputs | 3px | `border-[3px]` |
| Badges, small elements | 2px | `border-2` |
| Dividers, separators | 2-3px | `border-t-2` or `border-t-[3px]` |

### Border Color
- Primary: `border-foreground` (near-black)
- On dark backgrounds: `border-foreground` (still black for contrast)
- Dashed/subtle: `border-muted-foreground/30`

### Border Radius
**Always zero.** No `rounded-*` classes anywhere.

```css
--radius: 0;  /* Global setting */
```

---

## Shadow System (Offset Shadows)

### Shadow Sizes

| Size | Offset | Class/Style |
|------|--------|-------------|
| Small | 2-3px | `shadow: 2px 2px 0 hsl(var(--foreground))` |
| Medium | 4px | `shadow: 4px 4px 0 hsl(var(--foreground))` |
| Large | 6px | `shadow: 6px 6px 0 hsl(var(--foreground))` |

### Shadow Colors
Shadows use solid palette colors for visual interest:

| Token | Usage |
|-------|-------|
| `--foreground` | Default, high contrast |
| `--vis-yellow` | Warm accent |
| `--vis-blue` | Cool accent |
| `--vis-cyan` | Terracotta warmth |
| `--vis-green` | Nature/positive accent |

### Shadow Application Pattern

```tsx
// Static element
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}

// Interactive element with hover
className="hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}

// Active state - shadow collapses
className="active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
```

---

## Component Patterns

### Cards

```tsx
// Basic card
<div 
  className="p-4 border-[3px] border-foreground bg-card"
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>
  {content}
</div>

// Interactive card
<button 
  className="w-full text-left p-4 border-[3px] border-foreground bg-card 
             hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
>
  {content}
</button>

// Tinted section card
<div 
  className="p-4 border-[3px] border-foreground bg-vis-blue/5"
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
>
  {content}
</div>
```

### Buttons

```tsx
// Primary button
<button
  className="w-full py-4 border-[3px] border-foreground bg-vis-blue 
             text-primary-foreground font-bold text-lg uppercase
             hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
>
  Button Label
</button>

// Secondary button
<button
  className="px-6 py-3 border-[3px] border-foreground bg-card 
             font-semibold uppercase
             hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
  style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
>
  Secondary
</button>

// Icon button
<button
  className="w-11 h-11 border-[3px] border-foreground bg-card 
             flex items-center justify-center
             hover:bg-muted transition-colors"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
>
  <Icon className="w-5 h-5" />
</button>
```

### Inputs

```tsx
<input
  className="w-full px-5 py-4 border-[3px] border-foreground bg-background 
             text-foreground placeholder:text-muted-foreground 
             focus:outline-none focus:ring-2 focus:ring-vis-blue"
  style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
  placeholder="Enter text..."
/>
```

### Badges

```tsx
<span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold 
                 uppercase tracking-wide border-2 border-foreground bg-vis-blue 
                 text-primary-foreground">
  Label
</span>
```

### Toggle/Switch

```tsx
<button
  className={`w-14 h-8 border-[3px] border-foreground transition-colors relative 
              ${enabled ? 'bg-vis-green' : 'bg-muted'}`}
>
  <div className={`absolute top-0.5 w-5 h-5 bg-card border-2 border-foreground 
                   transition-all ${enabled ? 'left-6' : 'left-0.5'}`} />
</button>
```

---

## Page Structure

### Standard Page Layout

```
┌─────────────────────────────────────────────────┐
│ HEADER BAR (sticky, white bg, black border)     │
│ [Menu]        OTOK VIS        [Inbox]           │
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
│ CONTENT AREA (white card, extends to bottom)    │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │  SECTION 1 (tinted bg, shadow)          │   │
│   │  Content...                             │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   SECTION HEADER                                │
│   ┌─────────────────────────────────────────┐   │
│   │  List item                          ▶   │   │
│   └─────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────┐   │
│   │  List item                          ▶   │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   ■ ■ ■ ■  (decorative blocks)                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Header Component

```tsx
<header className="sticky top-0 z-50 w-full bg-card border-b-[3px] border-foreground px-4 py-3">
  <div className="flex items-center justify-between max-w-screen-md mx-auto">
    <button 
      className="min-w-touch min-h-touch flex items-center justify-center 
                 border-[3px] border-foreground bg-card"
      style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
    >
      <Menu className="w-6 h-6" strokeWidth={2.5} />
    </button>
    
    <h1 className="font-bold text-lg tracking-tight uppercase">OTOK VIS</h1>
    
    <button 
      className="min-w-touch min-h-touch flex items-center justify-center 
                 border-[3px] border-foreground bg-card"
      style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
    >
      <Inbox className="w-6 h-6" strokeWidth={2.5} />
    </button>
  </div>
</header>
```

### Decorative Footer Blocks

```tsx
<div className="flex justify-center gap-2 mt-8">
  <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
  <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
</div>
```

---

## Iconography

### Style Guide
- Use **Lucide React** icons exclusively
- Line icons only (no filled variants)
- Stroke width: `2` to `2.5` for visibility
- Default size: `w-5 h-5` or `w-6 h-6`

### Icon Usage Patterns

| Context | Size | Stroke | Container |
|---------|------|--------|-----------|
| In-text icons | 16-20px | 2 | None |
| Button icons | 20-24px | 2.5 | With label or 44×44 min |
| Section header icons | 20px | 2 | None |
| Feature icons (large) | 24-32px | 2 | Colored box |

### Icon Containers

```tsx
// Standard icon box
<div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground 
                flex items-center justify-center text-primary-foreground">
  <Ship className="w-5 h-5" />
</div>

// Large icon box with shadow
<div 
  className="w-12 h-12 bg-card border-[3px] border-foreground 
             flex items-center justify-center"
  style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
>
  <Calendar className="w-6 h-6 text-vis-blue" />
</div>
```

---

## States

### Interactive States

| State | Visual Treatment |
|-------|------------------|
| **Default** | Full shadow, no transform |
| **Hover** | `translate-x-[2px] translate-y-[2px]`, reduced shadow |
| **Active/Pressed** | `translate-x-[4px] translate-y-[4px]`, no shadow |
| **Disabled** | `opacity-50`, `pointer-events-none` |
| **Focus** | `ring-2 ring-{color}`, visible focus indicator |

### Selection States

```tsx
// Selected item
className={`${isSelected 
  ? 'bg-vis-blue text-primary-foreground' 
  : 'bg-card'}`}
style={{ boxShadow: isSelected 
  ? '2px 2px 0 hsl(var(--foreground))' 
  : 'none' }}

// Checkbox/Radio selected
<div className={`w-7 h-7 border-[3px] border-foreground flex items-center 
                 justify-center ${selected ? 'bg-vis-blue' : 'bg-card'}`}>
  {selected && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
</div>
```

---

## Animation Guidelines

### Allowed Animations
- **Transform transitions**: `transition-all duration-150`
- **Color transitions**: `transition-colors`
- **Simple hover effects**: translate, shadow changes

### Timing
- Default: `150ms` ease
- Hover shadow collapse: `100ms`

### Prohibited
- Blur animations
- Fade transitions
- Scale animations
- Complex keyframe animations
- Parallax effects

---

## Accessibility Checklist

- [x] Touch targets ≥ 44×44px (`min-h-touch min-w-touch`)
- [x] Text contrast AA+ (dark text on light, light text on dark colors)
- [x] Visible focus states (`focus:ring-2`)
- [x] No color-only meaning (always use labels/badges)
- [x] Readable at larger text sizes
- [x] Clear visual hierarchy with uppercase headings
- [x] High-contrast borders (3px black)
- [x] Interactive elements have clear affordances (shadows indicate "clickable")

---

## Do's and Don'ts

### ✅ DO
- Use sharp 90° corners everywhere
- Apply 3px borders to all interactive elements
- Use offset shadows for depth
- Keep text uppercase for headings
- Use the muted palette colors
- Maintain high contrast
- Use monospace for data/times

### ❌ DON'T
- Use `rounded-*` classes (any border radius)
- Use `blur-*` for decorative effects
- Use gradients (`bg-gradient-*`)
- Use drop shadows with blur
- Use transparency for main UI elements
- Use thin borders (< 2px)
- Use italics
- Use decorative fonts

---

## File Reference

### Design Tokens
- `src/index.css` — CSS variables, utility classes

### Components
- `src/components/layout/AppHeader.tsx` — Global header
- `src/components/ui/VisButton.tsx` — Button component
- `src/components/ui/VisCard.tsx` — Card component
- `src/components/ui/VisBadge.tsx` — Badge component

### Configuration
- `tailwind.config.ts` — Tailwind theme extension
- `index.html` — Font loading (Space Grotesk, Space Mono)

---

## Quick Reference Card

```
BORDERS:     3px solid black (border-[3px] border-foreground)
SHADOWS:     4-6px offset, solid color, no blur
CORNERS:     0px (never rounded)
FONTS:       Space Grotesk (primary), Space Mono (data)
HEADINGS:    UPPERCASE, bold, tight tracking
TOUCH:       44×44px minimum
SPACING:     Base 4px, padding 16-20px
COLORS:      Warm Gold, Steel Blue, Terracotta, Sage Green
HOVER:       translate 2px, reduce shadow
ACTIVE:      translate 4px, no shadow
```
