import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ func, name }) => (
  <button type="button" onClick={func}>
    {name}
  </button>
);

Filter.propTypes = {
  func: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Filter;
