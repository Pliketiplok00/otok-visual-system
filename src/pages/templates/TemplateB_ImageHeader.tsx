/**
 * TEMPLATE B: Image Header Page
 * 
 * Use for: Feature pages, detail pages, pages with hero imagery
 * 
 * Structure:
 * - Image with gradient overlay
 * - Back button (optional)
 * - Title overlay on image
 * - Content sections with images
 */

import ImageHeader from '@/components/layout/ImageHeader';
import { Leaf, Sparkles, ShieldAlert, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import wildRosemaryImg from '@/assets/wild-rosemary.jpg';
import immortelleImg from '@/assets/immortelle.jpg';
import dalmatianIrisImg from '@/assets/dalmatian-iris.jpg';

const TemplateB_ImageHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* IMAGE HEADER COMPONENT                                               */}
      {/* Props:                                                               */}
      {/*   image: imported image asset                                        */}
      {/*   title: page title (displayed on overlay)                          */}
      {/*   subtitle: category or description                                  */}
      {/*   icon: Lucide icon component                                        */}
      {/*   iconBg: background color class for icon box                        */}
      {/*   iconShadow: CSS shadow color value                                 */}
      {/*   backPath: optional path for back button                            */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <ImageHeader
        image={wildRosemaryImg}
        title="Page Title"
        subtitle="CATEGORY OR SUBTITLE"
        icon={<Leaf className="w-6 h-6" strokeWidth={2.5} />}
        iconBg="bg-vis-green"
        iconShadow="hsl(var(--foreground))"
        backPath="/templates"
      />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* MAIN CONTENT AREA                                                    */}
      {/* p-4 pb-8 for standard padding                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <main className="p-4 pb-8">
        
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* COLORED INTRO BOX - Full color background                          */}
        {/* Use for important introductory content                             */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-[3px] border-foreground bg-vis-green p-6 mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="font-mono text-xl uppercase font-bold mb-3">Introduction Section</h2>
          <p className="font-sans text-sm leading-relaxed">
            This is the main introductory paragraph. Use it to provide context and important 
            information about the page content. The font-mono class on the heading gives it 
            a distinctive look while keeping the neobrutalist aesthetic.
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* FUN FACTS / HIGHLIGHTS BOX                                         */}
        {/* Use for bullet points or key information                           */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-[3px] border-foreground bg-vis-yellow p-4 mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" strokeWidth={2.5} />
            <h3 className="font-mono uppercase font-bold">Key Highlights</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-lg">🌿</span>
              <p className="text-sm"><span className="font-bold">Point One:</span> Description of the first highlight or fact.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🛡️</span>
              <p className="text-sm"><span className="font-bold">Point Two:</span> Description of the second highlight.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🍇</span>
              <p className="text-sm"><span className="font-bold">Point Three:</span> Description of the third highlight.</p>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* SECTION HEADER WITH ICON                                           */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="flex items-center gap-2 mb-3">
          <ShieldAlert className="w-5 h-5" strokeWidth={2.5} />
          <h3 className="font-mono uppercase font-bold">Image Grid Section</h3>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* IMAGE CARD GRID - 2 columns                                        */}
        {/* Each card has image on top, colored content area below             */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Grid item 1 */}
          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={dalmatianIrisImg} alt="Item 1" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-purple">
              <h4 className="font-mono font-bold text-sm">Item Title</h4>
              <p className="text-xs text-muted-foreground">Short description</p>
            </div>
          </div>

          {/* Grid item 2 */}
          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={immortelleImg} alt="Item 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-yellow">
              <h4 className="font-mono font-bold text-sm">Item Title</h4>
              <p className="text-xs text-muted-foreground">Short description</p>
            </div>
          </div>

          {/* Grid item 3 */}
          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={wildRosemaryImg} alt="Item 3" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-green">
              <h4 className="font-mono font-bold text-sm">Item Title</h4>
              <p className="text-xs text-muted-foreground">Short description</p>
            </div>
          </div>

          {/* Grid item 4 */}
          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={dalmatianIrisImg} alt="Item 4" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-blue">
              <h4 className="font-mono font-bold text-sm text-primary-foreground">Item Title</h4>
              <p className="text-xs text-primary-foreground/70">Short description</p>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* FULL-WIDTH IMAGE CARD WITH CONTENT                                 */}
        {/* Structure: Image → Colored title bar → Content area                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-[3px] border-foreground bg-card mb-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
        >
          {/* Card image - 16:9 aspect ratio */}
          <div className="aspect-[16/9] overflow-hidden border-b-[3px] border-foreground">
            <img 
              src={wildRosemaryImg} 
              alt="Feature image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Colored title bar */}
          <div className="bg-vis-green p-3 border-b-[3px] border-foreground">
            <h3 className="font-mono uppercase font-bold">Feature Card Title</h3>
          </div>
          {/* Content area */}
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              This is a full-width image card pattern. Use it for featured content sections
              where you want to combine imagery with detailed text. The colored title bar
              provides visual hierarchy and brand consistency.
            </p>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* ANOTHER IMAGE CARD - Different shadow color                        */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-[3px] border-foreground bg-card mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
        >
          <div className="aspect-[16/9] overflow-hidden border-b-[3px] border-foreground">
            <img 
              src={immortelleImg} 
              alt="Another feature"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-vis-blue p-3 border-b-[3px] border-foreground">
            <h3 className="font-mono uppercase font-bold text-primary-foreground">Another Section</h3>
          </div>
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Vary the shadow colors and title bar colors for visual interest while
              maintaining consistency in structure and spacing.
            </p>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* NAVIGATION BUTTON                                                  */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <button
          onClick={() => navigate('/templates')}
          className="
            w-full p-4 
            border-[3px] border-foreground bg-card
            flex items-center justify-between
            hover:translate-x-[2px] hover:translate-y-[2px]
            transition-all
          "
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-violet))' }}
        >
          <span className="font-bold uppercase">Back to Templates</span>
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* DECORATIVE FOOTER                                                  */}
        {/* Slightly larger blocks (w-4 h-4) for image header pages            */}
        {/* ═════════════════════════════════════════════════════════════════ */}
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

export default TemplateB_ImageHeader;
