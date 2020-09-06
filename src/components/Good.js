import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <li className="goods__item">
    {good}
  </li>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
