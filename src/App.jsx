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

const SORT_FEILD_ALPH = 'alph';
const SORT_FEILD_LENGTH = 'length';

function getPrepearedGoods(goods, sortType, isReversed) {
  const prepearedGoods = [...goods];

  prepearedGoods.sort((good1, good2) => {
    switch (sortType) {
      case SORT_FEILD_LENGTH:
        return good1.length - good2.length;

      case SORT_FEILD_ALPH:
        return good1.localeCompare(good2);

      default:
        return 0;
    }
  });

  if (isReversed) {
    prepearedGoods.reverse();
  }

  return prepearedGoods;
}

export const App = () => {
  const [sortFeild, setSortFeild] = useState('');
  const [sortReverse, setSortReverse] = useState(false);
  const finalGoods = getPrepearedGoods(goodsFromServer, sortFeild, sortReverse);
  const resetSort = () => {
    setSortFeild('');
    setSortReverse(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn(
            'button is-info',
            { 'is-light': sortFeild !== SORT_FEILD_ALPH },
          )}
          onClick={() => {
            setSortFeild(SORT_FEILD_ALPH);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn(
            'button is-success',
            { 'is-light': sortFeild !== SORT_FEILD_LENGTH },
          )}
          onClick={() => {
            setSortFeild(SORT_FEILD_LENGTH);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn(
            'button is-warning',
            { 'is-light': !sortReverse },
          )}
          onClick={() => {
            setSortReverse(!sortReverse);
          }}
        >
          Reverse
        </button>

        {(sortFeild !== '' || sortReverse) && (
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
        {finalGoods.map(good => (
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
