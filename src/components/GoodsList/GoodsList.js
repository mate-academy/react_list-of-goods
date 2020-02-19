import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = (props) => {
  const {
    goods,
    minLength,
    handleReverseList,
    handleSortAlphabet,
    handleResetList,
    handleSortByLength,
    handleSelectList,
  } = props;

  return (
    <>
      <button
        type="button"
        onClick={handleReverseList}
      >
      Reverse
      </button>

      <button
        type="button"
        onClick={handleSortAlphabet}
      >
      Sort
      </button>

      <button
        type="button"
        onClick={handleResetList}
      >
      Reset
      </button>

      <button
        type="button"
        onClick={handleSortByLength}
      >
      Length
      </button>

      <select
        name="goods"
        id="goods-select"
        onChange={handleSelectList}
        value={minLength}
      >
        {Array.from(10).fill(1).map((item, index) => (
          <option value={index + 1}>{index + 1}</option>
        ))}
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
  handleReverseList: PropTypes.func.isRequired,
  handleSortAlphabet: PropTypes.func.isRequired,
  handleResetList: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
  handleSelectList: PropTypes.func.isRequired,
  minLength: PropTypes.number,
};

GoodList.defaultProps = {
  goods: [],
  minLength: '1',
};
