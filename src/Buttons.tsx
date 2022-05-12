import React from 'react';
import './Button.css';

type Props = {
  hideGoods: () => void;
  goodsReverse: () => void;
  sortByAlph: () => void;
  sortByLength: () => void;
  recetList: () => void;
  sortByExectLength: (newLength: number) => void;
  exectLength: number,
};

export const Buttons: React.FC<Props> = (props) => {
  const {
    hideGoods,
    goodsReverse,
    sortByAlph,
    sortByLength,
    recetList,
    sortByExectLength,
    exectLength,
  } = props;

  return (
    <div className="button">
      <button
        type="button"
        className="button__func"
        onClick={hideGoods}
      >
        Hide Goods
      </button>
      <button
        type="button"
        className="button__func"
        onClick={goodsReverse}
      >
        Reverse
      </button>

      <button
        type="button"
        className="button__func"
        onClick={sortByAlph}
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        className="button__func"
        onClick={sortByLength}
      >
        Sort by length
      </button>

      <button
        type="button"
        className="button__func"
        onClick={recetList}
      >
        Reset
      </button>
      <label>
        Select length:
        <input
          className="app__frame-size"
          type="number"
          min="1"
          max="10"
          value={exectLength}
          defaultValue="1"
          onChange={(event) => sortByExectLength(Number(event.target.value))}
        />
      </label>
    </div>
  );
};
