import React from 'react';

type Goods = {
  goods: string[];
  reverse: () => void;
  sort: () => void;
  sortByLength: () => void;
  reset: () => void;

};

export const GoodsList: React.FC<Goods> = ({
  goods, reverse, sort, sortByLength, reset,
}) => {
  return (
    <>
      <ul className="goods__list">
        {goods.map(good => (
          <li key={good} className="goods__item">
            {good}
          </li>
        ))}
      </ul>
      <div className="goods__buttons">
        <button
          type="button"
          onClick={reverse}
          className="btn btn-secondary goods__button"
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={sort}
          className="btn btn-secondary goods__button"
        >
          Sort
        </button>
        <button
          type="button"
          onClick={reset}
          className="btn btn-secondary goods__button"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={sortByLength}
          className="btn btn-secondary goods__button"
        >
          SortByLength
        </button>
      </div>
    </>
  );
};
