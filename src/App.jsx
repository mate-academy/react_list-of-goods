import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';

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

function getPreparedGoods(goodsFrom, sortField, hasReverse) {
  const goods = [...goodsFrom];

  if (sortField) {
    goods.sort((goodA, goodB) => {
      switch (sortField) {
        case SORT_BY_NAME:
          return goodA.localeCompare(goodB);

        case SORT_BY_LENGTH:
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });
  }

  if (hasReverse) {
    goods.reverse();
  }

  return goods;
}

function getResetValue(sortField, hasReverse) {
  if (sortField.length > 0 || hasReverse) {
    return true;
  }

  return false;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [hasReverse, setHasReverse] = useState(false);

  const hasReset = getResetValue(sortField, hasReverse);
  const sortListGoods = getPreparedGoods(
    goodsFromServer,
    sortField,
    hasReverse,
  );

  const deleteSort = () => {
    setHasReverse(false);
    setSortField('');
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={sortField === SORT_BY_NAME
            ? 'button is-info'
            : 'button is-info is-light'
          }
          onClick={() => setSortField(SORT_BY_NAME)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={sortField === SORT_BY_LENGTH
            ? 'button is-info'
            : 'button is-info is-light'
          }
          onClick={() => setSortField(SORT_BY_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={hasReverse
            ? 'button is-info'
            : 'button is-info is-light'
          }
          onClick={() => setHasReverse(!hasReverse)}
        >
          Reverse
        </button>

        {hasReset && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={deleteSort}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {sortListGoods.map(good => (
          <li key={good} data-cy="Good">{good}</li>
        ))}
      </ul>
    </div>
  );
};
