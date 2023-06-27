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

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${
            sortField !== SORT_FIELD_ALPHABET
              ? 'is-light'
              : ''
          }`}
          onClick={() => {
            setSortField(SORT_FIELD_ALPHABET);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info is-success ${
            sortField !== SORT_FIELD_LENGTH
              ? 'is-light'
              : ''
          }`}
          onClick={() => {
            setSortField(SORT_FIELD_LENGTH);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info is-warning ${
            sortReverse
              ? ''
              : 'is-light'
          }`}
          onClick={() => {
            setSortReverse(!sortReverse);
          }}
        >
          Reverse
        </button>

        {(sortField !== '' || sortReverse) && (
          <button
            type="button"
            className="button is-danger is-light"
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
