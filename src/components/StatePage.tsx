import React, { useState, useMemo, useEffect } from 'react';
import { MapPin, ArrowLeft, Navigation, Camera, Home, SortAsc, SortDesc, Utensils, Bed, Filter, Building2, Share2, ExternalLink } from 'lucide-react';
import { State, Attraction } from '../types';
import Footer from './Footer';

interface StatePageProps {
  state: State;
  onBack: () => void;
}

const StatePage: React.FC<StatePageProps> = ({ state, onBack }) => {
  // 'first' for original order, 'last' for reversed order
  const [sortOrder, setSortOrder] = useState<'first' | 'last'>('first');
  const [categoryFilter, setCategoryFilter] = useState<'all' | Attraction['type']>('all');
  const [randomAttractionImage, setRandomAttractionImage] = useState<string | null>(null);

  // Reset sort order to 'first' and select a new random image
  // whenever the state prop changes (i.e., navigating to a new state page)
  useEffect(() => {
    setSortOrder('first');
    setCategoryFilter('all');
    window.scrollTo(0, 0); // Scroll to the top of the page

    // Select a random image from the current state's attractions
    const attractionsWithImages = state.attractions.filter(attraction => attraction.image);
    if (attractionsWithImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * attractionsWithImages.length);
      setRandomAttractionImage(attractionsWithImages[randomIndex].image || null);
    } else {
      setRandomAttractionImage(null); // No images available for this state
    }

  }, [state.id, state.attractions]); // Depend on state.id and state.attractions to trigger reset, scroll, and new image selection

  const filteredAndSortedAttractions = useMemo(() => {
    // First filter by category
    let filteredAttractions = state.attractions;
    if (categoryFilter !== 'all') {
      filteredAttractions = state.attractions.filter(attraction => attraction.type === categoryFilter);
    }

    // Then sort by order
    const attractionsCopy = [...filteredAttractions];
    if (sortOrder === 'first') {
      return attractionsCopy; // Return original order (First to Last)
    } else {
      return attractionsCopy.reverse(); // Return reversed order (Last to First)
    }
  }, [state.attractions, sortOrder, categoryFilter]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'first' ? 'last' : 'first'));
  };

  const formatCoordinates = (lat: number, lng: number) => {
    // Convert to string to check actual precision in the data
    const latStr = lat.toString();
    const lngStr = lng.toString();
    
    // Count decimal places in the original data
    const latDecimals = latStr.includes('.') ? latStr.split('.')[1].length : 0;
    const lngDecimals = lngStr.includes('.') ? lngStr.split('.')[1].length : 0;
    
    // Determine the maximum precision we should show based on actual data
    const maxPrecision = Math.max(latDecimals, lngDecimals);
    
    // Show 8 digits if we have high precision data (6+ decimal places), otherwise show 6
    const targetPrecision = maxPrecision >= 6 ? 8 : 6;
    
    // Format with target precision, then remove trailing zeros
    const formatNumber = (num: number, precision: number) => {
      return parseFloat(num.toFixed(precision)).toString();
    };
    
    return `${formatNumber(lat, targetPrecision)}, ${formatNumber(lng, targetPrecision)}`;
  };

  const getTypeIcon = (type: Attraction['type']) => {
    switch (type) {
      case 'landmark':
        return <MapPin size={16} className="text-blue-600" />;
      case 'attraction':
        return <Camera size={16} className="text-green-600" />;
      case 'food':
        return <Utensils size={16} className="text-orange-600" />;
      case 'lodging':
        return <Bed size={16} className="text-purple-600" />;
      case 'museum':
        return <Home size={16} className="text-amber-600" />;
      case 'ruins':
        return <Building2 size={16} className="text-red-600" />;
      default:
        return <MapPin size={16} className="text-gray-600" />;
    }
  };

  const getTypeColor = (type: Attraction['type']) => {
    switch (type) {
      case 'landmark':
        return 'bg-blue-100 text-blue-800';
      case 'attraction':
        return 'bg-green-100 text-green-800';
      case 'food':
        return 'bg-orange-100 text-orange-800';
      case 'lodging':
        return 'bg-indigo-100 text-indigo-800';
      case 'museum':
        return 'bg-amber-100 text-amber-800';
      case 'ruins':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryDisplayName = (category: 'all' | Attraction['type']) => {
    switch (category) {
      case 'all':
        return 'All Categories';
      case 'landmark':
        return 'Landmarks';
      case 'attraction':
        return 'Attractions';
      case 'food':
        return 'Food';
      case 'lodging':
        return 'Lodging';
      case 'museum':
        return 'Museums';
      case 'ruins':
        return 'Ruins';
      default:
        return 'All Categories';
    }
  };

  const openInMaps = (lat: number, lng: number, name: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  };

  const openAddressInMaps = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const shareGPS = (lat: number, lng: number, name: string) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    
    if (navigator.share) {
      navigator.share({
        title: name,
        text: mapsUrl,
      }).catch((error) => {
        // Don't log AbortError - this happens when user cancels the share dialog
        if (error.name !== 'AbortError') {
          console.error('Share failed:', error);
        }
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(mapsUrl).then(() => {
        alert('Google Maps link copied to clipboard!');
      }).catch(() => {
        alert(`Google Maps link: ${mapsUrl}`);
      });
    }
  };

  const formatAddress = (address: string) => {
    // Split address at common separators to create two lines
    const parts = address.split(', ');
    let line1 = parts[0];
    let line2 = parts.length > 1 ? parts.slice(1).join(', ') : '';

    // Function to add dot after common abbreviations
    const addDotToAbbr = (text: string) => {
      // List of common abbreviations and their dotted versions
      const abbreviations: { [key: string]: string } = {
        'St': 'St.',
        'Ave': 'Ave.',
        'Rd': 'Rd.',
        'Blvd': 'Blvd.',
        'Ct': 'Ct.',
        'Ln': 'Ln.',
        'Dr': 'Dr.',
        'Pl': 'Pl.',
        'Ter': 'Ter.',
        'Trl': 'Trl.',
        'Way': 'Way.',
        'Cir': 'Cir.',
        'Sq': 'Sq.',
        'Pkwy': 'Pkwy.',
        'N': 'N.',
        'S': 'S.',
        'E': 'E.',
        'W': 'W.'
      };

      // Use regex to find whole words that match abbreviations and add a dot
      // Ensure it doesn't add a dot if one is already present or if it's part of a longer word
      const regex = new RegExp(`\\b(${Object.keys(abbreviations).join('|')})\\b(?!\\.)`, 'g');
      return text.replace(regex, (match) => abbreviations[match] || match);
    };

    // Apply the formatting to both lines
    line1 = addDotToAbbr(line1);
    line2 = addDotToAbbr(line2);

    return { line1, line2 };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {randomAttractionImage && ( // Use the random image state
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${randomAttractionImage})` }}
          ></div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="bg-white bg-opacity-90 text-black px-6 py-2 rounded-lg shadow-xl mb-4 inline-block">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">{state.fullName}</h1>
            </div>
            <div className="bg-white bg-opacity-90 text-black px-6 py-3 rounded-lg shadow-xl max-w-4xl">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                {state.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Changed py-16 to py-8 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as 'all' | Attraction['type'])}
                className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 shadow-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
              >
                <option value="all">All Categories</option>
                <option value="attraction">Attractions</option>
                <option value="landmark">Landmarks</option>
                <option value="museum">Museums</option>
                <option value="ruins">Ruins</option>
                <option value="food">Food</option>
                <option value="lodging">Lodging</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Filter size={16} className="text-gray-400" />
              </div>
            </div>
            
            <button
              onClick={toggleSortOrder}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-200"
            >
              {sortOrder === 'first' ? (
                <>
                  <SortAsc size={20} className="mr-2" />
                  First-Last
                </>
              ) : (
                <>
                  <SortDesc size={20} className="mr-2" />
                  Last-First
                </>
              )}
            </button>
            
            {categoryFilter !== 'all' && (
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                Showing {filteredAndSortedAttractions.length} {getCategoryDisplayName(categoryFilter).toLowerCase()}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedAttractions.map((attraction) => {
            const addressLines = attraction.address ? formatAddress(attraction.address) : null;

            return (
              <div
                key={attraction.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {attraction.image && (
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    {attraction.url ? (
                      <a
                        href={attraction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-blue-700 hover:underline inline-flex items-center flex-1"
                      >
                        {attraction.name}
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold text-gray-900 flex-1">
                        {attraction.name}
                      </h3>
                    )}
                    <div className="flex items-center ml-3">
                      {getTypeIcon(attraction.type)}
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(attraction.type)} ${attraction.type === 'lodging' ? 'bg-indigo-100 text-indigo-800' : ''} ${attraction.type === 'museum' ? 'bg-amber-100 text-amber-800' : ''}`}>
                      {attraction.type.charAt(0).toUpperCase() + attraction.type.slice(1)}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {attraction.description}
                  </p>

                  <div className="space-y-3">
                    {addressLines && (
                      <div className="flex items-start text-sm text-gray-500">
                        <Home size={14} className="mr-2 flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <button
                            onClick={() => openAddressInMaps(attraction.address!)}
                            className="text-left hover:text-blue-600 hover:underline transition-colors text-gray-500"
                          >
                            <span className="font-medium text-gray-500">{addressLines.line1}</span>
                            {addressLines.line2 && (
                              <span className="block text-gray-500">{addressLines.line2}</span>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 flex-shrink-0" />
                        <button
                          onClick={() => openInMaps(
                            attraction.coordinates.lat,
                            attraction.coordinates.lng,
                            attraction.name
                          )}
                          className="font-mono hover:text-blue-600 hover:underline transition-colors text-gray-500"
                        >
                          {formatCoordinates(attraction.coordinates.lat, attraction.coordinates.lng)}
                        </button>
                      </div>
                      <button
                        onClick={() => shareGPS(
                          attraction.coordinates.lat,
                          attraction.coordinates.lng,
                          attraction.name
                        )}
                        className="flex items-center px-2 py-1 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                        title="Share GPS coordinates"
                      >
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAndSortedAttractions.length === 0 && (
          <div className="text-center py-12">
            <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {categoryFilter === 'all' 
                ? 'No attractions listed yet'
                : `No ${getCategoryDisplayName(categoryFilter).toLowerCase()} found`
              }
            </h3>
            <p className="text-gray-600">
              {categoryFilter === 'all'
                ? `Check back soon for more attractions in ${state.fullName}`
                : `Try selecting a different category or check back later for more ${getCategoryDisplayName(categoryFilter).toLowerCase()} in ${state.fullName}`
              }
            </p>
          </div>
        )}
      </div>
      
      <Footer onHomeClick={onBack} />

    </div>
  );
};

export default StatePage;
