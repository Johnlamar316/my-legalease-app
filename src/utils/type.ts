export interface Ranking {
  id: string;
  name: string;
  tier: string;
  ranking1: string;
  ranking2: string;
  badges: string[];
  expertiseRating?: number;
  clientSatisfactionRating?: number;
  bookingStatus: 'booking' | 'non-booking';
  isLocal?: boolean;
}