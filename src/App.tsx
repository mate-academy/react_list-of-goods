import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((goodA, goodB) => goodA.localeCompare(goodB));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((goodA, goodB) => goodA.length - goodB.length);
      break;

    default:
      visibleGoods = [...goodsFromServer];
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [isReversed, setIsReversed] = useState(false);
  const [sortType, setSortType] = useState(SortType.NONE);

  const reorderedGoods = getReorderedGoods(goodsFromServer, {
    sortType,
    isReversed,
  });

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn({
            'button is-info': true,
            'is-light': sortType !== SortType.ALPHABET,
          })}
          onClick={() => setSortType(SortType.ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn({
            'button is-success': true,
            'is-light': sortType !== SortType.LENGTH,
          })}
          onClick={() => setSortType(SortType.LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn({
            'button is-warning': true,
            'is-light': !isReversed,
          })}
          onClick={() => setIsReversed(!isReversed)}
        >
          Reverse
        </button>

        {sortType !== 0 || isReversed ? (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortType(0);
              setIsReversed(false);
            }}
          >
            Reset
          </button>
        ) : (
          ''
        )}
      </div>

      <ul>
        {reorderedGoods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
