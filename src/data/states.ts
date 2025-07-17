import { State } from '../types';

export const states: State[] = [
  {
    id: 'illinois',
    name: 'Illinois',
    fullName: 'Illinois',
    description: 'The starting point of the legendary Route 66, where the journey begins in the heart of Chicago.',
    heroImage: '/cities_service.jpg',
    attractions: [
      // Chicago
      {
        id: 'begin-route66-sign',
        name: 'Route 66 Begin Sign',
        description: 'The iconic "Begin Route 66" sign at Adams Street and Michigan Avenue, marking the official start of the Mother Road.',
        coordinates: { lat: 41.87962, lng: -87.62461 },
        address: 'Adams St at Michigan Ave, Chicago, IL 60603',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/route66_begin.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'lou-mitchell-restaurant',
        name: "Lou Mitchell's Restaurant",
        url: 'https://www.loumitchellsrestaurant.com',
        description: '1923 diner famous with Route 66 travelers, serving complimentary donuts and milk duds to start your journey.',
        coordinates: { lat: 41.87791, lng: -87.64213 },
        address: '565 W Jackson Blvd, Chicago, IL 60661',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/lou_mitchells_chicago.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'art-institute-lions',
        name: 'Art Institute Lions',
        url: 'https://www.artic.edu/',
        description: 'Iconic bronze lions guarding the Art Institute of Chicago, a perfect photo spot near the start of Route 66.',
        coordinates: { lat: 41.88043, lng: -87.62431 },
        address: '111 S Michigan Ave, Chicago, IL 60603',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/art_institute_lion.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'willis-tower',
        name: 'Willis Tower',
        url: 'https://www.willistower.com/',
        description: 'View from the top of Chicago at one of the tallest buildings in the Western Hemisphere.',
        coordinates: { lat: 41.87885, lng: -87.63609 },
        address: '233 S Wacker Dr, Chicago, IL 60606',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/sears_tower.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'berghoff-restaurant',
        name: 'Berghoff Restaurant',
        url: 'https://www.theberghoff.com/',
        description: 'Historic German eatery on original Route 66, serving traditional cuisine since 1898.',
        coordinates: { lat: 41.87936, lng: -87.62852 },
        address: '17 W Adams St, Chicago, IL 60603',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/berghoff_chicago.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Cicero / Berwyn
      {
        id: 'henrys-drive-in',
        name: "Henry's Drive-In",
        url: 'https://www.henrys66.com/',
        description: 'Giant hot dog with mustard statue on top, a quirky roadside attraction that has delighted travelers for decades.',
        coordinates: { lat: 41.83324, lng: -87.77484 },
        address: '6031 W Ogden Ave, Cicero, IL 60804',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/henrys_driveIn.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'del-rheas-chicken-basket',
        name: "Del Rhea's Chicken Basket",
        url: 'https://chickenbasket.com/',
        description: '1946 fried chicken restaurant, a Route 66 icon serving travelers in Willowbrook for over 75 years.',
        coordinates: { lat: 41.74561, lng: -87.93929 },
        address: '645 Joliet Rd, Willowbrook, IL 60527',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/del_rheas_chicken.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Joliet
      {
        id: 'route66-welcome-center-joliet',
        name: 'Route 66 Welcome Center',
        url: 'https://www.jolietmuseum.org/',
        description: 'Great starting point with exhibits, maps, and information about Route 66 history and attractions.',
        coordinates: { lat: 41.52818, lng: -88.08270 },
        address: '204 N Ottawa St, Joliet, IL 60432',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/welcome_center_joliet.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'rich-creamy-ice-cream',
        name: 'Rich & Creamy Ice Cream',
        url: 'https://rich-creamy.edan.io/',
        description: 'Retro ice cream stand with Blues Brothers statues on the roof, celebrating Joliet\'s movie fame.',
        coordinates: { lat: 41.54164, lng: -88.08496 },
        address: '920 N Broadway St, Joliet, IL 60435',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/rich_and_creamy.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'old-joliet-prison',
        name: 'Old Joliet Prison',
        url: 'https://www.jolietprison.org/',
        description: 'Historic prison featured in The Blues Brothers and other films, offering guided tours of this imposing limestone fortress.',
        coordinates: { lat: 41.54645, lng: -88.07330 },
        address: '1125 Collins St, Joliet, IL 60432',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/old_joliet_prison.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'rialto-square-theatre',
        name: 'Rialto Square Theatre',
        url: 'https://rialtosquare.com/',
        description: '1920s opulent movie palace known as the "Jewel of Joliet," featuring stunning architecture and live performances.',
        coordinates: { lat: 41.52611, lng: -88.08142 },
        address: '102 N Chicago St, Joliet, IL 60432',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/rialto_square_theatre.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Elwood / Wilmington
      {
        id: 'gemini-giant',
        name: 'Gemini Giant',
        url: 'https://en.wikipedia.org/wiki/Gemini_Giant',
        description: 'Fiberglass "Muffler Man" astronaut at the Launching Pad, one of the most photographed Route 66 attractions.',
        coordinates: { lat: 41.30606, lng: -88.14970 },
        address: '201 Bridge St, Wilmington, IL 60481',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/gemini_giant_launching_pad.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'polk-a-dot-drive-in',
        name: 'Polk-a-Dot Drive-In',
        description: '1950s-themed diner with Elvis & Betty Boop statues, serving classic American fare with vintage flair.',
        coordinates: { lat: 41.26523, lng: -88.20996 },
        address: '222 N Front St, Braidwood, IL 60408',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/polka_dot_drivein.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'midewin-tallgrass-prairie',
        name: 'Midewin Tallgrass Prairie',
        url: 'https://www.fs.usda.gov/r09/midewin',
        description: 'Native prairie restoration with bison herd, showcasing Illinois\' natural heritage along Route 66.',
        coordinates: { lat: 41.34212, lng: -88.13193 },
        address: '30239 S State Route 53, Wilmington, IL 60481',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/midewin_tallgrass_prairie.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Dwight
      {
        id: 'amblers-texaco-station',
        name: "Ambler's Texaco Station",
        url: 'https://www.nps.gov/places/amblers-texaco-gas-station.htm',
        description: 'Restored 1930s gas station, now a visitor center showcasing the golden age of automobile travel.',
        coordinates: { lat: 41.09410, lng: -88.43948 },
        address: '417 W Waupansie St, Dwight, IL 60420',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/amblers_texaco_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'crazy-80s-car-museum',
        name: 'Crazy 80\'s Car Museum',
        description: 'Crazy 80\'s is a hidden gem that transports visitors back to the late 1970s and 1980s, showcasing everyday cars from the Malaise Era, no muscle cars, just the vehicles people actually drove.',
        coordinates: { lat: 41.09645, lng: -88.43685 },
        address: '316 W Waupansie St, Dwight, IL 60420',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/crazy_80s.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Odell
      {
        id: 'odell-standard-oil-station',
        name: 'Standard Oil Station',
        url: 'https://www.nps.gov/places/standard-oil-gas-station.htm',
        description: '1932 station, restored with original pumps and serving as a museum of early automotive travel.',
        coordinates: { lat: 41.00191, lng: -88.52903 },
        address: '400 S West St, Odell, IL 60460',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/odell_standard_oil.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'odell-subway-tunnel',
        name: 'Odell Subway Tunnel',
        description: 'Pedestrian tunnel under Route 66, a unique piece of highway infrastructure from the early days.',
        coordinates: { lat: 41.00355, lng: -88.52743 },
        address: 'W Hamilton St at S West St, Odell, IL 60460',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/illinois/odell_subway_tunnel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Pontiac
    
      {
        id: 'livingston-county-war-museum',
        name: 'Livingston County War Museum',
        url: 'https://www.livingstoncountywarmuseum.com/index.html',
        description: 'Military memorabilia and exhibits housed inside a historic building, showcasing local military history.',
        coordinates: { lat: 40.88101, lng: -88.62887 },
        address: '321 N Main St, Pontiac, IL 61764',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/livingston_county_war_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'giant-route66-shield-mural',
        name: 'Giant Route 66 Shield Mural',
        description: 'Perfect photo-op with a massive Route 66 shield painted on a downtown building wall.',
        coordinates: { lat: 40.88127, lng: -88.62892 },
        address: 'Main St, Pontiac, IL 61764',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/giant_shield_pontiac.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pontiac-oakland-auto-museum',
        name: 'Pontiac Oakland Auto Museum',
        url: 'https://www.pontiacoaklandmuseum.org/',
        description: 'Historic cars and GM history, celebrating the automotive heritage of the Pontiac brand.',
        coordinates: { lat: 40.87980, lng: -88.62993 },
        address: '205 N Mill St, Pontiac, IL 61764',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/pontiac_auto_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'murals-main-street-pontiac',
        name: 'Murals on Main Street',
        description: 'Over 20 murals across town depicting local history, Route 66 heritage, and community pride.',
        coordinates: { lat: 40.8808, lng: -88.6298 },
        address: 'Main St, Pontiac, IL 61764',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/murals_on_mainstreet.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Chenoa / Lexington
      {
        id: 'lexington-cities-service',
        name: 'Lexington Cities Service',
        description: 'Restored 1950s service station showcasing mid-century automotive service architecture.',
        coordinates: { lat: 40.64168, lng: -88.79018 },
        address: '809 W Main St, Lexington, IL 61753',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/illinois/lexington_cities_service.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'memory-lane-lexington',
        name: 'Memory Lane',
        description: 'Preserved brick road from early Route 66, offering a connection to the highway\'s original surface.',
        coordinates: { lat: 40.64147, lng: -88.79186 },
        address: 'Old Route 66 at Parade Rd, Lexington, IL 61753',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/memory_lane.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Towanda
      {
        id: 'historic-walking-trail-towanda',
        name: 'Historic Walking Trail',
        description: 'Route 66 history signs along the old alignment, telling the story of the highway\'s impact on small-town America.',
        coordinates: { lat: 40.74141, lng: -88.72941 },
        address: 'W Cemetery Ave at Old Route 66, Towanda, IL 61776',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/towanda_walking_trail.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Normal / Bloomington
      {
        id: 'cruisin-with-lincoln',
        name: "Cruisin' with Lincoln",
        url: 'https://cruisinwithlincolnon66.org/',
        description: 'Located in the McLean County Museum of History, featuring exhibits on Lincoln and Route 66 connections.',
        coordinates: { lat: 40.48000, lng: -88.99413 },
        address: '200 N Main St, Bloomington, IL 61701',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/crusin_with_lincoln.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'spragues-super-service',
        name: "Sprague's Super Service",
        url: 'https://www.nps.gov/places/spragues-super-service.htm',
        description: 'Tudor Revival gas station & café from 1931, representing the architectural evolution of roadside services.',
        coordinates: { lat: 40.51752, lng: -88.98070 },
        address: '305 Pine St, Normal, IL 61761',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/spragues_super_service.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // McLean
      {
        id: 'dixie-travel-plaza',
        name: 'Dixie Travel Plaza',
        url: 'https://en.wikipedia.org/wiki/Dixie_Travel_Plaza',
        description: 'Classic Route 66 truck stop since 1928, serving travelers with fuel, food, and hospitality for nearly a century.',
        coordinates: { lat: 40.31042, lng: -89.16892 },
        address: '315 Dixie Rd, McLean, IL 61754',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/dixie_travel_plaza.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Atlanta
      {
        id: 'tall-paul-bunyan-statue',
        name: 'Tall Paul Bunyan Statue',
        description: 'Another fiberglass Muffler Man holding a hot dog, standing guard over this small Illinois town.',
        coordinates: { lat: 40.26038, lng: -89.23141 },
        address: '112 SW Arch St, Atlanta, IL 61723',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/tall_paul_bunyan.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'american-giants-museum',
        name: 'American Giants Museum',
        url: 'https://www.americangiantsmuseum.com/',
        description: 'The American Giants Museum is a museum dedicated to preserving the history of Muffler Men, those towering fiberglass giants that became iconic fixtures along American highways.',
        coordinates: { lat: 40.26122, lng: -89.23113 },
        address: '100 NE Arch St, Atlanta, IL 61723',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/american_giants_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'palms-grill-cafe',
        name: "Palm's Grill Café",
        description: '1930s diner experience serving classic American comfort food in an authentic vintage setting.',
        coordinates: { lat: 40.26044, lng: -89.23133 },
        address: '110 SW Arch St, Atlanta, IL 61723',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/palms_grill_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Lincoln
      {
        id: 'worlds-largest-covered-wagon',
        name: "World's Largest Covered Wagon",
        description: 'Abraham Lincoln statue driving it, commemorating the town named after Lincoln before his presidency.',
        coordinates: { lat: 40.14887, lng: -89.38870 },
        address: '1750 5th St, Lincoln, IL 62656',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/largest_covered_wagon.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'historic-downtown-lincoln',
        name: 'Historic Downtown Lincoln',
        url: 'https://destinationlogancountyil.com/historic-downtown-lincoln-walldog-murals',
        description: 'Named after Abraham Lincoln before presidency, featuring historic buildings and Lincoln-related sites.',
        coordinates: { lat: 40.1481, lng: -89.3648 },
        address: 'Broadway St, Lincoln, IL 62656',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/downtown_lincoln.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Broadwell / Elkhart
      {
        id: 'pig-hip-restaurant-site',
        name: 'Pig Hip Restaurant Site',
        url: 'https://destinationlogancountyil.com/explore-our-towns/broadwell',
        description: 'Historic sign and marker where the famous restaurant once stood (burned down in 2007), preserving its memory.',
        coordinates: { lat: 40.06804, lng: -89.44409 },
        address: '100-198 N Frontage Rd, Broadwell, IL 62634',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/illinois/pig_hip_restaurant.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'country-bumpkin',
        name: 'The Country Bumpkin',
        url: 'https://www.facebook.com/thecountrybumpkinII',
        description: 'Gift shop with Route 66 items, antiques, and local crafts celebrating rural Illinois heritage.',
        coordinates: { lat: 40.06694, lng: -89.44423 },
        address: '2436 Old Route 66, Elkhart, IL 62634',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/country_bumpkin.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Williamsville
      {
        id: 'historic-downtown-williamsville',
        name: 'Historic Downtown Williamsville',
        description: 'Small town nostalgia with preserved Route 66 signage and vintage storefronts.',
        coordinates: { lat: 39.9531, lng: -89.5448 },
        address: 'Main St, Williamsville, IL 62693',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/downtown_williamsville.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Springfield
      {
        id: 'illinois-state-capitol',
        name: 'Illinois State Capitol',
        url: 'https://www.ilsos.gov/publications/pdf_publications/com18.pdf',
        description: 'Towering dome and legislative center, showcasing Illinois government and architecture.',
        coordinates: { lat: 39.79839, lng: -89.65483 },
        address: '401 S 2nd St, Springfield, IL 62701',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/illinois_state_capitol.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'lincoln-presidential-library',
        name: 'Lincoln Presidential Library',
        url: 'https://presidentlincoln.illinois.gov/',
        description: 'Award-winning interactive exhibits exploring Lincoln\'s life, presidency, and legacy.',
        coordinates: { lat: 39.80361, lng: -89.64744 },
        address: '212 N 6th St, Springfield, IL 62701',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/abe_lincoln_library.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'abe-lincoln-homesite',
        name: 'Abe Lincoln Homesite',
        url: 'https://www.nps.gov/liho/index.htm',
        description: 'Preserved neighborhood and home where Abraham Lincoln lived before becoming president.',
        coordinates: { lat: 39.797001, lng: -89.64536 },
        address: '413 S 8th St, Springfield, IL 62701',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/abe_lincoln_home.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cozy-dog-drive-in',
        name: 'Cozy Dog Drive-In',
        url: 'https://www.cozydogdrivein.com/',
        description: 'Home of the original corn dog on a stick, invented here in 1946 and a true Route 66 culinary landmark.',
        coordinates: { lat: 39.76239, lng: -89.64879 },
        address: '2935 S 6th St, Springfield, IL 62703',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/cozy_dog_drivein.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'motorheads-bar-grill',
        name: 'Motorheads Bar & Grill',
        url: 'https://www.66motorheads.com/',
        description: 'Full of memorabilia and classic cars, offering dining and Route 66 history under one roof.',
        coordinates: { lat: 39.71283, lng: -89.64724 },
        address: '600 Toronto Rd, Springfield, IL 62711',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/motorheads.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Chatham / Auburn
      {
        id: 'original-brick-road-segment',
        name: 'Original Brick Road Segment',
        description: 'A surviving stretch of 1920s brick Route 66, offering a tactile connection to the highway\'s early construction.',
        coordinates: { lat: 39.6731, lng: -89.6901 },
        address: 'Old Route 66, Chatham, IL 62629',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/original_brick_road.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'chatham-railroad-museum',
        name: 'Chatham Railroad Museum',
        url: 'https://www.chathamrailroadmuseum.com/',
        description: 'Vintage locomotives and artifacts showcasing the railroad heritage that preceded the automobile age.',
        coordinates: { lat: 39.67446, lng: -89.70474 },
        address: '111 N Main St, Chatham, IL 62629',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/chatham_rr_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Carlinville
      {
        id: 'carlinville-downtown-square',
        name: 'Carlinville Downtown Square',
        url: 'https://www.carlinville.com/historical-carlinville',
        description: 'Charming town square and Sears Home district featuring well-preserved 19th and early 20th-century architecture.',
        coordinates: { lat: 39.2781, lng: -89.8812 },
        address: 'Public Square, Carlinville, IL 62626',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/downtown_carlinville.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cannonball-jail',
        name: 'Cannonball Jail',
        url: 'https://macoupincountyil.gov/tourism/cannonball-jail/',
        description: 'Civil War-era jail building with unique architecture and local historical significance.',
        coordinates: { lat: 39.27841, lng: -89.87930 },
        address: '221 E 1st S St, Carlinville, IL 62626',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/cannonball_jail.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Litchfield
      {
        id: 'ariston-cafe',
        name: 'Ariston Café',
        url: 'https://www.ariston-cafe.com/',
        description: 'One of the oldest Route 66 restaurants (since 1924), serving traditional American fare to four generations of travelers.',
        coordinates: { lat: 39.17753, lng: -89.66704 },
        address: '413 Old Route 66 N, Litchfield, IL 62056',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/ariston_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'litchfield-museum-welcome-center',
        name: 'Litchfield Museum',
        url: 'https://litchfieldmuseum.org/',
        description: 'Well-curated local museum with Route 66 exhibits, maps, and visitor information.',
        coordinates: { lat: 39.17703, lng: -89.66640 },
        address: '334 N Old Route 66, Litchfield, IL 62056',
        type: 'museum',
        image: 'https://crusinroute66.com/states/illinois/litchfield_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'jubelts-bakery',
        name: 'Jubelt\'s Bakery',
        url: 'https://www.jubelts.com/',
        description: 'Jubelt\'s is a Route 66 favorite, popular with travelers seeking a nostalgic, mom-and-pop food experience.',
        coordinates: { lat: 39.17698, lng: -89.66708 },
        address: '303 N Old Route 66, Litchfield, IL 62056',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/jubelts_bakery.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Mount Olive
      {
        id: 'soulsby-shell-station',
        name: 'Soulsby Shell Station',
        url: 'https://www.nps.gov/places/soulsby-service-station.htm',
        description: '1926 station, beautifully restored as one of the oldest surviving gas stations on Route 66.',
        coordinates: { lat: 39.06693, lng: -89.76417 },
        address: '710 1st St, Mount Olive, IL 62069',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/soulsby_service_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'union-miners-cemetery',
        name: 'Union Miners Cemetery',
        url: 'https://www.motherjonesmuseum.org/',
        description: 'Includes grave of labor martyr Mary Harris "Mother" Jones, honoring the area\'s coal mining heritage.',
        coordinates: { lat: 39.08067, lng: -89.73336 },
        address: '5585 Mt Olive Rd, Mt Olive, IL 62069',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/mother_jones_grave.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Staunton
      {
        id: 'henrys-rabbit-ranch',
        name: "Henry's Rabbit Ranch",
        url: 'https://www.henrysroute66.com/',
        description: 'Homage to Route 66 and Volkswagen Rabbits, with real rabbits and quirky automotive memorabilia.',
        coordinates: { lat: 39.00435, lng: -89.78190 },
        address: '1107 Historic Old Route 66, Staunton, IL 62088',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/henrys_rabbit_ranch.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Livingston
      {
        id: 'pink-elephant-antique-mall',
        name: "Pink Elephant Antique Mall",
        url: 'https://pinkelephantantiquemall.com/',
        description: 'The Pink Elephant Antique Mall is a quirky and beloved Route 66 roadside attraction with 50 antique vendors inside a former high school.',
        coordinates: { lat: 38.96058, lng: -89.76472 },
        address: '908 Veterans Memorial Dr, Livingston, IL 62058',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/pink_elephant.jpg?auto=compress&cs=tinysrgb&w=800'
      },

      // Hamel / Edwardsville
      {
        id: 'weezys-route66-bar-grill',
        name: "Weezy's Route 66 Bar & Grill",
        description: 'Former service station turned eatery, maintaining its automotive heritage while serving great food.',
        coordinates: { lat: 38.88829, lng: -89.84514 },
        address: '108 Old US Route 66, Hamel, IL 62046',
        type: 'food',
        image: 'https://crusinroute66.com/states/illinois/weezys_bar.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'wildey-theatre',
        name: 'Wildey Theatre',
        url: 'https://www.cityofedwardsville.com/769/Wildey-Theatre',
        description: '1909 restored vaudeville house presenting live performances in a beautifully preserved historic venue.',
        coordinates: { lat: 38.81418, lng: -89.95854 },
        address: '252 N Main St, Edwardsville, IL 62025',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/wildey_theatre.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'edwardsville-route66-mural',
        name: 'Route 66 Murals',
        description: 'Outdoor public art celebrating the highway\'s impact on the community and American culture.',
        coordinates: { lat: 38.8114, lng: -89.9531 },
        address: 'Main St, Edwardsville, IL 62025',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/illinois/edwardsville_mural.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Collinsville
      {
        id: 'worlds-largest-catsup-bottle',
        name: "World's Largest Catsup Bottle",
        description: '170-ft tall water tower shaped like a ketchup bottle, an iconic roadside landmark since 1949.',
        coordinates: { lat: 38.66215, lng: -89.98204 },
        address: '800 S Morrison Ave, Collinsville, IL 62234',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/illinois/largest_catsup_bottle.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Cahokia / East St. Louis
      {
        id: 'cahokia-mounds',
        name: 'Cahokia Mounds',
        url: 'https://cahokiamounds.org/',
        description: 'Ancient Native American city, UNESCO World Heritage Site showcasing pre-Columbian civilization.',
        coordinates: { lat: 38.65441, lng: -90.05962 },
        address: '30 Ramey St, Collinsville, IL 62234',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/illinois/cahokia_mounds.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'chain-of-rocks-bridge-il',
        name: 'Chain of Rocks Bridge',
        url: 'https://www.nps.gov/places/chain-of-rocks-bridge.htm',
        description: 'Old Route 66 bridge over the Mississippi with 22-degree bend, now a pedestrian walkway with stunning river views.',
        coordinates: { lat: 38.75940, lng: -90.15096 },
        address: '4205 W Chain of Rocks Rd, Granite City, IL',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/illinois/chain_of_rocks_bridge.jpg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'missouri',
    name: 'Missouri',
    fullName: 'Missouri',
    description: 'Home to some of the most well-preserved sections of Route 66 and classic Americana.',
    heroImage: '/boots_court_motel.jpg',
    attractions: [
      // St. Louis
      {
        id: 'chain-of-rocks-bridge-mo',
        name: 'Chain of Rocks Bridge',
        description: 'Historic bridge with a unique 22-degree bend, now a pedestrian walkway offering stunning views of the Mississippi River.',
        coordinates: { lat: 38.76419, lng: -90.18174 },
        address: '10840 Riverview Dr, St. Louis, MO 63137',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/missouri/chain_of_rocks_bridge.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'gateway-arch',
        name: 'Gateway Arch',
        url: 'https://www.gatewayarch.com',
        description: 'Iconic 630-foot tall stainless steel arch symbolizing the gateway to the American West, a must-see St. Louis landmark.',
        coordinates: { lat: 38.62534, lng: -90.18672 },
        address: '11 N 4th St, St. Louis, MO 63102',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/gateway_arch.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'ted-drewes-frozen-custard',
        name: 'Ted Drewes Frozen Custard',
        url: 'https://teddrewes.com',
        description: 'St. Louis institution serving thick frozen custard "concretes" since 1929, a beloved Route 66 tradition.',
        coordinates: { lat: 38.58944, lng: -90.30765 },
        address: '6726 Chippewa St, St. Louis, MO 63109',
        type: 'food',
        image: 'https://crusinroute66.com/states/missouri/ted_drewes_frozen_custard.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'donut-drive-in',
        name: 'Donut Drive-In',
        url: 'https://donutdrivein.com',
        description: 'Classic drive-in serving fresh donuts and coffee to Route 66 travelers since the 1950s.',
        coordinates: { lat: 38.59218, lng: -90.30283 },
        address: '6525 Chippewa St, St. Louis, MO 63109',
        type: 'food',
        image: 'https://crusinroute66.com/states/missouri/donut_drivein.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'national-museum-transportation',
        name: 'National Museum of Transportation',
        url: 'https://tnmot.org',
        description: 'Extensive collection of trains, planes, automobiles, and streetcars showcasing American transportation history.',
        coordinates: { lat: 38.57253, lng: -90.46248 },
        address: '2933 Barrett Station Rd, St. Louis, MO 63122',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/national_museum_transportation.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'carls-drive-in',
        name: "Carl's Drive-In",
        url: 'https://carlsdrivein.com',
        description: 'Classic drive-in restaurant serving burgers and shakes to Route 66 travelers since the 1950s.',
        coordinates: { lat: 38.61270, lng: -90.35435 },
        address: '9033 Manchester Rd, Brentwood, MO 63144',
        type: 'food',
        image: 'https://crusinroute66.com/states/missouri/carls_drivein.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'victory-raceway',
        name: 'Victory Raceway',
        url: 'https://www.victoryraceway.com',
        description: 'Historic racing venue that has hosted motorsports events along the Route 66 corridor.',
        coordinates: { lat: 38.56271, lng: -90.36463 },
        address: '8800 Watson Rd, St. Louis, MO 63119',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/victory_raceway.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'crestwood-bowl',
        name: 'Crestwood Bowl',
        url: 'https://www.crestwoodbowl.com',
        description: 'Vintage bowling alley that has entertained Route 66 travelers and locals for decades.',
        coordinates: { lat: 38.55594, lng: -90.38988 },
        address: '9526 Watson Rd, Crestwood, MO 63126',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/crestwood_bowl.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'village-bar',
        name: 'Village Bar',
        description: 'Historic tavern and gathering place for Route 66 travelers, maintaining its vintage atmosphere.',
        coordinates: { lat: 38.60332, lng: -90.44133 },
        address: '12247 Manchester Rd, Des Peres, MO 63131',
        type: 'food',
        image: 'https://crusinroute66.com/states/missouri/village_bar.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'big-chief-roadhouse',
        name: 'Big Chief Roadhouse',
        url: 'https://www.bigchiefstl.com/',
        description: 'Historic roadhouse and restaurant serving travelers along Route 66 with classic American fare.',
        coordinates: { lat: 38.58110, lng: -90.66046 },
        address: '17352 Manchester Rd, Wildwood, MO 63025',
        type: 'food',
        image: 'https://crusinroute66.com/states/missouri/big_chief_roadhouse.jpg?auto=compress&cs=tinysrgb&w=800'
      },

      // St. Clair
      {
        id: 'st-clair-visitor-center',
        name: 'St. Clair Visitor Center',
        description: 'Historic roadhouse from 1935 now serving as a visitor center with Route 66 exhibits and information.',
        coordinates: { lat: 38.34252, lng: -91.98538 },
        address: '109 E Springfield St, St. Clair, MO 63077',
        type: 'museum',
        image: 'https://crusinroute66.com/states/missouri/bridgehead_inn_visitor_center.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'river-overlook-trails',
        name: 'River Overlook Trail',
        description: 'Scenic overlook of the Missouri River with nature trails and vintage Route 66 signage.',
        coordinates: { lat: 38.2306, lng: -91.1540 },
        address: 'Scenic Overlook Dr, St. Clair, MO 63077',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/senic_overlook_park.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'worlds-largest-rocking-chair',
        name: "World's Largest Rocking Chair",
        url: 'https://fanning66outpost.com',
        description: 'Giant rocking chair at the Fanning Outpost General Store, a popular photo stop for Route 66 travelers.',
        coordinates: { lat: 38.03752, lng: -91.46964 },
        address: '1500 Fanning Rd, Fanning, MO 63640',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/worlds_largest_rockingchair.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'meramec-caverns',
        name: 'Meramec Caverns',
        url: 'https://www.americascave.com',
        description: 'Underground cave system heavily advertised along Route 66, featuring tours and Jesse James outlaw history.',
        coordinates: { lat: 38.24103, lng: -91.09201 },
        address: '1135 Hwy W, Sullivan, MO 63080',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/meramec_caverns.jpg?auto=compress&cs=tinysrgb&w=800'
      },

      // Cuba
      {
        id: 'route66-mural-city',
        name: 'Route 66 Mural City',
        description: 'Collection of vibrant outdoor murals celebrating Route 66 history and culture throughout the city.',
        coordinates: { lat: 38.1706, lng: -91.3540 },
        address: 'Downtown Cuba, MO 65453',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/missouri/mural_city_cuba.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'wagon-wheel-motel',
        name: 'Wagon Wheel Motel',
        url: 'https://www.wagonwheel66cuba.com',
        description: 'Historic motor court complex featuring vintage motel, café, and gas station from Route 66\'s golden era.',
        coordinates: { lat: 38.06471, lng: -91.39611 },
        address: '901 E Washington St, Cuba, MO 65453',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/missouri/wagon_wheel_cuba.jpg?auto=compress&cs=tinysrgb&w=800'
      },
       {
        id: 'route66-museum-library',
        name: 'Route 66 Museum',
        description: 'Route 66 museum housed within the local library, featuring exhibits on highway history and local heritage.',
        coordinates: { lat: 37.95095, lng: -92.77132 },
        address: '915 Pine St, Rolla, MO 65401',
        type: 'museum',
        image: 'https://crusinroute66.com/states/missouri/rolla_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'devils-elbow-bridge',
        name: "Devil's Elbow Bridge",
        description: 'Historic bridge with dangerous curves that gave this section its treacherous reputation among early travelers.',
        coordinates: { lat: 37.8439, lng: -92.0443 },
        address: 'Devils Elbow, MO 65457',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/missouri/devils_elbow.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'big-piney-river-overlook',
        name: 'Big Piney River Scenic Overlook',
        description: 'Scenic overlook offering beautiful views of the Big Piney River and surrounding Ozark landscape.',
        coordinates: { lat: 37.66405, lng: -92.05263 },
        address: 'Big Piney Overlook Rd, Devils Elbow, MO 65457',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/big_piney_overlook.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'munger-moss-motel',
        name: 'Munger Moss Motel',
        description: 'Iconic Route 66 motel famous for its vintage neon sign and authentic motor court experience.',
        coordinates: { lat: 37.68562, lng: -92.63978 },
        address: '1336 E Route 66, Lebanon, MO 65536',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/missouri/munger_moss_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },

      // Springfield
      {
        id: 'route66-springfield-visitor-center',
        name: 'Springfield Visitor Center',
        url: 'https://www.springfieldmo.org/route66',
        description: 'Comprehensive visitor center with Route 66 exhibits, maps, and information for travelers.',
        coordinates: { lat: 37.20942, lng: -93.28316 },
        address: '815 E St Louis St, Springfield, MO 65806',
        type: 'museum',
        image: 'https://crusinroute66.com/states/missouri/springfield_visitor_center.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-car-museum',
        name: 'Route 66 Car Museum',
        url: 'https://66carmuseum.com',
        description: 'Museum showcasing classic automobiles and memorabilia from the golden age of Route 66 travel.',
        coordinates: { lat: 37.20784, lng: -93.31362 },
        address: '1634 W College St, Springfield, MO 65806',
        type: 'museum',
        image: 'https://crusinroute66.com/states/missouri/springfield_auto_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'history-museum-square',
        name: 'History Museum on the Square',
        description: 'Local history museum located on the historic town square, featuring regional and Route 66 exhibits.',
        coordinates: { lat: 37.20951, lng: -93.29210 },
        address: '154 Park Central Square, Springfield, MO 65806',
        type: 'museum',
        image: 'https://crusinroute66.com/states/missouri/springfield_history_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'gillioz-theatre',
        name: 'Gillioz Theatre',
        url: 'https://gillioztheatre.com/',
        description: 'Beautifully restored 1926 theater showcasing live performances and maintaining its historic grandeur.',
        coordinates: { lat: 37.20912, lng: -93.29032 },
        address: '325 Park Central E, Springfield, MO 65806',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/missouri/gillioz_theatre.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'abou-ben-adhem-shrine',
        name: 'Abou Ben Adhem Shrine Mosque',
        url: 'https://www.abashrine.com/',
        description: 'Historic Moorish-style building serving as a Shrine temple and architectural landmark.',
        coordinates: { lat: 37.20955, lng: -93.28625 },
        address: '1010 N Benton Ave, Springfield, MO 65802',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/missouri/abou_ben_adhem_mosque.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'garys-gay-parita',
        name: "Gary's Gay Parita",
        url: 'https://garysgayparita.com',
        description: 'Restored vintage Sinclair gas station showcasing 1930s service station architecture and memorabilia.',
        coordinates: { lat: 37.19444, lng: -93.67934 },
        address: '14559 State Hwy 96, Ash Grove, MO 65604',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/garys_gay_parita.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      // Carthage
      {
        id: 'boots-court-motel',
        name: 'Boots Court Motel',
        url: 'https://bootscourt66.com/',
        description: 'Beautifully restored 1939 motor court motel representing the golden age of Route 66 travel.',
        coordinates: { lat: 37.17825, lng: -93.31441 },
        address: '107 S Business Route 71, Carthage, MO 64836',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/missouri/boots_court_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-drive-in-theatre',
        name: 'Route 66 Drive-In Theatre',
        url: 'http://66drivein.com/',
        description: 'Classic drive-in movie theater offering outdoor cinema experience under the stars.',
        coordinates: { lat: 37.17418, lng: -93.36905 },
        address: '17231 Old 66 Blvd, Carthage, MO 64836',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/route66_drivein_theatre.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'downtown-carthage-murals',
        name: 'Downtown Carthage Murals',
        description: 'Collection of vintage motels, classic neon signage, and colorful murals celebrating Route 66 heritage.',
        coordinates: { lat: 37.1153, lng: -93.3982 },
        address: 'Downtown Carthage, MO 64836',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/missouri/carthage_murals.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-mural-park-joplin',
        name: 'Route 66 Mural Park',
        description: 'Dedicated park featuring large-scale murals depicting Route 66 history and local culture.',
        coordinates: { lat: 37.0842, lng: -94.5133 },
        address: '602 S Main St, Joplin, MO 64801',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/missouri/mural_park_joplin.jpg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'kansas',
    name: 'Kansas',
    fullName: 'Kansas',
    description: 'Though Route 66 only crosses 13 miles of Kansas, it features some memorable stops.',
    heroImage: '/phillips66_station.jpeg',
    attractions: [
      // Galena
      {
        id: 'tow-mater',
        name: 'Tow Mater',
        url: 'https://en.wikipedia.org/wiki/Tow_Mater',
        description: 'Former Kan-O-Tex gas station turned café/gift shop with "Tow Mater" — the inspiration for Tow Mater from Pixar\'s Cars.',
        coordinates: { lat: 37.0756, lng: -94.6397 },
        address: '119 N Main St, Galena, KS 66739',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/kansas/tow_mater.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'galena-mining-museum',
        name: 'Galena Mining Museum',
        url: 'https://galenamuseum.com/',
        description: 'Housed in the old MKT depot with mining artifacts and local history showcasing the lead and zinc mining heritage.',
        coordinates: { lat: 37.0756, lng: -94.6397 },
        address: '319 W 7th St, Galena, KS 66739',
        type: 'museum',
        image: 'https://crusinroute66.com/states/kansas/galena_mining_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'gearhead-curios',
        name: 'Gearhead Curios',
        description: 'Retro gas station and souvenir shop with 50s/60s flair and roadside charm, perfect for Route 66 memorabilia.',
        coordinates: { lat: 37.0756, lng: -94.6397 },
        address: '202 N Main St, Galena, KS 66739',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/kansas/gearhead_curios.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'downtown-galena-murals-neon',
        name: 'Downtown Galena Murals & Neon',
        description: 'Colorful and nostalgic tributes to Route 66 and local heritage painted throughout the historic downtown area.',
        coordinates: { lat: 37.0756, lng: -94.6397 },
        address: 'Downtown Galena, KS 66739',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/kansas/galena_kansas_mural.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Riverton
      {
        id: 'old-riverton-store',
        name: 'Old Riverton Store',
        description: 'Opened in 1925, this general store is one of the few original Route 66 businesses still operating. Great place for gifts and snacks.',
        coordinates: { lat: 37.0956, lng: -94.6897 },
        address: '7109 SE Highway 66, Riverton, KS 66770',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/kansas/old_riverton_store.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'rainbow-bridge-riverton',
        name: 'Rainbow Bridge',
        description: 'A rare one-lane concrete "Marsh Arch" bridge built in 1923. Photo op icon of Kansas Route 66.',
        coordinates: { lat: 37.0956, lng: -94.6897 },
        address: 'SE Highway 66, Riverton, KS 66770',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/kansas/rainbow_bridge.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Baxter Springs
      {
        id: 'baxter-springs-gas-station',
        name: 'Baxter Springs Gas Station',
        url: 'https://www.nps.gov/places/baxter-springs-independent-oil-gas-service-station.htm',
        description: 'Beautifully restored 1930 station that now houses a visitor center and museum showcasing Route 66 history.',
        coordinates: { lat: 37.0256, lng: -94.7397 },
        address: '940 Military Ave, Baxter Springs, KS 66713',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/kansas/baxter_springs_phillips66.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'baxter-springs-heritage-center',
        name: 'Baxter Springs Heritage Center',
        url: 'https://www.baxterspringsmuseum.org/',
        description: 'Learn about the town\'s role in the Civil War, Native American history, and Route 66 heritage.',
        coordinates: { lat: 37.0256, lng: -94.7397 },
        address: '740 East Ave, Baxter Springs, KS 66713',
        type: 'museum',
        image: 'https://crusinroute66.com/states/kansas/baxter_springs_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'rainbow-bridge-mural',
        name: 'Rainbow Bridge Mural',
        description: 'Brightly painted mural celebrating the bridge and Route 66 culture, a perfect photo opportunity.',
        coordinates: { lat: 37.0256, lng: -94.7397 },
        address: 'Military Ave, Baxter Springs, KS 66713',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/kansas/baxter_springs_mural.jpg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'oklahoma',
    name: 'Oklahoma',
    fullName: 'Oklahoma',
    description: 'The state with the longest driveable stretch of Route 66, full of authentic roadside culture.',
    heroImage: '/catoosa_blue_whale.jpeg',
    attractions: [
      // Quapaw / Commerce
      {
        id: 'dairy-king',
        name: 'Dairy King',
        description: '1927 cottage-style station turned into a diner, serving classic American comfort food with vintage charm.',
        coordinates: { lat: 36.9506, lng: -94.7897 },
        address: '1 N Main St, Commerce, OK 74339',
        type: 'food',
        image: 'https://crusinroute66.com/states/oklahoma/dairy_king_commerce.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'mickey-mantle-home',
        name: "Mickey Mantle's Childhood Home",
        description: 'Birthplace of the baseball legend, now a museum celebrating the life of the Yankees Hall of Famer.',
        coordinates: { lat: 36.9306, lng: -94.8697 },
        address: '319 S Quincy St, Commerce, OK 74339',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/mickey_mantle_home.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'hole-in-wall-conoco',
        name: 'Hole in the Wall Conoco Station',
        description: 'Photogenic Route 66 stop with vintage architecture and classic roadside appeal.',
        coordinates: { lat: 36.9106, lng: -94.8897 },
        address: 'US-69, Commerce, OK 74339',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/hole_in_the_wall.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Miami
      {
        id: 'coleman-theatre',
        name: 'Coleman Theatre',
        url: 'https://thecolemantheatre.org/',
        description: 'Lavish 1929 vaudeville palace, still active with live performances in a beautifully restored venue.',
        coordinates: { lat: 36.8806, lng: -94.8797 },
        address: '103 N Main St, Miami, OK 74354',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/coleman_theatre.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'vintage-motels-neon-miami',
        name: 'Vintage Route 66 Motels & Neon',
        description: 'Retro feel of the "Gateway to Oklahoma" with classic neon signs and vintage motor courts.',
        coordinates: { lat: 36.8806, lng: -94.8797 },
        address: 'Main St, Miami, OK 74354',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/riviera_courts.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Afton
      {
        id: 'afton-station-packard-museum',
        name: 'Afton Station & Packard Museum',
        url: 'https://www.aftonstationpackards.com/',
        description: 'Service station with classic cars and memorabilia, showcasing automotive history along Route 66.',
        coordinates: { lat: 36.6906, lng: -95.0197 },
        address: '12 SE 1st St, Afton, OK 74331',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/afton_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'buffalo-ranch',
        name: 'Buffalo Ranch',
        description: 'Large roadside souvenir stop with fiberglass buffalo and animals, a classic Route 66 tourist attraction.',
        coordinates: { lat: 36.6906, lng: -95.0197 },
        address: 'US-69, Afton, OK 74331',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/buffalo_ranch.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Vinita
      {
        id: 'clantons-cafe',
        name: "Clanton's Café",
        url: 'https://clantonscafe.com/',
        description: 'Open since 1927, one of the oldest restaurants on Route 66, serving traditional American fare.',
        coordinates: { lat: 36.6406, lng: -95.1597 },
        address: '319 E Illinois Ave, Vinita, OK 74301',
        type: 'food',
        image: 'https://crusinroute66.com/states/oklahoma/clantons_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cherokee-nation-welcome-center',
        name: 'Cherokee Nation Welcome Center',
        url: 'https://visitcherokeenation.com/',
        description: 'Cultural exhibits and visitor info showcasing Cherokee heritage and history in northeastern Oklahoma.',
        coordinates: { lat: 36.6406, lng: -95.1597 },
        address: '16051 E 350 Rd, Vinita, OK 74301',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/cherokee_welcome_center.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Foyil
      {
        id: 'totem-pole-park',
        name: 'Totem Pole Park',
        url: 'https://www.nps.gov/places/ed-galloways-totem-pole-park.htm',
        description: 'Features the world\'s largest concrete totem pole, built by Ed Galloway, a unique folk art masterpiece.',
        coordinates: { lat: 36.4306, lng: -95.5197 },
        address: '21300 E 4th St, Foyil, OK 74031',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/totem_pole_park.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'andy-payne-statue',
        name: 'Andy Payne Statue',
        url: 'https://en.wikipedia.org/wiki/Andy_Payne',
        description: 'Commemorates the 1928 transcontinental footrace winner, celebrating this remarkable athletic achievement.',
        coordinates: { lat: 36.4306, lng: -95.5197 },
        address: 'Main St, Foyil, OK 74031',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/andy_payne_statue.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Chelsea / Bushyhead
      {
        id: 'chelsea-motel-ruins',
        name: 'Chelsea Motel Ruins',
        url: 'https://www.nps.gov/places/chelsea-motel.htm',
        description: 'Remnants of Route 66\'s golden age, offering a glimpse into the highway\'s storied past.',
        coordinates: { lat: 36.5306, lng: -95.4297 },
        address: 'US-66, Chelsea, OK 74016',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/chelsea_motel_ruins.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pryor-creek-bridge',
        name: 'Pryor Creek Bridge',
        description: 'Historic steel bridge with original 1926 construction, representing early Route 66 infrastructure.',
        coordinates: { lat: 36.5106, lng: -95.4497 },
        address: 'Old Route 66, Bushyhead, OK 74016',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/pryor_creek_bridge.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Claremore
      {
        id: 'will-rogers-memorial',
        name: 'Will Rogers Memorial Museum',
        url: 'https://www.willrogers.com/',
        description: 'Tribute to the cowboy-philosopher, showcasing the life and legacy of America\'s beloved humorist.',
        coordinates: { lat: 36.3106, lng: -95.6197 },
        address: '1720 W Will Rogers Blvd, Claremore, OK 74017',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/will_rogers_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'jm-davis-arms-museum',
        name: 'J.M. Davis Arms & Historical Museum',
        url: 'https://www.thegunmuseum.com/',
        description: 'Massive private gun collection with over 20,000 firearms and historical artifacts.',
        coordinates: { lat: 36.3106, lng: -95.6197 },
        address: '330 N J.M. Davis Blvd, Claremore, OK 74017',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/jm_davis_arms_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'will-rogers-hotel',
        name: 'Will Rogers Hotel',
        url: 'https://www.magnusonhotels.com/hotel/will-rogers-inn/',
        description: 'Historic Will Rogers Hotel was originally built in 1930 with a Spanish Mission style and a prominent bell tower. ',
        coordinates: { lat: 36.30069, lng: -95.62461 },
        address: '940 S Lynn Riggs Blvd, Claremore, OK 74017',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/oklahoma/will_rogers_hotel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Catoosa
      {
        id: 'blue-whale-catoosa',
        name: 'Blue Whale of Catoosa',
        description: 'One of Route 66\'s most iconic photo stops, a giant blue whale sculpture built in the 1970s.',
        coordinates: { lat: 36.1898, lng: -95.7439 },
        address: '2680 N Highway 66, Catoosa, OK 74015',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/catoosa_blue_whale.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'arrowood-trading-post',
        name: 'Arrowood Trading Post',
        description: 'Classic roadside stop from the 50s, now atmospheric ruins that evoke Route 66\'s golden era.',
        coordinates: { lat: 36.1898, lng: -95.7439 },
        address: 'N Highway  66, Catoosa, OK 74015',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/arrowood_trading_post.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Tulsa
      {
        id: 'meadow-gold-sign',
        name: 'Meadow Gold Sign',
        description: 'Restored neon sign on a brick base, representing classic Route 66 advertising and roadside culture.',
        coordinates: { lat: 36.1539, lng: -95.9925 },
        address: '1834 S Peoria Ave, Tulsa, OK 74120',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/meadow_gold_sign.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-historical-village',
        name: 'Route 66 Historical Village',
        url: 'https://www.route66village.com/',
        description: 'Replica oil derrick, train car, depot, and more showcasing Oklahoma\'s oil boom and Route 66 heritage.',
        coordinates: { lat: 36.1539, lng: -95.9925 },
        address: '3770 Southwest Blvd, Tulsa, OK 74107',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/historical_village_tulsa.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'mother-road-market',
        name: 'Mother Road Market',
        url: 'https://www.motherroadmarket.com/',
        description: 'Modern food hall with 66-themed art, celebrating contemporary Route 66 culture and local cuisine.',
        coordinates: { lat: 36.1539, lng: -95.9925 },
        address: '1124 S Lewis Ave, Tulsa, OK 74104',
        type: 'food',
        image: 'https://crusinroute66.com/states/oklahoma/mother_road_market.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cyrus-avery-plaza',
        name: 'Cyrus Avery Centennial Plaza',
        description: 'Named for the "Father of Route 66," featuring monuments and exhibits honoring the highway\'s creation.',
        coordinates: { lat: 36.1539, lng: -95.9925 },
        address: '1 W 1st St, Tulsa, OK 74103',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/cyrus_avery_plaza.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'golden-driller',
        name: 'Golden Driller',
        description: 'Giant statue of an oil worker, symbolizing Tulsa\'s role as the "Oil Capital of the World."',
        coordinates: { lat: 36.1539, lng: -95.9925 },
        address: '4145 E 21st St, Tulsa, OK 74114',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/golden_driller.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'admiral-twin-drive-in',
        name: 'Admiral Twin Drive-In',
        url: 'https://admiraltwindrivein.com/',
        description: 'Open-air movie experience from 1951, offering classic drive-in entertainment under the stars.',
        coordinates: { lat: 36.1539, lng: -95.9925 },
        address: '7355 E Easton St, Tulsa, OK 74115',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/admiral_twin_drivein.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Sapulpa
      {
        id: 'waite-phillips-filling-station',
        name: 'Waite Phillips Filling Station Museum',
        description: 'Restored 1920s station showcasing early automotive service and Phillips Petroleum history.',
        coordinates: { lat: 35.9939, lng: -96.1125 },
        address: '1 E Dewey Ave, Sapulpa, OK 74066',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/waite_phillips_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'sapulpa-historical-museum',
        name: 'Sapulpa Historical Museum',
        url: 'https://www.sapulpahistory.org/',
        description: 'Includes Route 66 artifacts and documents chronicling the highway\'s impact on the community.',
        coordinates: { lat: 35.9939, lng: -96.1125 },
        address: '100 E Lee Ave, Sapulpa, OK 74066',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/sapulpa_historical_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'rock-creek-bridge-sapulpa',
        name: 'Rock Creek Bridge',
        description: '1921 bridge used by early Route 66 traffic, representing the highway\'s original infrastructure.',
        coordinates: { lat: 35.9939, lng: -96.1125 },
        address: 'Old Route 66, Sapulpa, OK 74066',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/rock_creek_bridge.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Stroud
      {
        id: 'rock-cafe',
        name: 'Rock Café',
        url: 'https://rockcafert66.com/index.html',
        description: 'Historic 1939 diner rebuilt after a 2008 fire; inspiration for Sally in Pixar\'s Cars movie.',
        coordinates: { lat: 35.7539, lng: -96.6625 },
        address: '114 W Main St, Stroud, OK 74079',
        type: 'food',
        image: 'https://crusinroute66.com/states/oklahoma/rock_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'skyliner-motel',
        name: 'Skyliner Motel',
        description: 'Classic neon roadside lodging representing the golden age of Route 66 motor courts.',
        coordinates: { lat: 35.7539, lng: -96.6625 },
        address: '717 W Main St, Stroud, OK 74079',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/oklahoma/skyliner_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Chandler
      {
        id: 'route66-interpretive-center',
        name: 'Route 66 Interpretive Center',
        url: 'https://www.route66interpretivecenter.org/',
        description: 'Interactive exhibits with music, cars, and history celebrating the Mother Road\'s cultural impact.',
        coordinates: { lat: 35.7039, lng: -96.8825 },
        address: '400 E Route 66, Chandler, OK 74834',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/interpretive_center.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'lincoln-motel',
        name: 'Lincoln Motel',
        url: 'https://lincolnmotelon66.com/',
        description: 'Neon-lit, mid-century stopover preserving the classic Route 66 motor court experience.',
        coordinates: { lat: 35.7039, lng: -96.8825 },
        address: '740 E Route 66, Chandler, OK 74834',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/oklahoma/lincoln_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'chandler-murals-downtown',
        name: 'Downtown Chandler Murals',
        description: 'Celebrates Route 66 heritage with colorful public art and preserved historic buildings.',
        coordinates: { lat: 35.7039, lng: -96.8825 },
        address: 'Main St, Chandler, OK 74834',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/chandler_murals.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Warwick
      {
        id: 'seaba-station-motorcycle-museum',
        name: 'Seaba Station Motorcycle Museum',
        description: 'Old service station turned into a vintage motorcycle museum showcasing classic bikes and memorabilia.',
        coordinates: { lat: 35.6439, lng: -97.0225 },
        address: '3022 Seaba Station Rd, Warwick, OK 74074',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/seaba_station_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Wellston / Luther
      {
        id: 'threatt-filling-station',
        name: 'Threatt Filling Station',
        url: 'https://threattfillingstation.org/',
        description: 'One of the first Black-owned businesses along Route 66, representing important civil rights history.',
        coordinates: { lat: 35.6939, lng: -97.0625 },
        address: 'Route 66, Wellston, OK 74881',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/threatt_filling_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'sonic-drive-in-hq',
        name: 'Sonic Drive-In HQ',
        description: 'Nearby modern nod to American car culture, representing the evolution of roadside dining.',
        coordinates: { lat: 35.6639, lng: -97.1925 },
        address: '300 Johnny Bench Dr, Oklahoma City, OK 73104',
        type: 'food',
        image: 'https://crusinroute66.com/states/oklahoma/sonic_drivein_hq.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Arcadia
      {
        id: 'round-barn-arcadia',
        name: 'Round Barn',
        url: 'https://arcadiaroundbarn.com/',
        description: '1898 round barn restored and filled with exhibits, now a Route 66 interpretive center.',
        coordinates: { lat: 35.6539, lng: -97.3225 },
        address: '107 E Highway 66, Arcadia, OK 73007',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/round_barn.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pops-soda-ranch',
        name: "Pop's 66 Soda Ranch",
        url: 'https://pops66.com/',
        description: 'Giant soda bottle sculpture and over 700 kinds of pop, a modern roadside attraction celebrating American soda culture.',
        coordinates: { lat: 35.6539, lng: -97.3225 },
        address: '660 W Highway 66, Arcadia, OK 73007',
        type: 'food',
        image: 'https://crusinroute66.com/states/oklahoma/pops66_soda_ranch.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Edmond
      {
        id: 'arcadia-lake-parkway',
        name: 'Arcadia Lake Parkway',
        description: 'Scenic detour offering natural beauty and recreational opportunities near Route 66.',
        coordinates: { lat: 35.6139, lng: -97.4825 },
        address: 'Arcadia Lake, Edmond, OK 73034',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/arcadia_lake_parkway.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'downtonw-edmond-statues-murals',
        name: 'Downtown Statues, Murals & Diners',
        description: 'Honor Route 66 and oil history with public art and classic dining establishments.',
        coordinates: { lat: 35.6139, lng: -97.4825 },
        address: 'Downtown Edmond, OK 73034',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/downtown_edmond.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Oklahoma City
      {
        id: 'route66-park-okc',
        name: 'Route 66 Park',
        description: 'Walkway, plaza, and overlook celebrating the Mother Road with interpretive displays and monuments.',
        coordinates: { lat: 35.4675, lng: -97.5164 },
        address: '2101 NW 23rd St, Oklahoma City, OK 73107',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/route66_park_okc.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'milk-bottle-grocery',
        name: 'Milk Bottle Grocery',
        url: 'https://www.nps.gov/places/milk-bottle-grocery.htm',
        description: 'Tiny wedge-shaped building with a giant milk bottle on top, an iconic piece of roadside architecture.',
        coordinates: { lat: 35.4675, lng: -97.5164 },
        address: '2426 N Classen Blvd, Oklahoma City, OK 73106',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/milk_bottle_grocery.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'oklahoma-state-capitol',
        name: 'Oklahoma State Capitol',
        url: 'https://www.okhistory.org/learn/capitol',
        description: 'Accessible via 66 bypass, featuring the only state capitol with working oil wells on its grounds.',
        coordinates: { lat: 35.4675, lng: -97.5164 },
        address: '2300 N Lincoln Blvd, Oklahoma City, OK 73105',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/ok_state_capitol.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // El Reno
      {
        id: 'sids-diner',
        name: 'Sid\'s Diner',
        url: 'https://sidsdinerok.com/',
        description: 'Home of the fried-onion burger, a local culinary tradition that started during the Great Depression.',
        coordinates: { lat: 35.5310, lng: -97.9553 },
        address: '300 S Choctaw Ave, El Reno, OK 73036',
        type: 'food',
        image: 'https://crusinroute66.com/states/oklahoma/sids_diner.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'fort-reno',
        name: 'Fort Reno',
         url: 'https://www.fortreno.org/',
        description: 'Historic Army post and cemetery with WWII German POW camp, showcasing military history.',
        coordinates: { lat: 35.5320, lng: -97.9553 },
        address: '7107 W Cheyenne St, El Reno, OK 73036',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/fort_reno.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'railroad-museum-oklahoma',
        name: 'Railroad Museum of Oklahoma',
        url: 'https://oklahomarailwaymuseum.org/',
        description: 'Showcasing the railroad heritage that preceded the automobile age along this transportation corridor.',
        coordinates: { lat: 35.5320, lng: -97.9553 },
        address: '702 N Washington Ave, El Reno, OK 73036',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/railroad_museum_oklahoma.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Weatherford
      {
        id: 'stafford-air-space-museum',
        name: 'Stafford Air & Space Museum',
        url: 'https://www.staffordmuseum.org/',
        description: 'Named after astronaut Thomas Stafford, featuring aerospace exhibits and Oklahoma\'s space heritage.',
        coordinates: { lat: 35.5264, lng: -98.7070 },
        address: '3000 E Logan Rd, Weatherford, OK 73096',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/stafford_air_space_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'wind-energy-park',
        name: 'Wind Energy Park',
        url: 'https://cityofweatherford.com/wind-towers/',
        description: 'Giant turbine display showcasing Oklahoma\'s leadership in renewable energy production.',
        coordinates: { lat: 35.5264, lng: -98.7070 },
        address: 'US-54, Weatherford, OK 73096',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/wind_energy_park.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Clinton
      {
        id: 'oklahoma-route66-museum',
        name: 'Oklahoma Route 66 Museum',
        url: 'https://www.okhistory.org/sites/route66',
        description: 'One of the most extensive Route 66 museums, chronicling the highway\'s complete history and cultural impact.',
        coordinates: { lat: 35.5095, lng: -98.9687 },
        address: '2229 W Gary Blvd, Clinton, OK 73601',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/clinton_route66_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'vintage-motels-drive-ins-clinton',
        name: 'Vintage Motels and Drive-Ins',
        description: 'Classic Route 66 accommodations and dining establishments preserving mid-century roadside culture.',
        coordinates: { lat: 35.5095, lng: -98.9687 },
        address: 'W Gary Blvd, Clinton, OK 73601',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/glancy_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Elk City
      {
        id: 'national-route66-museum',
        name: 'National Route 66 Museum',
        url: 'https://www.elkcity.com/city-hall/departments/elk-city-museum-complex/',
        description: 'Life-size old town streetscape and exhibits recreating the Route 66 experience through multiple eras.',
        coordinates: { lat: 35.4120, lng: -99.4043 },
        address: '2717 W 3rd St, Elk City, OK 73644',
        type: 'museum',
        image: 'https://crusinroute66.com/states/oklahoma/national_route66_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'casa-grande-hotel',
        name: 'Casa Grande Hotel',
        description: 'The only high rise hotel on Route 66 between Oklahoma City and Amarillo.',
        coordinates: { lat: 35.41196, lng: -99.40459 },
        address: '204 N Main St, Elk City, OK 73644',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/casa_grande_hotel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Sayre
      {
        id: 'sayre-city-hall',
        name: 'Sayre City Hall',
        url: 'http://www.sayreok.net/',
        description: 'Featured in The Grapes of Wrath film, representing Depression-era architecture and Dust Bowl history.',
        coordinates: { lat: 35.2906, lng: -99.6401 },
        address: '110 E Poplar Ave, Sayre, OK 73662',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/sayre_city_hall.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'beckham-county-courthouse',
        name: 'Beckham County Courthouse',
        url: 'https://www.nps.gov/places/beckham-county-courthouse.htm',
        description: 'Beautiful example of early 20th-century courthouse architecture in western Oklahoma.',
        coordinates: { lat: 35.2906, lng: -99.6401 },
        address: '302 E Main St, Sayre, OK 73662',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/beckham_county_courthouse.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Erick
      {
        id: 'sandhills-curiosity-shop',
        name: 'Sandhills Curiosity Shop',
        description: 'A vibrant roadside attraction housed in Erick’s oldest brick building, previously a meat market, now packed with vintage signs and eccentric treasures',
        coordinates: { lat: 35.2139, lng: -99.8701 },
        address: '201 S Sheb Wooley Ave, Erick, OK 73645',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/sandhills_curiosity_shop.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'erick-vintage-murals',
        name: 'Downtown Vintage Murals',
        description: 'Celebrating the town\'s Route 66 heritage and western Oklahoma culture with colorful public art.',
        coordinates: { lat: 35.2139, lng: -99.8701 },
        address: 'Main St, Erick, OK 73645',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/oklahoma/erick_ok_murals.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Texola
      {
        id: 'one-room-jail',
        name: 'One Room Jail',
        description: 'Tiny old lockup on the edge of town, representing frontier justice in this border community.',
        coordinates: { lat: 35.2239, lng: -99.9801 },
        address: 'Main St, Texola, OK 73949',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/oklahoma/one_room_jail.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'magnolia-service-station',
        name: 'Magnolia Service Station',
        url: 'https://en.wikipedia.org/wiki/Magnolia_Service_Station',
        description: 'Rustic building just before the Texas border, marking the end of Oklahoma\'s Route 66 journey.',
        coordinates: { lat: 35.2239, lng: -99.9801 },
        address: 'Route 66, Texola, OK 73949',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/oklahoma/magnolia_service_station.jpg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'texas',
    name: 'Texas',
    fullName: 'Texas',
    description: 'Experience the wide open spaces and big sky country of the Texas Panhandle.',
    heroImage: '/cadillac_ranch.jpeg',
    attractions: [
      // Shamrock
      {
        id: 'u-drop-inn-cafe',
        name: 'U-Drop Inn Café',
        url: 'https://www.nps.gov/places/tower-station-and-u-drop-inn-cafe.htm',
        description: '1936 Art Deco gas station and café; featured in Cars as Ramone\'s Body Shop. A stunning example of roadside architecture.',
        coordinates: { lat: 35.22686, lng: -100.24881 },
        address: '101 E 12th St, Shamrock, TX 79079',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/texas/u_drop_inn.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'blarney-stone-replica',
        name: 'Blarney Stone Replica',
        description: 'Gift from Ireland embedded in the wall at Elmore Park, celebrating the town\'s Irish heritage.',
        coordinates: { lat: 35.2094, lng: -100.2463 },
        address: '400 E 2nd St, Shamrock, TX 79079',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/texas/blarney_stone_replica.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pioneer-west-museum',
        name: 'Pioneer West Museum',
        description: 'Local artifacts and Route 66 memorabilia showcasing the history of the Texas Panhandle and the Mother Road.',
        coordinates: { lat: 35.2094, lng: -100.2463 },
        address: '204 N Madden St, Shamrock, TX 79079',
        type: 'museum',
        image: 'https://crusinroute66.com/states/texas/pioneer_west_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Lela
      {
        id: 'lela-abandoned-gas-station',
        name: 'Abandoned Gas Station',
        description: 'Classic small-town Route 66 remnants representing the highway\'s impact on rural Texas communities.',
        coordinates: { lat: 35.1894, lng: -100.4163 },
        address: 'Main St, Lela, TX 79085',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/lela_gas_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // McLean
      {
        id: 'devils-rope-museum',
        name: "Devil's Rope Museum",
        url: 'https://www.barbwiremuseum.com/',
        description: 'Museum dedicated to barbed wire and Route 66 history, showcasing the tools that tamed the American West.',
        coordinates: { lat: 35.2294, lng: -100.5963 },
        address: '100 Kingsley St, McLean, TX 79057',
        type: 'museum',
        image: 'https://crusinroute66.com/states/texas/devils_rope_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'mclean-old-phillips-66-station',
        name: 'Old Phillips 66 Gas Station',
        url: 'https://www.nps.gov/places/mclean-commercial-historic-district.htm',
        description: 'One of the earliest restored gas stations on Route 66, representing the golden age of automobile travel.',
        coordinates: { lat: 35.2294, lng: -100.5963 },
        address: '1st St, McLean, TX 79057',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/texas/mclean_gas_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'historic-avalon-theater',
        name: 'Historic Avalon Theater',
        description: 'A vintage theater facade from the heyday of the road, evoking the entertainment culture of Route 66.',
        coordinates: { lat: 35.2294, lng: -100.5963 },
        address: '113 N Main St, McLean, TX 79057',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/avalon_theater_ruins.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Alanreed
      {
        id: 'alanreed-restored-gas-station',
        name: 'Restored Gas Station',
        description: 'Quaint photo op in a tiny Texas town, representing small-town Route 66 heritage.',
        coordinates: { lat: 35.1894, lng: -100.7563 },
        address: 'Main St, Alanreed, TX 79002',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/texas/alanreed_gas_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Groom
      {
        id: 'groom-leaning-water-tower',
        name: 'Leaning Water Tower',
        description: 'Tilted as a roadside gimmick to attract travelers, this famous landmark appears to defy gravity.',
        coordinates: { lat: 35.2094, lng: -101.1063 },
        address: 'I-40 Frontage Rd, Groom, TX 79039',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/texas/leaning_water_tower.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'britten-usa-truck-stop-ruins',
        name: 'Britten USA Truck Stop',
        description: 'Weathered remains of a 66-era business, evoking the rise and decline of roadside commerce.',
        coordinates: { lat: 35.2094, lng: -101.1063 },
        address: 'I-40 Frontage Rd, Groom, TX 79039',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/brittenusa_truck_stop.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cross-at-groom',
        name: 'The Cross at Groom',
        url: 'https://crossministries.net/',
        description: '190-ft tall cross with religious sculpture garden, visible for miles across the Texas plains.',
        coordinates: { lat: 35.2094, lng: -101.1063 },
        address: 'I-40 Frontage Rd, Groom, TX 79039',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/texas/cross_at_groom.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      // Conway
      {
        id: 'conway-inn-trading-post',
        name: 'Conway Inn & Trading Post',
        description: 'See the remanents of an old quirky roadside souviner shop.',
        coordinates: { lat: 35.2194, lng: -101.3763 },
        address: 'I-40 Frontage Rd, Conway, TX 79015',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/conway_inn.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Amarillo
      {
        id: 'big-texan-steak-ranch',
        name: 'Big Texan Steak Ranch',
        url: 'https://www.bigtexan.com/',
        description: 'Famous for its 72 oz. steak challenge and Western kitsch, a must-visit Texas roadside institution.',
        coordinates: { lat: 35.1872, lng: -101.9871 },
        address: '7701 I-40 E, Amarillo, TX 79118',
        type: 'food',
        image: 'https://crusinroute66.com/states/texas/big_texan_steakhouse.jpg?auto=compress&cs=tinysrgb&w=800'
      },
       {
        id: 'slug-bug-ranch',
        name: 'Slug Bug Ranch',
        url: 'https://www.bigtexan.com/slugbugranch/',
        description: 'VW Beetle cars buried nose-first in the ground, parody of Cadillac Ranch celebrating the iconic Volkswagen.',
        coordinates: { lat: 35.2194, lng: -101.3763 },
        address: '7701 I-40 E, Amarillo, TX 79118',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/texas/slug_bug_ranch.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'historic-6th-street-district',
        name: 'Historic 6th Street District',
        url: 'https://www.nps.gov/places/route-66-sixth-street-historic-district.htm',
        description: 'Original Route 66 alignment through Amarillo, lined with vintage shops, murals, diners and Western heritage.',
        coordinates: { lat: 35.1872, lng: -101.9871 },
        address: '2601 SW 6th Ave, Amarillo, TX 79106',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/texas/historic_6th_street.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'jack-sisemore-rv-museum',
        name: 'Jack Sisemore RV Museum',
        url: 'https://www.rvmuseum.net/',
        description: 'Free museum of vintage RVs and campers showcasing the evolution of American recreational vehicle travel.',
        coordinates: { lat: 35.1872, lng: -101.9871 },
        address: '14501 I-27, Amarillo, TX 79119',
        type: 'museum',
        image: 'https://crusinroute66.com/states/texas/rv_museum_mural.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'second-amendment-cowboy',
        name: 'Second Amendment Cowboy',
        description: 'Funky roadside cowboy statue set near the famous Cadillac Ranch art exhibit & a novelty gift shop.',
        coordinates: { lat: 35.18628, lng: -101.97392 },
        address: '2601 Hope Rd, Amarillo, TX 79124',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/texas/second_amendment_cowboy.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cadillac-ranch-amarillo',
        name: 'Cadillac Ranch',
        description: 'Iconic public art installation of 10 Cadillacs buried nose-first in a field. Bring spray paint to add your mark!',
        coordinates: { lat: 35.1872, lng: -101.9871 },
        address: '13651 I-40 Frontage Rd, Amarillo, TX 79124',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/texas/cadillac_ranch.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Wildorado
      {
        id: 'wildorado-grain-elevator',
        name: 'Old Grain Elevator',
        description: 'Photo stop near ghost town-like buildings, evoking the loneliness and beauty of the Texas plains.',
        coordinates: { lat: 35.1972, lng: -102.1871 },
        address: 'I-40 Frontage Rd, Wildorado, TX 79098',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/wildorado_grain_elevator.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Adrian
      {
        id: 'midpoint-cafe',
        name: 'Midpoint Café',
        description: 'Exactly halfway between Chicago and Santa Monica on Route 66. Try the famous "ugly crust pie."',
        coordinates: { lat: 35.2772, lng: -102.6671 },
        address: '305 W Historic Route 66, Adrian, TX 79001',
        type: 'food',
        image: 'https://crusinroute66.com/states/texas/midpoint_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-midpoint-sign',
        name: 'Route 66 Midpoint Sign',
        description: 'Popular selfie spot: "1139 miles to Chicago / 1139 miles to Los Angeles" marking the exact center of Route 66.',
        coordinates: { lat: 35.2772, lng: -102.6671 },
        address: '305 W Route 66, Adrian, TX 79001',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/texas/midpoint_sign.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'bent-door-cafe',
        name: 'Bent Door Café (closed)',
        description: 'Abandoned but historic structure with a door from an old air traffic control tower, now a photogenic ruin.',
        coordinates: { lat: 35.2772, lng: -102.6671 },
        address: '104 W Historic Route 66, Adrian, TX 79001',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/bent_door_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Glenrio (Ghost Town)
      {
        id: 'texas-new-mexico-state-line',
        name: 'Texas/New Mexico State Line',
        description: 'Once-thriving town now a ghost town split by the border, representing the boom and bust of Route 66 communities.',
        coordinates: { lat: 35.1872, lng: -103.0471 },
        address: 'Route 66, Glenrio, TX/NM',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/texas/welcome_new_mexico.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'little-juarez-cafe',
        name: 'Little Juarez Café',
        description: 'Deserted structures with eerie roadside charm, frozen in time at the Texas-New Mexico border.',
        coordinates: { lat: 35.1872, lng: -103.0471 },
        address: '91 U.S. Rte 66, Glenrio, NM 88434',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/little_juarez_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'glenrio-historic-district',
        name: 'Glenrio Historic District',
        url: 'https://www.nps.gov/places/glenrio-historic-district.htm',
        description: 'Listed on the National Register of Historic Places, preserving this important Route 66 ghost town.',
        coordinates: { lat: 35.1872, lng: -103.0471 },
        address: 'Route 66, Glenrio, TX/NM',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/texas/glenrio_historic_district.jpg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'new-mexico',
    name: 'New Mexico',
    fullName: 'New Mexico',
    description: 'The Land of Enchantment offers stunning landscapes and rich Native American culture.',
    heroImage: '/route66_diner_abq.jpg',
    attractions: [
      // Tucumcari
      {
        id: 'tee-pee-curios',
        name: 'Tee Pee Curios',
        description: 'Neon-lit gift shop with original pueblo-style architecture, a classic Route 66 trading post experience.',
        coordinates: { lat: 35.1717, lng: -103.7256 },
        address: '924 E Route 66 Blvd, Tucumcari, NM 88401',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/tepee_curios.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'blue-swallow-motel',
        name: 'Blue Swallow Motel',
        url: 'https://blueswallowmotel.com/',
        description: 'One of Route 66\'s most iconic and continuously operating motels since 1939, featuring vintage neon and authentic motor court charm.',
        coordinates: { lat: 35.1717, lng: -103.7256 },
        address: '815 E Route 66 Blvd, Tucumcari, NM 88401',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/newmexico/blue_swallow_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'motel-safari',
        name: 'Motel Safari',
        url: 'https://themotelsafari.com/',
        description: 'Restored vintage 1960s motor court with retro rooms, offering an authentic mid-century Route 66 lodging experience.',
        coordinates: { lat: 35.1717, lng: -103.7256 },
        address: '722 E Route 66 Blvd, Tucumcari, NM 88401',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/newmexico/motel_safari.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-monument',
        name: 'Route 66 Monument',
        description: 'Dozens of public murals across town celebrating Route 66 history, Western heritage, and local culture.',
        coordinates: { lat: 35.1717, lng: -103.7256 },
        address: 'Downtown Tucumcari, NM 88401',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/route_66_monument.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'mesalands-dinosaur-museum',
        name: 'Mesalands Dinosaur Museum',
        url: 'https://www.mesalands.edu/community/dinosaur-museum/',
        description: 'Fossils, art, and paleontology exhibits showcasing the prehistoric heritage of the American Southwest.',
        coordinates: { lat: 35.1717, lng: -103.7256 },
        address: '222 E Laughlin Ave, Tucumcari, NM 88401',
        type: 'museum',
        image: 'https://crusinroute66.com/states/newmexico/mesalands_dino_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'new-mexico-route66-museum',
        name: 'New Mexico Route 66 Museum',
        url: 'http://www.nmrt66museum.org/',
        description: 'Small but focused display inside the Convention Center chronicling Route 66\'s impact on New Mexico.',
        coordinates: { lat: 35.1717, lng: -103.7256 },
        address: '1500 W Route 66 Blvd, Tucumcari, NM 88401',
        type: 'museum',
        image: 'https://crusinroute66.com/states/newmexico/nm_route66_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Santa Rosa
      {
        id: 'blue-hole',
        name: 'Blue Hole',
        url: 'https://www.santarosabluehole.com/',
        description: '80-foot deep spring-fed swimming hole with crystal clear water, a natural artesian spring and popular scuba diving destination.',
        coordinates: { lat: 34.9398, lng: -104.6789 },
        address: '1085 Blue Hole Rd, Santa Rosa, NM 88435',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/blue_hole.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-auto-museum',
        name: 'Route 66 Auto Museum',
        description: 'Classic cars and Route 66 memorabilia showcasing the golden age of American automobile travel.',
        coordinates: { lat: 34.9398, lng: -104.6789 },
        address: '2436 Historic Route 66, Santa Rosa, NM 88435',
        type: 'museum',
        image: 'https://crusinroute66.com/states/newmexico/route66_auto_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'comet-ii-restaurant',
        name: 'Comet II Restaurant',
        description: 'Family-owned diner with New Mexico-style comfort food, serving travelers with authentic regional cuisine.',
        coordinates: { lat: 34.9398, lng: -104.6789 },
        address: '217 Parker Ave, Santa Rosa, NM 88435',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/comet2_drivein.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'silver-moon-cafe',
        name: 'Silver Moon Café',
        url: 'https://www.silvermooncafesantarosa.com/',
        description: 'Classic eatery along the Mother Road serving traditional American fare with Southwestern flair.',
        coordinates: { lat: 34.9398, lng: -104.6789 },
        address: '2545 U.S. Route 66, Santa Rosa, NM 88435',
        type: 'food',
        image: 'https://crusinroute66.com/states/newmexico/sliver_moon_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Vaughn
      {
        id: 'whiting-brothers-vaughn',
        name: 'Whiting Brothers Station',
        description: 'Faded signage from a forgotten 66 era, representing the abandoned roadside infrastructure along the highway.',
        coordinates: { lat: 34.5998, lng: -105.2189 },
        address: 'Route 66, Vaughn, NM 88353',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/vaughn_whiting_bros.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'vintage-motels-vaughn',
        name: 'Vintage Motels',
        description: 'Along the old alignment through town, showcasing mid-century roadside architecture and signage.',
        coordinates: { lat: 34.5998, lng: -105.2189 },
        address: 'Route 66, Vaughn, NM 88353',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/vaughn_vintage_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Clines Corners
      {
        id: 'clines-corners-travel-center',
        name: 'Clines Corners Travel Center',
        url: 'https://www.clinescorners.com/',
        description: 'Massive souvenir stop dating back to 1934, a legendary Route 66 trading post and tourist destination.',
        coordinates: { lat: 35.0598, lng: -105.6689 },
        address: '1 Yacht Club Dr, Clines Corners, NM 87070',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/clines_corners.jpg?auto=compress&cs=tinysrgb&w=800'
      },

       // Moriarty
      {
        id: 'old-windmill',
        name: 'Old Windmill',
        description: 'Classic roadside photo ops with vintage signage and Western-themed displays.',
        coordinates: { lat: 35.0598, lng: -105.6689 },
        address: '9 Yacht Club Dr, Moriarty, NM 87035',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/old_windmill.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'el-comedor-de-anayas',
        name: 'El Comedor de Anayas',
        description: 'Family-run restaurant on old Route 66 serving authentic New Mexican cuisine with traditional recipes.',
        coordinates: { lat: 34.9998, lng: -106.0489 },
        address: '1005 US Route 66, Moriarty, NM 87035',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/el_comedor.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'whiting-brothers-moriarty',
        name: 'Whiting Brothers Station',
        description: 'Another ghostly fuel stop along the highway, representing the abandoned infrastructure of Route 66.',
        coordinates: { lat: 34.9998, lng: -106.0489 },
        address: 'Route 66, Moriarty, NM 87035',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/moriarty_whiting_bros.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-museum-moriarty',
        name: 'Route 66 Vintage Museum',
        url: 'http://moriartymuseum.org/',
        description: 'Displays historic photos and signage chronicling the highway\'s golden age and local impact.',
        coordinates: { lat: 34.9998, lng: -106.0489 },
        address: '777 Route 66, Moriarty, NM 87035',
        type: 'museum',
        image: 'https://crusinroute66.com/states/newmexico/moriarty_route66_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Edgewood
      {
        id: 'wildlife-west-nature-park',
        name: 'Wildlife West Nature Park',
        url: 'https://wildlifewest.org/',
        description: 'Nearby animal preserve off old 66 featuring native New Mexican wildlife and educational programs.',
        coordinates: { lat: 35.0598, lng: -106.1989 },
        address: '87 N Frontage Rd, Edgewood, NM 87015',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/wildlife_west_nature_park.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'classic-motels-churches-edgewood',
        name: 'Classic Motels & Churches',
        description: 'Rustic Route 66 charm with vintage accommodations and historic religious architecture.',
        coordinates: { lat: 35.0598, lng: -106.1989 },
        address: 'Route 66, Edgewood, NM 87015',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/red_top.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Tijeras Canyon (pre-1937 alignment)
      {
        id: 'musical-road',
        name: 'Musical Road',
        description: 'A stretch that plays "America the Beautiful" when driven over at 45 mph, a unique roadway engineering marvel.',
        coordinates: { lat: 35.0898, lng: -106.3789 },
        address: 'NM-333, Tijeras, NM 87059',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/musical_road.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Albuquerque
      {
        id: 'historic-nob-hill-district',
        name: 'Historic Nob Hill District',
        description: 'Neon signs, diners, and shops on Central Ave (Route 66), the heart of Albuquerque\'s Route 66 heritage.',
        coordinates: { lat: 35.0844, lng: -106.6504 },
        address: 'Central Ave NE, Albuquerque, NM 87106',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/historic_nob_hill.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: '66-diner',
        name: '66 Diner',
        url: 'https://www.66diner.com/',
        description: '1950s-style restaurant packed with nostalgia, serving classic American fare in an authentic retro setting.',
        coordinates: { lat: 35.0844, lng: -106.6504 },
        address: '1405 Central Ave NE, Albuquerque, NM 87106',
        type: 'food',
        image: 'https://crusinroute66.com/states/newmexico/route66_diner_abq.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'kimo-theatre',
        name: 'KiMo Theatre',
        url: 'https://www.cabq.gov/artsculture/kimo/meet-the-kimo',
        description: 'Pueblo Deco-style theater from 1927, a stunning example of Southwestern architectural design and cultural venue.',
        coordinates: { lat: 35.0844, lng: -106.6504 },
        address: '423 Central Ave NW, Albuquerque, NM 87102',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/kimo_theatre.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'el-vado-motel',
        name: 'El Vado Motel',
        url: 'https://elvadoabq.com/',
        description: 'Recently restored 1937-era motor court showcasing the golden age of Route 66 lodging with modern amenities.',
        coordinates: { lat: 35.0844, lng: -106.6504 },
        address: '2500 Central Ave SW, Albuquerque, NM 87104',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/newmexico/el_vado_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-arch-albuquerque',
        name: 'Route 66 Arch',
        url: 'https://www.visitalbuquerque.org/route-66-centennial/',
        description: 'Steel arch across Central Ave marking 66 downtown, a modern tribute to the historic highway.',
        coordinates: { lat: 35.0844, lng: -106.6504 },
        address: 'Central Ave & 4th St NW, Albuquerque, NM 87102',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/route66_arch_abq.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'old-town-albuquerque',
        name: 'Old Town Albuquerque',
        description: 'Pre-dates Route 66 but worth the detour for its historic plaza, adobe architecture, and cultural attractions.',
        coordinates: { lat: 35.0844, lng: -106.6504 },
        address: '303 Romero St NW, Albuquerque, NM 87104',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/old_town_abq.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Laguna Pueblo
      {
        id: 'laguna-mission-church',
        name: 'Laguna Mission Church',
        url: 'https://www.nps.gov/subjects/travelspanishmissions/mission-san-jose-de-laguna.htm',
        description: 'Historic adobe church from 1699, representing centuries of Native American and Spanish colonial heritage.',
        coordinates: { lat: 35.0344, lng: -107.3804 },
        address: 'Laguna Pueblo, NM 87026',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/laguna_mission_church.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Acoma Pueblo (Sky City)
      {
        id: 'acoma-pueblo-sky-city',
        name: 'Acoma Pueblo "Sky City"',
        url: 'https://www.puebloofacoma.org/',
        description: 'One of the oldest continuously inhabited communities in North America. Tours available to this mesa-top village.',
        coordinates: { lat: 34.89636, lng: -107.58228 },
        address: '1232 Haaku Rd, Acoma, NM, 87034',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/acoma_pueblo.jpg?auto=compress&cs=tinysrgb&w=800'
      },

      // Owl Rock
      {
        id: 'owl-rock',
        name: 'Owl Rock',
        description: 'A 20-foot tall sandstone formation located along the Old Route 66 known for its unique shape resembling an owl.',
        coordinates: { lat: 35.03405, lng: -107.33807 },
        address: 'Old Route 66, New Laguna, NM 87038',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/owl_rock.jpg?auto=compress&cs=tinysrgb&w=800'
      },

      // Grants
      {
        id: 'route66-archway-grants',
        name: 'Route 66 Archway Sign',
        url: 'https://www.visitgrants.com/route66arch',
        description: 'Welcomes you into town with classic Route 66 styling and Western hospitality.',
        coordinates: { lat: 35.1478, lng: -107.8523 },
        address: 'Santa Fe Ave, Grants, NM 87020',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/route66_archway_grants.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'new-mexico-mining-museum',
        name: 'New Mexico Mining Museum',
        url: 'https://newmexicominingmuseum.org/',
        description: 'Underground uranium mining tour showcasing the area\'s atomic age history and mining heritage.',
        coordinates: { lat: 35.1478, lng: -107.8523 },
        address: '100 N Iron Ave, Grants, NM 87020',
        type: 'museum',
        image: 'https://crusinroute66.com/states/newmexico/nm_mining_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'el-malpais-national-monument',
        name: 'El Malpais National Monument',
        url: 'https://www.nps.gov/elma/index.htm',
        description: 'Scenic detour with volcanic formations, lava tubes, and dramatic landscapes of the American Southwest.',
        coordinates: { lat: 35.1478, lng: -107.8523 },
        address: '123 E Roosevelt Ave, Grants, NM 87020',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/el_malpais_monument.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // San Fidel
      {
        id: 'whiting-bros-sign-sanfidel',
        name: 'Whiting Brothers Sign',
        description: 'Photo-worthy vintage signage representing the abandoned roadside infrastructure of Route 66.',
        coordinates: { lat: 35.1878, lng: -107.8923 },
        address: 'Route 66, San Fidel, NM 87049',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/newmexico/sanfidel_whiting_bros.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Continental Divide
      {
        id: 'continental-divide-elevation-marker',
        name: 'Continental Divide Elevation Marker',
        url: 'https://en.wikipedia.org/wiki/Continental_Divide,_New_Mexico',
        description: '"Water flows east and west from this point" - marking the geographic divide of North America.',
        coordinates: { lat: 35.2178, lng: -108.2723 },
        address: 'I-40, Continental Divide, NM 87312',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/continental_divide.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Gallup
      {
        id: 'el-rancho-hotel',
        name: 'El Rancho Hotel',
        url: 'https://www.elranchogallup.com/',
        description: 'Historic hotel where Western movie stars stayed, featuring vintage Hollywood glamour and Southwestern hospitality.',
        coordinates: { lat: 35.5281, lng: -108.7426 },
        address: '1000 E Route 66, Gallup, NM 87301',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/newmexico/el_rancho_hotel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'rex-museum',
        name: 'Rex Museum',
        url: 'https://www.visitgallup.com/things-to-do/arts-culture/museums-galleries/the-rex-museum/',
        description: 'Route 66 and Gallup history showcasing the town\'s role as a trading center and railroad hub.',
        coordinates: { lat: 35.5281, lng: -108.7426 },
        address: '300 W Route 66, Gallup, NM 87301',
        type: 'museum',
        image: 'https://crusinroute66.com/states/newmexico/rex_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'gallup-neon-sign-park',
        name: 'Gallup Neon Sign Park',
        description: 'Collection of restored vintage signs celebrating the golden age of neon and roadside advertising.',
        coordinates: { lat: 35.5281, lng: -108.7426 },
        address: '103 W Historic Hwy 66, Gallup, NM 87301',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/newmexico/gallup_neon.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'downtown-murals-gallup',
        name: 'Downtown Murals',
        url: 'https://www.visitgallup.com/about-gallup/gallup-history/historic-route-66/',
        description: 'Depict Gallup\'s Navajo and Route 66 heritage with colorful public art celebrating local culture.',
        coordinates: { lat: 35.5281, lng: -108.7426 },
        address: 'Downtown Gallup, NM 87301',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/newmexico/gallup_mural.jpg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'arizona',
    name: 'Arizona',
    fullName: 'Arizona',
    description: 'Desert landscapes, Native American heritage, and some of the most scenic Route 66 stretches.',
    heroImage: '/dino_caverns_inn.jpeg',
    attractions: [
      // Lupton
      {
        id: 'chief-yellowhorse-trading-post',
        name: 'Chief Yellowhorse Trading Post',
        description: 'Long-standing souvenir shop on the Arizona/New Mexico border, offering Native American crafts and Route 66 memorabilia.',
        coordinates: { lat: 35.4281, lng: -109.0426 },
        address: 'I-40 Exit 357, Lupton, AZ 86508',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/chief_yellowhorse_trading_post.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'painted-cliffs',
        name: 'Painted Cliffs',
        description: 'Beautiful red sandstone formations showcasing the dramatic desert landscapes of northeastern Arizona.',
        coordinates: { lat: 35.4281, lng: -109.0426 },
        address: 'Near Lupton, AZ 86508',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/lupton_painted_cliffs.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Houck
      {
        id: 'fort-courage-ruins',
        name: 'Fort Courage',
        description: 'Replica of the set from the TV show F Troop; now abandoned but a nostalgic photo stop for classic TV fans.',
        coordinates: { lat: 35.3981, lng: -109.1226 },
        address: 'Old Route 66, Houck, AZ 86506',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/arizona/fort_courage.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Sanders / Chambers
      {
        id: 'burnham-trading-post',
        name: 'Burnham Trading Post',
        url: 'https://rbburnhamtrading.com',
        description: 'The Burnham family has traded and lived among the Navajo for over five generations, dating back to the 1880s when they traveled with trading wagons through Colorado and New Mexico.',
        coordinates: { lat: 35.2181, lng: -109.3226 },
        address: 'US-191 Frontage Rd, Sanders, AZ 86512',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/burnham_trading_post.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Holbrook
      
      {
        id: 'dinosaur-statues-holbrook',
        name: 'Dinosaur Statues',
        description: 'Giant fiberglass dinosaurs outside souvenir shops, delighting travelers with prehistoric roadside attractions.',
        coordinates: { lat: 34.9031, lng: -110.1565 },
        address: 'Navajo Blvd, Holbrook, AZ 86025',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/holbrook_dinosaurs.jpg?auto=compress&cs=tinysrgb&w=800'
      },
       {
        id: 'navajo-county-courthouse',
        name: 'Navajo County Courthouse',
        url: 'https://holbrookazmuseum.org/',
        description: 'Beautiful 1898 courthouse showcasing local history and serving as a museum of regional heritage.',
        coordinates: { lat: 34.9031, lng: -110.1565 },
        address: '100 E Arizona St, Holbrook, AZ 86025',
        type: 'museum',
        image: 'https://crusinroute66.com/states/arizona/navajo_county_courthouse.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'joe-aggies-cafe',
        name: "Joe & Aggie's Café",
        description: 'Family diner serving Route 66 travelers since 1943, offering classic American comfort food and local hospitality.',
        coordinates: { lat: 34.9031, lng: -110.1565 },
        address: '120 W Hopi Dr, Holbrook, AZ 86025',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/arizona/joe_aggies_cafe.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'wigwam-motel-holbrook',
        name: 'Wigwam Motel',
        url: 'https://sleepinawigwam.com/',
        description: 'Iconic "sleep in a teepee" motel (inspiration for Cars\' Cozy Cone), featuring concrete teepees and authentic Route 66 charm.',
        coordinates: { lat: 34.9031, lng: -110.1565 },
        address: '811 W Hopi Dr, Holbrook, AZ 86025',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/arizona/wigwam_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'petrified-forest-national-park',
        name: 'Petrified Forest National Park',
        url: 'https://www.nps.gov/pefo/',
        description: 'Only national park on Route 66; includes remnants of the old road and stunning petrified wood formations.',
        coordinates: { lat: 34.9099, lng: -109.8068 },
        address: '1 Park Rd, Petrified Forest, AZ 86028',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/petrified_forest_np.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Winslow
      {
        id: 'la-posada-hotel',
        name: 'La Posada Hotel',
        url: 'https://laposada.org/',
        description: 'Restored Fred Harvey Hotel designed by Mary Colter, showcasing Southwestern architecture and luxury hospitality.',
        coordinates: { lat: 35.0242, lng: -110.6973 },
        address: '303 E 2nd St, Winslow, AZ 86047',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/arizona/la_posada_hotel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'standin-on-the-corner-park',
        name: 'Standin\' on the Corner Park',
        url: 'https://standinonthecorner.org/',
        description: 'Tribute to the Eagles\' song "Take It Easy," featuring a statue and mural celebrating this iconic lyric.',
        coordinates: { lat: 35.0242, lng: -110.6973 },
        address: 'Kinsley Ave & 2nd St, Winslow, AZ 86047',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/route66_shield_winslow.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'old-trails-museum',
        name: 'Old Trails Museum',
        url: 'https://oldtrailsmuseum.org/',
        description: 'Local history with Route 66 exhibits showcasing Winslow\'s role in American transportation history.',
        coordinates: { lat: 35.0242, lng: -110.6973 },
        address: '212 Kinsley Ave, Winslow, AZ 86047',
        type: 'museum',
        image: 'https://crusinroute66.com/states/arizona/old_trails_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'meteor-crater',
        name: 'Meteor Crater',
        url: 'https://meteorcrater.com/',
        description: 'Giant impact site with visitor center and observation platforms, best preserved meteorite crater on Earth.',
        coordinates: { lat: 35.0278, lng: -111.0224 },
        address: 'Meteor Crater Rd, Winslow, AZ 86047',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/meteor_crater.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Joseph City
      {
        id: 'jackrabbit-trading-post',
        name: 'Jackrabbit Trading Post',
        url: 'https://www.jackrabbittradingpost.com/',
        description: '"HERE IT IS" sign and iconic jackrabbit statue, one of Route 66\'s most famous roadside advertising campaigns.',
        coordinates: { lat: 34.9542, lng: -110.3373 },
        address: '3386 Route 66, Joseph City, AZ 86032',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/jackrabbit_trading_post.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'ellas-frontier-trading-post',
        name: "Ella's Frontier Trading Post",
        description: 'Colorful relic of Route 66\'s past, now atmospheric ruins that capture the highway\'s nostalgic charm.',
        coordinates: { lat: 34.9542, lng: -110.3373 },
        address: 'Old Route 66, Joseph City, AZ 86032',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/arizona/ellas_frontier_trading_post.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Flagstaff
      {
        id: 'museum-club',
        name: 'Museum Club',
        url: 'https://museumclub.net/',
        description: 'Classic western roadhouse with live music, known as the "Zoo Club" for its taxidermy and rustic atmosphere.',
        coordinates: { lat: 35.1983, lng: -111.6513 },
        address: '3404 E Route 66, Flagstaff, AZ 86004',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/museum_club.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'buffalo-park-mt-elden',
        name: 'Buffalo Park at Mt. Elden',
        url: 'https://www.flagstaff.com/buffalo-park',
        description: 'Scenic Route 66 detours offering panoramic views of the San Francisco Peaks and high desert landscapes.',
        coordinates: { lat: 35.1983, lng: -111.6513 },
        address: '2400 N Gemini Rd, Flagstaff, AZ 86001',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/buffalo_park.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'historic-downtown-flagstaff',
        name: 'Historic Downtown Flagstaff',
        url: 'https://www.flagstaffarizona.org/',
        description: 'Original Route 66 alignment with neon, diners, motels showcasing the golden age of the Mother Road.',
        coordinates: { lat: 35.1983, lng: -111.6513 },
        address: 'Route 66/Santa Fe Ave, Flagstaff, AZ 86001',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/downtown_flagstaff.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'lowell-observatory',
        name: 'Lowell Observatory',
        url: 'https://lowell.edu/',
        description: 'Historic observatory where Pluto was discovered, offering stargazing and astronomical exhibits.',
        coordinates: { lat: 35.1983, lng: -111.6513 },
        address: '1400 W Mars Hill Rd, Flagstaff, AZ 86001',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/lowell_observatory.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Bellemont
      {
        id: 'pine-breeze-inn',
        name: 'Pine Breeze Inn',
        description: 'Used in Easy Rider movie, representing the counterculture era and Route 66\'s role in American cinema.',
        coordinates: { lat: 35.2283, lng: -111.8513 },
        address: 'Old Route 66, Bellemont, AZ 86015',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/arizona/pine_breeze_inn.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Parks / Williams
      {
        id: 'bearizona-wildlife-park',
        name: 'Bearizona Wildlife Park',
        url: 'https://bearizona.com/',
        description: 'Drive-through animal park featuring North American wildlife in natural habitats.',
        coordinates: { lat: 35.2492, lng: -112.1901 },
        address: '1500 E Route 66, Williams, AZ 86046',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/bearizona_wildlife_park.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'downtown-williams',
        name: 'Downtown Williams',
        url: 'https://experiencewilliams.com/',
        description: 'Last town bypassed by I-40; preserved Route 66 neon and diners maintaining authentic Mother Road atmosphere.',
        coordinates: { lat: 35.2492, lng: -112.1901 },
        address: 'Route 66, Williams, AZ 86046',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/downtown_williams.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'grand-canyon-railway Depot',
        name: 'Grand Canyon Railway Depot',
        url: 'https://www.thetrain.com/',
        description: 'Tourist departure point to Grand Canyon, featuring vintage train travel and Western hospitality.',
        coordinates: { lat: 35.2492, lng: -112.1901 },
        address: '233 N Grand Canyon Blvd, Williams, AZ 86046',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/grand_canyon_railway.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'petes-gas-station',
        name: "Pete's Gas Station",
        description: 'Cute museum in an old filling station showcasing vintage automotive memorabilia and Route 66 history.',
        coordinates: { lat: 35.2492, lng: -112.1901 },
        address: '101 E Route 66, Williams, AZ 86046',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/petes_gas_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'grand-canyon-national-park',
        name: 'Grand Canyon National Park',
        url: 'https://www.nps.gov/grca/',
        description: 'Highly recommended detour to one of the world\'s most spectacular natural wonders.',
        coordinates: { lat: 36.1069, lng: -112.1129 },
        address: 'Grand Canyon Village, AZ 86023',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/grand_canyon_np.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Ash Fork
      {
        id: 'route66-museum-ash-fork-library',
        name: 'Route 66 Museum',
        description: 'Local museum housed in the library featuring Route 66 artifacts and regional history.',
        coordinates: { lat: 35.2242, lng: -112.4901 },
        address: '224 3rd St, Ash Fork, AZ 86320',
        type: 'museum',
        image: 'https://crusinroute66.com/states/arizona/ash_fork_mural.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'flagstone-capital-world',
        name: 'Flagstone Capital of the World',
        description: 'Small-town quirk with murals and markers celebrating Ash Fork\'s role in the flagstone industry.',
        coordinates: { lat: 35.2242, lng: -112.4901 },
        address: 'Route 66, Ash Fork, AZ 86320',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/flagstone_capital_ashfork.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Seligman
      {
        id: 'snow-cap-drive-in',
        name: "Snow Cap Drive-In",
        description: 'Whimsical burger stand with jokes and neon, famous for its quirky humor and classic Route 66 atmosphere.',
        coordinates: { lat: 35.3242, lng: -112.8701 },
        address: '301 E Chino Ave, Seligman, AZ 86337',
        type: 'food',
        image: 'https://crusinroute66.com/states/arizona/snowcap_drivein.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'angel-delgadillos-barbershop',
        name: "Angel Delgadillo's Barbershop",
        description: 'Started the Route 66 revival movement, operated by the "Guardian Angel of Route 66" himself.',
        coordinates: { lat: 35.3242, lng: -112.8701 },
        address: '217 E Chino Ave, Seligman, AZ 86337',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/angels_barbershop.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'historic-seligman-sundries',
        name: 'Historic Seligman Sundries',
        description: '1904 building with souvenirs and snacks, representing the early commercial development of Route 66.',
        coordinates: { lat: 35.3242, lng: -112.8701 },
        address: '22405 W Route 66, Seligman, AZ 86337',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/arizona/seligman_sundries.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'classic-cars-murals-seligman',
        name: 'Classic Cars & Murals',
        description: 'Town-wide celebration of Route 66 culture with vintage automobiles and colorful public art.',
        coordinates: { lat: 35.3242, lng: -112.8701 },
        address: 'Route 66, Seligman, AZ 86337',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/seligman_grocery.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Peach Springs
      {
        id: 'grand-canyon-caverns',
        name: 'Grand Canyon Caverns',
        url: 'https://gccaverns.com/',
        description: 'Largest dry caverns in the U.S., with tours and a motel, offering underground adventure 200 feet below the surface.',
        coordinates: { lat: 35.4456, lng: -113.2789 },
        address: 'Mile Marker 115, Route 66, Peach Springs, AZ 86434',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/dino_caverns_inn.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'hualapai-lodge',
        name: 'Hualapai Lodge',
        url: 'https://www.hualapailodge.top/',
        description: 'Native-owned hotel and cultural hub showcasing Hualapai tribal heritage and hospitality.',
        coordinates: { lat: 35.5342, lng: -113.4201 },
        address: '900 Route 66, Peach Springs, AZ 86434',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/arizona/hualapai_lodge.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'old-gas-station-peach-springs',
        name: 'Old Gas Station',
        description: 'Classic photo ops showcasing the abandoned infrastructure of Route 66\'s golden era.',
        coordinates: { lat: 35.5342, lng: -113.4201 },
        address: 'Route 66, Peach Springs, AZ 86434',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/arizona/peach_springs_ruins.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Truxton / Valentine
      {
        id: 'truxton-motel',
        name: 'Truxton Motel',
        description: 'Crumbling sign and café representing the rise and decline of Route 66 motor courts.',
        coordinates: { lat: 35.4842, lng: -113.5701 },
        address: 'Route 66, Truxton, AZ 86434',
        type: 'ruins',
        image: 'https://crusinroute66.com/states/arizona/frontier_motel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'keepers-of-the-wild',
        name: 'Keepers of the Wild Nature Park',
        url: 'https://gccaverns.com/',
        description: 'Wildlife sanctuary open to visitors, providing refuge for rescued exotic animals.',
        coordinates: { lat: 35.4842, lng: -113.5701 },
        address: '13441 E Highway 66, Valentine, AZ 86437',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/keepers_wild_nature.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Hackberry
      {
        id: 'hackberry-general-store',
        name: 'Hackberry General Store',
        description: 'Iconic Route 66 stop with gas pumps, signs, and classic cars, epitomizing the nostalgic roadside experience.',
        coordinates: { lat: 35.3642, lng: -113.7201 },
        address: '11255 E Highway 66, Hackberry, AZ 86411',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/hackberry_general_store.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Kingman
       {
        id: 'mr-dz-route66-diner',
        name: "Mr. D'z Route 66 Diner",
        description: 'Neon, jukeboxes, and root beer floats in an authentic 1950s-style diner atmosphere.',
        coordinates: { lat: 35.1895, lng: -114.0530 },
        address: '105 E Andy Devine Ave, Kingman, AZ 86401',
        type: 'food',
        image: 'https://crusinroute66.com/states/arizona/mr_ds_kingman.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'locomotive-park',
        name: 'Locomotive Park',
        description: 'Real steam engine on display celebrating Kingman\'s railroad heritage and transportation history.',
        coordinates: { lat: 35.1895, lng: -114.0530 },
        address: 'Andy Devine Ave & 4th St, Kingman, AZ 86401',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/locomotive_park_kingman.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'arizona-route66-museum',
        name: 'Arizona Route 66 Museum',
        url: 'https://www.explorekingman.com/attraction-Powerhouse-Route-66-Museum/',
        description: 'Located in the Powerhouse Visitor Center, comprehensive exhibits on Route 66 history and culture.',
        coordinates: { lat: 35.1895, lng: -114.0530 },
        address: '120 W Andy Devine Ave, Kingman, AZ 86401',
        type: 'museum',
        image: 'https://crusinroute66.com/states/arizona/az_route66_museum.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'downtown-kingman',
        name: 'Downtown Kingman',
        url: 'https://www.explorekingman.com/',
        description: 'Neon signs and murals celebrating Kingman\'s role as the "Heart of Historic Route 66."',
        coordinates: { lat: 35.1895, lng: -114.0530 },
        address: 'Andy Devine Ave, Kingman, AZ 86401',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/downtown_kingman.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cool-springs',
        name: 'Cool Springs',
        url: 'https://www.route66coolspringsaz.com/',
        description: 'Desert oasis with restored gas station representing the challenges of desert travel on early Route 66.',
        coordinates: { lat: 35.0895, lng: -114.3530 },
        address: 'Cool Springs Rd, Kingman, AZ 86401',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/cool_springs_gas_station.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Oatman
      {
        id: 'wild-burros-roaming-streets',
        name: 'Wild Burros Roaming Streets',
        description: 'Former mining town with free-roaming donkeys, descendants of miners\' pack animals creating a unique attraction.',
        coordinates: { lat: 35.0242, lng: -114.3830 },
        address: 'Main St, Oatman, AZ 86433',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/wild_burros_oatman.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'oatman-hotel',
        name: 'Oatman Hotel',
        url: 'https://oatman-hotel-restaurant-bar.menu-world.com/',
        description: 'Historic hotel where Clark Gable honeymooned, preserving the romance and glamour of old Hollywood.',
        coordinates: { lat: 35.0242, lng: -114.3830 },
        address: '181 Main St, Oatman, AZ 86433',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/arizona/oatman_hotel.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'gunfight-shows-saloons',
        name: 'Gunfight Shows & Saloons',
        description: 'Daily performances in the dusty streets recreating the Wild West atmosphere of this former mining town.',
        coordinates: { lat: 35.0242, lng: -114.3830 },
        address: 'Main St, Oatman, AZ 86433',
        type: 'attraction',
        image: 'https://crusinroute66.com/states/arizona/gunfight_oatman_az.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Topock / Golden Shores
      {
        id: 'topock-66-spa-resort',
        name: 'Topock 66 Spa & Resort',
        url: 'https://topock66.com/',
        description: 'Modern bar and restaurant with Route 66 flair, offering relaxation before entering California.',
        coordinates: { lat: 34.7242, lng: -114.4830 },
        address: '14999 Historic Route 66, Topock, AZ 86436',
        type: 'lodging',
        image: 'https://crusinroute66.com/states/arizona/topock66_spa_resort.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'colorado-river-views',
        name: 'Colorado River Views',
        url: 'https://www.nps.gov/places/old-trails-bridge.htm',
        description: 'Scenic overlook before entering California, offering beautiful views of the Colorado River and desert landscape.',
        coordinates: { lat: 34.7242, lng: -114.4830 },
        address: 'Historic Route 66, Topock, AZ 86436',
        type: 'landmark',
        image: 'https://crusinroute66.com/states/arizona/colorado_river_views.jpg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'california',
    name: 'California',
    fullName: 'California',
    description: 'The final destination where Route 66 ends at the Pacific Ocean in Santa Monica.',
    heroImage: '/roys_cafe.jpeg',
    attractions: [
      // Needles
      {
        id: 'el-garces-hotel-train-depot',
        name: 'El Garces Hotel and Train Depot',
        url: 'https://www.nps.gov/places/el-garces.htm',
        description: 'Restored Harvey House building showcasing the elegant era of railroad travel and hospitality.',
        coordinates: { lat: 34.8481, lng: -114.6145 },
        address: '950 Front St, Needles, CA 92363',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: '66-motel-sign-needles',
        name: '66 Motel Sign',
        description: 'Classic neon landmark representing the golden age of Route 66 motor courts and roadside hospitality.',
        coordinates: { lat: 34.8481, lng: -114.6145 },
        address: '1420 J St, Needles, CA 92363',
        type: 'landmark',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'needles-regional-museum',
        name: 'Needles Regional Museum',
        description: 'Route 66 and railroad exhibits chronicling the town\'s role as a desert transportation hub.',
        coordinates: { lat: 34.8481, lng: -114.6145 },
        address: '929 3rd St, Needles, CA 92363',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'historic-downtown-needles',
        name: 'Historic Downtown Needles',
        description: 'With murals and vintage motels celebrating the town\'s Route 66 heritage and desert character.',
        coordinates: { lat: 34.8481, lng: -114.6145 },
        address: 'Broadway, Needles, CA 92363',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Goffs
      {
        id: 'goffs-schoolhouse-museum',
        name: 'Goffs Schoolhouse Museum',
        description: 'Restored 1914 schoolhouse with mining and Route 66 exhibits showcasing Mojave Desert history.',
        coordinates: { lat: 35.1481, lng: -115.0645 },
        address: '37198 Lanfair Rd, Goffs, CA 92332',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Fenner / Essex / Chambless
      {
        id: 'roadside-ruins-fenner',
        name: 'Roadside Ruins',
        description: 'Abandoned cafes, gas stations, and motels from Route 66\'s heyday, evoking the romance of the open road.',
        coordinates: { lat: 34.8381, lng: -115.2345 },
        address: 'Old Route 66, Fenner, CA 92363',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'amboy-crater',
        name: 'Amboy Crater',
        description: 'Extinct volcanic cinder cone offering hiking and spectacular photo opportunities in the Mojave Desert.',
        coordinates: { lat: 34.5581, lng: -115.7745 },
        address: 'Amboy Crater Rd, Amboy, CA 92304',
        type: 'attraction',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'roys-motel-cafe-amboy',
        name: "Roy's Motel and Café (Amboy)",
        description: 'One of the most iconic signs and mid-century modern buildings on the entire route, a true Route 66 legend.',
        coordinates: { lat: 34.5581, lng: -115.7745 },
        address: '87520 National Trails Hwy, Amboy, CA 92304',
        type: 'landmark',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Ludlow
      {
        id: 'historic-ludlow-cafe-motel',
        name: 'Historic Ludlow Café & Motel',
        description: 'Vintage highway stop representing the classic Route 66 roadside experience in the Mojave Desert.',
        coordinates: { lat: 34.7281, lng: -116.1545 },
        address: 'National Trails Hwy, Ludlow, CA 92338',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'abandoned-gas-stations-ludlow',
        name: 'Abandoned Gas Stations',
        description: 'Route 66 decay and photography gold, showcasing the abandoned infrastructure of America\'s Mother Road.',
        coordinates: { lat: 34.7281, lng: -116.1545 },
        address: 'National Trails Hwy, Ludlow, CA 92338',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Newberry Springs
      {
        id: 'bagdad-cafe',
        name: 'Bagdad Café',
        description: 'Filming location of the 1987 cult movie; still serving Route 66 travelers with desert hospitality.',
        coordinates: { lat: 34.8681, lng: -116.6945 },
        address: '46548 National Trails Hwy, Newberry Springs, CA 92365',
        type: 'landmark',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'bagdad-ghost-town-site',
        name: 'Site of Bagdad Ghost Town (abandoned)',
        description: 'Inspiration for the film, representing the boom and bust cycles of desert communities.',
        coordinates: { lat: 34.8681, lng: -116.6945 },
        address: 'Near Newberry Springs, CA 92365',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Barstow
      {
        id: 'route66-mother-road-museum',
        name: 'Route 66 Mother Road Museum',
        description: 'Located in the historic Casa del Desierto Harvey House, comprehensive Route 66 exhibits and memorabilia.',
        coordinates: { lat: 34.8958, lng: -117.0228 },
        address: '681 N 1st Ave, Barstow, CA 92311',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'western-america-railroad-museum',
        name: 'Western America Railroad Museum',
        description: 'Next to the Route 66 museum, showcasing the railroad heritage that preceded the automobile age.',
        coordinates: { lat: 34.8958, lng: -117.0228 },
        address: '685 N 1st Ave, Barstow, CA 92311',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'harvey-house-barstow',
        name: 'Harvey House Barstow',
        description: 'Architectural and historical landmark representing the golden age of railroad hospitality.',
        coordinates: { lat: 34.8958, lng: -117.0228 },
        address: '681 N 1st Ave, Barstow, CA 92311',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'barstow-main-street-murals',
        name: 'Barstow Main Street Murals',
        description: 'Over 20 murals depicting the town\'s history, Route 66 heritage, and desert culture.',
        coordinates: { lat: 34.8958, lng: -117.0228 },
        address: 'Main St, Barstow, CA 92311',
        type: 'attraction',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-motel-barstow',
        name: 'Route 66 Motel (Barstow)',
        description: 'Classic neon signage representing the golden age of Route 66 motor courts.',
        coordinates: { lat: 34.8958, lng: -117.0228 },
        address: '195 E Main St, Barstow, CA 92311',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Helendale / Oro Grande
      {
        id: 'elmers-bottle-tree-ranch',
        name: "Elmer's Bottle Tree Ranch",
        description: 'Folk art garden of welded trees with colorful glass bottles, a whimsical roadside attraction.',
        coordinates: { lat: 34.7458, lng: -117.3228 },
        address: '24266 National Trails Hwy, Oro Grande, CA 92368',
        type: 'attraction',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'antique-station-oro-grande',
        name: 'Antique Station – Oro Grande',
        description: 'Roadside antique and junkyard oddities offering treasures and curiosities from bygone eras.',
        coordinates: { lat: 34.7458, lng: -117.3228 },
        address: 'National Trails Hwy, Oro Grande, CA 92368',
        type: 'attraction',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Victorville
      {
        id: 'california-route66-museum',
        name: 'California Route 66 Museum',
        description: 'Interactive and photo-friendly museum celebrating California\'s Route 66 heritage and culture.',
        coordinates: { lat: 34.5362, lng: -117.2911 },
        address: '16825 D St, Victorville, CA 92395',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'old-town-victorville',
        name: 'Old Town Victorville',
        description: 'Original alignment with vintage structures showcasing the town\'s Route 66 and railroad heritage.',
        coordinates: { lat: 34.5362, lng: -117.2911 },
        address: '7th St, Victorville, CA 92392',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Cajon Pass
      {
        id: 'summit-inn-site',
        name: 'Summit Inn Site (rebuilding)',
        description: 'Historic diner that burned in 2016, representing the challenges and resilience of Route 66 businesses.',
        coordinates: { lat: 34.3262, lng: -117.4311 },
        address: 'Mariposa Rd, Hesperia, CA 92345',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'scenic-views-cajon-pass',
        name: 'Scenic Views',
        description: 'Dramatic landscape between desert and mountains, showcasing California\'s diverse geography.',
        coordinates: { lat: 34.3262, lng: -117.4311 },
        address: 'Cajon Pass, CA',
        type: 'attraction',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // San Bernardino
      {
        id: 'original-mcdonalds-museum',
        name: "Original McDonald's Museum",
        description: 'Built on the site of the first McDonald\'s (1940), showcasing the birth of fast food culture.',
        coordinates: { lat: 34.1083, lng: -117.2898 },
        address: '1398 N E St, San Bernardino, CA 92405',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'wigwam-motel-7',
        name: 'Wigwam Motel #7',
        description: 'Another "sleep in a teepee" motor court, one of the last surviving wigwam motels on Route 66.',
        coordinates: { lat: 34.1083, lng: -117.2898 },
        address: '2728 W Foothill Blvd, San Bernardino, CA 92410',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'california-theatre-performing-arts',
        name: 'California Theatre of Performing Arts',
        description: 'Built in 1928, showcasing the entertainment culture that flourished along Route 66.',
        coordinates: { lat: 34.1083, lng: -117.2898 },
        address: '562 W 4th St, San Bernardino, CA 92401',
        type: 'historic',
        image: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Rialto / Fontana
      {
        id: 'rialto-historical-society-museum',
        name: 'Rialto Historical Society Museum',
        description: 'Route 66 items included in exhibits showcasing local history and highway heritage.',
        coordinates: { lat: 34.1064, lng: -117.3703 },
        address: '205 N Riverside Ave, Rialto, CA 92376',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'fontana-steel-history-displays',
        name: "Fontana's Steel History Displays",
        description: 'Industrial-era artifacts showcasing the region\'s role in American steel production.',
        coordinates: { lat: 34.0922, lng: -117.4353 },
        address: '8353 Sierra Ave, Fontana, CA 92335',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Rancho Cucamonga
      {
        id: 'historic-cucamonga-service-station',
        name: 'Historic Cucamonga Service Station',
        description: 'Fully restored 1915 gas station with a museum, one of the oldest surviving stations in California.',
        coordinates: { lat: 34.1064, lng: -117.5931 },
        address: '9670 Foothill Blvd, Rancho Cucamonga, CA 91730',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'route66-trailhead-monument',
        name: 'Route 66 Trailhead Monument',
        description: 'Starting point for Route 66 trail in the city, marking the historic highway\'s path through California.',
        coordinates: { lat: 34.1064, lng: -117.5931 },
        address: 'Foothill Blvd, Rancho Cucamonga, CA 91730',
        type: 'landmark',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Upland / Claremont
      {
        id: 'historic-downtown-upland',
        name: 'Historic Downtown Upland',
        description: 'Route 66 shops and signs preserving the small-town character of the Mother Road.',
        coordinates: { lat: 34.0975, lng: -117.6481 },
        address: '2nd Ave, Upland, CA 91786',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'college-heights-lemon-packing-house',
        name: 'College Heights Lemon Packing House (Claremont)',
        description: 'Historic citrus industry building representing California\'s agricultural heritage along Route 66.',
        coordinates: { lat: 34.0966, lng: -117.7198 },
        address: '200 W 1st St, Claremont, CA 91711',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Glendora / Azusa / Duarte
      {
        id: 'vintage-signage-shops-foothill',
        name: 'Vintage Signage and Shops',
        description: 'Route 66 nostalgia along Foothill Blvd with classic neon and mid-century architecture.',
        coordinates: { lat: 34.1361, lng: -117.8653 },
        address: 'Foothill Blvd, Glendora, CA 91741',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Monrovia / Pasadena
      {
        id: 'historic-aztec-hotel',
        name: 'Historic Aztec Hotel – Monrovia',
        description: 'Mayan Revival architecture showcasing the exotic themes popular in 1920s roadside design.',
        coordinates: { lat: 34.1442, lng: -117.9992 },
        address: '311 W Foothill Blvd, Monrovia, CA 91016',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'colorado-street-bridge',
        name: 'Colorado Street Bridge – Pasadena',
        description: 'Iconic Beaux-Arts arch bridge (1913) representing the engineering marvels of the early automobile age.',
        coordinates: { lat: 34.1478, lng: -118.1445 },
        address: 'Colorado St, Pasadena, CA 91105',
        type: 'landmark',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'historic-route66-signs-colorado-blvd',
        name: 'Historic Route 66 signs along Colorado Blvd',
        description: 'Vintage signage marking the historic highway\'s path through this iconic California city.',
        coordinates: { lat: 34.1478, lng: -118.1445 },
        address: 'Colorado Blvd, Pasadena, CA 91105',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Los Angeles
      {
        id: 'historic-arroyo-seco-parkway',
        name: 'Historic Arroyo Seco Parkway',
        description: 'First freeway in the U.S., aligns with old Route 66, representing the evolution of American highways.',
        coordinates: { lat: 34.0522, lng: -118.2437 },
        address: 'Arroyo Seco Pkwy, Los Angeles, CA 90031',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'eagle-rock-route66-shield',
        name: 'Eagle Rock Route 66 Shield',
        description: 'Painted on pavement at the town\'s entrance, marking the historic highway\'s path through LA.',
        coordinates: { lat: 34.1342, lng: -118.2087 },
        address: 'Colorado Blvd, Eagle Rock, CA 90041',
        type: 'landmark',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'car-culture-neon-signs-la',
        name: 'Car Culture & Neon Signs',
        description: 'Along Figueroa, Sunset, and other LA routes showcasing the city\'s automotive and entertainment heritage.',
        coordinates: { lat: 34.0522, lng: -118.2437 },
        address: 'Figueroa St & Sunset Blvd, Los Angeles, CA 90012',
        type: 'attraction',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'broadway-theater-district',
        name: 'Broadway Theater District',
        description: 'Vintage neon marquees and buildings representing the golden age of entertainment along Route 66.',
        coordinates: { lat: 34.0522, lng: -118.2437 },
        address: 'Broadway, Los Angeles, CA 90013',
        type: 'historic',
        image: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      
      // Santa Monica
      {
        id: 'santa-monica-pier',
        name: 'Santa Monica Pier',
        description: 'Iconic oceanfront landmark where Route 66 officially ends, featuring amusement rides and Pacific Ocean views.',
        coordinates: { lat: 34.0089, lng: -118.4973 },
        address: '200 Santa Monica Pier, Santa Monica, CA 90401',
        type: 'landmark',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'ocean-avenue-lincoln-blvd',
        name: 'Ocean Avenue & Lincoln Blvd',
        description: 'Final historic alignments of Route 66 leading to the Pacific Ocean, completing the cross-country journey.',
        coordinates: { lat: 34.0089, lng: -118.4973 },
        address: 'Ocean Ave & Lincoln Blvd, Santa Monica, CA 90401',
        type: 'historic',
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  }
];
