import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisCard from '@/components/ui/VisCard';
import VisButton from '@/components/ui/VisButton';
import { MapPin, Camera, Plus, Loader2, Check, X } from 'lucide-react';

const ReportAndFix = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string>('');
  const [locationLoading, setLocationLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGetLocation = async () => {
    setLocationLoading(true);
    // Simulate geolocation
    await new Promise(r => setTimeout(r, 1500));
    setLocation('Vis, Trg sv. Jurja 5');
    setLocationLoading(false);
  };

  const handleAddPhoto = () => {
    if (photos.length < 3) {
      // Simulate photo addition
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
      <div className="min-h-screen flex flex-col bg-muted">
        <AppHeader />
        <ColorBlock color="green" className="flex-1 flex items-center justify-center py-12">
        <div className="text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-card border-2 border-foreground flex items-center justify-center">
              <Check className="w-10 h-10 text-vis-green" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold mb-2">Prijava zaprimljena!</h1>
            <p className="opacity-90 mb-6">Zahvaljujemo na vašem doprinosu.</p>
            <VisButton variant="outline" onClick={() => navigate('/home')}>
              Povratak na početnu
            </VisButton>
          </div>
        </ColorBlock>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <AppHeader />

      <ColorBlock color="green" className="py-5">
        <h1 className="text-2xl font-bold">Slikaj & popravi</h1>
        <p className="opacity-90 mt-1">Prijavite problem na otoku</p>
      </ColorBlock>

      <ColorBlock color="white" className="flex-1 py-5">
        <div className="space-y-5">
          {/* Location */}
          <div>
            <label className="block font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Lokacija
            </label>
            <VisCard className="flex items-center gap-3">
              {location ? (
                <>
                  <span className="flex-1 font-medium">{location}</span>
                  <button
                    onClick={() => setLocation('')}
                    className="p-1 hover:bg-muted rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
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
                      <span>Dohvati lokaciju</span>
                    </>
                  )}
                </button>
              )}
            </VisCard>
          </div>

          {/* Photos */}
          <div>
            <label className="block font-semibold mb-2 flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Fotografije ({photos.length}/3)
            </label>
            <div className="flex gap-3 flex-wrap">
              {photos.map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-20 rounded-lg border-2 border-foreground bg-vis-cyan flex items-center justify-center relative"
                >
                  <Camera className="w-8 h-8 opacity-50" />
                  <button
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-vis-emergency border-2 border-foreground flex items-center justify-center"
                  >
                    <X className="w-3 h-3 text-primary-foreground" />
                  </button>
                </div>
              ))}
              {photos.length < 3 && (
                <button
                  onClick={handleAddPhoto}
                  className="w-20 h-20 rounded-lg border-2 border-dashed border-foreground bg-muted flex items-center justify-center hover:bg-card transition-colors"
                >
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-2">Opis problema</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Opišite problem koji ste uočili..."
              rows={4}
              className="w-full p-4 border-2 border-foreground rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </div>
      </ColorBlock>

      <ColorBlock color="yellow" className="py-4">
        <VisButton
          className="w-full"
          size="lg"
          onClick={handleSubmit}
          disabled={!location || !description || submitting}
        >
          {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Pošalji prijavu'}
        </VisButton>
      </ColorBlock>
    </div>
  );
};

export default ReportAndFix;
