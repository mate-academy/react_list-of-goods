/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './App.css';

const goodsFromServer: string[] = [
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

export const App = () => {
  const initialGoods = goodsFromServer;
  const [goods, setGoods] = useState<string[]>(goodsFromServer);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const sortAlphabetically = () => {
    const sortedByAlphabet: string[] = [...initialGoods].sort();

    setGoods(sortedByAlphabet);
  };

  const sortByLength = () => {
    const sortedByLength: string[]
      = [...initialGoods].sort((a, b) => a.length - b.length);

    setGoods(sortedByLength);
  };

  const reverse = () => {
    const reversed: string[] = [...goods].reverse();

    setGoods(reversed);
  };

  const reset = () => {
    setGoods(initialGoods);
  };

  const start = () => {
    setIsStarted(true);
  };

  return (
    <div className="App">
      {!isStarted
        ? (
          <button
            type="button"
            onClick={start}
            className="button is-warning"
          >
            Start
          </button>
        )
        : (
          <div>
            <button
              type="button"
              onClick={sortAlphabetically}
              className="button is-warning"
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={sortByLength}
              className="button is-warning"
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={reverse}
              className="button is-warning"
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={reset}
              className="button is-warning"
            >
              Reset
            </button>

            <ul className="Goods">
              {goods.map(good => (
                <li key={good} className="Goods__item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};
