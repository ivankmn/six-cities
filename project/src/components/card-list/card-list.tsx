import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useCallback, useState } from 'react';

type CardProps = {
  offers: Offer[];
  isMain: boolean;
  onListItemHover: (id: number) => void;
};

function CardList({ offers, isMain = true, onListItemHover }: CardProps): JSX.Element {
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

  return (
    <div className={`${isMain ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {isMain
        ? offers.map((item) => <Card onFocus={onFocus} offer={item} isMain={isMain} key={item.id} />)
        : offers.map((item) => <Card onFocus={onFocus} offer={item} isMain={isMain} key={item.id} />)}
    </div>
  );
}

export default CardList;
