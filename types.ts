export interface ReviewStats {
  rating: number;
  totalReviews: string;
  fiveStarPercent: number;
  fourStarPercent: number;
  threeStarPercent: number;
  twoStarPercent: number;
  oneStarPercent: number;
}

export interface AppDetails {
  title: string;
  developer: string;
  size: string;
  downloads: string;
  ageRating: string;
  description: string;
}