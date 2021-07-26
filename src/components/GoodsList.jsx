import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(
  ({ goodsList }) => (
    <ul className="goods-list box">
      {goodsList.map(good => (
        <li
          className="goods-list__good"
          key={good}
        >
          {good}
        </li>
      ))}
    </ul>
  ),
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
