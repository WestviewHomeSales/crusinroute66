export interface Attraction {
  id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  address?: string;
  type: 'landmark' | 'attraction' | 'food' | 'lodging' | 'museum' | 'ruins';
  image?: string;
}

export interface State {
  id: string;
  name: string;
  fullName: string;
  description: string;
  attractions: Attraction[];
  heroImage?: string;
}
