import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ title, method }) => (
  <button
    type="button"
    onClick={method}
  >
    {title}
  </button>
);

Filter.propTypes = { title: PropTypes.string.isRequired };
Filter.propTypes = { method: PropTypes.func.isRequired };

export default Filter;
