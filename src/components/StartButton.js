import React from 'react';
import PropTypes from 'prop-types';

export const StartButton = ({ showList }) => (
  <>
    <button
      className="button button--start"
      type="button"
      onClick={showList}
    >
      Start
    </button>
  </>
);

StartButton.propTypes = {
  showList: PropTypes.func.isRequired,
};
