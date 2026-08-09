import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import CreateProfile from './components/CreateProfile';
import RelationshipIntention from './components/RelationshipIntention';
import CoreValues from './components/CoreValues';
import ProfileSummary from './components/ProfileSummary';

function App() {
  const [step, setStep] = useState(0);
  const [theme, setTheme] = useState('light');
  
  // Profile State
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    occupation: '',
    bio: '',
    intention: '',
    values: []
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  const updateProfile = (data) => {
    setProfileData(prev => ({ ...prev, ...data }));
  };

  const totalSteps = 4; // Step 0 is Welcome, steps 1-4 are the form
  const progressPercentage = step === 0 ? 0 : ((step) / totalSteps) * 100;

  return (
    <div className="app-container">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {step > 0 && (
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      )}

      {step === 0 && <WelcomeScreen onNext={nextStep} />}
      {step === 1 && <CreateProfile data={profileData} updateData={updateProfile} onNext={nextStep} />}
      {step === 2 && <RelationshipIntention data={profileData} updateData={updateProfile} onNext={nextStep} onPrev={prevStep} />}
      {step === 3 && <CoreValues data={profileData} updateData={updateProfile} onNext={nextStep} onPrev={prevStep} />}
      {step === 4 && <ProfileSummary data={profileData} onPrev={prevStep} />}
    </div>
  );
}

export default App;
