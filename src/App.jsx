import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';
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

const SORT_FILD_ALPHABET = 'Sort alphabetically';
const SORT_FILD_LENGTH = 'Sort by length';
const REVERSE_FILD = 'Reverse';

function getPrepareGoods(goods, sortField, reverseField) {
  const prepareGoods = [...goods];

  if (!sortField && reverseField) {
    prepareGoods.reverse();
  } else if (sortField) {
    prepareGoods.sort((a, b) => {
      if (!reverseField) {
        switch (sortField) {
          case SORT_FILD_ALPHABET:
            return a.localeCompare(b);
          case SORT_FILD_LENGTH:
            return a.length - b.length;
          default:
            return 0;
        }
      } else {
        switch (sortField) {
          case SORT_FILD_ALPHABET:
            return b.localeCompare(a);
          case SORT_FILD_LENGTH:
            return b.length - a.length;
          default:
            return 0;
        }
      }
    });
  }

  return prepareGoods;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [reverseField, setReverseField] = useState('');
  const visibleGoods = getPrepareGoods(
    goodsFromServer,
    sortField,
    reverseField,
  );

  function reverseWithConditions() {
    const reverseValue = reverseField ? '' : REVERSE_FILD;

    setReverseField(reverseValue);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn(
            'button',
            'is-info',
            { 'is-light': sortField !== SORT_FILD_ALPHABET },
          )}
          onClick={() => setSortField(SORT_FILD_ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn(
            'button',
            'is-success',
            { 'is-light': sortField !== SORT_FILD_LENGTH },
          )}
          onClick={() => setSortField(SORT_FILD_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn(
            'button',
            'is-warning',
            { 'is-light': reverseField !== REVERSE_FILD },
          )}
          onClick={() => reverseWithConditions()}
        >
          Reverse
        </button>

        {(sortField || reverseField) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortField('');
              setReverseField('');
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li data-cy="Good" key={`#id-${good}`}>{good}</li>
        ))}
      </ul>
    </div>
  );
};
