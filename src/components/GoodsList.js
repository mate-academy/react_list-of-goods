import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ allGoods, handleReverse, handleSortAlphabetically, handleSortByLength }) => (
  <div>
    <button onClick={handleReverse} type="button">Reverse</button>
    <button onClick={handleSortAlphabetically} type="button">Sort alphabetically</button>
    <button onClick={handleSortByLength} type="button">Sort by length</button>
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
  allGoods: PropTypes.shape({
    goodsItem: PropTypes.string,
    map: PropTypes.func,
  }).isRequired,
  handleReverse: PropTypes.func.isRequired,
};

export default GoodsList;
