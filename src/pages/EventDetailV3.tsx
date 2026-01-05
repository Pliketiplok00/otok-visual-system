import { useParams, useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import VisBadge from '@/components/ui/VisBadge';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { ArrowLeft, MapPin, Clock, Calendar, Users, Share2, Bell } from 'lucide-react';

// Event photos
import summerFestivalPhoto from '@/assets/summer-festival.jpg';
import concertPhoto from '@/assets/dalmatian-iris.jpg';
import fishPhoto from '@/assets/bottlenose-dolphin.jpg';
import exhibitionPhoto from '@/assets/eleonoras-falcon.jpg';
import winePhoto from '@/assets/immortelle.jpg';
// Wine festival photos
import wineVineyardPhoto from '@/assets/wine-vineyard.jpg';
import wineTastingPhoto from '@/assets/wine-tasting.jpg';
import wineCellarPhoto from '@/assets/wine-cellar.jpg';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  address: string;
  category: 'vis' | 'komiza' | 'general';
  emoji: string;
  description: string;
  organizer: string;
  attendees?: number;
  photos?: { src: string; alt: string }[];
}

const allEvents: Event[] = [
  { 
    id: 1, 
    title: 'Ljetna fešta u Visu', 
    date: '15. srpnja 2025.',
    time: '20:00', 
    endTime: '02:00',
    location: 'Trg sv. Jurja', 
    address: 'Trg sv. Jurja bb, 21480 Vis',
    category: 'vis', 
    emoji: '🎉',
    description: 'Tradicionalna ljetna fešta na glavnom trgu grada Visa. Program uključuje nastupe lokalnih klapa, glazbu uživo, tradicionalnu hranu i piće. Posebna atrakcija večeri bit će vatromet iznad luke.',
    organizer: 'Turistička zajednica Vis',
    attendees: 1000,
    photos: [
      { src: summerFestivalPhoto, alt: 'Ljetna fešta na trgu' },
      { src: winePhoto, alt: 'Tradicionalna hrana i piće' },
    ]
  },
  { 
    id: 2, 
    title: 'Koncert klape Komiža', 
    date: '18. srpnja 2025.',
    time: '21:00', 
    endTime: '23:00',
    location: 'Riva Komiža', 
    address: 'Riva bb, 21485 Komiža',
    category: 'komiza', 
    emoji: '🎵',
    description: 'Ljetni koncert poznate klape Komiža na rivi. Uživajte u tradicijskim dalmatinskim pjesmama uz zvuk mora. Ulaz slobodan.',
    organizer: 'Kulturno društvo Komiža',
    attendees: 156,
    photos: [
      { src: concertPhoto, alt: 'Koncert klape' },
      { src: summerFestivalPhoto, alt: 'Riva Komiža' },
    ]
  },
  { 
    id: 3, 
    title: 'Ribarska večer', 
    date: '20. srpnja 2025.',
    time: '19:00', 
    endTime: '23:00',
    location: 'Luka Vis', 
    address: 'Obala sv. Jurja, 21480 Vis',
    category: 'vis', 
    emoji: '🐟',
    description: 'Tradicionalna ribarska večer s degustacijom svježe ulovljene ribe pripremljene na tradicionalan način. Na jelovniku: gira na gradele, brudet, crni rižot i bijelo vino.',
    organizer: 'Ribarska zadruga Vis',
    attendees: 89,
    photos: [
      { src: fishPhoto, alt: 'Ribarska večer' },
      { src: summerFestivalPhoto, alt: 'Luka Vis' },
    ]
  },
  { 
    id: 4, 
    title: 'Izložba fotografija', 
    date: '20. srpnja 2025.',
    time: '18:00', 
    endTime: '21:00',
    location: 'Galerija Vis', 
    address: 'Ulica Šetalište 5, 21480 Vis',
    category: 'general', 
    emoji: '📸',
    description: 'Fotografska izložba "Vis nekad i sad" prikazuje povijesne fotografije otoka iz privatnih kolekcija uspoređene sa suvremenim fotografijama istih lokacija.',
    organizer: 'Muzej grada Visa',
    attendees: 42,
    photos: [
      { src: exhibitionPhoto, alt: 'Fotografska izložba' },
      { src: concertPhoto, alt: 'Galerija Vis' },
      { src: winePhoto, alt: 'Povijesne fotografije' },
    ]
  },
  { 
    id: 5, 
    title: 'Festival vina', 
    date: '25. srpnja 2025.',
    time: '17:00', 
    endTime: '23:00',
    location: 'Stari Grad', 
    address: 'Viško polje, 21480 Vis',
    category: 'vis', 
    emoji: '🍷',
    description: 'Godišnji festival vina s degustacijama najboljih vina otoka Visa. Lokalni vinari predstavljaju Vugavu, Plavac i druge autohtone sorte. Uz vino, tradicionalni specijaliteti i glazba uživo.',
    organizer: 'Udruga vinara otoka Visa',
    attendees: 312,
    photos: [
      { src: wineVineyardPhoto, alt: 'Vinograd na otoku Visu' },
      { src: wineTastingPhoto, alt: 'Degustacija vina' },
      { src: wineCellarPhoto, alt: 'Vinska konoba' },
    ]
  },
];

const EventDetailV3 = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const event = allEvents.find(e => e.id === Number(id));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vis': return 'hsl(var(--vis-blue))';
      case 'komiza': return 'hsl(var(--vis-green))';
      default: return 'hsl(var(--vis-cyan))';
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader />
        <div className="p-5">
          <button
            onClick={() => navigate('/events')}
            className="flex items-center gap-2 text-foreground mb-6 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            <span className="font-bold uppercase text-sm">Natrag</span>
          </button>
          <div className="p-6 border-[3px] border-foreground text-center" style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}>
            <p className="text-xl font-bold mb-2">DOGAĐAJ NIJE PRONAĐEN</p>
            <p className="text-muted-foreground">Traženi događaj ne postoji ili je uklonjen.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      {/* Back button */}
      <div className="px-5 pt-4">
        <button
          onClick={() => navigate('/events')}
          className="flex items-center gap-2 text-foreground mb-4 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-bold uppercase text-sm">Natrag</span>
        </button>
      </div>

      {/* Photo Gallery */}
      {event.photos && event.photos.length > 0 && (
        <ImageCarousel 
          images={event.photos} 
          badgeText={event.category}
          badgeColor={getCategoryColor(event.category)}
        />
      )}

      {/* Hero section */}
      <div 
        className="px-5 pt-6 pb-6"
        style={{ backgroundColor: getCategoryColor(event.category) }}
      >
        <div className="flex items-start gap-4">
          <div 
            className="w-16 h-16 bg-card border-[3px] border-foreground flex items-center justify-center text-3xl shrink-0"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            {event.emoji}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold uppercase text-primary-foreground leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-5">
        {/* Date & Time card */}
        <div 
          className="p-4 border-[3px] border-foreground bg-card"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-vis-blue" strokeWidth={2.5} />
            <span className="font-bold">{event.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-vis-blue" strokeWidth={2.5} />
            <span className="font-mono">{event.time} – {event.endTime}</span>
          </div>
        </div>

        {/* Location card */}
        <div 
          className="p-4 border-[3px] border-foreground bg-card"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-vis-green mt-0.5" strokeWidth={2.5} />
            <div>
              <p className="font-bold">{event.location}</p>
              <p className="text-sm text-muted-foreground">{event.address}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 border-[3px] border-foreground bg-muted/30">
          <h3 className="font-bold uppercase text-sm mb-3 text-muted-foreground">O DOGAĐAJU</h3>
          <p className="leading-relaxed">{event.description}</p>
        </div>

        {/* Organizer & Attendees */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border-[3px] border-foreground bg-card">
            <p className="text-xs uppercase text-muted-foreground font-semibold mb-1">Organizator</p>
            <p className="font-bold text-sm">{event.organizer}</p>
          </div>
          {event.attendees && (
            <div className="p-4 border-[3px] border-foreground bg-card">
              <p className="text-xs uppercase text-muted-foreground font-semibold mb-1">Kapacitet</p>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-vis-blue" />
                <span className="font-bold font-mono">{event.attendees}</span>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          <button 
            className="flex-1 p-4 border-[3px] border-foreground bg-vis-blue text-primary-foreground font-bold uppercase flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <Bell className="w-5 h-5" />
            PODSJETI ME
          </button>
          <button 
            className="w-14 h-14 border-[3px] border-foreground bg-card flex items-center justify-center hover:bg-muted transition-colors"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailV3;
