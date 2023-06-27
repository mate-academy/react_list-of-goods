import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { Goods } from './components/Goods';

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

const SORT_BY_LENGTH = 'length';
const SORT_BY_ALPHABET = 'alphabetically';

function getPreparedGoods(goods, sorted, reversed) {
  const preparedGoods = [...goodsFromServer];

  if (!sorted && reversed) {
    return preparedGoods.reverse();
  }

  if (sorted) {
    preparedGoods.sort((good1, good2) => {
      switch (sorted) {
        case SORT_BY_ALPHABET:
          return reversed
            ? good2.localeCompare(good1)
            : good1.localeCompare(good2);

        case SORT_BY_LENGTH:
          return reversed
            ? good2.length - good1.length
            : good1.length - good2.length;

        default:
          return 0;
      }
    });
  }

  return preparedGoods;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [reverse, setRevers] = useState(false);
  const visibleGoods = getPreparedGoods(goodsFromServer, sortField, reverse);

  function reset() {
    setSortField('');
    setRevers(false);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={classNames('button is-info',
            sortField === SORT_BY_ALPHABET ? '' : 'is-light')
          }
          onClick={() => setSortField(SORT_BY_ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classNames('button is-info',
            sortField === SORT_BY_LENGTH ? '' : 'is-light')
          }
          onClick={() => setSortField(SORT_BY_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={classNames('button is-warning', reverse ? '' : 'is-light')}
          onClick={() => setRevers(!reverse)}
        >
          Reverse
        </button>

        {(sortField || reverse) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => reset()}
          >
            Reset
          </button>
        )}

      </div>
      <Goods goods={visibleGoods} />
    </div>
  );
};
