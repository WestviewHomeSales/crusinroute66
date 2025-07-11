import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img
        src="https://crusinroute66.com/files/crusinroute66.png"
        alt="Route 66 Logo"
        className="w-48 h-auto animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;
