import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import VisBadge from '@/components/ui/VisBadge';

type Category = 'vis' | 'komiza' | 'kultura' | 'hitno' | 'opcenito';

interface Notification {
  id: number;
  title: string;
  content: string;
  date: string;
  category: Category;
  emoji: string;
  location?: string;
}

const notifications: Record<number, Notification> = {
  1: {
    id: 1,
    title: 'Prekid vodoopskrbe u Visu',
    content: 'Zbog planiranih radova na vodovodnoj mreži, doći će do prekida vodoopskrbe u gradu Visu u srijedu, 15. siječnja od 8:00 do 14:00 sati. Molimo građane da se pripreme i osiguraju zalihe vode za navedeno razdoblje. Radovi se izvode radi poboljšanja kvalitete vodoopskrbnog sustava.',
    date: '4. siječnja 2026.',
    category: 'hitno',
    emoji: '🚨',
    location: 'Grad Vis',
  },
  2: {
    id: 2,
    title: 'Nova trajektna linija Split-Vis',
    content: 'Od 15. lipnja uvodi se dodatna trajektna linija na relaciji Split-Vis. Nova linija prometovat će svakodnevno s polaskom iz Splita u 14:00 i povratkom iz Visa u 18:00. Ova dodatna linija uvedena je zbog povećanog broja putnika tijekom ljetne sezone.',
    date: '3. siječnja 2026.',
    category: 'vis',
    emoji: '⛴️',
    location: 'Luka Vis',
  },
  3: {
    id: 3,
    title: 'Ljetni raspored odvoza otpada',
    content: 'Obavještavamo građane da od 1. lipnja vrijedi ljetni raspored odvoza komunalnog otpada. Miješani komunalni otpad odvozit će se ponedjeljkom, srijedom i petkom, dok će se reciklabilni otpad odvoziti utorkom i četvrtkom. Molimo građane da poštuju raspored i pravilno razvrstavaju otpad.',
    date: '2. siječnja 2026.',
    category: 'opcenito',
    emoji: '♻️',
  },
  4: {
    id: 4,
    title: 'Koncert na Trgu Komiže',
    content: 'U subotu 20. lipnja održat će se tradicionalni ljetni koncert na glavnom trgu u Komiži. Nastupaju lokalni glazbenici i gosti iznenađenja. Početak koncerta je u 21:00 sat. Ulaz je slobodan za sve posjetitelje. Pozivamo sve građane i turiste da nam se pridruže!',
    date: '1. siječnja 2026.',
    category: 'komiza',
    emoji: '🎵',
    location: 'Trg Komiže',
  },
  5: {
    id: 5,
    title: 'Izložba "More i otok" u galeriji',
    content: 'Pozivamo vas na otvorenje izložbe "More i otok" u Gradskoj galeriji Vis. Izložba predstavlja radove lokalnih umjetnika inspiriranih ljepotama otoka Visa. Otvorenje je u petak, 10. siječnja u 19:00 sati. Izložba će biti otvorena do kraja mjeseca.',
    date: '31. prosinca 2025.',
    category: 'kultura',
    emoji: '🎨',
    location: 'Gradska galerija Vis',
  },
};

const getCategoryStyles = (category: Category) => {
  switch (category) {
    case 'hitno': return { bg: 'bg-vis-emergency', shadow: 'hsl(var(--vis-emergency))' };
    case 'vis': return { bg: 'bg-vis-blue', shadow: 'hsl(var(--vis-blue))' };
    case 'komiza': return { bg: 'bg-vis-green', shadow: 'hsl(var(--vis-green))' };
    case 'kultura': return { bg: 'bg-vis-yellow', shadow: 'hsl(var(--vis-yellow))' };
    default: return { bg: 'bg-vis-purple', shadow: 'hsl(var(--vis-purple))' };
  }
};

const getCategoryLabel = (category: Category) => {
  switch (category) {
    case 'hitno': return 'Hitno';
    case 'vis': return 'Vis';
    case 'komiza': return 'Komiža';
    case 'kultura': return 'Kultura';
    case 'opcenito': return 'Općenito';
  }
};

const NotificationDetailV3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const notification = notifications[Number(id)];
  
  if (!notification) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Obavijest nije pronađena</p>
          <button
            onClick={() => navigate('/inbox')}
            className="px-4 py-2 bg-foreground text-background font-bold border-[3px] border-foreground"
          >
            Natrag na obavijesti
          </button>
        </div>
      </div>
    );
  }

  const styles = getCategoryStyles(notification.category);

  return (
    <div className={`min-h-screen ${styles.bg}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b-[3px] border-foreground px-4 py-3">
        <div className="flex items-center gap-3 max-w-screen-md mx-auto">
          <button
            onClick={() => navigate('/inbox')}
            className="min-w-touch min-h-touch flex items-center justify-center border-[3px] border-foreground bg-card hover:bg-muted transition-colors"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
            aria-label="Natrag"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="font-bold text-lg tracking-tight uppercase">Obavijest</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-5 pt-6 pb-4">
        <div className="text-5xl mb-4">{notification.emoji}</div>
        <VisBadge variant={notification.category}>
          {getCategoryLabel(notification.category)}
        </VisBadge>
      </div>

      <div className="bg-card border-t-[3px] border-foreground min-h-[calc(100vh-280px)] px-5 pt-6 pb-8">
        <h1 className="text-2xl font-extrabold uppercase mb-4">{notification.title}</h1>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{notification.date}</span>
          </div>
          {notification.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{notification.location}</span>
            </div>
          )}
        </div>

        <div 
          className="p-4 border-[3px] border-foreground bg-card"
          style={{ boxShadow: `4px 4px 0 ${styles.shadow}` }}
        >
          <p className="leading-relaxed">{notification.content}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetailV3;