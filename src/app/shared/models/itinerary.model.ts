export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  price: number;
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
  }[];
  guides: {
    name: string;
    avatar: string;
    role: string;
  }[];
  location: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: string;
  bestTime: string[];
  gallery: string[];
}