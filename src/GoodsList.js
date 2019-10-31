import React from 'react';
import PropTypes from 'prop-types';
import GoodsItem from './GoodsItem';

function GoodsList(
  {
    handleReverse,
    sortAlphabetically,
    handleReset,
    sortByLength,
    handleFilter,
    goods,
    selectedOption,
  }
) {
  return (
    <>
      <button type="button" onClick={handleReverse}>
        Reverse
      </button>
      <button type="button" onClick={sortAlphabetically}>
        Sort alphabetically
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <button type="button" onClick={sortByLength}>
        Sort by length
      </button>
      <select onChange={handleFilter} value={selectedOption}>
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
      </select>
      <GoodsItem goods={goods} />
    </>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.number.isRequired,
  handleReverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default GoodsList;
