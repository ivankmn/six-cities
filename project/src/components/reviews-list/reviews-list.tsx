import Review from '../review/review';
import { ReviewItem } from '../../types/review';

type ReviewsListProps = {
  reviews: ReviewItem[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
