// import { Link } from 'react-router-dom';

type CityProps = {
  city: string;
  current: string | undefined;
};

function City({ city, current }: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${current === city ? 'tabs__item--active' : ''}`}
        href="/"
        data-id={city}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
