import Card from '../card/card';
import { Offers } from '../../types/offer';
// import { useState } from 'react';

type CardProps = {
  offers: Offers[];
};

function CardList({ offers }: CardProps): JSX.Element {
  // const [isActiveCard, setIsActiveCard] = useState({ cardId: 0 });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <Card
          // onMouseEnter={() => {
          //   setIsActiveCard({ ...isActiveCard, cardId: item.id });
          // }}
          offer={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default CardList;
