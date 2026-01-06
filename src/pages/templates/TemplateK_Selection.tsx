/**
 * ============================================
 * TEMPLATE K: SELECTION / CHOICE PAGE
 * ============================================
 * 
 * USE FOR:
 * - User type selection (visitor vs member)
 * - Category/mode selection
 * - Multi-step onboarding choices
 * - Any binary or multiple choice flows
 * 
 * STRUCTURE:
 * 1. Colored header with dynamic title
 * 2. Large selection cards with icons
 * 3. Optional secondary step (nested selection)
 * 4. Back button for multi-step flows
 * 
 * KEY PATTERNS:
 * - State-based UI (different views based on selection)
 * - Large touch-friendly selection cards
 * - Icon boxes with distinct colors per option
 * - Tinted backgrounds matching option color
 * - Helper text below selections
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building, Briefcase, Heart, MapPin, Star } from 'lucide-react';

// Selection types
type UserType = 'individual' | 'business' | null;
type Preference = 'basic' | 'premium' | null;

const TemplateK_Selection = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>(null);
  const [preference, setPreference] = useState<Preference>(null);

  // Handle first-level selection
  const handleIndividual = () => {
    // For single-step flow, navigate directly
    // localStorage.setItem('userType', 'individual');
    // navigate('/templates');
    
    // For multi-step flow, show next options
    setUserType('individual');
  };

  const handleBusiness = () => {
    setUserType('business');
  };

  // Handle second-level selection
  const handlePreferenceSelect = (pref: Preference) => {
    setPreference(pref);
    // Save choices
    localStorage.setItem('templateUserType', userType || '');
    localStorage.setItem('templatePreference', pref || '');
    navigate('/templates');
  };

  // Reset to first step
  const handleBack = () => {
    setUserType(null);
    setPreference(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-vis-blue">
      
      {/* Header - changes based on step */}
      <div className="px-6 pt-12 pb-6 text-primary-foreground">
        <h1 className="text-3xl font-extrabold mb-1 uppercase">
          {userType ? (
            <>Choose your <span className="text-vis-cyan">plan</span></>
          ) : (
            <>Welcome <span className="text-vis-yellow">aboard</span></>
          )}
        </h1>
        <p className="opacity-80">
          {userType 
            ? 'Select the option that works best for you'
            : 'How will you be using this app?'
          }
        </p>
      </div>

      {/* Selection Card Container */}
      <div className="flex-1 bg-card border-t-[3px] border-x-[3px] border-foreground px-5 pt-8 pb-8">
        
        {userType ? (
          /* STEP 2: Preference Selection */
          <div className="space-y-4">
            
            {/* Option A: Basic */}
            <button
              onClick={() => handlePreferenceSelect('basic')}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-green/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-green flex items-center justify-center shrink-0">
                <Heart className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Basic</p>
                <p className="text-sm text-muted-foreground">
                  Essential features, perfect for getting started
                </p>
              </div>
            </button>

            {/* Option B: Premium */}
            <button
              onClick={() => handlePreferenceSelect('premium')}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-purple/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-purple))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-purple flex items-center justify-center shrink-0">
                <Star className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Premium</p>
                <p className="text-sm text-muted-foreground">
                  All features unlocked, priority support included
                </p>
              </div>
            </button>

            {/* Back button */}
            <button
              onClick={handleBack}
              className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 py-2"
            >
              ← Back to account type
            </button>
          </div>
        ) : (
          /* STEP 1: User Type Selection */
          <div className="space-y-4">
            
            {/* Option A: Individual */}
            <button
              onClick={handleIndividual}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-yellow/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-yellow flex items-center justify-center shrink-0">
                <User className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Individual</p>
                <p className="text-sm text-muted-foreground">
                  Personal use, single account access
                </p>
              </div>
            </button>

            {/* Option B: Business */}
            <button
              onClick={handleBusiness}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-cyan/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-cyan flex items-center justify-center shrink-0">
                <Briefcase className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Business</p>
                <p className="text-sm text-muted-foreground">
                  Team features, multi-user access, analytics
                </p>
              </div>
            </button>

            {/* Helper text */}
            <p className="text-center text-sm text-muted-foreground mt-6 px-4">
              You can change this setting anytime in your preferences
            </p>

            {/* Skip / Back to templates */}
            <button
              onClick={() => navigate('/templates')}
              className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-2 py-2 border-t border-border pt-4"
            >
              ← Back to Templates
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateK_Selection;
