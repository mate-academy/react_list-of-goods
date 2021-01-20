import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsVisible }) => (
  <ul>
    {goodsVisible.map(el => (
      <li key={el} className="item">
        {el}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsVisible: PropTypes.arrayOf(PropTypes.string).isRequired,
};
