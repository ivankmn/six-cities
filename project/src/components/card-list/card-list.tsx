import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fillPlaces } from '../../store/action';

type CardProps = {
  offers: Offer[];
  isMain: boolean;
  onListItemHover: (id: number) => void;
};

function CardList({ offers, isMain = true, onListItemHover }: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [cardId, setCardId] = useState(0);
  const onFocus = useCallback(
    (id: number) => {
      setCardId(id);
      // eslint-disable-next-line no-console
      // console.log(cardId);
      onListItemHover(cardId);
    },
    [cardId, onListItemHover]
  );

  dispatch(fillPlaces({ places: offers }));

  const city = useAppSelector((state) => state.currentCity);

  const cityOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className={`${isMain ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {isMain
        ? cityOffers.map((item) => <Card onFocus={onFocus} offer={item} isMain={isMain} key={item.id} />)
        : cityOffers.map((item) => <Card onFocus={onFocus} offer={item} isMain={isMain} key={item.id} />)}
    </div>
  );
}

export default CardList;
