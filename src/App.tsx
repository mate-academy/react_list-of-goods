import React, { useState } from 'react';
import 'bulma/css/bulma.css';
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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

export function getReorderedGoods(goods: string[], sortType: number) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case 1:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    default:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState([...goodsFromServer]);
  const [showResetButton, setShowResetButton] = useState(false);
  const [reverseGoods, setReverseGoods] = useState(false);

  const alphabeticalSortButton: HTMLElement
  = document.getElementById('alphabeticalSortButton') as HTMLElement;
  const lengthSortButton: HTMLElement
  = document.getElementById('lengthSortButton') as HTMLElement;
  const reverseSortButton: HTMLElement
  = document.getElementById('reverseSortButton') as HTMLElement;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          id="alphabeticalSortButton"
          className="button is-info is-light"
          onClick={(event) => {
            setShowResetButton(true);
            setVisibleGoods(
              getReorderedGoods(goodsFromServer, SortType.ALPABET),
            );
            event.currentTarget.classList.remove('is-light');
            lengthSortButton.classList.add('is-light');
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          id="lengthSortButton"
          className="button is-success is-light"
          onClick={(event) => {
            setShowResetButton(true);
            setVisibleGoods(
              getReorderedGoods(goodsFromServer, SortType.LENGTH),
            );
            event.currentTarget.classList.remove('is-light');
            alphabeticalSortButton.classList.add('is-light');
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          id="reverseSortButton"
          className="button is-warning is-light"
          onClick={(event) => {
            setReverseGoods(!reverseGoods);
            setShowResetButton(true);
            event.currentTarget.classList.toggle('is-light');
          }}
        >
          Reverse
        </button>

        {showResetButton && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setShowResetButton(false);
              alphabeticalSortButton.classList.add('is-light');
              lengthSortButton.classList.add('is-light');
              reverseSortButton.classList.add('is-light');
              setReverseGoods(false);
              setVisibleGoods([...goodsFromServer]);
            }}
          >
            Reset
          </button>
        )}
      </div>
      {
        reverseGoods
          ? (
            <ul>
              {[...visibleGoods].reverse().map((good) => (
                <li
                  key={good}
                  data-cy="Good"
                >
                  {good}
                </li>
              ))}
            </ul>
          )
          : (
            <ul>
              {[...visibleGoods].map((good) => (
                <li
                  key={good}
                  data-cy="Good"
                >
                  {good}
                </li>
              ))}
            </ul>
          )
      }

    </div>
  );
};
