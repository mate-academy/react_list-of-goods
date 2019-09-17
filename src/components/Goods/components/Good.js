import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <li className="goods__item list-group-item">{good}</li>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};

export default Good;
