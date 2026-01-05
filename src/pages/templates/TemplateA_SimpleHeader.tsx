/**
 * TEMPLATE A: Simple Header Page
 * 
 * Use for: Settings, configuration, list pages without images
 * 
 * Structure:
 * - Colored header block (full-width)
 * - Icon box with title/subtitle
 * - Content card with sections
 * 
 * Color variations:
 * - bg-vis-yellow → text-foreground
 * - bg-vis-blue → text-primary-foreground
 * - bg-vis-green → text-foreground
 * - bg-vis-cyan → text-foreground
 */

import AppHeader from '@/components/layout/AppHeader';
import { Settings, ChevronRight, Bell, Globe, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TemplateA_SimpleHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vis-yellow">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* APP HEADER - Sticky navigation bar                                   */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <AppHeader />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PAGE HEADER - Colored background with icon and title                 */}
      {/* Padding: px-5 pt-6 pb-4                                              */}
      {/* Text color depends on background (see color variations above)        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          {/* Icon box: 48x48, bg-card, 3px border, 3px shadow */}
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" 
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
          >
            <Settings className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            {/* Title: 2xl, extrabold, uppercase */}
            <h1 className="text-2xl font-extrabold uppercase">Page Title</h1>
            {/* Subtitle: sm, slightly transparent */}
            <p className="text-sm opacity-80">Subtitle or description text</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CONTENT CARD - White background with side borders                    */}
      {/* border-t-[3px] border-x-[3px] creates the card effect                */}
      {/* min-h calculation ensures it fills remaining viewport                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* TINTED INFO SECTION - Subtle colored background                    */}
        {/* backgroundColor uses CSS variable with opacity                     */}
        {/* mb-6 for section spacing                                           */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="p-4 border-[3px] border-foreground mb-6"
          style={{ 
            backgroundColor: 'hsl(var(--vis-blue) / 0.05)',
            boxShadow: '4px 4px 0 hsl(var(--vis-blue))' 
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
            </div>
            <h2 className="font-bold text-lg uppercase">Section Title</h2>
          </div>
          <p className="text-sm">
            This is a tinted info section. Use it for important information or settings groups.
            The background color is 5-10% opacity of a palette color.
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* ANOTHER TINTED SECTION - Different color                           */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="p-4 border-[3px] border-foreground mb-6"
          style={{ 
            backgroundColor: 'hsl(var(--vis-green) / 0.05)',
            boxShadow: '4px 4px 0 hsl(var(--vis-green))' 
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-vis-green border-[3px] border-foreground flex items-center justify-center">
              <Bell className="w-5 h-5" strokeWidth={2} />
            </div>
            <h2 className="font-bold text-lg uppercase">Another Section</h2>
          </div>
          <p className="text-sm">
            Different colored section for visual variety. Always use semantic color tokens.
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* LIST SECTION - Clickable items with shadows                        */}
        {/* space-y-3 for 12px gap between items                               */}
        {/* Each item has hover:translate for interactive feedback             */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">
          List Section
        </h2>
        <div className="space-y-3">
          {/* List item pattern */}
          <button
            onClick={() => navigate('/templates/sample-1')}
            className="
              w-full text-left p-4 
              border-[3px] border-foreground bg-card
              flex items-center justify-between
              hover:translate-x-[2px] hover:translate-y-[2px] 
              transition-all
            "
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <span className="font-semibold">Clickable List Item 1</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <button
            onClick={() => navigate('/templates/sample-2')}
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
              <p className="font-semibold">List Item with Subtitle</p>
              <p className="text-sm text-muted-foreground">Description text here</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <button
            onClick={() => navigate('/templates/sample-3')}
            className="
              w-full text-left p-4 
              border-[3px] border-foreground bg-card
              flex items-center justify-between
              hover:translate-x-[2px] hover:translate-y-[2px] 
              transition-all
            "
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
          >
            <span className="font-semibold">Another List Item</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* ACTION BUTTON - Full-width, different style                        */}
        {/* Use for logout, destructive actions, or special actions            */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <button
          onClick={() => navigate('/templates')}
          className="
            w-full mt-6 p-4 
            border-[3px] border-foreground bg-card 
            flex items-center justify-center gap-3 
            hover:bg-vis-emergency/10 hover:border-vis-emergency 
            transition-colors
          "
        >
          <LogOut className="w-5 h-5" strokeWidth={2} />
          <span className="font-semibold uppercase">Back to Templates</span>
        </button>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* DECORATIVE FOOTER - Small colored blocks                           */}
        {/* flex justify-center gap-2 mt-8                                     */}
        {/* Each block: w-3 h-3, colored bg, 2px border                        */}
        {/* ═════════════════════════════════════════════════════════════════ */}
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

export default TemplateA_SimpleHeader;
