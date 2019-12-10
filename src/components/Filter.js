import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ callback, title }) => (
  <button type="button" onClick={callback}>
    {title}
  </button>
);

Filter.propTypes = {
  callback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Filter;
