import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, KeyRound, ArrowLeft, Loader2 } from 'lucide-react';

type Step = 'email' | 'otp';

const LoginV3 = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Unesite ispravnu email adresu');
      return;
    }
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setStep('otp');
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      setError('Unesite ispravan kod');
      return;
    }
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    navigate('/channels');
  };

  return (
    <div className="min-h-screen flex flex-col bg-vis-blue">
      {/* Back button */}
      <div className="px-5 pt-6">
        <button
          onClick={() => step === 'otp' ? setStep('email') : navigate('/v3')}
          className="flex items-center gap-2 text-primary-foreground hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-bold uppercase text-sm">Natrag</span>
        </button>
      </div>

      {/* Header */}
      <div className="px-6 pt-8 pb-6 text-primary-foreground">
        <h1 className="text-3xl font-extrabold mb-1 uppercase">
          {step === 'email' ? (
            <>Prijavite <span className="text-vis-yellow">se</span></>
          ) : (
            <>Unesite <span className="text-vis-cyan">kod</span></>
          )}
        </h1>
        <p className="opacity-80">
          {step === 'email' 
            ? 'Unesite email za prijavu'
            : `Poslali smo kod na ${email}`
          }
        </p>
      </div>

      {/* Form card */}
      <div className="flex-1 bg-card border-t-[3px] border-x-[3px] border-foreground px-5 pt-8 pb-8">
        {step === 'email' ? (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label className="block font-bold mb-2 flex items-center gap-2 uppercase">
                <Mail className="w-5 h-5 text-vis-blue" />
                Email adresa
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.hr"
                className="w-full px-5 py-4 border-[3px] border-foreground bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vis-blue text-lg"
                style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
              />
            </div>
            
            {error && (
              <p className="text-vis-emergency text-sm font-medium px-1">{error}</p>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 border-[3px] border-foreground bg-vis-blue text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 uppercase"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Pošalji kod'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div>
              <label className="block font-bold mb-2 flex items-center gap-2 uppercase">
                <KeyRound className="w-5 h-5 text-vis-cyan" />
                Jednokratni kod
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000"
                className="w-full px-5 py-4 border-[3px] border-foreground bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vis-cyan text-center text-3xl tracking-[0.5em] font-mono"
                style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
                maxLength={6}
              />
            </div>
            
            {error && (
              <p className="text-vis-emergency text-sm font-medium px-1">{error}</p>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 border-[3px] border-foreground bg-vis-cyan text-foreground font-bold text-lg flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 uppercase"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Potvrdi'}
            </button>
            
            <button
              type="button"
              onClick={() => setStep('email')}
              className="w-full text-center text-sm text-muted-foreground hover:text-foreground"
            >
              Pošalji kod ponovno
            </button>
          </form>
        )}

        {/* Dev login */}
        <div className="mt-8 pt-6 border-t-[3px] border-dashed border-muted">
          <button
            onClick={() => navigate('/channels')}
            className="w-full text-center text-sm text-muted-foreground hover:text-foreground underline"
          >
            [DEV] Preskoči prijavu
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginV3;