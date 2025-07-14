import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import CardList from '../../components/card-list/card-list';
import PlacesMap from '../../components/places-map/places-map';
import Navigation from '../../components/navigation/navigation';
import SortingList from '../../components/sorting/sorting-list';
import { CITIES } from '../../consts/cities';
import { useAppSelector } from '../../hooks';

function Main(): JSX.Element {
  const city = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.placesList);
  const cityOffers = offers.filter((offer) => offer.city.name === city);

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (cardId: number) => {
    const currentPoint = cityOffers.find((offer) => offer.id === cardId);
    setSelectedPoint(currentPoint);
  };

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Navigation cities={CITIES} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {cityOffers.length} places to stay in {city}
            </b>
            <SortingList />
            <CardList offers={cityOffers} isMain onListItemHover={onListItemHover} />
          </section>
          <div className="cities__right-section">
            <PlacesMap city={cityOffers[0].city} offers={cityOffers} isMain selectedOffer={selectedPoint} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
