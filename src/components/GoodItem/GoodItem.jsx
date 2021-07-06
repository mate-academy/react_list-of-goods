import React from 'react';
import PropTypes from 'prop-types';
import './GoodItem.css';

export const GoodItem = ({ good }) => (
  <li
    className="list__item"
  >
    {good}
  </li>
);

GoodItem.propTypes = {
  good: PropTypes.string.isRequired,
};
