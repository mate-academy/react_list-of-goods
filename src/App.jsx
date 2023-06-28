import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { Goods } from './components/Goods';
import { SORT_BY } from './constants';

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

function getPreparedGoods(goods, sortType, isReverseD) {
  const preparedGoods = [...goodsFromServer];

  if (!sortType && isReverseD) {
    return preparedGoods.reverse();
  }

  if (sortType) {
    preparedGoods.sort((good1, good2) => {
      switch (sortType) {
        case SORT_BY.ALPHABET:
          return isReverseD
            ? good2.localeCompare(good1)
            : good1.localeCompare(good2);

        case SORT_BY.LENGTH:
          return isReverseD
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
  const [isReversed, setIsReversed] = useState(false);
  const visibleGoods = getPreparedGoods(goodsFromServer, sortField, isReversed);

  function reset() {
    setSortField('');
    setIsReversed(false);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={classNames('button is-info',
            sortField === SORT_BY.ALPHABET ? '' : 'is-light')
          }
          onClick={() => setSortField(SORT_BY.ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classNames('button is-info',
            sortField === SORT_BY.LENGTH ? '' : 'is-light')
          }
          onClick={() => setSortField(SORT_BY.LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={classNames('button is-warning',
            isReversed ? '' : 'is-light')}
          onClick={() => setIsReversed(!isReversed)}
        >
          Reverse
        </button>

        {(sortField || isReversed) && (
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
