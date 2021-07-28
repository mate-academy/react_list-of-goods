import React from 'react';
import PropTypes from 'prop-types';

export const Good = React.memo(
  ({ good }) => (
    <li key={good}>
      {good}
    </li>
  ),
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
