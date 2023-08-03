import { Badge } from "@/components/RankingCard";
export interface Firm {
  id: string;
  name: string;
  badges: Badge[];
  firmRegions: {
    crossBorderCapability: string;
    booking: boolean;
    expertiseAndReputationRating: number;
    clientSatisfactionRating: number;
  }[];
}

export interface Ranking {
  id: string;
  name: string;
  firm: Firm;
  tier: string;
  ranking1: string;
  ranking2: string;
  badges: string[];
  expertiseRating?: number;
  clientSatisfactionRating?: number;
  bookingStatus: 'booking' | 'non-booking';
  isLocal?: boolean;
}