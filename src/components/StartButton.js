import React from 'react';
import PropTypes from 'prop-types';

export const StartButton = ({ buttonVisibility, showList }) => (
  <>
    <button
      className={`button ${buttonVisibility} button--start`}
      type="button"
      onClick={showList}
    >
      Start
    </button>
  </>
);

StartButton.propTypes = {
  buttonVisibility: PropTypes.string.isRequired,
  showList: PropTypes.func.isRequired,
};
