import { Itinerary } from './itinerary.model';

describe('Itinerary', () => {
  it('should create an instance', () => {
    const testItinerary: Itinerary = {
      id: '1',
      title: 'Test Safari',
      duration: '3 days',
      rating: 4.8,
      image: 'safari.jpg',
      description: 'Amazing safari experience',
      highlights: [
        'Game drives in Maasai Mara',
        'Wildebeest migration viewing',
        'Luxury tented accommodation'
      ],
      included: [
        'All park entry fees',
        'Professional guide',
        'All meals as specified'
      ],
      notIncluded: [
        'International flights',
        'Travel insurance',
        'Personal expenses'
      ],
      location: 'Maasai Mara, Kenya',
      difficulty: 'Moderate',
      groupSize: '4-12 people',
      bestTime: ['July', 'August', 'September', 'October'],
      gallery: [
        'safari1.jpg',
        'safari2.jpg',
        'safari3.jpg'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival and Game Drive',
          description: 'Morning transfer to the reserve and afternoon game drive',
          activities: [
            'Airport pickup',
            'Transfer to lodge',
            'Afternoon game drive'
          ],
          meals: ['Lunch', 'Dinner']
        },
        {
          day: 2,
          title: 'Full Day Safari',
          description: 'Full day game drive with picnic lunch',
          activities: [
            'Morning game drive',
            'Picnic lunch in the bush',
            'Afternoon game drive'
          ],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
          day: 3,
          title: 'Departure',
          description: 'Morning game drive and transfer back',
          activities: [
            'Early morning game drive',
            'Breakfast at the lodge',
            'Transfer to airport'
          ],
          meals: ['Breakfast']
        }
      ]
    };

    expect(testItinerary).toBeTruthy();
    expect(testItinerary.id).toBe('1');
    expect(testItinerary.itinerary.length).toBe(3);
  });
});
