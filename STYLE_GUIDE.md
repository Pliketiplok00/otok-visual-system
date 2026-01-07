# Otok Vis App - Style Guide

## Design Philosophy: Neobrutalism

A raw, bold, high-contrast design system with harsh edges inspired by Mediterranean aesthetics. The design emphasizes:
- **No rounded corners** - Sharp, geometric shapes
- **Thick borders** - 3px solid borders
- **Offset shadows** - Hard-edged drop shadows (no blur)
- **High contrast** - Dark navy on warm white
- **Honest materials** - Flat colors, no gradients
- **Typography-driven** - Bold uppercase headings

---

## Color System

### Core Palette

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--vis-yellow` | `45 70% 58%` | Soft Golden |
| `--vis-blue` | `200 55% 48%` | Mediterranean Blue |
| `--vis-cyan` | `180 45% 45%` | Teal Cyan |
| `--vis-green` | `160 40% 45%` | Sea Green |
| `--vis-white` | `180 20% 97%` | Cool White |
| `--vis-black` | `210 30% 12%` | Deep Navy |

### Accent Colors

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--vis-reddish` | `195 50% 40%` | Steel Blue |
| `--vis-violet` | `220 50% 50%` | Ocean Blue |
| `--vis-orange` | `175 45% 42%` | Seafoam |
| `--vis-purple` | `253 33% 81%` | Soft Lavender |
| `--vis-deep-blue` | `215 60% 35%` | Navy Blue |
| `--vis-terracotta` | `350 40% 65%` | Muted Pink |
| `--vis-amber` | `38 60% 57%` | Warm Amber |
| `--vis-muted-orange` | `28 70% 60%` | Warm Orange |
| `--vis-sky` | `200 60% 75%` | Light Sky Blue |

### Alert Colors

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--vis-emergency` | `0 55% 50%` | Emergency/critical alerts |
| `--vis-notice` | `35 70% 55%` | Amber notices/warnings |

### Semantic Tokens (Light Mode)

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `45 25% 95%` | Page background (warm Mediterranean white) |
| `--foreground` | `210 25% 15%` | Primary text (deep sea navy) |
| `--card` | `45 30% 98%` | Card backgrounds |
| `--primary` | `210 25% 15%` | Primary actions (deep sea navy) |
| `--secondary` | `42 75% 65%` | Secondary actions (sandy gold) |
| `--muted` | `45 15% 90%` | Muted backgrounds |
| `--muted-foreground` | `210 15% 40%` | Secondary text |
| `--accent` | `200 55% 50%` | Accents (Mediterranean Azure) |
| `--border` | `210 25% 15%` | Borders (deep sea navy) |
| `--destructive` | `15 55% 50%` | Destructive actions |

### Semantic Tokens (Dark Mode)

| Token | HSL Value |
|-------|-----------|
| `--background` | `210 30% 10%` |
| `--foreground` | `45 25% 92%` |
| `--card` | `210 28% 14%` |
| `--primary` | `45 25% 92%` |
| `--secondary` | `42 65% 55%` |
| `--muted` | `210 20% 20%` |
| `--muted-foreground` | `45 15% 65%` |
| `--accent` | `185 40% 50%` |
| `--border` | `45 20% 85%` |

---

## Typography

### Font Stack

```css
/* Primary - Headings & Body */
font-family: 'Space Grotesk', system-ui, sans-serif;

/* Monospace - Data, timestamps, labels */
font-family: 'Space Mono', monospace;
```

### Heading Rules

- All headings: **UPPERCASE**
- Font weight: **700 (bold)**
- Letter spacing: **-0.02em**
- Font: Space Grotesk

### Size Scale

| Element | Tailwind Class | Usage |
|---------|----------------|-------|
| Page Title | `text-2xl font-bold uppercase` | Main page headers |
| Section Header | `text-lg font-bold uppercase` | Section titles |
| Card Title | `text-base font-bold uppercase` | Card headers |
| Body Text | `text-base` | Regular content |
| Labels/Meta | `text-sm mono` | Timestamps, categories |
| Small | `text-xs` | Fine print |

### Usage Rules

- ✅ Use `mono` class for: dates, times, numbers, categories
- ✅ Use uppercase for all headings
- ❌ Never use italics
- ❌ Avoid decorative fonts

---

## Spacing System

### Base Unit: 4px

| Tailwind | Pixels | Usage |
|----------|--------|-------|
| `p-1` | 4px | Minimal spacing |
| `p-2` | 8px | Badge padding |
| `p-3` | 12px | Compact elements |
| `p-4` | 16px | Standard padding |
| `p-6` | 24px | Section spacing |
| `p-8` | 32px | Large sections |

### Component Spacing

| Component | Padding | Gap |
|-----------|---------|-----|
| Page container | `p-4` | - |
| Card | `p-4` | - |
| Buttons | `px-6 py-3` | - |
| Icon buttons | `p-3` | - |
| Lists | - | `gap-3` or `gap-4` |
| Badge | `px-2 py-1` | - |

### Touch Targets

- Minimum size: **44x44px**
- Use `min-h-touch min-w-touch` utilities

---

## Border System

### Border Width

| Usage | Width | Class |
|-------|-------|-------|
| Cards, buttons | 3px | `border-3` or `border-[3px]` |
| Dividers, badges | 2px | `border-2` |

### Border Color

- Default: `border-foreground` (deep navy)
- All borders use the foreground color for maximum contrast

### Border Radius

- **Always 0** - No rounded corners
- `--radius: 0` in CSS variables
- Never use `rounded-*` classes

---

## Shadow System

### Offset Shadows (No Blur)

| Size | CSS | Tailwind Class |
|------|-----|----------------|
| Standard | `6px 6px 0 hsl(var(--foreground))` | `shadow-brutal` |
| Small | `4px 4px 0 hsl(var(--foreground))` | `shadow-brutal-sm` |

### Color Variants

| Color | Class |
|-------|-------|
| Yellow | `shadow-brutal-yellow` |
| Blue | `shadow-brutal-blue` |
| Cyan | `shadow-brutal-cyan` |
| Green | `shadow-brutal-green` |

### Hover/Active States

| State | Transform | Shadow |
|-------|-----------|--------|
| Default | none | 6px offset |
| Hover | `translate(2px, 2px)` | 4px offset |
| Active | `translate(4px, 4px)` | none |

---

## Component Patterns

### Cards

```jsx
// Basic Card
<div className="neo-card">
  <h3 className="font-bold uppercase">Title</h3>
  <p>Content</p>
</div>

// Color Accent Cards
<div className="neo-card neo-yellow">...</div>
<div className="neo-card neo-blue">...</div>
<div className="neo-card neo-cyan">...</div>
<div className="neo-card neo-green">...</div>
```

**Card CSS:**
```css
.neo-card {
  @apply bg-card border-[3px] border-foreground p-4;
  box-shadow: 6px 6px 0 hsl(var(--foreground));
}

.neo-card:hover {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0 hsl(var(--foreground));
}
```

### Buttons

```jsx
// Neobrutalist Button
<button className="neo-btn">
  CLICK ME
</button>

// With icon
<button className="neo-btn flex items-center gap-2">
  <Icon size={20} />
  LABEL
</button>
```

**Button CSS:**
```css
.neo-btn {
  @apply bg-secondary text-secondary-foreground border-[3px] border-foreground px-6 py-3 font-bold uppercase tracking-wide;
  box-shadow: 4px 4px 0 hsl(var(--foreground));
  transition: all 0.1s ease;
}

.neo-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 hsl(var(--foreground));
}

.neo-btn:active {
  transform: translate(4px, 4px);
  box-shadow: none;
}
```

### Badges

```jsx
<span className="bg-vis-yellow border-2 border-foreground px-2 py-1 text-xs font-bold uppercase mono">
  Category
</span>
```

### Icon Containers

```jsx
// Standard icon box
<div className="w-12 h-12 bg-vis-yellow border-3 border-foreground flex items-center justify-center shadow-brutal-sm">
  <Icon size={24} />
</div>

// Large icon box
<div className="w-16 h-16 bg-vis-blue border-3 border-foreground flex items-center justify-center shadow-brutal">
  <Icon size={32} className="text-primary-foreground" />
</div>
```

---

## Page Layout

### Standard Structure

```jsx
<div className="min-h-screen bg-background">
  {/* Sticky Header */}
  <AppHeader />
  
  {/* Page Content */}
  <main className="p-4 space-y-6">
    {/* Page Title */}
    <h1 className="text-2xl font-bold uppercase">Page Title</h1>
    
    {/* Content Sections */}
    <section className="space-y-4">
      <h2 className="text-lg font-bold uppercase border-b-3 border-foreground pb-2">
        Section Title
      </h2>
      {/* Section content */}
    </section>
  </main>
  
  {/* Decorative Footer */}
  <footer className="p-4 flex gap-2">
    <div className="h-3 w-12 bg-vis-yellow" />
    <div className="h-3 w-8 bg-vis-blue" />
    <div className="h-3 w-6 bg-vis-cyan" />
  </footer>
</div>
```

### Header Component

```jsx
<header className="sticky top-0 z-50 bg-background border-b-3 border-foreground p-4">
  <div className="flex items-center justify-between">
    <button className="p-2 border-3 border-foreground">
      <Menu size={24} />
    </button>
    <h1 className="font-bold uppercase">OTOK VIS</h1>
    <button className="p-2 border-3 border-foreground">
      <Inbox size={24} />
    </button>
  </div>
</header>
```

### Image Headers

```jsx
<div className="relative h-48 overflow-hidden border-b-3 border-foreground">
  <img src={image} className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
  <div className="absolute bottom-4 left-4">
    <h1 className="text-2xl font-bold uppercase text-primary-foreground">
      Title
    </h1>
    <p className="text-sm text-primary-foreground/80 mono">
      Subtitle
    </p>
  </div>
</div>
```

---

## Iconography

### Library: Lucide React

### Default Properties

| Property | Value |
|----------|-------|
| Size | 24px (standard), 20px (small), 32px (large) |
| Stroke width | 2 |
| Color | `currentColor` |

### Usage Guidelines

- Use line icons only (no filled variants)
- Match icon color to text color
- Add `strokeWidth={2.5}` for bolder appearance when needed

---

## States

### Interactive States

| State | Treatment |
|-------|-----------|
| Default | Full shadow, no transform |
| Hover | Reduced shadow, slight translate |
| Active/Pressed | No shadow, full translate |
| Disabled | `opacity-50`, no interactions |
| Focus | `ring-2 ring-accent` |

### Selection States

```jsx
// Selected item
<div className="border-3 border-foreground bg-secondary">
  Selected
</div>

// Unselected item
<div className="border-3 border-foreground bg-card">
  Unselected
</div>
```

---

## Animation Guidelines

### Allowed Animations

- Transform transitions (translate)
- Color transitions
- Simple hover effects

### Timing

| Animation | Duration |
|-----------|----------|
| Default transitions | 150ms |
| Hover effects | 100ms |

### Prohibited

- ❌ Blur effects
- ❌ Fade in/out
- ❌ Scale transforms
- ❌ Complex keyframe animations
- ❌ Parallax effects
- ❌ Gradients

---

## Utility Classes

### Border Utilities

```css
.border-brutal {
  @apply border-[3px] border-foreground;
}
```

### Shadow Utilities

```css
.shadow-brutal      /* 6px offset, foreground color */
.shadow-brutal-sm   /* 4px offset, foreground color */
.shadow-brutal-yellow
.shadow-brutal-blue
.shadow-brutal-cyan
.shadow-brutal-green
```

### Text Utilities

```css
.mono {
  font-family: 'Space Mono', monospace;
}
```

---

## Do's and Don'ts

### ✅ DO

- Use sharp corners (0 radius)
- Use 3px borders
- Use offset shadows (no blur)
- Use uppercase for headings
- Use muted Mediterranean palette
- Use high contrast
- Use monospace for data/numbers
- Use semantic color tokens

### ❌ DON'T

- Use rounded corners
- Use blur effects
- Use gradients
- Use drop shadows with blur
- Use transparency for main UI elements
- Use thin borders (< 2px)
- Use italics
- Use decorative fonts
- Use direct color values (use tokens)

---

## File Reference

| File | Purpose |
|------|---------|
| `src/index.css` | CSS variables, base styles, utilities |
| `tailwind.config.ts` | Tailwind theme extension, custom colors |
| `src/components/ui/` | Shadcn components (customized) |
| `src/components/ui/VisButton.tsx` | Custom button component |
| `src/components/ui/VisCard.tsx` | Custom card component |
| `src/components/ui/VisBadge.tsx` | Custom badge component |

---

## Quick Reference

```
Borders:      3px solid, foreground color
Shadows:      6px 6px 0, no blur
Corners:      0 (never rounded)
Fonts:        Space Grotesk (primary), Space Mono (data)
Headings:     UPPERCASE, 700 weight
Touch:        44x44px minimum
Spacing:      4px base unit
Primary:      Deep Navy (#1e293b)
Accent:       Sandy Gold, Mediterranean Blue
Hover:        translate(2px, 2px), shadow shrinks
Active:       translate(4px, 4px), no shadow
```
