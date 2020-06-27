import React from 'react';
import PropTypes from 'prop-types';

import './Good.css';

const Good = ({ good }) => (
  <li>{good}</li>
);

export default Good;

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
