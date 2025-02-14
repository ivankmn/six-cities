import Star from '../star/star';

function Rating(): JSX.Element {
  const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
  const ratingTitlesLength = RATING_TITLES.length;

  return (
    <div className="reviews__rating-form form__rating">
      {RATING_TITLES.map((item, i) => (
        <Star title={item} index={i} length={ratingTitlesLength} key={item}></Star>
      ))}
    </div>
  );
}

export default Rating;
