import React from 'react';

type Props = {
  reverseGoods: () => void;
  sortByOption: (option: string) => void;
  reset: () => void;
  goods: string[];
};

export const ListOfGoods: React.FC<Props> = ({
  reverseGoods,
  reset,
  goods,
  sortByOption,
}) => (
  <>
    <button type="button" className="btn btn-secondary" onClick={reverseGoods}>
      Reverse
    </button>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => sortByOption('alphabet')}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => sortByOption('length')}
    >
      Sort by length
    </button>
    <div className="card">
      <ul className="list-group list-group-flush">
        {goods.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <button type="button" className="btn btn-success" onClick={reset}>
      Reset
    </button>
  </>
);
