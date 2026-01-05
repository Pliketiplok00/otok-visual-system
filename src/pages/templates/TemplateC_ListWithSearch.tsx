/**
 * TEMPLATE C: List Page with Search
 * 
 * Use for: Directories, contacts, searchable content
 * 
 * Structure:
 * - Colored header
 * - Search input
 * - Filter chips (optional)
 * - Scrollable list with cards
 */

import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import { Search, Phone, Mail, Globe, Building, Users, Heart, Shield, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ═══════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════

interface Contact {
  id: string;
  name: string;
  category: string;
  phone: string;
  email?: string;
  web?: string;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// SAMPLE DATA
// ═══════════════════════════════════════════════════════════════════════════

const categories: Category[] = [
  { id: 'all', label: 'Sve', icon: Users, color: 'bg-muted' },
  { id: 'municipality', label: 'Općina', icon: Building, color: 'bg-vis-blue' },
  { id: 'emergency', label: 'Hitno', icon: Shield, color: 'bg-vis-emergency' },
  { id: 'health', label: 'Zdravlje', icon: Heart, color: 'bg-vis-green' },
];

const sampleContacts: Contact[] = [
  { id: '1', name: 'Grad Vis - Gradska uprava', category: 'municipality', phone: '021 711 025', email: 'grad.vis@vis.hr', web: 'www.vis.hr' },
  { id: '2', name: 'Policijska postaja Vis', category: 'emergency', phone: '021 711 107' },
  { id: '3', name: 'Hitna medicinska pomoć', category: 'emergency', phone: '194' },
  { id: '4', name: 'Dom zdravlja Vis', category: 'health', phone: '021 711 033', email: 'domzdravlja@vis.hr' },
  { id: '5', name: 'Ljekarna Vis', category: 'health', phone: '021 711 080' },
  { id: '6', name: 'Općina Komiža', category: 'municipality', phone: '021 713 022', email: 'opcina@komiza.hr' },
];

const TemplateC_ListWithSearch = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ═════════════════════════════════════════════════════════════════════════
  // FILTERING LOGIC
  // ═════════════════════════════════════════════════════════════════════════
  const filteredContacts = sampleContacts.filter(contact => {
    const matchesCategory = selectedCategory === 'all' || contact.category === selectedCategory;
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.color || 'bg-muted';
  };

  const isLightTextCategory = (color: string) => {
    return color === 'bg-vis-blue' || color === 'bg-vis-emergency';
  };

  return (
    <div className="min-h-screen bg-vis-yellow">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* APP HEADER                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <AppHeader />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PAGE HEADER - With emoji for visual interest                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <h1 className="text-3xl font-extrabold uppercase">
          <span className="text-vis-blue">Directory</span> Contacts 📞
        </h1>
        <p className="opacity-80 mt-1">All important numbers in one place</p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CONTENT CARD                                                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-180px)] px-4 pt-5 pb-8">
        
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* SEARCH INPUT                                                       */}
        {/* - Relative positioning for icon placement                          */}
        {/* - Icon uses absolute positioning, centered vertically              */}
        {/* - Input has left padding (pl-10) to accommodate icon               */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full pl-10 pr-4 py-3 
              border-[3px] border-foreground bg-card 
              rounded-none
              focus:outline-none focus:ring-2 focus:ring-vis-blue
            "
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
          />
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* CATEGORY FILTER CHIPS                                              */}
        {/* - Horizontal scroll on overflow                                    */}
        {/* - Negative margin + padding trick for edge-to-edge scroll          */}
        {/* - Selected state changes background and adds shadow                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 scrollbar-hide">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const needsLightText = isLightTextCategory(cat.color);
            
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-3 py-2 
                  border-[3px] border-foreground 
                  whitespace-nowrap transition-all
                  ${isSelected 
                    ? `${cat.color} ${needsLightText ? 'text-primary-foreground' : 'text-foreground'}` 
                    : 'bg-card'
                  }
                `}
                style={{ 
                  boxShadow: isSelected ? '2px 2px 0 hsl(var(--foreground))' : 'none' 
                }}
              >
                <cat.icon className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* CONTACT LIST                                                       */}
        {/* - space-y-3 for consistent item spacing                            */}
        {/* - Each card has icon, content, and optional secondary info         */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="space-y-3">
          {filteredContacts.map((contact) => {
            const categoryColor = getCategoryColor(contact.category);
            const needsLightText = isLightTextCategory(categoryColor);
            
            return (
              <div 
                key={contact.id}
                className="p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
              >
                {/* Main content row */}
                <div className="flex items-start gap-3">
                  {/* Category icon box */}
                  <div className={`
                    w-10 h-10 ${categoryColor} 
                    border-[3px] border-foreground 
                    flex items-center justify-center shrink-0
                    ${needsLightText ? 'text-primary-foreground' : 'text-foreground'}
                  `}>
                    <Phone className="w-5 h-5" />
                  </div>
                  
                  {/* Contact info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm uppercase">{contact.name}</p>
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="text-vis-blue font-semibold text-sm hover:underline font-mono"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
                
                {/* Secondary info row (email, website) */}
                {(contact.email || contact.web) && (
                  <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t-2 border-border">
                    {contact.email && (
                      <a 
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-mono"
                      >
                        <Mail className="w-3 h-3" />
                        {contact.email}
                      </a>
                    )}
                    {contact.web && (
                      <a 
                        href={`https://${contact.web}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-mono"
                      >
                        <Globe className="w-3 h-3" />
                        {contact.web}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* EMPTY STATE                                                        */}
        {/* Show when no results match the search/filter                       */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        {filteredContacts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No results for "{searchQuery}"</p>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* NAVIGATION BACK                                                    */}
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
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-violet))' }}
        >
          <span className="font-bold uppercase">Back to Templates</span>
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* DECORATIVE FOOTER                                                  */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-violet border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-orange border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-purple border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-deep-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default TemplateC_ListWithSearch;
