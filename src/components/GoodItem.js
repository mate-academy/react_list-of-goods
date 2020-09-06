import React from 'react';
import PropTypes from 'prop-types';

export const GoodItem = ({ item }) => (
  <li className="list__item">
    {item}
  </li>
);

GoodItem.propTypes = {
  item: PropTypes.string.isRequired,
};
