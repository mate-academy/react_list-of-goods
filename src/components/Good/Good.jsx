import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <div>
    {good}
  </div>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
