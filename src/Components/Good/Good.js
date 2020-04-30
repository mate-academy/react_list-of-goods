import React from 'react';
import './Good.css';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <li className="sorting__list item">
    <span>{good}</span>
  </li>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
