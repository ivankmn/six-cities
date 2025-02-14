import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useCallback, useState } from 'react';

type CardProps = {
  offers: Offer[];
};

function CardList({ offers }: CardProps): JSX.Element {
  const [cardId, setCardId] = useState(0);
  const onFocus = useCallback(
    (id: number) => {
      setCardId(id);
      // eslint-disable-next-line no-console
      console.log(cardId);
    },
    [setCardId]
  );

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <Card onFocus={onFocus} offer={item} key={item.id} />
      ))}
    </div>
  );
}

export default CardList;
