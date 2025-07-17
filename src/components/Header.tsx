import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentState?: string;
  onStateSelect: (stateId: string) => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentState, onStateSelect, onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const states = [
    { id: 'illinois', name: 'Illinois' },
    { id: 'missouri', name: 'Missouri' },
    { id: 'kansas', name: 'Kansas' },
    { id: 'oklahoma', name: 'Oklahoma' },
    { id: 'texas', name: 'Texas' },
    { id: 'new-mexico', name: 'New Mexico' },
    { id: 'arizona', name: 'Arizona' },
    { id: 'california', name: 'California' }
  ];

  const handleHomeClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event propagation
    onHomeClick();
    setIsMenuOpen(false); // Close menu if open
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleHomeClick} // Use the new handler
          >
            <img 
              src="https://crusinroute66.com/files/route66_logo.png" 
              alt="Route 66" 
              className="h-10 w-auto mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Crusin' Route 66</h1>
              <p className="text-xs text-gray-600">America's Mother Road</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {states.map((state) => (
              <button
                key={state.id}
                onClick={() => onStateSelect(state.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentState === state.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {state.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {states.map((state) => (
                <button
                  key={state.id}
                  onClick={() => {
                    onStateSelect(state.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentState === state.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {state.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
