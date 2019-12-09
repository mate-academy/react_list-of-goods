import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ title, callback }) => (
  <button
    type="button"
    className="buttons__button"
    onClick={callback}
  >
    {title}
  </button>
);

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
export default Filter;
