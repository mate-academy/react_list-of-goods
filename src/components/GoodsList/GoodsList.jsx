import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function GoodsList({ initialGoods }) {
  const [goods, updateGoods] = useState(initialGoods);

  const reverse = () => {
    updateGoods([...goods].reverse());
  };

  const reset = () => {
    updateGoods(initialGoods);
  };

  const sortByAlphabet = () => {
    updateGoods([...goods].sort());
  };

  const sortByLength = () => {
    updateGoods([...goods].sort((a, b) => a.length - b.length));
  };

  return (
    <>
      <ul className="list">
        {goods.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div className="buttons">
        <button type="button" onClick={reverse}>
          Reverse
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
        <button type="button" onClick={sortByAlphabet}>
          Sort alphabetically
        </button>
        <button type="button" onClick={sortByLength}>
          Sort by length
        </button>
      </div>
    </>
  );
}

GoodsList.propTypes = {
  initialGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
