import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useCallback } from 'react';
import { SortItem } from '../../consts/sort-item';
import { useAppSelector } from '../../hooks';

type CardProps = {
  offers: Offer[];
  isMain: boolean;
  onListItemHover: (id: number) => void;
};

const getSortedOffers = (offers: Offer[], sortingType: string) => {
  switch (sortingType) {
    case SortItem.POPULAR:
      return offers;
    case SortItem.PRICE_HIGH_TO_LOW:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortItem.PRICE_LOW_TO_HIGH:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortItem.TOP_RATED:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

function CardList({ offers, isMain = true, onListItemHover }: CardProps): JSX.Element {
  const onFocus = useCallback(
    (id: number) => {
      onListItemHover(id);
    },
    [onListItemHover]
  );
  const currentSortType = useAppSelector((state) => state.currentSorting);
  const sortedOffers = getSortedOffers(offers, currentSortType);

  return (
    <div className={`${isMain ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {sortedOffers.map((item) => (
        <Card onFocus={onFocus} offer={item} isMain={isMain} key={item.id} />
      ))}
    </div>
  );
}

export default CardList;
