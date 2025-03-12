import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import { CITIES } from '../../consts/cities';
import { useState } from 'react';

type MainProps = {
  placeCount: number;
  offers: Offer[];
};

function Main({ placeCount, offers }: MainProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (cardId: number) => {
    const currentPoint: Offer | undefined = offers.find((offer: { id: number }) => offer.id === cardId);

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
          <CityList cities={CITIES} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placeCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <CardList offers={offers} onListItemHover={onListItemHover} />
          </section>
          <div className="cities__right-section">
            <Map city={offers[3].city} offers={offers} selectedPoint={selectedPoint} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
