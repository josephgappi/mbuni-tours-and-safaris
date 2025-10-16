import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Itinerary } from '../models/itinerary.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tours: Itinerary[] = [
    {
      id: 'luxury-safari-retreat',
      title: 'Luxury Safari Retreat',
      duration: '8 Days / 7 Nights',
      price: 5999,
      rating: 5.0,
      image: 'assets/images/PICHA - 18.png',
      description: 'Indulge in the ultimate luxury safari experience, combining world-class accommodations with exclusive wildlife encounters. This premium journey takes you to the most exclusive lodges and private concessions in Tanzania, offering privacy, comfort, and unparalleled game viewing opportunities.',
      highlights: [
        'Exclusive stays at luxury lodges and tented camps',
        'Private game drives in premium safari vehicles',
        'Hot air balloon safari over the Serengeti',
        'Bush dinners under the stars',
        'Private guided nature walks',
        'Cultural visits to local Maasai communities'
      ],
      included: [
        '7 nights in luxury accommodations',
        'All meals and premium beverages',
        'Private professional safari guide',
        'All park fees and conservation charges',
        'Hot air balloon safari',
        'Bush dinners and sundowners',
        'Laundry service',
        'Emergency medical evacuation insurance'
      ],
      notIncluded: [
        'International flights',
        'Travel insurance',
        'Visa fees',
        'Gratuities',
        'Personal expenses'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Arusha',
          description: 'Welcome to Tanzania! You will be met at Kilimanjaro International Airport and transferred to your luxury lodge in Arusha. Enjoy a leisurely evening to relax and prepare for your safari adventure.',
          activities: ['Airport transfer', 'Lodge check-in', 'Welcome briefing'],
          meals: ['Dinner']
        },
        {
          day: 2,
          title: 'Tarangire National Park',
          description: 'After breakfast, depart for Tarangire National Park, famous for its large elephant herds and baobab trees. Enjoy a picnic lunch in the park followed by an afternoon game drive.',
          activities: ['Game drives', 'Picnic lunch', 'Wildlife photography'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 3,
          title: 'Ngorongoro Conservation Area',
          description: 'Travel to the Ngorongoro Conservation Area. After lunch at your luxury lodge, enjoy an afternoon of relaxation or a guided nature walk around the lodge grounds.',
          activities: ['Scenic drive', 'Nature walk', 'Lodge activities'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 4,
          title: 'Ngorongoro Crater',
          description: 'Descend into the Ngorongoro Crater for a full day of game viewing in this natural wonder. Enjoy a picnic lunch at the hippo pool before continuing your exploration.',
          activities: ['Full-day crater tour', 'Wildlife viewing', 'Picnic lunch'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 5,
          title: 'Serengeti National Park',
          description: 'Travel to the world-famous Serengeti National Park. Enjoy an afternoon game drive en route to your luxury tented camp, arriving in time for sundowners.',
          activities: ['Game drive', 'Sundowner drinks', 'Bush dinner'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 6,
          title: 'Serengeti Balloon Safari',
          description: 'Rise before dawn for a magical hot air balloon ride over the Serengeti, followed by a champagne breakfast in the bush. Spend the rest of the day on game drives in search of the Big Five.',
          activities: ['Hot air balloon safari', 'Bush breakfast', 'Game drives'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 7,
          title: 'Serengeti to Arusha',
          description: 'Enjoy a final morning game drive in the Serengeti before flying back to Arusha. Spend your final evening at a luxury lodge, enjoying a farewell dinner.',
          activities: ['Morning game drive', 'Scenic flight', 'Farewell dinner'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 8,
          title: 'Departure',
          description: 'After breakfast, transfer to Kilimanjaro International Airport for your departure flight, taking with you memories of an unforgettable luxury safari experience.',
          activities: ['Airport transfer'],
          meals: ['Breakfast']
        }
      ],
      guides: [
        {
          name: 'James Mwenda',
          avatar: 'assets/images/guide1.jpg',
          role: 'Senior Safari Guide',
          bio: 'With over 15 years of experience leading luxury safaris, James is an expert in wildlife tracking and Tanzanian culture.'
        },
        {
          name: 'Sarah Johnson',
          avatar: 'assets/images/guide2.jpg',
          role: 'Wildlife Specialist',
          bio: 'Sarah holds a degree in Wildlife Conservation and specializes in bird watching and conservation efforts in Tanzania.'
        }
      ],
      location: 'Tanzania',
      difficulty: 'Easy',
      groupSize: '2-6 guests',
      bestTime: ['June to October', 'December to February'],
      gallery: [
        'assets/images/PICHA - 1.png',
        'assets/images/PICHA - 2.png',
        'assets/images/PICHA - 3.png',
        'assets/images/PICHA - 4.png'
      ]
    },
    {
      id: 'big-five-adventure',
      title: 'Tanzania Big Five Safari',
      duration: '6 Days / 5 Nights',
      price: 3499,
      rating: 4.9,
      image: 'assets/images/LION CUBS.png',
      description: 'Experience the ultimate Tanzanian safari adventure, tracking the Big Five (lion, leopard, rhinoceros, elephant, and Cape buffalo) across the world-famous Serengeti and Ngorongoro Crater. This immersive journey combines thrilling game drives with stunning landscapes and rich cultural encounters.',
      highlights: [
        'Guaranteed Big Five sightings in their natural habitat',
        'Game drives in Serengeti National Park',
        'Full-day exploration of Ngorongoro Crater',
        'Visit to a Maasai boma',
        'Sunset game drives and bush dinners',
        'Professional wildlife tracking with expert guides'
      ],
      included: [
        '5 nights luxury lodge and tented camp accommodation',
        'All meals and bottled water',
        'Professional English-speaking safari guide',
        'All national park fees and conservation charges',
        'Game drives in 4x4 safari vehicles with pop-up roof',
        'Airport transfers',
        'Cultural village visit',
        'All government taxes and VAT'
      ],
      notIncluded: [
        'International flights to/from Tanzania',
        'Tanzania visa fees',
        'Travel and medical insurance',
        'Alcoholic and premium beverages',
        'Personal expenses and gratuities',
        'Optional activities not in the itinerary'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Arusha',
          description: 'Arrive at Kilimanjaro International Airport, where you\'ll be greeted by your guide. Transfer to your lodge in Arusha for relaxation and overnight stay. Briefing about your safari adventure.',
          activities: ['Airport transfer', 'Lodge check-in', 'Safari briefing'],
          meals: ['Dinner']
        },
        {
          day: 2,
          title: 'Arusha to Tarangire',
          description: 'Morning drive to Tarangire National Park, famous for its large elephant herds and ancient baobab trees. Afternoon game drive and overnight at a luxury lodge.',
          activities: ['Scenic drive', 'Game drive', 'Wildlife photography'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 3,
          title: 'Tarangire to Serengeti',
          description: 'Early morning game drive in Tarangire, then transfer to the endless plains of Serengeti National Park. Afternoon game drive en route to your luxury tented camp.',
          activities: ['Morning game drive', 'Scenic transfer', 'Afternoon game drive'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 4,
          title: 'Full Day Serengeti',
          description: 'Full day of game viewing in Serengeti, home to the Great Migration. Search for the Big Five and witness spectacular wildlife interactions in this UNESCO World Heritage Site.',
          activities: ['Full-day game drive', 'Picnic lunch', 'Wildlife viewing'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 5,
          title: 'Serengeti to Ngorongoro',
          description: 'Morning game drive in Serengeti, then drive to Ngorongoro Conservation Area. Visit a Maasai boma for cultural interaction before checking in to your lodge on the crater rim.',
          activities: ['Morning game drive', 'Cultural visit', 'Scenic drive'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 6,
          title: 'Ngorongoro Crater and Departure',
          description: 'Descend into the Ngorongoro Crater for a full day of game viewing in this natural wonder. After lunch, drive back to Arusha for your onward journey.',
          activities: ['Crater tour', 'Wildlife viewing', 'Picnic lunch', 'Return transfer'],
          meals: ['Breakfast', 'Lunch']
        }
      ],
      guides: [
        {
          name: 'Michael Johnson',
          avatar: 'assets/images/guide3.jpg',
          role: 'Senior Guide',
          bio: 'With over 12 years of experience, Michael specializes in tracking the Big Five and has extensive knowledge of East African wildlife.'
        },
        {
          name: 'Grace Mushi',
          avatar: 'assets/images/guide4.jpg',
          role: 'Cultural Specialist',
          bio: 'Grace is an expert in Tanzanian culture and history, with a special focus on Maasai traditions and local communities.'
        }
      ],
      location: 'Tanzania',
      difficulty: 'Moderate',
      groupSize: '2-6 guests',
      bestTime: ['June to October', 'January to February'],
      gallery: [
        'assets/images/MBOGO.png',
        'assets/images/LION.png',
        'assets/images/TEMBO.png',
        'assets/images/LEOPARD.png'
      ]
    },
    {
      id: 'great-migration-safari',
      title: 'Great Migration Safari',
      duration: '7 Days / 6 Nights',
      price: 3999,
      rating: 4.8,
      image: 'assets/images/PICHA - 12.png',
      description: 'Witness the greatest wildlife spectacle on earth as millions of wildebeest and zebras traverse the vast Serengeti plains in search of fresh grazing. This carefully crafted itinerary follows the path of the Great Migration for optimal wildlife viewing opportunities.',
      highlights: [
        'Witness the Great Migration river crossings',
        'Game drives in prime migration viewing areas',
        'Hot air balloon safari over the Serengeti',
        'Visit Ngorongoro Crater',
        'Expert guides with migration tracking experience',
        'Exclusive mobile camp locations near the herds'
      ],
      included: [
        '6 nights in luxury mobile camps and lodges',
        'All meals and select beverages',
        'Professional English-speaking guide and spotter',
        'All national park fees and conservation charges',
        'Exclusive 4x4 safari vehicle with pop-up roof',
        'Hot air balloon safari with champagne breakfast',
        'All game drives and park entry fees',
        'Emergency medical evacuation insurance'
      ],
      notIncluded: [
        'International flights',
        'Tanzania visa fees',
        'Travel insurance',
        'Premium beverages and champagne',
        'Gratuities and personal expenses',
        'Optional activities not specified'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Arusha',
          description: 'Arrive at Kilimanjaro International Airport, where you\'ll be met by our representative. Transfer to your boutique lodge in Arusha for relaxation and a safari briefing.',
          activities: ['Airport transfer', 'Lodge check-in', 'Migration briefing'],
          meals: ['Dinner']
        },
        {
          day: 2,
          title: 'Arusha to Northern Serengeti',
          description: 'Morning flight to the northern Serengeti, the prime location for river crossings. After lunch at camp, embark on your first game drive in search of the migrating herds.',
          activities: ['Scenic flight', 'Afternoon game drive', 'Sundowners'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 3,
          title: 'Mara River Crossings',
          description: 'Full day dedicated to witnessing the dramatic Mara River crossings, where thousands of wildebeest and zebras brave crocodile-infested waters in their annual migration.',
          activities: ['Full-day game drive', 'Riverside picnic lunch', 'Wildlife photography'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 4,
          title: 'Central Serengeti Exploration',
          description: 'Follow the migration southward through the Serengeti plains. Afternoon visit to the Seronera Valley, known for its high concentration of predators and resident wildlife.',
          activities: ['Game drives', 'Bush lunch', 'Sundowner drinks'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 5,
          title: 'Hot Air Balloon Safari',
          description: 'Pre-dawn hot air balloon flight over the Serengeti, followed by a champagne breakfast in the bush. Afternoon game drive tracking the migration.',
          activities: ['Hot air balloon safari', 'Bush breakfast', 'Afternoon game drive'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 6,
          title: 'Ngorongoro Conservation Area',
          description: 'Morning game drive en route to Ngorongoro Conservation Area. Afternoon visit to a Maasai village for cultural interaction.',
          activities: ['Game drive', 'Cultural visit', 'Scenic drive'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 7,
          title: 'Ngorongoro Crater and Departure',
          description: 'Early morning descent into the Ngorongoro Crater for a final game drive in this wildlife-rich caldera. After lunch, transfer to the airstrip for your flight to Arusha and onward connection.',
          activities: ['Crater tour', 'Wildlife viewing', 'Return transfer'],
          meals: ['Breakfast', 'Lunch']
        }
      ],
      guides: [
        {
          name: 'David Msuya',
          avatar: 'assets/images/guide5.jpg',
          role: 'Migration Specialist',
          bio: 'David has been tracking the Great Migration for over a decade and knows the best locations and timings for witnessing this incredible natural phenomenon.'
        },
        {
          name: 'Neema Charles',
          avatar: 'assets/images/guide6.jpg',
          role: 'Wildlife Photographer',
          bio: 'Neema is a professional wildlife photographer who will help you capture stunning images of the migration and other wildlife encounters.'
        }
      ],
      location: 'Tanzania',
      difficulty: 'Moderate',
      groupSize: '2-6 guests',
      bestTime: ['July to October'],
      gallery: [
        'assets/images/PICHA - 13.png',
        'assets/images/PICHA - 14.png',
        'assets/images/PICHA - 15.png',
        'assets/images/PICHA - 16.png'
      ]
    }
    // Add more tours as needed
  ];

  getTours(): Observable<Itinerary[]> {
    // Simulate API call with a small delay
    return of(this.tours).pipe(delay(300));
  }

  getTourById(id: string): Observable<Itinerary> {
    const tour = this.tours.find(tour => tour.id === id);
    if (tour) {
      // Simulate API call with a small delay
      return of(tour).pipe(delay(300));
    } else {
      return throwError(() => new Error(`Tour with id ${id} not found`));
    }
  }
}