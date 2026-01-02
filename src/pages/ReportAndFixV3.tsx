import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { MapPin, Camera, Plus, Loader2, Check, X, Send } from 'lucide-react';

const ReportAndFixV3 = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string>('');
  const [locationLoading, setLocationLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGetLocation = async () => {
    setLocationLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLocation('Vis, Trg sv. Jurja 5');
    setLocationLoading(false);
  };

  const handleAddPhoto = () => {
    if (photos.length < 3) {
      setPhotos([...photos, `photo-${photos.length + 1}`]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!location || !description) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-vis-green flex flex-col">
        <AppHeader />
        
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 bg-card border-[3px] border-foreground flex items-center justify-center rotate-3" style={{ boxShadow: '6px 6px 0 hsl(var(--vis-yellow))' }}>
              <Check className="w-12 h-12 text-vis-green" strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-extrabold mb-2 uppercase">
              Prijava <span className="text-primary-foreground">zaprimljena!</span>
            </h1>
            <p className="text-lg opacity-90 mb-8">Zahvaljujemo na vašem doprinosu. 🙏</p>
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
    <div className="min-h-screen bg-vis-green">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <h1 className="text-3xl font-extrabold mb-1 uppercase">
          Slikaj & <span className="text-vis-blue">popravi</span>
        </h1>
        <p className="opacity-80">Prijavite problem na otoku</p>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        <div className="space-y-5">
          {/* Location */}
          <div>
            <label className="block font-bold mb-2 flex items-center gap-2 uppercase">
              <MapPin className="w-5 h-5 text-vis-blue" />
              Lokacija
            </label>
            <div 
              className="p-4 border-[3px] border-foreground bg-vis-blue/5"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            >
              {location ? (
                <div className="flex items-center justify-between">
                  <span className="font-medium">{location}</span>
                  <button onClick={() => setLocation('')} className="p-1 hover:bg-muted">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleGetLocation}
                  disabled={locationLoading}
                  className="w-full flex items-center justify-center gap-2 py-2 text-muted-foreground hover:text-foreground"
                >
                  {locationLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium uppercase">Dohvati moju lokaciju</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Photos */}
          <div>
            <label className="block font-bold mb-2 flex items-center gap-2 uppercase">
              <Camera className="w-5 h-5 text-vis-green" />
              Fotografije ({photos.length}/3)
            </label>
            <div className="flex gap-3 flex-wrap">
              {photos.map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-20 border-[3px] border-foreground bg-vis-cyan flex items-center justify-center relative"
                  style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
                >
                  <Camera className="w-8 h-8 opacity-50" />
                  <button
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-vis-emergency border-2 border-foreground flex items-center justify-center"
                  >
                    <X className="w-3 h-3 text-primary-foreground" />
                  </button>
                </div>
              ))}
              {photos.length < 3 && (
                <button
                  onClick={handleAddPhoto}
                  className="w-20 h-20 border-[3px] border-dashed border-foreground bg-muted flex items-center justify-center hover:bg-card transition-colors"
                >
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-bold mb-2 uppercase">Opis problema</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Opišite problem koji ste uočili..."
              rows={4}
              className="w-full p-4 border-[3px] border-foreground bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vis-green resize-none"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={!location || !description || submitting}
          className="w-full mt-6 py-4 border-[3px] border-foreground bg-vis-green font-bold text-lg flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:pointer-events-none uppercase"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
        >
          {submitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5" />
              Pošalji prijavu
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReportAndFixV3;