import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';
import { GoodsList } from './components/GoodsList';

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

const SORT_BY_NAME = 'name';
const SORT_BY_LENGTH = 'length';

const compareGoods = (good1, good2, orderBy) => {
  switch (orderBy) {
    case SORT_BY_NAME:
      return good1.localeCompare(good2);
    case SORT_BY_LENGTH:
      return good1.length - good2.length;

    default:
      return 0;
  }
};

const getPreparedGoods = (goods, { sortBy, query, reverse }) => {
  const filtered = query
    ? [...goods].filter(good => good.include(query))
    : [...goods];
  const sorted = sortBy
    ? filtered.sort((good1, good2) => compareGoods(good1, good2, sortBy))
    : filtered;

  return reverse
    ? sorted.reverse()
    : sorted;
};

export const App = () => {
  const [sortBy, setSortBy] = useState(null);
  const [reverse, setReverse] = useState(false);
  const visibleGoods = getPreparedGoods(
    goodsFromServer,
    { sortBy,
      query: null,
      reverse },
  );

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info',
            { 'is-light': sortBy !== SORT_BY_NAME })}
          onClick={() => setSortBy(SORT_BY_NAME)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-success',
            { 'is-light': sortBy !== SORT_BY_LENGTH })}
          onClick={() => setSortBy(SORT_BY_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning',
            { 'is-light': !reverse })}
          onClick={() => setReverse(!reverse)}
        >
          Reverse
        </button>

        {(sortBy !== null || reverse)
        && (
        <button
          type="button"
          className="button is-danger is-light"
          onClick={() => {
            setSortBy(null);
            setReverse(false);
          }}
        >
          Reset
        </button>
        )}

      </div>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
