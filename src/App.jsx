import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

import { List } from './Components/List';

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

const SORT_BY_ALPHA_ASC = 'asc';
const SORT_BY_ALPHA_DESC = 'desc';
const SORT_BY_LENGTH_ASC = 'up';
const SORT_BY_LENGTH_DESC = 'down';
const REVERSE = 'reverse';
const RESET = 'reset';

function sortingFunction(data, sortField, prevValue) {
  const list = [...data];
  const reverseData = [...prevValue];

  if (sortField === RESET) {
    return list;
  }

  if (sortField !== REVERSE) {
    list.sort((a, b) => {
      switch (sortField) {
        case SORT_BY_ALPHA_ASC:
          return b.localeCompare(a);
        case SORT_BY_ALPHA_DESC:
          return a.localeCompare(b);
        case SORT_BY_LENGTH_ASC:
          return a.length - b.length;
        case SORT_BY_LENGTH_DESC:
          return b.length - a.length;
        default:
          return 0;
      }
    });
  }

  return sortField === REVERSE ? reverseData.reverse() : list;
}

function displayingResset(initial, current) {
  return JSON.stringify(initial) === JSON.stringify(current);
}

export const App = () => {
  const [isAlpha, setAlptha] = useState(false);
  const [isLength, setLength] = useState(false);
  const [isReverse, setReverse] = useState(false);

  const [isSorted, buttonAction] = useState('');
  const [isPrevGoods, setPrevGoods] = useState([...goodsFromServer]);

  const changedGoods = sortingFunction(
    [...goodsFromServer], isSorted, isPrevGoods,
  );

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn(
            'button is-info',
            { 'is-light': !isAlpha },
          )
          }
          onClick={() => {
            buttonAction(isSorted === 'asc'
              ? SORT_BY_ALPHA_DESC
              : SORT_BY_ALPHA_ASC);
            setPrevGoods([...changedGoods]);
            setAlptha(!isAlpha);
            setLength(false);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn(
            'button is-success',
            { 'is-light': !isLength },
          )
          }
          onClick={() => {
            buttonAction(isSorted === 'up'
              ? SORT_BY_LENGTH_DESC
              : SORT_BY_LENGTH_ASC);
            setPrevGoods([...changedGoods]);
            setLength(!isLength);
            setAlptha(false);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn(
            'button is-warning',
            { 'is-light': !isReverse },
          )}
          onClick={() => {
            buttonAction(REVERSE);
            setPrevGoods([...changedGoods]);
            setReverse(!isReverse);
          }}
        >
          Reverse
        </button>
        {!displayingResset(goodsFromServer, changedGoods) && (
        <button
          type="button"
          className="button is-danger"
          onClick={() => {
            buttonAction(RESET);
            setAlptha(false);
            setLength(false);
            setReverse(false);
          }}
        >
          Reset
        </button>
        )}
      </div>
      <List
        goods={changedGoods}
      />
    </div>
  );
};
