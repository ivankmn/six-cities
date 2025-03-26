import { User } from './offer';

export type ReviewType = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};
