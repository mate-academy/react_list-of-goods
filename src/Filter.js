import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => (
  <button
    type="button"
    className="button"
    onClick={props.callback}
  >
    {props.title}
  </button>
);

Filter.propTypes = {
  callback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Filter;
