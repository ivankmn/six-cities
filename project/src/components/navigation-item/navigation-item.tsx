type NavigationItemProps = {
  city: string;
  current: string;
  onCityChange: (city: string) => (evt: React.MouseEvent<HTMLAnchorElement>) => void;
};

function NavigationItem({ city, current, onCityChange }: NavigationItemProps): JSX.Element {
  const onSelectCity = onCityChange(city);
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${current === city ? 'tabs__item--active' : ''}`}
        href="#/"
        onClick={onSelectCity}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default NavigationItem;
