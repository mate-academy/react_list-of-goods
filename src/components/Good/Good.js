import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <li>
    {good}
  </li>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};

export default Good;
