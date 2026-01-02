import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import { Phone, Mail, Globe, MapPin, Search, Building2, Stethoscope, Shield, Anchor } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  category: string;
  phone: string;
  email?: string;
  website?: string;
  address?: string;
  emoji: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Općina Vis', category: 'Uprava', phone: '021 711 125', email: 'opcina@vis.hr', address: 'Trg 30. svibnja 2', emoji: '🏛️' },
  { id: 2, name: 'Turistička zajednica', category: 'Turizam', phone: '021 717 017', email: 'info@tz-vis.hr', website: 'www.tz-vis.hr', emoji: '🗺️' },
  { id: 3, name: 'Dom zdravlja Vis', category: 'Zdravstvo', phone: '021 711 055', address: 'Ul. Dr. Ante Starčevića 4', emoji: '🏥' },
  { id: 4, name: 'Ljekarna Vis', category: 'Zdravstvo', phone: '021 711 103', address: 'Obala sv. Jurja 12', emoji: '💊' },
  { id: 5, name: 'Policijska postaja', category: 'Sigurnost', phone: '021 711 122', address: 'Ul. Matije Gupca 1', emoji: '👮' },
  { id: 6, name: 'Vatrogasci', category: 'Sigurnost', phone: '193', emoji: '🚒' },
  { id: 7, name: 'Lučka kapetanija', category: 'Pomorstvo', phone: '021 711 185', address: 'Riva Vis', emoji: '⚓' },
  { id: 8, name: 'Jadrolinija', category: 'Prijevoz', phone: '021 711 032', website: 'www.jadrolinija.hr', emoji: '⛴️' },
  { id: 9, name: 'Komunalno Vis', category: 'Komunalno', phone: '021 711 456', email: 'komunalno@vis.hr', emoji: '🔧' },
  { id: 10, name: 'Vodovod Vis', category: 'Komunalno', phone: '021 711 123', emoji: '💧' },
];

const categories = ['Sve', 'Uprava', 'Zdravstvo', 'Sigurnost', 'Pomorstvo', 'Prijevoz', 'Komunalno', 'Turizam'];

const DirectoryV3 = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Sve');

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'Sve' || contact.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-vis-yellow relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-blue/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating phone */}
      <div className="absolute top-32 right-6 w-10 h-10 rounded-full bg-vis-green/60 flex items-center justify-center">
        <Phone className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-green))]">
            <Phone className="w-6 h-6 text-vis-yellow" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Imenik</h1>
            <p className="text-sm opacity-80">Kontakti i službe</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pretraži kontakte..."
            className="w-full pl-12 pr-4 py-3 border-2 border-foreground rounded-2xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vis-green"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-3">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full border-2 border-foreground font-semibold text-xs whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-foreground text-background shadow-[2px_2px_0_hsl(var(--vis-green))]' 
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-320px)] px-5 pt-5 pb-8">
        <div className="space-y-3">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="p-4 rounded-2xl border-2 border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl">{contact.emoji}</div>
                <div className="flex-1">
                  <h3 className="font-bold">{contact.name}</h3>
                  <p className="text-xs text-muted-foreground">{contact.category}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 p-2 rounded-xl bg-vis-green/20 border-2 border-vis-green hover:bg-vis-green/30 transition-colors"
                >
                  <Phone className="w-4 h-4 text-vis-green" />
                  <span className="font-semibold">{contact.phone}</span>
                </a>
                
                {contact.email && (
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{contact.email}</span>
                  </a>
                )}
                
                {contact.website && (
                  <a 
                    href={`https://${contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-vis-blue hover:underline"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{contact.website}</span>
                  </a>
                )}
                
                {contact.address && (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{contact.address}</span>
                  </p>
                )}
              </div>
            </div>
          ))}

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nema rezultata za pretragu</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectoryV3;
