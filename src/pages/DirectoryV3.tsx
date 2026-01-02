import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import { Phone, Mail, Globe, Building, Search, Heart, Shield, Droplets, Sun, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Contact {
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

const categories: Category[] = [
  { id: 'all', label: 'Sve', icon: Users, color: 'bg-muted' },
  { id: 'municipality', label: 'Općina', icon: Building, color: 'bg-vis-blue' },
  { id: 'emergency', label: 'Hitno', icon: Shield, color: 'bg-destructive' },
  { id: 'health', label: 'Zdravlje', icon: Heart, color: 'bg-vis-green' },
  { id: 'utilities', label: 'Komunalno', icon: Droplets, color: 'bg-vis-cyan' },
  { id: 'tourism', label: 'Turizam', icon: Sun, color: 'bg-vis-yellow' },
];

const contacts: Contact[] = [
  { name: 'Grad Vis - Gradska uprava', category: 'municipality', phone: '021 711 025', email: 'grad.vis@vis.hr', web: 'www.vis.hr' },
  { name: 'Općina Komiža', category: 'municipality', phone: '021 713 022', email: 'opcina@komiza.hr', web: 'www.komiza.hr' },
  { name: 'Policijska postaja Vis', category: 'emergency', phone: '021 711 107' },
  { name: 'Hitna medicinska pomoć', category: 'emergency', phone: '194' },
  { name: 'Vatrogasci Vis', category: 'emergency', phone: '021 711 393' },
  { name: 'Dom zdravlja Vis', category: 'health', phone: '021 711 033' },
  { name: 'Ljekarna Vis', category: 'health', phone: '021 711 080' },
  { name: 'Dom zdravlja Komiža', category: 'health', phone: '021 713 004' },
  { name: 'Vodovod Vis', category: 'utilities', phone: '021 711 000' },
  { name: 'Čistoća Vis', category: 'utilities', phone: '021 711 100' },
  { name: 'HEP - Elektra Split', category: 'utilities', phone: '0800 300 400' },
  { name: 'TZ Grada Visa', category: 'tourism', phone: '021 717 017', email: 'info@tz-vis.hr', web: 'www.tz-vis.hr' },
  { name: 'TZ Komiža', category: 'tourism', phone: '021 713 455', email: 'info@tz-komiza.hr', web: 'www.tz-komiza.hr' },
  { name: 'Lučka kapetanija Vis', category: 'municipality', phone: '021 711 013' },
];

const DirectoryV3 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact => {
    const matchesCategory = selectedCategory === 'all' || contact.category === selectedCategory;
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.color || 'bg-muted';
  };

  return (
    <div className="min-h-screen bg-vis-yellow relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-green/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating icons */}
      <Phone className="absolute top-24 right-8 w-6 h-6 text-vis-blue/40 rotate-12" />
      <Mail className="absolute top-36 right-20 w-5 h-5 text-foreground/30 -rotate-6" />
      
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <h1 className="text-3xl font-extrabold">
          <span className="text-vis-blue">Imenik</span> kontakti 📞
        </h1>
        <p className="opacity-80 mt-1">Svi važni brojevi na jednom mjestu</p>
      </div>

      {/* Content card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-180px)] px-4 pt-5 pb-8">
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pretraži kontakte..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-foreground bg-card focus:outline-none focus:ring-2 focus:ring-vis-blue"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-foreground whitespace-nowrap transition-all ${
                selectedCategory === cat.id 
                  ? `${cat.color} ${cat.color === 'bg-vis-blue' || cat.color === 'bg-destructive' ? 'text-primary-foreground' : 'text-foreground'}` 
                  : 'bg-card'
              }`}
              style={{ boxShadow: selectedCategory === cat.id ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
            >
              <cat.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Contact List */}
        <div className="space-y-3">
          {filteredContacts.map((contact, i) => (
            <div 
              key={i}
              className="p-4 rounded-2xl border-2 border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl ${getCategoryColor(contact.category)} border-2 border-foreground flex items-center justify-center shrink-0 ${getCategoryColor(contact.category) === 'bg-vis-blue' || getCategoryColor(contact.category) === 'bg-destructive' ? 'text-primary-foreground' : 'text-foreground'}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm">{contact.name}</p>
                  <a 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-vis-blue font-semibold text-sm hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              {(contact.email || contact.web) && (
                <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                  {contact.email && (
                    <a 
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
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
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <Globe className="w-3 h-3" />
                      {contact.web}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredContacts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nema rezultata za "{searchQuery}"</p>
          </div>
        )}

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-vis-blue" />
          <div className="w-2 h-2 rounded-full bg-vis-cyan" />
          <div className="w-2 h-2 rounded-full bg-vis-green" />
          <div className="w-2 h-2 rounded-full bg-vis-yellow" />
        </div>
      </div>
    </div>
  );
};

export default DirectoryV3;
