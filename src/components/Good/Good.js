import React from 'react';
import PropTypes from 'prop-types';

import './Good.css';

const Good = ({ good }) => (
  <li className="GoodsList__Good Good">{good}</li>
);

export default Good;

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
