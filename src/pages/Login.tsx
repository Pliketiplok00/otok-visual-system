import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorBlock from '@/components/layout/ColorBlock';
import VisButton from '@/components/ui/VisButton';
import VisCard from '@/components/ui/VisCard';
import { Mail, KeyRound, ArrowLeft, Loader2 } from 'lucide-react';

type Step = 'email' | 'otp';

const Login = () => {
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
    // Simulate API call
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
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    navigate('/channels');
  };

  const handleDevLogin = () => {
    navigate('/channels');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ColorBlock color="blue" className="py-4">
        <button
          onClick={() => step === 'otp' ? setStep('email') : navigate('/')}
          className="min-w-touch min-h-touch flex items-center gap-2 text-primary-foreground font-semibold"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          Natrag
        </button>
      </ColorBlock>

      <ColorBlock color="white" className="flex-1 py-8">
        <div className="animate-fade-in">
          <h1 className="text-2xl font-bold mb-2">
            {step === 'email' ? 'Prijavite se' : 'Unesite kod'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {step === 'email' 
              ? 'Unesite svoju email adresu za prijavu'
              : `Poslali smo jednokratni kod na ${email}`
            }
          </p>

          <VisCard className="mb-6">
            {step === 'email' ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email adresa</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vas@email.hr"
                      className="w-full pl-11 pr-4 py-3 border-2 border-foreground rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                {error && <p className="text-vis-emergency text-sm font-medium">{error}</p>}
                <VisButton type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Pošalji kod'}
                </VisButton>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Jednokratni kod</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="000000"
                      className="w-full pl-11 pr-4 py-3 border-2 border-foreground rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-center text-2xl tracking-widest font-mono"
                      maxLength={6}
                    />
                  </div>
                </div>
                {error && <p className="text-vis-emergency text-sm font-medium">{error}</p>}
                <VisButton type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Potvrdi'}
                </VisButton>
                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="w-full text-center text-sm text-muted-foreground hover:text-foreground"
                >
                  Pošalji kod ponovno
                </button>
              </form>
            )}
          </VisCard>

          {/* Dev login - only for development */}
          <div className="border-t-2 border-muted pt-4">
            <button
              onClick={handleDevLogin}
              className="w-full text-center text-sm text-muted-foreground hover:text-foreground underline"
            >
              [DEV] Preskoči prijavu
            </button>
          </div>
        </div>
      </ColorBlock>

      <ColorBlock color="green" noPadding className="h-2" />
    </div>
  );
};

export default Login;
