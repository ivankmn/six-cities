import { useState } from 'react';
import City from '../city/city';

type CityListProps = {
  cities: string[];
};

type cityChangeEvent = React.MouseEvent<HTMLElement>;

function CityList({ cities }: CityListProps) {
  const [currentCity, setCurrentCity] = useState<string | undefined>(cities[0]);
  const cityChangeHandle = (evt: cityChangeEvent) => {
    const cityBtn = (evt.target as Element)?.closest('.tabs__item') as HTMLElement;

    if (!cityBtn) {
      return;
    }

    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(cityBtn.dataset.id);
    setCurrentCity(cityBtn.dataset.id);
  };

  return (
    <ul className="locations__list tabs__list" onClick={cityChangeHandle}>
      {cities.map((city) => (
        <City city={city} current={currentCity} key={city} />
      ))}
    </ul>
  );
}

export default CityList;
