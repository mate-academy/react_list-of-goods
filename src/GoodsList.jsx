import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList }) => (
  <ul className="list-group list-group-flush">
    {goodsList.map(goods => (
      <li key={goods} className="list-group-item">{goods}</li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
