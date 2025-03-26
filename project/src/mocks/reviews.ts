import { ReviewType } from '../types/review';

function getReviews(): ReviewType[] {
  return [
    {
      id: 1,
      user: {
        id: 16,
        isPro: true,
        name: 'Mollie',
        avatarUrl: 'https://12.react.htmlacademy.pro/static/avatar/7.jpg',
      },
      rating: 4,
      comment: 'I stayed here for one night and it was an unpleasant experience.',
      date: '2024-07-18T10:05:35.369Z',
    },
    {
      id: 2,
      user: {
        id: 17,
        isPro: false,
        name: 'Emely',
        avatarUrl: 'https://12.react.htmlacademy.pro/static/avatar/8.jpg',
      },
      rating: 3,
      comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
      date: '2024-07-18T10:05:35.369Z',
    },
  ];
}

export default getReviews;
