import classNames from 'classnames';

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

const SORT_FIELD_ALPHABET = 'alphabet';
const SORT_FIELD_LENGTH = 'length';

function getNewSort(goods, alphOrLength, reversed) {
  const newGoods = [...goods];

  if (!alphOrLength && reversed) {
    return newGoods.reverse();
  }

  if (alphOrLength) {
    newGoods.sort((good1, good2) => {
      switch (alphOrLength) {
        case SORT_FIELD_LENGTH:
          if (good1.length !== good2.length) {
            return reversed
              ? good2.length - good1.length
              : good1.length - good2.length;
          }

          return reversed
            ? good2.localeCompare(good1)
            : good1.localeCompare(good2);

        case SORT_FIELD_ALPHABET:
          return reversed
            ? good2.localeCompare(good1)
            : good1.localeCompare(good2);

        default:
          return 0;
      }
    });
  }

  return newGoods;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [sortReverse, setSortReverse] = useState(false);
  const updateGoods = getNewSort(goodsFromServer, sortField, sortReverse);

  const newSortField = (field) => {
    setSortField(field);
  };

  const newSortReverse = () => {
    setSortReverse(!sortReverse);
  };

  const buttonClasses = classNames('button', 'is-info', {
    'is-light': sortField !== SORT_FIELD_ALPHABET,
  });

  const sortByLength = classNames('button', 'is-info', 'is-success', {
    'is-light': sortField !== SORT_FIELD_LENGTH,
  });

  const reverseClasses = classNames('button', 'is-info', 'is-warning', {
    'is-light': !sortReverse,
  });

  const resetClasses = classNames('button', 'is-danger', 'is-light', {
    hidden: sortField === '' && !sortReverse,
  });

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={buttonClasses}
          onClick={() => newSortField(SORT_FIELD_ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={sortByLength}
          onClick={() => newSortField(SORT_FIELD_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={reverseClasses}
          onClick={newSortReverse}
        >
          Reverse
        </button>

        {(sortField !== '' || sortReverse) && (
          <button
            type="button"
            className={resetClasses}
            onClick={() => {
              setSortField('');
              setSortReverse(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {updateGoods.map(good => (
          <li
            data-cy="Good"
            key={good}
          >
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
