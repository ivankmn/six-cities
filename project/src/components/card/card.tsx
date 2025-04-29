import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';

type CardProps = {
  offer: Offer;
  isMain: boolean;
  onFocus: (id: number) => void;
};

const ONE_STAR_RATING_WIDTH = 20;

function Mark(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function Card({ offer, isMain, onFocus }: CardProps): JSX.Element {
  const onCardFocus = () => onFocus(offer.id);

  return (
    <article
      className={`${isMain ? 'cities__card place-card' : 'near-places__card place-card'}`}
      onMouseEnter={onCardFocus}
    >
      {offer.isPremium ? Mark() : ''}

      <div
        className={`${
          isMain
            ? 'cities__image-wrapper place-card__image-wrapper'
            : 'near-places__image-wrapper place-card__image-wrapper'
        }`}
      >
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {isMain ? (
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          ) : (
            ''
          )}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ONE_STAR_RATING_WIDTH * offer.rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
