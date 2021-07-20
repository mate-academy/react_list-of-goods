import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <p>{good}</p>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
