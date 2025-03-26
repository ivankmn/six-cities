type CityProps = {
  city: string;
  current: string;
  onCityChange: (city: string) => (evt: React.MouseEvent<HTMLElement>) => void;
};

function City({ city, current, onCityChange }: CityProps): JSX.Element {
  const onSelectCity = onCityChange(city);
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${current === city ? 'tabs__item--active' : ''}`}
        href="/"
        onClick={onSelectCity}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
