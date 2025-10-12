import { Injectable } from '@angular/core';
import { Itinerary } from '../models/itinerary.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tours: Itinerary[] = [
    {
      id: 'serengeti-migration',
      title: 'Great Migration Safari',
      duration: '7 Days / 6 Nights',
      price: 3499,
      rating: 4.9,
      image: 'assets/images/serengeti-migration.jpg',
      description: 'Witness the greatest wildlife spectacle on earth as millions of wildebeest and zebras traverse the vast Serengeti plains in search of fresh grazing.',
      highlights: [
        'Witness the Great Migration river crossings',
        'Game drives in Serengeti National Park',
        'Hot air balloon safari over the Serengeti',
        'Visit Ngorongoro Crater'
      ],
      included: [
        'All park fees and conservation fees',
        'Full board accommodation',
        'Professional English-speaking guide',
        '4x4 safari vehicle with pop-up roof',
        'All game drives as per itinerary'
      ],
      notIncluded: [
        'International flights',
        'Visa fees',
        'Travel insurance',
        'Tips and gratuities'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Arusha',
          description: 'Arrive at Kilimanjaro International Airport, transfer to your lodge in Arusha for dinner and overnight.'
        },
        {
          day: 2,
          title: 'Tarangire National Park',
          description: 'Game drive in Tarangire National Park, known for its large elephant herds and baobab trees.'
        },
        // Add more days as needed
      ],
      guides: [
        {
          name: 'Sarah Johnson',
          avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
          role: 'Lead Guide'
        },
        {
          name: 'James Wilson',
          avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
          role: 'Wildlife Expert'
        }
      ],
      location: 'Serengeti, Tanzania',
      difficulty: 'Moderate',
      groupSize: '2-6 people',
      bestTime: ['July', 'August', 'September', 'October'],
      gallery: [
        'assets/images/gallery/serengeti1.jpg',
        'assets/images/gallery/serengeti2.jpg'
      ]
    }
    // Add more tours as needed
  ];

  getTours(): Itinerary[] {
    return this.tours;
  }

  getTourById(id: string): Itinerary | undefined {
    return this.tours.find(tour => tour.id === id);
  }
}