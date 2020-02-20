import React from 'react';
import PropTypes from 'prop-types';

export const GoodItem = ({ good }) => <li>{good}</li>;

GoodItem.propTypes = {
  good: PropTypes.string.isRequired,
};
