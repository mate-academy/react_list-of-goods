import React from 'react';
import './StartButton.css';
import PropTypes from 'prop-types';

export const StartButton = props => (
  <button
    type="button"
    onClick={props.children}
  >
Click to start
  </button>
);

StartButton.propTypes = {
  children: PropTypes.func.isRequired,
};
