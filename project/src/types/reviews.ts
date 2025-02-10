import { User } from './offer';

export type Reviews = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};
