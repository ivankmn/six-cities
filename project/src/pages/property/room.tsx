import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import CardList from '../../components/card-list/card-list';
import PlacesMap from '../../components/places-map/places-map';
import { useAppSelector } from '../../hooks';
import { useGetLocationsQuery, useGetReviewsQuery, useGetLocationsNearbyQuery } from '../../api/api';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';

function Room(): JSX.Element {
  const city = useAppSelector((state) => state.appData.currentCity);
  const params = useParams();
  const cityId = Number(params.id);
  const { data: offers = [], isLoading: isLocLoading } = useGetLocationsQuery();
  const { data: reviews = [] } = useGetReviewsQuery(cityId);
  const { data: offersNearbyList = [] } = useGetLocationsNearbyQuery(cityId);

  const cityOffers = offers.filter((offer) => offer.city.name === city);
  const nearbyOffers = offersNearbyList.slice(0, 3);
  const currentOffer = cityOffers.find((offer) => offer.id === cityId);

  // eslint-disable-next-line no-console
  console.log(currentOffer);
  // eslint-disable-next-line no-console
  console.log(nearbyOffers);

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (cardId: number) => {
    const currentPoint = cityOffers.find((offer) => offer.id === cardId);
    setSelectedPoint(currentPoint);
  };

  if (isLocLoading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: property</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">Beautiful &amp; luxurious studio at great location</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="/icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">Apartment</li>
                <li className="property__feature property__feature--bedrooms">3 Bedrooms</li>
                <li className="property__feature property__feature--adults">Max 4 adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">Wi-Fi</li>
                  <li className="property__inside-item">Washing machine</li>
                  <li className="property__inside-item">Towels</li>
                  <li className="property__inside-item">Heating</li>
                  <li className="property__inside-item">Coffee machine</li>
                  <li className="property__inside-item">Baby seat</li>
                  <li className="property__inside-item">Kitchen</li>
                  <li className="property__inside-item">Dishwasher</li>
                  <li className="property__inside-item">Cabel TV</li>
                  <li className="property__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">Angelina</span>
                  <span className="property__user-status">Pro</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                    building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where
                    the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          {currentOffer ? (
            <PlacesMap city={currentOffer.city} offers={nearbyOffers} isMain={false} selectedOffer={selectedPoint} />
          ) : (
            ''
          )}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList offers={nearbyOffers} isMain={false} onListItemHover={onListItemHover} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
