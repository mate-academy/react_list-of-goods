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

type SortCallback = (a: string, b: string) => number;

interface ButtonsColor {
  alphabetically: boolean
  length: boolean
  reverse: boolean
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<string[]>(goodsFromServer);

  const [buttons, setButtons] = useState<ButtonsColor>({
    alphabetically: false,
    length: false,
    reverse: false,
  });

  const sort = (array: string[], callback: SortCallback) => {
    const sorted = array.sort(callback);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    buttons.reverse ? setGoods(sorted.reverse()) : setGoods(sorted);
  };

  const sortAlphabetically = (): void => {
    sort([...goods], (a: string, b: string) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });

    const copyButtons = { ...buttons };

    copyButtons.alphabetically = true;
    copyButtons.length = false;

    setButtons(copyButtons);
  };

  const sortByLength = (): void => {
    let copyGoods = [...goods];

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    buttons.reverse ? copyGoods = copyGoods.reverse() : null;

    sort(copyGoods, (a: string, b: string) => {
      if (a.length < b.length) {
        return -1;
      }

      if (a.length > b.length) {
        return 1;
      }

      return 0;
    });

    const copyButtons = { ...buttons };

    copyButtons.length = true;
    copyButtons.alphabetically = false;

    setButtons(copyButtons);
  };

  const reverse = (): void => {
    const copyGoods = [...goods];
    const reversed = copyGoods.reverse();

    setGoods(reversed);

    const copyButtonsColor = { ...buttons };

    copyButtonsColor.reverse = !copyButtonsColor.reverse;

    setButtons(copyButtonsColor);
  };

  const reset = (): void => {
    setGoods(goodsFromServer);

    const copyButtonsColor = { ...buttons };

    copyButtonsColor.alphabetically = false;
    copyButtonsColor.length = false;
    copyButtonsColor.reverse = false;

    setButtons(copyButtonsColor);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={buttons.alphabetically
            ? 'button is-info'
            : 'button is-info is-light'}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={buttons.length
            ? 'button is-success'
            : 'button is-success is-light'}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={buttons.reverse
            ? 'button is-warning'
            : 'button is-warning is-light'}
          onClick={reverse}
        >
          Reverse
        </button>

        {buttons.alphabetically || buttons.length || buttons.reverse
          ? (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={reset}
            >
              Reset
            </button>
          )
          : null}

      </div>

      <ul>
        <ul>
          {goods.map(item => (
            <li data-cy="Good">{item}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
