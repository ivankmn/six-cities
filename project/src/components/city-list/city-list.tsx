import { useState } from 'react';
import City from '../city/city';

type CityListProps = {
  cities: string[];
};

function CityList({ cities }: CityListProps) {
  const [currentCity, setCurrentCity] = useState<string>(cities[0]);
  const onSelectCity = (city: string) => (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    // eslint-disable-next-line no-console
    console.log(city);
    setCurrentCity(city);
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City city={city} current={currentCity} key={city} onCityChange={onSelectCity} />
      ))}
    </ul>
  );
}

export default CityList;
