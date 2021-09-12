import React from 'react';

type Props = {
  goods: string[];
  reverseList: () => void;
  resetList: () => void;
  sortAlphabet: () => void;
  sortByLength: () => void;
};

export const ListOfGoods: React.FC<Props> = ({
  goods,
  reverseList,
  resetList,
  sortAlphabet,
  sortByLength,
}) => (
  <>
    <h1 className="mt-5 mb-3">Goods</h1>

    <ul className="list-group mb-3">
      {goods.map(item => (
        <li className="list-group-item list-group-item-secondary" key={item}>
          {item}
        </li>
      ))}
    </ul>

    <div className="button-section">
      <button
        className="btn btn-secondary"
        type="button"
        onClick={reverseList}
      >
        Reverse
      </button>

      <button
        className="btn btn-primary"
        type="button"
        onClick={sortAlphabet}
      >
        Sort alphabetically
      </button>

      <button
        className="btn btn-primary"
        type="button"
        onClick={sortByLength}
      >
        Sort by length
      </button>

      <button
        className="btn btn-danger"
        type="button"
        onClick={resetList}
      >
        Reset
      </button>
    </div>
  </>
);
