import React, { useState } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  visibleGoods.sort((el1, el2) => {
    switch (sortType) {
      case 0:
        return 0;

      case 1:
        return el1.localeCompare(el2);

      case 2:
        return el1.length - el2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export const App: React.FC = () => {
  const [isReversed, setIsReversed] = useState(false);
  const [sortType, setSortType] = useState(SortType.NONE);

  const reversed = () => {
    setIsReversed(prevState => !prevState);
  };

  const reset = () => {
    setIsReversed(false);
    setSortType(SortType.NONE);
  };

  const sortByLength = () => {
    setSortType(SortType.LENGTH);
  };

  const sortAlphabetically = () => {
    setSortType(SortType.ALPHABET);
  };

  const showResetBtn = sortType === SortType.NONE && isReversed === false;
  const classBtnInfo = classNames('button', 'is-info',
    { 'is-light': sortType !== SortType.ALPHABET });
  const classBtnSuccess = classNames('button', 'is-success',
    { 'is-light': sortType !== SortType.LENGTH });
  const classBtnWarning = classNames('button', 'is-warning',
    { 'is-light': !isReversed });

  const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={classBtnInfo}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classBtnSuccess}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={classBtnWarning}
          onClick={reversed}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={reset}
          style={showResetBtn ? { display: 'none' } : {}}
        >
          Reset
        </button>
      </div>

      <ul>
        {goods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
