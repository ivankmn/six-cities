import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useCallback } from 'react';

type CardProps = {
  offers: Offer[];
  isMain: boolean;
  onListItemHover: (id: number) => void;
};

function CardList({ offers, isMain = true, onListItemHover }: CardProps): JSX.Element {
  const onFocus = useCallback(
    (id: number) => {
      onListItemHover(id);
    },
    [onListItemHover]
  );

  return (
    <div className={`${isMain ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {offers.map((item) => (
        <Card onFocus={onFocus} offer={item} isMain={isMain} key={item.id} />
      ))}
    </div>
  );
}

export default CardList;
