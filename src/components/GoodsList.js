import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ allGoods, handleRevers }) => (
  <div>
    <button onClick={handleRevers} type="button">Reverse</button>
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
  handleRevers: PropTypes.func.isRequired,
};

export default GoodsList;
