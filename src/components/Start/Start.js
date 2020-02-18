import React from 'react';
import PropTypes from 'prop-types';

const Start = ({ handleStart }) => (
  <button
    className="button"
    type="button"
    onClick={handleStart}
  >
    Start
  </button>
);

Start.propTypes = {
  handleStart: PropTypes.func.isRequired,
};
export default Start;
