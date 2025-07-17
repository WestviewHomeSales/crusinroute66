import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';
import { states as allStates } from '../data/states'; // Import the full states data
import Footer from './Footer';

interface HomePageProps {
  onStateSelect: (stateId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStateSelect }) => {
  const [randomAttractionImage, setRandomAttractionImage] = useState<string | null>(null);

  useEffect(() => {
    // Flatten all attractions from all states into a single array
    const allAttractions = allStates.flatMap(state => state.attractions);

    // Filter for attractions that actually have an image URL
    const attractionsWithImages = allAttractions.filter(attraction => attraction.image);

    if (attractionsWithImages.length > 0) {
      // Select a random attraction from the filtered list
      const randomIndex = Math.floor(Math.random() * attractionsWithImages.length);
      setRandomAttractionImage(attractionsWithImages[randomIndex].image || null); // Use the image URL
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Map over the imported states to get the required data for display
  const states = allStates.map(state => ({
    id: state.id,
    name: state.name,
    miles: state.id === 'illinois' ? '301 miles' :
           state.id === 'missouri' ? '317 miles' :
           state.id === 'kansas' ? '13 miles' :
           state.id === 'oklahoma' ? '432 miles' :
           state.id === 'texas' ? '186 miles' :
           state.id === 'new-mexico' ? '373 miles' :
           state.id === 'arizona' ? '401 miles' :
           state.id === 'california' ? '315 miles' : '', // Fallback for unknown states
    attractionCount: state.attractions.length // Get the actual count
  }));

  const statesWithBackgrounds = ['arizona', 'california', 'illinois', 'kansas', 'missouri', 'new-mexico', 'oklahoma', 'texas'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section - Now a single random image */}
      <div className="relative h-96 overflow-hidden bg-white"> {/* Changed bg-black to bg-white */}
        {randomAttractionImage && ( // Only render img if randomAttractionImage is available
          <img
            src={randomAttractionImage}
            alt="Random Route 66 Attraction"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Changed justify-start to justify-center and text-left to text-center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center px-4"> {/* Changed text-left pl-8 to text-center px-4 */}
            <div className="bg-white bg-opacity-90 text-black px-6 py-2 rounded-lg shadow-xl mb-6 inline-block">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Route 66</h1>
            </div>
            <div className="bg-white bg-opacity-90 text-black px-6 py-3 rounded-lg shadow-xl mb-6 max-w-4xl mx-auto text-left"> {/* Added text-left here */}
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Journey through America's most iconic highway. From Chicago to Santa Monica,
                discover the history, attractions, and landmarks that made Route 66 legendary.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 text-black px-6 py-2 rounded-lg shadow-xl inline-block">
              <div className="flex items-center space-x-6 text-base text-gray-800 font-medium">
                <div className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  <span>2,448 miles</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" size={20} />
                  <span>8 states</span>
                </div>
                <div className="flex items-center">
                  <Camera className="mr-2" size={20} />
                  <span>Countless memories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* States Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by State</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state) => (
            <div
              key={state.id}
              onClick={() => onStateSelect(state.id)}
              className={`relative rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-2 border-transparent hover:border-red-500 overflow-hidden
                ${statesWithBackgrounds.includes(state.id) ? 'bg-cover bg-center' : 'bg-white'}`}
              style={
                state.id === 'arizona'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/arizona.png)' }
                  : state.id === 'california'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/california.png)' }
                  : state.id === 'illinois'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/illinois.png)' }
                  : state.id === 'kansas'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/kansas.png)' }
                  : state.id === 'missouri'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/missouri.png)' }
                  : state.id === 'new-mexico'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/new_mexico.png)' }
                  : state.id === 'oklahoma'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/oklahoma.png)' }
                  : state.id === 'texas'
                  ? { backgroundImage: 'url(https://crusinroute66.com/flags/texas.png)' }
                  : {}
              }
            >
              <div className={`p-6 h-full flex flex-col justify-between
                ${statesWithBackgrounds.includes(state.id) ? 'bg-black bg-opacity-50 text-white' : 'text-gray-900'}`}> {/* Added text-gray-900 for default text color */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{state.name}</h3> {/* Changed text-gray-900 to text-white */}
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {state.attractionCount}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-white">{state.miles}</p> {/* Changed text-gray-800 to text-white */}
                </div>
                <div>
                  <div className="flex items-center font-medium text-white"> {/* Changed text-gray-800 to text-white */}
                    <MapPin size={16} className="mr-2" />
                    <span>
                      {state.id === 'illinois' ? 'Prairie State' :
                       state.id === 'missouri' ? 'Show Me State' :
                       state.id === 'kansas' ? 'Sunflower State' :
                       state.id === 'oklahoma' ? 'Sooner State' :
                       state.id === 'texas' ? 'Lone Star State' :
                       state.id === 'new-mexico' ? 'Land of Enchantment' :
                       state.id === 'arizona' ? 'Grand Canyon State' :
                       state.id === 'california' ? 'Golden State' : 'Explore attractions'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Mother Road</h2>
              <p className="text-lg text-gray-700 mb-6">
                Route 66, also known as the "Mother Road," was one of the original highways
                in the U.S. Highway System. Established in 1926, it ran from Chicago, Illinois,
                through Missouri, Kansas, Oklahoma, Texas, New Mexico, and Arizona before
                terminating in Santa Monica, California.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Though officially decommissioned in 1985, Route 66 remains a symbol of American
                freedom, adventure, and the open road. Today, much of the original route can
                still be driven, offering travelers a glimpse into America's automotive and
                cultural history.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-red-600">1926</div>
                  <div className="text-gray-600">Established</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-red-600">2,448</div>
                  <div className="text-600">Miles</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://crusinroute66.com/states/arizona/seligman_police_car.jpg"
                alt="Historic Route 66 Police Car"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
};

export default HomePage;
