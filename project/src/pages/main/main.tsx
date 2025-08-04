import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import CardList from '../../components/card-list/card-list';
import PlacesMap from '../../components/places-map/places-map';
import Navigation from '../../components/navigation/navigation';
import SortingList from '../../components/sorting/sorting-list';
import { CITIES } from '../../consts/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sorting } from '../../store/action';
import { useGetLocationsQuery } from '../../api/api';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const { data: offers = [], isLoading } = useGetLocationsQuery();
  const city = useAppSelector((state) => state.appData.currentCity);

  const cityOffers = offers.filter((offer) => offer.city.name === city);
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (cardId: number) => {
    const currentPoint = cityOffers.find((offer) => offer.id === cardId);
    setSelectedPoint(currentPoint);
  };
  const onSortingChange = (sortingType: string, setIsSortingOpened: (sortState: boolean) => void) => {
    dispatch(sorting({ sortingType: sortingType }));
    setIsSortingOpened(false);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Загружаем список отелей...</p>
      </div>
    );
  }
  if (!offers) {
    return <div>Нет данных</div>;
  }
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
            <SortingList onChange={onSortingChange} />
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
