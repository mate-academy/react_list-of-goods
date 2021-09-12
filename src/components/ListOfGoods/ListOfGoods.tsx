import React from 'react';

type Props = {
  reverseGoods: () => void;
  sortAlphabetically: () => void;
  sortByLength: () => void;
  reset: () => void;
  goods: string[];
};

export const ListOfGoods: React.FC<Props> = ({
  reverseGoods,
  sortAlphabetically,
  sortByLength,
  reset,
  goods,
}) => (
  <>
    <button
      type="button"
      className="btn btn-primary"
      onClick={reverseGoods}
    >
      Reverse
    </button>
    <button
      type="button"
      className="btn btn-primary"
      onClick={sortAlphabetically}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      className="btn btn-primary"
      onClick={sortByLength}
    >
      Sort by length
    </button>
    <div className="card">
      <ul className="list-group list-group-flush">
        {goods.map(item => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <button
      type="button"
      className="btn btn-danger"
      onClick={reset}
    >
      Reset
    </button>
  </>
);
