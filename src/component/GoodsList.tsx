import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

type Props = {
  goods: string[],
  showByLength: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  reverse: () => void,
  sortBy: (sortBy: string) => void,
  isAlphabet: boolean,
  reset: () => void,
};

export const GoodsList: React.FC<Props> = (props) => {
  const {
    goods,
    showByLength,
    reverse,
    sortBy,
    isAlphabet,
    reset,
  } = props;
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="App__content">
      <ul className="App__list">
        {goods.map((good) => (
          <li key={good} className="App__item">
            {good}
          </li>
        ))}
      </ul>

      <div className="App__buttons">
        <Button
          className="App__btn"
          variant="outline-secondary"
          type="button"
          onClick={reverse}
        >
          Reverse
        </Button>

        <Button
          className="App__btn"
          variant="outline-secondary"
          type="button"
          onClick={() => sortBy('alphabet')}
        >
          Sort alphabetically
          {isAlphabet && ': ON'}
        </Button>

        <Button
          className="App__btn"
          variant="outline-secondary"
          type="button"
          onClick={() => sortBy('length')}
        >
          Sort by length
        </Button>

        <Button
          className="App__btn"
          variant="outline-secondary"
          type="button"
          onClick={reset}
        >
          Reset
        </Button>

        <select
          className="App__select"
          name="goodsLength"
          id="goodsLength"
          onChange={showByLength}
        >
          {options.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
