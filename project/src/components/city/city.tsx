type CityProps = {
  city: string;
  current: string;
  onCityChange: (evt: React.MouseEvent<HTMLElement>) => void;
};

function City({ city, current, onCityChange }: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${current === city ? 'tabs__item--active' : ''}`}
        href="/"
        onClick={onCityChange}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
