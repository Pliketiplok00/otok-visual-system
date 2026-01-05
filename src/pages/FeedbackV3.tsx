import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Lightbulb, MessageSquare, AlertCircle, Heart, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

type FeedbackType = 'idea' | 'suggestion' | 'critique' | 'praise';

interface FeedbackOption {
  type: FeedbackType;
  icon: typeof Lightbulb;
  label: string;
  color: string;
}

const feedbackOptions: FeedbackOption[] = [
  { type: 'idea', icon: Lightbulb, label: 'Nova ideja', color: 'hsl(var(--vis-yellow))' },
  { type: 'suggestion', icon: MessageSquare, label: 'Prijedlog', color: 'hsl(var(--vis-blue))' },
  { type: 'critique', icon: AlertCircle, label: 'Kritika', color: 'hsl(var(--vis-orange))' },
  { type: 'praise', icon: Heart, label: 'Pohvala', color: 'hsl(var(--vis-green))' },
];

const feedbackSchema = z.object({
  name: z.string().trim().min(2, 'Ime mora imati barem 2 znaka').max(100, 'Ime može imati maksimalno 100 znakova'),
  email: z.string().trim().email('Unesite valjanu email adresu').max(255, 'Email može imati maksimalno 255 znakova'),
  type: z.enum(['idea', 'suggestion', 'critique', 'praise']),
  subject: z.string().trim().min(5, 'Naslov mora imati barem 5 znakova').max(150, 'Naslov može imati maksimalno 150 znakova'),
  message: z.string().trim().min(20, 'Poruka mora imati barem 20 znakova').max(2000, 'Poruka može imati maksimalno 2000 znakova'),
});

const FeedbackV3 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedType, setSelectedType] = useState<FeedbackType>('suggestion');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = feedbackSchema.safeParse({
      ...formData,
      type: selectedType,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-vis-blue flex flex-col">
        <header className="sticky top-0 z-50 w-full bg-card border-b-[3px] border-foreground px-4 py-3">
          <div className="flex items-center gap-3 max-w-screen-md mx-auto">
            <span className="font-bold uppercase text-sm">Imate prijedlog?</span>
          </div>
        </header>
        
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 bg-card border-[3px] border-foreground flex items-center justify-center rotate-3" style={{ boxShadow: '6px 6px 0 hsl(var(--vis-yellow))' }}>
              <Check className="w-12 h-12 text-vis-blue" strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-extrabold mb-2 uppercase text-card">
              Poruka <span className="text-vis-yellow">poslana!</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 text-card">Hvala na vašem doprinosu. 🙏</p>
            <button
              onClick={() => navigate('/home-v3')}
              className="px-8 py-4 border-[3px] border-foreground bg-card font-bold text-lg hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase"
              style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
            >
              Povratak na početnu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vis-blue">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b-[3px] border-foreground px-4 py-3">
        <div className="flex items-center gap-3 max-w-screen-md mx-auto">
          <button
            onClick={() => navigate('/menu')}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            aria-label="Natrag"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            <span className="font-bold uppercase text-sm">Natrag</span>
          </button>
        </div>
      </header>

      {/* Hero section */}
      <div className="px-5 pt-6 pb-6 text-background">
        <h1 className="text-3xl font-extrabold uppercase tracking-tight">
          Imate prijedlog?
        </h1>
        <p className="mt-2 opacity-90">
          Vaše mišljenje nam je važno! Podijelite ideje, prijedloge ili kritike za bolji otok Vis.
        </p>
      </div>

      {/* Form section */}
      <div className="bg-card border-t-[3px] border-foreground min-h-[calc(100vh-220px)] px-5 pt-6 pb-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Feedback type selector */}
          <div>
            <label className="block font-bold uppercase text-sm mb-3">Vrsta povratne informacije</label>
            <div className="grid grid-cols-2 gap-3">
              {feedbackOptions.map((option) => (
                <button
                  key={option.type}
                  type="button"
                  onClick={() => setSelectedType(option.type)}
                  className={`p-3 border-[3px] border-foreground flex items-center gap-2 transition-all ${
                    selectedType === option.type 
                      ? 'translate-x-[2px] translate-y-[2px]' 
                      : 'hover:translate-x-[1px] hover:translate-y-[1px]'
                  }`}
                  style={{
                    backgroundColor: selectedType === option.type ? option.color : 'hsl(var(--card))',
                    boxShadow: selectedType === option.type 
                      ? 'none' 
                      : `3px 3px 0 ${option.color}`,
                  }}
                >
                  <option.icon className="w-5 h-5" strokeWidth={2.5} />
                  <span className="font-bold text-sm">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Name field */}
          <div>
            <label htmlFor="name" className="block font-bold uppercase text-sm mb-2">
              Vaše ime *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full p-3 border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vis-blue ${
                errors.name ? 'border-vis-emergency' : ''
              }`}
              placeholder="Ivan Horvat"
              maxLength={100}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-vis-emergency font-medium">{errors.name}</p>
            )}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block font-bold uppercase text-sm mb-2">
              Email adresa *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-3 border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vis-blue ${
                errors.email ? 'border-vis-emergency' : ''
              }`}
              placeholder="ivan@email.com"
              maxLength={255}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-vis-emergency font-medium">{errors.email}</p>
            )}
          </div>

          {/* Subject field */}
          <div>
            <label htmlFor="subject" className="block font-bold uppercase text-sm mb-2">
              Naslov *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full p-3 border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vis-blue ${
                errors.subject ? 'border-vis-emergency' : ''
              }`}
              placeholder="Kratak opis vaše poruke"
              maxLength={150}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-vis-emergency font-medium">{errors.subject}</p>
            )}
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block font-bold uppercase text-sm mb-2">
              Vaša poruka *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className={`w-full p-3 border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vis-blue resize-none ${
                errors.message ? 'border-vis-emergency' : ''
              }`}
              placeholder="Opišite detaljno vašu ideju, prijedlog ili kritiku..."
              maxLength={2000}
            />
            <div className="flex justify-between mt-1">
              {errors.message ? (
                <p className="text-sm text-vis-emergency font-medium">{errors.message}</p>
              ) : (
                <span />
              )}
              <span className="text-xs text-muted-foreground">{formData.message.length}/2000</span>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-4 border-[3px] border-foreground bg-vis-yellow font-bold uppercase flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <Send className="w-5 h-5" strokeWidth={2.5} />
            {isSubmitting ? 'Šaljem...' : 'Pošalji poruku'}
          </button>

          <p className="text-sm text-muted-foreground text-center">
            * Obvezna polja. Vaši podaci neće biti dijeljeni s trećim stranama.
          </p>
        </form>
      </div>
    </div>
  );
};

export default FeedbackV3;