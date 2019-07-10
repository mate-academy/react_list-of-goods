import React from 'react';
import PropTypes from 'prop-types';

const GoodItem = ({ good }) => (
  <li>
    {good}
  </li>
);

GoodItem.propTypes = {
  good: PropTypes.string.isRequired,
};

export default GoodItem;
