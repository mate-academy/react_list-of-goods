import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <div className="goodsList">
    <ul className="GoodsList__list">
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  goods: [],
};

export default GoodsList;
