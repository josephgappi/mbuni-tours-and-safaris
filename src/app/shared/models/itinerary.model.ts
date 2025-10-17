export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities?: string[];
    meals?: string[];
  }[];
  guides?: {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
  }[];
  location: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: string;
  bestTime: string[];
  gallery: string[];
}