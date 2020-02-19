import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = (props) => {
  const {
    goods, minLength, handleReverseList,
    handleSortAlphabet, handleResetList, handleSortByLength, handleSelectList,
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
  handleReverseList: PropTypes.func.isRequired,
  handleSortAlphabet: PropTypes.func.isRequired,
  handleResetList: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
  handleSelectList: PropTypes.func.isRequired,
  minLength: PropTypes.string,
};

GoodList.defaultProps = {
  goods: [],
  minLength: '1',
};
