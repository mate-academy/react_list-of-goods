import 'bulma/css/bulma.css';
import { useState } from 'react';
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

function getPreparedGoods(goodsFrom, sortField, reverse) {
  const goods = [...goodsFrom];

  if (sortField) {
    goods.sort((a, b) => {
      switch (sortField) {
        case SORT_FIELD_NAME:
          return a.localeCompare(b);

        case SORT_FIELD_LENGTH:
          return a.length - b.length;

        default:
          return 0;
      }
    });
  }

  if (reverse) {
    goods.reverse();
  }

  return goods;
}

function getReset(sortField, reverse) {
  return sortField !== '' || reverse;
}

const SORT_FIELD_NAME = 'name';
const SORT_FIELD_LENGTH = 'length';

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [reverse, setReversed] = useState(false);

  const visibleGoods = getPreparedGoods(goodsFromServer, sortField, reverse);
  const reset = getReset(sortField, reverse);

  const resetSort = () => {
    setReversed(false);
    setSortField('');
  };

  return (
    <>
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              sortField === SORT_FIELD_NAME
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={() => setSortField(SORT_FIELD_NAME)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              sortField === SORT_FIELD_LENGTH
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={() => setSortField(SORT_FIELD_LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={reverse ? 'button is-info' : 'button is-info is-light'}
            onClick={() => setReversed(!reverse)}
          >
            Reverse
          </button>

          {reset && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={resetSort}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li
              key={good}
              data-cy="Good"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
