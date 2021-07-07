import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <li className="app__good">
    {good}
  </li>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};

export default Good;
