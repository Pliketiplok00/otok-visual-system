/**
 * TEMPLATE E: Detail Page
 * 
 * Use for: Event details, item details, article pages
 * 
 * Structure:
 * - Image header with overlay
 * - Quick info box (date, time, location)
 * - Content sections
 * - Action buttons
 * - Related items
 */

import { useNavigate } from 'react-router-dom';
import ImageHeader from '@/components/layout/ImageHeader';
import { Calendar, MapPin, Clock, ChevronRight, Share2, Heart, ExternalLink } from 'lucide-react';
import summerFestivalImg from '@/assets/summer-festival.jpg';
import wineTastingImg from '@/assets/wine-tasting.jpg';

const TemplateE_Detail = () => {
  const navigate = useNavigate();
  
  // Sample data - replace with real data
  const item = {
    id: 1,
    title: 'Summer Festival',
    category: 'EVENT',
    date: '15. srpnja 2025.',
    time: '20:00',
    location: 'Trg sv. Jurja, Vis',
    description: `
      This is the main description of the event or item. It can be multiple paragraphs 
      of text describing everything in detail. The text should provide all the necessary 
      information that a visitor might need.
      
      You can include details about what to expect, what to bring, any requirements, 
      and other relevant information. Keep the text informative but concise.
    `,
    organizer: 'TZ Grada Visa',
    price: 'Besplatno',
  };

  const relatedItems = [
    { id: 2, title: 'Koncert klape Komiža', time: '16. srpnja • 21:00' },
    { id: 3, title: 'Ribarska večer', time: '18. srpnja • 19:00' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* IMAGE HEADER                                                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <ImageHeader
        image={summerFestivalImg}
        title={item.title}
        subtitle={item.category}
        icon={<Calendar className="w-6 h-6" strokeWidth={2.5} />}
        iconBg="bg-vis-blue"
        iconShadow="hsl(var(--vis-yellow))"
        backPath="/templates"
      />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* MAIN CONTENT                                                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <main className="p-4 pb-8">
        
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* QUICK INFO BOX                                                     */}
        {/* Shows key information at a glance                                  */}
        {/* ═════════════════════════════════════════════════════════════════ */}
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

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* ACTION BUTTONS ROW                                                 */}
        {/* Secondary actions like share, save, etc.                           */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="flex gap-3 mb-6">
          <button
            className="
              flex-1 px-4 py-3
              border-[3px] border-foreground bg-card
              flex items-center justify-center gap-2
              hover:bg-muted transition-colors
            "
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
          >
            <Share2 className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase">Share</span>
          </button>
          <button
            className="
              flex-1 px-4 py-3
              border-[3px] border-foreground bg-card
              flex items-center justify-center gap-2
              hover:bg-muted transition-colors
            "
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
          >
            <Heart className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase">Save</span>
          </button>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* DESCRIPTION SECTION                                                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-[3px] border-foreground bg-card p-4 mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
        >
          <h2 className="font-bold uppercase mb-3">About</h2>
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {item.description.trim()}
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* DETAILS SECTION                                                    */}
        {/* Key-value pairs for additional info                                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-[3px] border-foreground bg-card p-4 mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
        >
          <h2 className="font-bold uppercase mb-3">Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Organizer</span>
              <span className="font-semibold">{item.organizer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price</span>
              <span className="font-semibold font-mono">{item.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location</span>
              <span className="font-semibold">{item.location}</span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* PRIMARY ACTION BUTTON                                              */}
        {/* Main CTA for the page                                              */}
        {/* ═════════════════════════════════════════════════════════════════ */}
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
          <Calendar className="w-5 h-5" />
          Add to Calendar
        </button>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* SECONDARY ACTION BUTTON                                            */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <button
          onClick={() => {/* Handle action */}}
          className="
            w-full mt-3 px-6 py-3
            bg-card text-foreground
            border-[3px] border-foreground
            font-semibold uppercase text-sm
            flex items-center justify-center gap-2
            hover:bg-muted transition-colors
          "
          style={{ boxShadow: '3px 3px 0 hsl(var(--vis-violet))' }}
        >
          <ExternalLink className="w-4 h-4" />
          View on Website
        </button>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* RELATED ITEMS SECTION                                              */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <h3 className="font-bold uppercase mt-8 mb-3">Related Events</h3>
        <div className="space-y-3">
          {relatedItems.map((related) => (
            <button
              key={related.id}
              onClick={() => navigate(`/events/${related.id}`)}
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
                <p className="font-bold text-sm">{related.title}</p>
                <p className="text-xs text-muted-foreground font-mono">{related.time}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* BACK NAVIGATION                                                    */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <button
          onClick={() => navigate('/templates')}
          className="
            w-full mt-6 p-4 
            border-[3px] border-foreground bg-card
            flex items-center justify-between
            hover:translate-x-[2px] hover:translate-y-[2px]
            transition-all
          "
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-purple))' }}
        >
          <span className="font-bold uppercase">Back to Templates</span>
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* DECORATIVE FOOTER                                                  */}
        {/* ═════════════════════════════════════════════════════════════════ */}
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

export default TemplateE_Detail;
