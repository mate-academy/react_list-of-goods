import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ showList }) => (
  <button
    type="button"
    className="button is-success"
    onClick={showList}
  >
    Start
  </button>
);

Button.propTypes = {
  showList: PropTypes.func.isRequired,
};
