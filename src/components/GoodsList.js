import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({
  allGoods,
  handleReverse,
  handleSortAlphabetically,
  handleSortByLength,
  handleClear,
  filterByLength,
  selectValue,
}) => (
  <div>
    <button onClick={handleReverse} type="button">Reverse</button>
    <button
      onClick={handleSortAlphabetically}
      type="button"
    >
      Sort by alphabet
    </button>
    <button onClick={handleSortByLength} type="button">Sort by length</button>
    <button onClick={handleClear} type="button">Reset</button>

    <select onChange={filterByLength} value={selectValue}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>

    <ul>
      {allGoods.map(goodsItem => (
        <li>
          {goodsItem}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  allGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleSortAlphabetically: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  filterByLength: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
};

export default GoodsList;
