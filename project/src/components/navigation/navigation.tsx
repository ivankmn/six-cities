import NavigationItem from '../navigation-item/navigation-item';
import { cityChange } from '../../store/action';
import { useAppSelector, useAppDispatch } from '../../hooks';

type CityListProps = {
  cities: string[];
};

function Navigation({ cities }: CityListProps) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);

  const onSelectCity = (city: string) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    dispatch(cityChange({ city: city }));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <NavigationItem city={city} current={currentCity} key={city} onCityChange={onSelectCity} />
      ))}
    </ul>
  );
}

export default Navigation;
