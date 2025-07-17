import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import StatePage from './components/StatePage';
import LoadingScreen from './components/LoadingScreen';
import { states } from './data/states';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'state'>('home');
  const [selectedStateId, setSelectedStateId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleStateSelect = (stateId: string) => {
    setSelectedStateId(stateId);
    setCurrentView('state');
  };

  const handleHomeClick = () => {
    setCurrentView('home');
    setSelectedStateId('');
    // Defer scrolling to ensure the HomePage is rendered before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0); // A small delay or 0ms to defer
  };

  const selectedState = states.find(state => state.id === selectedStateId);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentState={currentView === 'state' ? selectedStateId : undefined}
        onStateSelect={handleStateSelect}
        onHomeClick={handleHomeClick}
      />
      
      {currentView === 'home' && (
        <HomePage onStateSelect={handleStateSelect} />
      )}
      
      {currentView === 'state' && selectedState && (
        <StatePage 
          state={selectedState} 
          onBack={handleHomeClick}
        />
      )}
    </div>
  );
}

export default App;
