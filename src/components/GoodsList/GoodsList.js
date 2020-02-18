import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = (props) => {
  const {
    goods, goodsSelected, reverseButton, sortButton,
    resetButton, sortByLength, selectButton,
  } = props;

  return (
    <>
      <button
        type="button"
        onClick={reverseButton}
      >
      Reverse
      </button>

      <button
        type="button"
        onClick={sortButton}
      >
      Sort
      </button>

      <button
        type="button"
        onClick={() => resetButton({ goodsSelected })}
      >
      Reset
      </button>

      <button
        type="button"
        onClick={sortByLength}
      >
      Length
      </button>

      <select
        name="goods"
        id="goods-select"
        onChange={selectButton}
      >
        <>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </>
      </select>
      <ul>
        {goods.map(good => (
          <li key={good}>{good}</li>
        ))}
      </ul>
    </>
  );
};

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
  goodsSelected: PropTypes.arrayOf(PropTypes.string),
  reverseButton: PropTypes.func.isRequired,
  sortButton: PropTypes.func.isRequired,
  resetButton: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  selectButton: PropTypes.func.isRequired,
};

GoodList.defaultProps = {
  goods: [],
  goodsSelected: [],
};
