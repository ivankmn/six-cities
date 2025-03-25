type CityProps = {
  city: string;
  current: string;
  onSelectCity: (city: string) => (evt: React.MouseEvent<HTMLElement>) => void;
};

function City({ city, current, onSelectCity }: CityProps): JSX.Element {
  const onChange = onSelectCity(city);
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${current === city ? 'tabs__item--active' : ''}`}
        href="/"
        onClick={onChange}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
