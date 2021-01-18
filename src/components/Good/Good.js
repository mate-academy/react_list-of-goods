import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <li>{good}</li>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
