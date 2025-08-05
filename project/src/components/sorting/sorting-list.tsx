import { useState } from 'react';
import { SortItems } from '../../consts/sort-items';
import { useAppSelector } from '../../hooks';

type SortProps = {
  onChange: (sortingType: string, setIsSortingOpened: (sortState: boolean) => void) => void;
};

function SortingList(props: SortProps): JSX.Element {
  const { onChange } = props;
  const currentSortType = useAppSelector((state) => state.appData.currentSorting);
  const [isSortingOpened, setIsSortingOpened] = useState(false);

  const sortingToggle = () => {
    setIsSortingOpened((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={sortingToggle} tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortingOpened ? 'places__options--opened' : ''}`}>
        {Object.values(SortItems).map((sortType) => (
          <li
            key={sortType}
            className={`places__option ${sortType === currentSortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onChange(sortType, setIsSortingOpened)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingList;
