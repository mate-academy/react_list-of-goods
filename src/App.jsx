import 'bulma/css/bulma.css';
import cn from 'classnames';
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

const SORT_BY_ALPHABET = 'alphabet';
const SORT_BY_LENGTH = 'length';

function getPrepearedGoods(goods, sortField, sortRevers) {
  const prepearedGoods = [...goods];

  if (sortField === SORT_BY_ALPHABET) {
    prepearedGoods.sort((a, b) => {
      switch (sortRevers) {
        case true:
          return b.localeCompare(a);
        case false:
          return a.localeCompare(b);
        default:
          return 0;
      }
    });
  }

  if (sortField === SORT_BY_LENGTH) {
    prepearedGoods.sort((a, b) => {
      switch (sortRevers) {
        case true:
          return b.length - a.length;
        case false:
          return a.length - b.length;
        default:
          return 0;
      }
    });
  }

  if (sortField === '' && sortRevers) {
    prepearedGoods.reverse();
  }

  return prepearedGoods;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [sortRevers, setSortRevers] = useState(false);

  const visibleGoods = getPrepearedGoods(
    goodsFromServer, sortField, sortRevers,
  );

  const reverse = () => (
    sortRevers ? (
      setSortRevers(false)
    ) : (
      setSortRevers(true)
    )
  );

  const reset = () => {
    if (sortField !== '' || sortRevers) {
      return true;
    }

    return false;
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            cn(
              'button is-info',
              { 'is-light': sortField !== SORT_BY_ALPHABET },
            )}
          onClick={() => setSortField(SORT_BY_ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            cn(
              'button is-success',
              { 'is-light': sortField !== SORT_BY_LENGTH },
            )}
          onClick={() => setSortField(SORT_BY_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', { 'is-light': !sortRevers })}
          onClick={reverse}
        >
          Reverse
        </button>

        {reset() && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortField('');
              setSortRevers(false);
            }}
          >
            Reset
          </button>
        )
        }
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li data-cy="Good" key={good}>{good}</li>
        ))}
      </ul>
    </div>
  );
};
