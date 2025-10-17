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
    },
    {
      id: 'shifting-sands-olduvai',
      title: 'Shifting Sands & Olduvai Gorge',
      duration: '5 Days / 4 Nights',
      rating: 4.7,
      image: 'assets/images/shifting-sands.jpg',
      description: 'Discover the geological wonders of Tanzania on this unique safari that combines the mysterious Shifting Sands with the historic Olduvai Gorge, the "Cradle of Mankind". This journey offers a perfect blend of natural wonders, archaeological significance, and wildlife viewing in the Ngorongoro Conservation Area.',
      highlights: [
        'Visit the mysterious Shifting Sands, a rare geological formation',
        'Explore Olduvai Gorge, one of the most important paleoanthropological sites',
        'Game viewing in Ngorongoro Crater',
        'Visit a Maasai village',
        'Scenic views of the Great Rift Valley',
        'Guided nature walks'
      ],
      included: [
        '4 nights accommodation in lodges and tented camps',
        'All meals and bottled water',
        'Professional English-speaking guide',
        'All national park fees and conservation charges',
        'Game drives in 4x4 safari vehicles',
        'Cultural village visit',
        'Airport transfers'
      ],
      notIncluded: [
        'International flights',
        'Tanzania visa fees',
        'Travel insurance',
        'Alcoholic and premium beverages',
        'Gratuities and personal expenses',
        'Optional activities not in the itinerary'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Arusha',
          description: 'Arrive at Kilimanjaro International Airport, where you\'ll be met by our representative. Transfer to your lodge in Arusha for relaxation and a briefing about your upcoming adventure.',
          activities: ['Airport transfer', 'Lodge check-in', 'Safari briefing'],
          meals: ['Dinner']
        },
        {
          day: 2,
          title: 'Arusha to Ngorongoro Conservation Area',
          description: 'After breakfast, drive to the Ngorongoro Conservation Area. En route, stop at a Maasai village for a cultural experience. Arrive at your lodge on the crater rim in time for lunch. Afternoon at leisure with optional nature walks.',
          activities: ['Scenic drive', 'Cultural visit', 'Nature walk'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 3,
          title: 'Shifting Sands & Olduvai Gorge',
          description: 'Morning visit to the Shifting Sands, a fascinating geological formation that moves across the plains. Continue to Olduvai Gorge, one of the most important paleoanthropological sites in the world. Visit the museum and learn about the Leakeys\' discoveries. Afternoon game drive en route to your camp.',
          activities: ['Visit Shifting Sands', 'Olduvai Gorge tour', 'Game drive'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 4,
          title: 'Ngorongoro Crater Tour',
          description: 'Descend into the Ngorongoro Crater for a full day of game viewing in this natural wonder. The crater is home to a high concentration of wildlife, including the Big Five. Enjoy a picnic lunch at the hippo pool.',
          activities: ['Full-day crater tour', 'Wildlife viewing', 'Picnic lunch'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 5,
          title: 'Departure',
          description: 'After breakfast, drive back to Arusha with game viewing en route. Stop for lunch and then transfer to the airport for your departure flight.',
          activities: ['Morning game drive', 'Scenic drive', 'Airport transfer'],
          meals: ['Breakfast', 'Lunch']
        }
      ],
      guides: [
        {
          name: 'Dr. Joseph Nyerere',
          avatar: 'assets/images/guide7.jpg',
          role: 'Paleoanthropology Expert',
          bio: 'With a PhD in Anthropology, Dr. Nyerere has been leading educational tours to Olduvai Gorge for over 15 years, sharing his extensive knowledge of human evolution.'
        },
        {
          name: 'Sarah Kimaro',
          avatar: 'assets/images/guide8.jpg',
          role: 'Geology Specialist',
          bio: 'Sarah specializes in the unique geological formations of Tanzania, including the Shifting Sands, and has been guiding in the Ngorongoro area for over a decade.'
        }
      ],
      location: 'Tanzania',
      difficulty: 'Moderate',
      groupSize: '2-8 guests',
      bestTime: ['June to October', 'December to February'],
      gallery: [
        'assets/images/shifting-sands-1.jpg',
        'assets/images/olduvai-gorge-1.jpg',
        'assets/images/ngorongoro-crater-1.jpg',
        'assets/images/maasai-village-1.jpg'
      ]
    },
    // Add more tours as needed
    
    {
  id: 'zanzibar-paradise',
  title: 'zanzibar-paradise',
  duration: '6 Days / 5 Nights',
  rating: 4.9,
  image: 'assets/images/zanzibar.png',
  description: 'Relax and rejuvenate on the pristine beaches of Zanzibar, where turquoise waters meet white sands and Swahili culture blends with tropical charm.',
  highlights: [
    'White sand beaches and crystal-clear waters',
    'Spice plantation tour',
    'Stone Town exploration',
    'Sunset dhow cruise',
    'Snorkeling and diving in Mnemba Atoll'
  ],
  included: [
    '5 nights beachfront accommodation',
    'Daily breakfast and dinner',
    'Airport transfers',
    'Stone Town and spice tour',
    'All park and marine fees'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Lunches and drinks',
    'Personal expenses',
    'Optional water sports'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Zanzibar',
      description: 'Arrive at Abeid Amani Karume International Airport and transfer to your beach resort for relaxation.',
      activities: ['Airport transfer', 'Beach relaxation'],
      meals: ['Dinner']
    },
    {
      day: 2,
      title: 'Stone Town Tour',
      description: 'Discover Zanzibar’s UNESCO-listed Stone Town, exploring historic architecture, markets, and culture.',
      activities: ['Walking tour', 'Cultural exploration'],
      meals: ['Breakfast', 'Dinner']
    },
    {
      day: 3,
      title: 'Spice Plantation Visit',
      description: 'Learn about Zanzibar’s spice heritage on a guided plantation tour.',
      activities: ['Guided spice tour', 'Cooking demonstration'],
      meals: ['Breakfast', 'Dinner']
    },
    {
      day: 4,
      title: 'Mnemba Atoll Snorkeling',
      description: 'Take a boat trip to Mnemba Atoll for snorkeling among colorful marine life.',
      activities: ['Boat trip', 'Snorkeling', 'Beach picnic'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 5,
      title: 'Leisure Day & Sunset Cruise',
      description: 'Relax at your resort or enjoy a sunset dhow cruise along the Indian Ocean.',
      activities: ['Leisure time', 'Dhow cruise'],
      meals: ['Breakfast', 'Dinner']
    },
    {
      day: 6,
      title: 'Departure',
      description: 'Transfer to the airport for your onward flight.',
      activities: ['Airport transfer'],
      meals: ['Breakfast']
    }
  ],
  guides: [
    {
      name: 'Asha Juma',
      avatar: 'assets/images/guide-zanzibar.jpg',
      role: 'Cultural & Coastal Guide',
      bio: 'Asha specializes in Zanzibari culture and coastal tours with over 10 years of guiding experience.'
    }
  ],
  location: 'Zanzibar, Tanzania',
  difficulty: 'Easy',
  groupSize: '2–10 guests',
  bestTime: ['June to October', 'December to March'],
  gallery: [
    'assets/images/zanzibar-beach1.jpg',
    'assets/images/stone-town.jpg',
    'assets/images/mnemba.jpg',
    'assets/images/zanzibar-sunset.jpg'
  ]
},
{
  id: 'kilimanjaro-trek',
  title: 'kilimanjaro-trek',
  duration: '8 Days / 7 Nights',
  rating: 5.0,
  image: 'assets/images/kilimanjaro.jpg',
  description: 'Conquer Africa’s highest peak — Mount Kilimanjaro. This guided trek takes you along the scenic Machame Route for the adventure of a lifetime.',
  highlights: [
    'Summit Africa’s tallest mountain',
    'Trek through rainforest and alpine deserts',
    'Guided by experienced mountain crew',
    'Spectacular sunrise from Uhuru Peak'
  ],
  included: [
    'All park fees and camping fees',
    'Professional mountain guides and porters',
    'Full board during the trek',
    'Camping equipment',
    'Airport transfers'
  ],
  notIncluded: [
    'International flights',
    'Personal gear (sleeping bag, boots)',
    'Tips for crew',
    'Travel insurance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Arusha',
      description: 'Meet your guide and prepare for the trek briefing and gear check.',
      activities: ['Airport transfer', 'Briefing', 'Lodge overnight'],
      meals: ['Dinner']
    },
    {
      day: 2,
      title: 'Machame Gate to Machame Camp',
      description: 'Begin trekking through lush rainforest to your first camp.',
      activities: ['Trekking', 'Wildlife spotting'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 3,
      title: 'Machame Camp to Shira Camp',
      description: 'Continue ascending through moorland with stunning views.',
      activities: ['Trekking', 'Photography'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 4,
      title: 'Shira to Barranco Camp',
      description: 'Cross the Lava Tower and descend to Barranco Valley.',
      activities: ['Trekking', 'Acclimatization'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 5,
      title: 'Barranco to Karanga Camp',
      description: 'Climb the Barranco Wall and trek across alpine terrain.',
      activities: ['Trekking', 'Team climb'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 6,
      title: 'Karanga to Barafu Camp',
      description: 'Final push to Barafu, base camp for the summit ascent.',
      activities: ['Trekking', 'Preparation for summit'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 7,
      title: 'Summit Day – Uhuru Peak',
      description: 'Start at midnight and reach the summit at sunrise — a once-in-a-lifetime experience.',
      activities: ['Summit trek', 'Photography', 'Descent to Mweka Camp'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 8,
      title: 'Return & Departure',
      description: 'Descend to Mweka Gate and transfer to Arusha for rest or departure.',
      activities: ['Descent', 'Certificate ceremony', 'Transfer'],
      meals: ['Breakfast', 'Lunch']
    }
  ],
  guides: [
    {
      name: 'Joseph Mwangi',
      avatar: 'assets/images/guide-kilimanjaro.jpg',
      role: 'Head Mountain Guide',
      bio: 'Joseph has summited Kilimanjaro over 100 times and ensures safety and success for every climber.'
    }
  ],
  location: 'Mount Kilimanjaro, Tanzania',
  difficulty: 'Challenging',
  groupSize: '4–10 guests',
  bestTime: ['January to March', 'June to October'],
  gallery: [
    'assets/images/kili-sunrise.PNG',
    'assets/images/kili-trek.jpg',
    'assets/images/uhuru-peak.jpg'
  ]
},

{
  id: 'tarangire-National-park',
  title: 'tarangire-National-park',
  duration: '2 Days / 1 Night',
  rating: 4.8,
  image: 'assets/images/PICHA - 25.png',
  description: 'Discover the land of giants — Tarangire National Park, home to vast elephant herds and ancient baobab trees.',
  highlights: [
    'Close-up encounters with elephants',
    'Baobab forest landscapes',
    'Birdwatching and scenic drives'
  ],
  included: [
    'Park entry fees',
    'Safari vehicle and guide',
    'Full-board accommodation',
    'Bottled water during the trip'
  ],
  notIncluded: [
    'Flights and visa',
    'Tips and personal items',
    'Travel insurance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arusha to Tarangire',
      description: 'Drive to Tarangire and enjoy your first game drive amid baobabs and elephants.',
      activities: ['Morning drive', 'Picnic lunch', 'Evening game drive'],
      meals: ['Lunch', 'Dinner']
    },
    {
      day: 2,
      title: 'Morning Game Drive & Return',
      description: 'Early morning safari before returning to Arusha.',
      activities: ['Sunrise drive', 'Photography', 'Drive back to Arusha'],
      meals: ['Breakfast', 'Lunch']
    }
  ],
  guides: [
    {
      name: 'Hassan Mtei',
      avatar: 'assets/images/guide-tarangire.jpg',
      role: 'Safari Specialist',
      bio: 'Hassan has guided wildlife safaris for 12 years with a passion for elephants and birdlife.'
    }
  ],
  location: 'Tarangire National Park, Tanzania',
  difficulty: 'Easy',
  groupSize: '2–6 guests',
  bestTime: ['June to October'],
  gallery: [
    'assets/images/ELEPHANT.png',
    'assets/images/BUFFALOES.png',
    'assets/images/HEARD OF GIRAFFE.png'
  ]
},

{
  id: 'lake-manyara-national-park',
  title: 'lake-manyara-national-park',
  duration: '2 Days / 1 Night',
  rating: 4.7,
  image: 'assets/images/lake-manyara.jpg',
  description: 'Explore the beautiful Lake Manyara, known for its tree-climbing lions, flamingos, and lush groundwater forests.',
  highlights: [
    'Flamingo viewing at Lake Manyara',
    'Tree-climbing lions',
    'Cultural visit to Mto wa Mbu village'
  ],
  included: [
    'All park fees',
    'Private 4x4 safari vehicle',
    'Lodge accommodation',
    'Professional driver-guide',
    'Bottled water'
  ],
  notIncluded: [
    'International airfare',
    'Tips and alcohol',
    'Personal expenses'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Drive to Lake Manyara',
      description: 'Depart Arusha and enjoy a game drive in the park surrounded by forest and lakeshore.',
      activities: ['Game drive', 'Birdwatching', 'Lodge check-in'],
      meals: ['Lunch', 'Dinner']
    },
    {
      day: 2,
      title: 'Morning Safari & Return',
      description: 'Enjoy a sunrise drive and optional cultural stop before returning to Arusha.',
      activities: ['Morning game drive', 'Village visit', 'Return drive'],
      meals: ['Breakfast', 'Lunch']
    }
  ],
  guides: [
    {
      name: 'Neema Mollel',
      avatar: 'assets/images/guide-manyara.jpg',
      role: 'Nature & Bird Guide',
      bio: 'Neema has expert knowledge of East African bird species and Lake Manyara’s ecosystems.'
    }
  ],
  location: 'Lake Manyara, Tanzania',
  difficulty: 'Easy',
  groupSize: '2–8 guests',
  bestTime: ['June to October', 'December to February'],
  gallery: [
    'assets/images/lake-manyara-flamingos.jpg',
    'assets/images/manyara-lions.jpg',
    'assets/images/manyara-forest.jpg'
  ]
},

{
  id: 'maasai-cultural',
  title: 'maasai-cultural',
  duration: '2 Days / 1 Night',
  rating: 4.8,
  image: 'assets/images/masai1.jpg',
  description: 'Immerse yourself in the traditions of the Maasai people — a cultural journey filled with storytelling, music, and heritage.',
  highlights: [
    'Visit an authentic Maasai boma (village)',
    'Traditional dances and songs',
    'Learn bead-making and spear-throwing',
    'Sunset storytelling by the fire'
  ],
  included: [
    'Cultural guide',
    'Overnight stay in Maasai village',
    'All meals and activities',
    'Donations to local community'
  ],
  notIncluded: [
    'Transport to the village',
    'Personal items',
    'Tips'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival & Cultural Introduction',
      description: 'Arrive at the Maasai village and participate in cultural activities.',
      activities: ['Dance performance', 'Craft workshops', 'Traditional dinner'],
      meals: ['Lunch', 'Dinner']
    },
    {
      day: 2,
      title: 'Morning Activities & Departure',
      description: 'Enjoy morning routines with the Maasai and farewell ceremony.',
      activities: ['Cattle herding', 'Farewell songs', 'Return journey'],
      meals: ['Breakfast']
    }
  ],
  guides: [
    {
      name: 'Ole Naserian',
      avatar: 'assets/images/guide-maasai.jpg',
      role: 'Maasai Cultural Host',
      bio: 'Ole Naserian shares deep insights into Maasai traditions and pastoral life.'
    }
  ],
  location: 'Arusha Region, Tanzania',
  difficulty: 'Easy',
  groupSize: '4–12 guests',
  bestTime: ['All year'],
  gallery: [
    'assets/images/masai1.jpg',
    'assets/images/masai.jpg'
  ]
},

{
  id: 'mount-meru-hike',
  title: 'mount-meru-hike',
  duration: '4 Days / 3 Nights',
  rating: 4.9,
  image: 'assets/images/Mountmeru.PNG',
  description: 'Climb Tanzania’s second-highest peak — Mount Meru — a beautiful, lesser-known adventure with breathtaking views of Kilimanjaro.',
  highlights: [
    'Summit Mount Meru (4,566m)',
    'Trek through Arusha National Park',
    'Wildlife sightings en route',
    'Guided by expert rangers'
  ],
  included: [
    'All park and camping fees',
    'Ranger and guide services',
    'Meals and camping gear',
    'Porter support'
  ],
  notIncluded: [
    'Personal trekking gear',
    'Tips for porters',
    'Travel insurance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Momella Gate to Miriakamba Hut',
      description: 'Start your trek through lush forests with colobus monkeys and giraffes.',
      activities: ['Hiking', 'Wildlife spotting'],
      meals: ['Lunch', 'Dinner']
    },
    {
      day: 2,
      title: 'Miriakamba to Saddle Hut',
      description: 'Ascend through montane forest to alpine moorland.',
      activities: ['Trekking', 'Photography'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 3,
      title: 'Summit Day – Socialist Peak',
      description: 'Climb to the summit before dawn for stunning sunrise views over Kilimanjaro.',
      activities: ['Summit trek', 'Descent to Miriakamba'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 4,
      title: 'Descend & Departure',
      description: 'Descend to Momella Gate and return to Arusha.',
      activities: ['Descent', 'Certificate ceremony'],
      meals: ['Breakfast', 'Lunch']
    }
  ],
  guides: [
    {
      name: 'Lucas Ndosi',
      avatar: 'assets/images/guide-meru.jpg',
      role: 'Mountain Guide',
      bio: 'Lucas is a certified mountain guide with over 15 years of experience on Meru and Kilimanjaro routes.'
    }
  ],
  location: 'Arusha National Park, Tanzania',
  difficulty: 'Moderate',
  groupSize: '4–8 guests',
  bestTime: ['June to October', 'December to February'],
  gallery: [
    'assets/images/meru.JPG',
    'assets/images/meru-crater.JPG'
  ]
},

{
  id: 'selous-game-reserve-safari',
  title: 'Selous Game Reserve Safari',
  duration: '4 Days / 3 Nights',
  rating: 4.8,
  image: 'assets/images/ELEPHANTS.png',
  description: 'Venture into the vast and wild Selous Game Reserve — Africa’s largest protected area with thrilling river safaris and remote wilderness.',
  highlights: [
    'Boat safari on Rufiji River',
    'Walking safari with armed ranger',
    'Classic 4x4 game drives',
    'Abundant wildlife — elephants, lions, hippos, crocodiles'
  ],
  included: [
    'Park and conservation fees',
    'Full-board accommodation',
    'Professional safari guide',
    'Game drives and boat safari'
  ],
  notIncluded: [
    'Flights to Selous',
    'Tips and drinks',
    'Travel insurance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival & Boat Safari',
      description: 'Arrive in Selous and enjoy an afternoon boat safari on the Rufiji River.',
      activities: ['Boat ride', 'Wildlife viewing', 'Sundowner'],
      meals: ['Lunch', 'Dinner']
    },
    {
      day: 2,
      title: 'Full-Day Game Drive',
      description: 'Explore the vast plains of Selous on a full-day game drive.',
      activities: ['Game drive', 'Picnic lunch', 'Photography'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 3,
      title: 'Walking Safari',
      description: 'Guided walking safari in the early morning followed by relaxation at the lodge.',
      activities: ['Walking safari', 'Birdwatching'],
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 4,
      title: 'Departure',
      description: 'Morning at leisure before transfer to airstrip for your flight or return drive.',
      activities: ['Morning coffee', 'Departure transfer'],
      meals: ['Breakfast']
    }
  ],
  guides: [
    {
      name: 'Fatma Komba',
      avatar: 'assets/images/guide-selous.jpg',
      role: 'Wildlife & Boat Safari Guide',
      bio: 'Fatma is an experienced guide specializing in Selous river and walking safaris.'
    }
  ],
  location: 'Selous Game Reserve, Southern Tanzania',
  difficulty: 'Easy',
  groupSize: '2–8 guests',
  bestTime: ['June to October'],
  gallery: [
    'assets/images/KIBOKO.png',
    'assets/images/SIMBA.png',
  ]
}
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