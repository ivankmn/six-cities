import { useState } from 'react';
import { SortItem } from '../../consts/sort-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sorting } from '../../store/action';

function SortingList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector((state) => state.currentSorting);
  const [isSortingOpened, setIsSortingOpened] = useState(false);

  const sortingToggle = () => {
    setIsSortingOpened((prevState) => !prevState);
  };

  const onSortingChange = (sortingType: string) => {
    dispatch(sorting({ sortingType: sortingType }));
    setIsSortingOpened(false);
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
        {Object.values(SortItem).map((sortType) => (
          <li
            key={sortType}
            className={`places__option ${sortType === currentSortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onSortingChange(sortType)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingList;
