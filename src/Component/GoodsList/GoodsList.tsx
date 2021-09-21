import React from 'react';

type Props = {
  listGoods: string[],
  onSortAbc: () => void,
  onSortLength: () => void,
  onReverse: () => void,
  onReset: () => void,
};

export const GoodsList: React.FC<Props> = (props) => {
  const {
    listGoods,
    onSortAbc,
    onSortLength,
    onReverse,
    onReset,
  } = props;

  return (
    <>
      <ul className="list">
        {listGoods.map((item) => (
          <li key={item} className="list-item">{item}</li>
        ))}
      </ul>

      <button
        type="button"
        className="button"
        onClick={onReverse}
      >
        Reverse
      </button>
      <button
        type="button"
        className="button"
        onClick={onSortAbc}
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        className="button"
        onClick={onSortLength}
      >
        Sort by length
      </button>
      <button
        type="button"
        className="button"
        onClick={onReset}
      >
        Reset
      </button>
    </>
  );
};
