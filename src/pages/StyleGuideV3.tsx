import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisCard from '@/components/ui/VisCard';
import VisButton from '@/components/ui/VisButton';
import VisBadge from '@/components/ui/VisBadge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Palette, 
  Type, 
  Square, 
  Layers, 
  MousePointer, 
  Check, 
  ChevronRight,
  Ship,
  Calendar,
  AlertTriangle,
  Search,
  ArrowLeft,
  Sun,
  Moon
} from 'lucide-react';

const StyleGuideV3 = () => {
  const navigate = useNavigate();
  const [toggleEnabled, setToggleEnabled] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioSelected, setRadioSelected] = useState('option1');

  // Color palette data
  const paletteColors = [
    { name: 'vis-yellow', label: 'Yellow', cssVar: '--vis-yellow', textClass: 'text-foreground' },
    { name: 'vis-blue', label: 'Blue', cssVar: '--vis-blue', textClass: 'text-primary-foreground' },
    { name: 'vis-cyan', label: 'Cyan', cssVar: '--vis-cyan', textClass: 'text-foreground' },
    { name: 'vis-green', label: 'Green', cssVar: '--vis-green', textClass: 'text-foreground' },
    { name: 'vis-purple', label: 'Purple', cssVar: '--vis-purple', textClass: 'text-foreground' },
    { name: 'vis-violet', label: 'Violet', cssVar: '--vis-violet', textClass: 'text-primary-foreground' },
    { name: 'vis-deep-blue', label: 'Deep Blue', cssVar: '--vis-deep-blue', textClass: 'text-primary-foreground' },
    { name: 'vis-amber', label: 'Amber', cssVar: '--vis-amber', textClass: 'text-foreground' },
    { name: 'vis-sky', label: 'Sky', cssVar: '--vis-sky', textClass: 'text-foreground' },
    { name: 'vis-terracotta', label: 'Terracotta', cssVar: '--vis-terracotta', textClass: 'text-foreground' },
    { name: 'vis-emergency', label: 'Emergency', cssVar: '--vis-emergency', textClass: 'text-primary-foreground' },
    { name: 'vis-notice', label: 'Notice', cssVar: '--vis-notice', textClass: 'text-foreground' },
  ];

  const semanticColors = [
    { name: 'background', label: 'Background', textClass: 'text-foreground' },
    { name: 'foreground', label: 'Foreground', textClass: 'text-primary-foreground' },
    { name: 'card', label: 'Card', textClass: 'text-foreground' },
    { name: 'muted', label: 'Muted', textClass: 'text-foreground' },
    { name: 'primary', label: 'Primary', textClass: 'text-primary-foreground' },
    { name: 'secondary', label: 'Secondary', textClass: 'text-foreground' },
    { name: 'accent', label: 'Accent', textClass: 'text-primary-foreground' },
    { name: 'destructive', label: 'Destructive', textClass: 'text-primary-foreground' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />

      {/* Page Header */}
      <ColorBlock color="cyan">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-card border-[3px] border-foreground flex items-center justify-center hover:bg-muted transition-colors"
            style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
          >
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight">
              STYLE GUIDE
            </h1>
            <p className="text-sm opacity-80">
              Neobrutalist Design System Reference
            </p>
          </div>
        </div>
      </ColorBlock>

      {/* Content */}
      <div className="flex-1 bg-card border-x-[3px] border-foreground px-5 pt-6 pb-8">
        
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Color Palette */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">COLOR PALETTE</h2>
          </div>
          
          {/* VIS Colors */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            VIS Palette Colors
          </h3>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {paletteColors.map((color) => (
              <div
                key={color.name}
                className={`h-16 border-[3px] border-foreground flex items-end p-1.5 bg-${color.name}`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase ${color.textClass}`}>
                  {color.label}
                </span>
              </div>
            ))}
          </div>

          {/* Semantic Colors */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Semantic Colors
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {semanticColors.map((color) => (
              <div
                key={color.name}
                className={`h-14 border-[3px] border-foreground flex items-end p-1.5 bg-${color.name}`}
              >
                <span className={`text-[9px] font-mono font-bold uppercase ${color.textClass}`}>
                  {color.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Typography */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">TYPOGRAPHY</h2>
          </div>
          
          <div 
            className="p-4 border-[3px] border-foreground space-y-4"
            style={{ backgroundColor: 'hsl(var(--vis-blue) / 0.05)' }}
          >
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Page Title (H1)</span>
              <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                VOZNI REDOVI
              </h1>
            </div>
            
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Section Header (H2)</span>
              <h2 className="text-lg font-bold uppercase tracking-tight">
                POMORSKI PROMET
              </h2>
            </div>
            
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Card Title (H3)</span>
              <h3 className="text-base font-bold">
                Split - Vis trajektna linija
              </h3>
            </div>
            
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Body Text</span>
              <p className="text-sm">
                Trajektna linija prometuje svakodnevno tijekom cijele godine. Vrijeme plovidbe je otprilike 2 sata i 30 minuta.
              </p>
            </div>
            
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Muted Text</span>
              <p className="text-sm text-muted-foreground">
                Zadnja izmjena rasporeda: 01.01.2026.
              </p>
            </div>
            
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Monospace Data</span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-medium">08:30</span>
                <span className="font-mono text-sm font-medium">14:45</span>
                <span className="font-mono text-sm font-medium">19:00</span>
              </div>
            </div>
            
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Label</span>
              <span className="block text-xs font-semibold uppercase tracking-wide">
                POLAZAK IZ SPLITA
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Buttons */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MousePointer className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">BUTTONS</h2>
          </div>
          
          {/* Button Variants */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Variants
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <VisButton variant="primary">Primary</VisButton>
              <span className="text-xs font-mono text-muted-foreground">variant="primary"</span>
            </div>
            <div className="flex items-center gap-3">
              <VisButton variant="secondary">Secondary</VisButton>
              <span className="text-xs font-mono text-muted-foreground">variant="secondary"</span>
            </div>
            <div className="flex items-center gap-3">
              <VisButton variant="outline">Outline</VisButton>
              <span className="text-xs font-mono text-muted-foreground">variant="outline"</span>
            </div>
            <div className="flex items-center gap-3">
              <VisButton variant="ghost">Ghost</VisButton>
              <span className="text-xs font-mono text-muted-foreground">variant="ghost"</span>
            </div>
            <div className="flex items-center gap-3">
              <VisButton variant="emergency">Emergency</VisButton>
              <span className="text-xs font-mono text-muted-foreground">variant="emergency"</span>
            </div>
          </div>

          {/* Button Sizes */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Sizes
          </h3>
          <div className="flex items-end gap-3 mb-6">
            <div className="text-center">
              <VisButton variant="primary" size="sm">Small</VisButton>
              <span className="block text-[10px] font-mono text-muted-foreground mt-1">sm (36px)</span>
            </div>
            <div className="text-center">
              <VisButton variant="primary" size="default">Default</VisButton>
              <span className="block text-[10px] font-mono text-muted-foreground mt-1">default (44px)</span>
            </div>
            <div className="text-center">
              <VisButton variant="primary" size="lg">Large</VisButton>
              <span className="block text-[10px] font-mono text-muted-foreground mt-1">lg (56px)</span>
            </div>
            <div className="text-center">
              <VisButton variant="primary" size="icon">
                <Ship className="w-5 h-5" />
              </VisButton>
              <span className="block text-[10px] font-mono text-muted-foreground mt-1">icon</span>
            </div>
          </div>

          {/* Button with Icon */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            With Icons
          </h3>
          <div className="flex flex-wrap gap-3">
            <VisButton variant="primary">
              <Ship className="w-5 h-5" />
              Trajekti
            </VisButton>
            <VisButton variant="secondary">
              <Calendar className="w-5 h-5" />
              Događanja
            </VisButton>
            <VisButton variant="emergency">
              <AlertTriangle className="w-5 h-5" />
              Hitno
            </VisButton>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Cards */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Square className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">CARDS</h2>
          </div>
          
          <div className="space-y-4">
            {/* Static Card */}
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase mb-2 block">Static Card</span>
              <VisCard>
                <h3 className="font-bold mb-1">Static Card Title</h3>
                <p className="text-sm text-muted-foreground">This card has no onClick handler, so it has no shadow or hover effects.</p>
              </VisCard>
            </div>

            {/* Interactive Card */}
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase mb-2 block">Interactive Card (with onClick)</span>
              <VisCard onClick={() => {}}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Ship className="w-5 h-5" />
                    <div>
                      <h3 className="font-bold">Clickable Card</h3>
                      <p className="text-sm text-muted-foreground">Has shadow and hover/active states</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </VisCard>
            </div>

            {/* Tinted Card */}
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase mb-2 block">Tinted Section Card</span>
              <div 
                className="p-4 border-[3px] border-foreground"
                style={{ 
                  backgroundColor: 'hsl(var(--vis-green) / 0.1)',
                  boxShadow: '4px 4px 0 hsl(var(--vis-green))' 
                }}
              >
                <h3 className="font-bold mb-1">Tinted Background</h3>
                <p className="text-sm text-muted-foreground">Uses bg-vis-green/10 for subtle section differentiation</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Badges */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">BADGES</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <VisBadge variant="vis">VIS</VisBadge>
            <VisBadge variant="komiza">KOMIŽA</VisBadge>
            <VisBadge variant="kultura">KULTURA</VisBadge>
            <VisBadge variant="emergency">HITNO</VisBadge>
            <VisBadge variant="general">OPĆENITO</VisBadge>
            <VisBadge>DEFAULT</VisBadge>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Form Elements */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">FORM ELEMENTS</h2>
          </div>
          
          <div className="space-y-4">
            {/* Text Input */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide">Text Input</label>
              <Input
                placeholder="Enter text..."
                className="border-[3px] border-foreground h-12 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
              />
            </div>

            {/* Search Input */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide">Search Input</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" strokeWidth={2.5} />
                <Input
                  placeholder="Pretraži..."
                  className="pl-11 border-[3px] border-foreground h-12 rounded-none focus-visible:ring-0"
                  style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
                />
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide">Textarea</label>
              <Textarea
                placeholder="Your message..."
                rows={3}
                className="border-[3px] border-foreground rounded-none resize-none focus-visible:ring-0"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
              />
            </div>

            {/* Toggle */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide">Toggle / Switch</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setToggleEnabled(!toggleEnabled)}
                  className={`w-14 h-8 border-[3px] border-foreground relative transition-colors ${
                    toggleEnabled ? 'bg-vis-green' : 'bg-muted'
                  }`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-card border-2 border-foreground transition-all ${
                    toggleEnabled ? 'left-6' : 'left-0.5'
                  }`} />
                </button>
                <span className="text-sm">{toggleEnabled ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>

            {/* Checkbox */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide">Checkbox</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCheckboxChecked(!checkboxChecked)}
                  className={`w-7 h-7 border-[3px] border-foreground flex items-center justify-center transition-colors ${
                    checkboxChecked ? 'bg-vis-blue' : 'bg-card'
                  }`}
                >
                  {checkboxChecked && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
                </button>
                <span className="text-sm">Checkbox option</span>
              </div>
            </div>

            {/* Radio Buttons */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide">Radio Buttons</label>
              <div className="space-y-2">
                {['option1', 'option2', 'option3'].map((option) => (
                  <div key={option} className="flex items-center gap-3">
                    <button
                      onClick={() => setRadioSelected(option)}
                      className={`w-7 h-7 border-[3px] border-foreground flex items-center justify-center transition-colors ${
                        radioSelected === option ? 'bg-vis-blue' : 'bg-card'
                      }`}
                    >
                      {radioSelected === option && <div className="w-3 h-3 bg-primary-foreground" />}
                    </button>
                    <span className="text-sm capitalize">{option.replace('option', 'Option ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Shadows */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">SHADOWS</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
            >
              <span className="text-xs font-mono">3px (small)</span>
            </div>
            <div 
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
            >
              <span className="text-xs font-mono">4px (medium)</span>
            </div>
            <div 
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '6px 6px 0 hsl(var(--foreground))' }}
            >
              <span className="text-xs font-mono">6px (large)</span>
            </div>
            <div 
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
            >
              <span className="text-xs font-mono">Blue shadow</span>
            </div>
            <div 
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
            >
              <span className="text-xs font-mono">Yellow shadow</span>
            </div>
            <div 
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <span className="text-xs font-mono">Green shadow</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Icon Containers */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Ship className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">ICON CONTAINERS</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 items-end">
            {/* Standard colored */}
            <div className="text-center">
              <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center text-primary-foreground">
                <Ship className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground block mt-1">Colored</span>
            </div>
            
            {/* With shadow */}
            <div className="text-center">
              <div 
                className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
              >
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground block mt-1">With shadow</span>
            </div>
            
            {/* Large */}
            <div className="text-center">
              <div 
                className="w-16 h-16 bg-vis-green border-[3px] border-foreground flex items-center justify-center"
                style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
              >
                <Ship className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground block mt-1">Large</span>
            </div>
            
            {/* Interactive */}
            <div className="text-center">
              <button
                className="w-11 h-11 bg-card border-[3px] border-foreground flex items-center justify-center hover:bg-muted transition-colors"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
              >
                <Search className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-mono text-muted-foreground block mt-1">Interactive</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Color Blocks */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Square className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">COLOR BLOCKS</h2>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Full-width colored sections for page headers (ColorBlock component)
          </p>
          
          <div className="space-y-2">
            {['blue', 'yellow', 'cyan', 'green', 'white'].map((color) => (
              <div 
                key={color} 
                className={`p-3 border-[3px] border-foreground bg-vis-${color} ${color === 'blue' ? 'text-primary-foreground' : 'text-foreground'}`}
              >
                <span className="font-mono text-sm font-bold uppercase">color="{color}"</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Decorative Elements */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">DECORATIVE ELEMENTS</h2>
          </div>
          
          <div 
            className="p-4 border-[3px] border-foreground"
            style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.1)' }}
          >
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Footer decoration blocks (used at bottom of pages)
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
              <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
              <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
              <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION: Quick Rules */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5" strokeWidth={2.5} />
            <h2 className="text-lg font-bold uppercase tracking-tight">QUICK RULES</h2>
          </div>
          
          <div 
            className="p-4 border-[3px] border-foreground space-y-3"
            style={{ 
              backgroundColor: 'hsl(var(--vis-emergency) / 0.1)',
              boxShadow: '4px 4px 0 hsl(var(--vis-emergency))' 
            }}
          >
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-vis-green mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-sm"><strong>Borders:</strong> 3px solid, border-foreground</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-vis-green mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-sm"><strong>Corners:</strong> 0px everywhere (NEVER rounded)</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-vis-green mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-sm"><strong>Shadows:</strong> 3-6px offset, NO blur, solid color</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-vis-green mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-sm"><strong>Headings:</strong> UPPERCASE, bold, tight tracking</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-vis-green mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-sm"><strong>Touch targets:</strong> 44×44px minimum</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-vis-green mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-sm"><strong>Colors:</strong> Use semantic tokens, NEVER direct colors</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-vis-green mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-sm"><strong>Data/times:</strong> Use font-mono</span>
            </div>
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

export default StyleGuideV3;
