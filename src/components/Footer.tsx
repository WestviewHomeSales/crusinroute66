import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onHomeClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHomeClick }) => {
  const handleHomeClick = () => {
    onHomeClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-3 mb-3">
            <a 
              href="https://x.com/CrusinRoute66" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors hover:scale-105 transform"
              aria-label="Follow us on X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@CrusinRoute66" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors hover:scale-105 transform"
              aria-label="Follow us on TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/crusinroute66/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors hover:scale-105 transform"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.youtube.com/@CrusinRoute66" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors hover:scale-105 transform"
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button 
            onClick={handleHomeClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://crusinroute66.com/files/route66_logo.png" 
              alt="Route 66" 
              className="h-8 w-auto"
            />
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">Crusin' Route 66</div>
              <div className="text-sm text-gray-600">America's Mother Road</div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
