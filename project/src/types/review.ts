import { User } from './offer';

export type ReviewItem = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};
