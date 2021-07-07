import React from 'react';
import PropTypes from 'prop-types';
import './StartButton.scss';

export const StartButton = ({ showList }) => (
  <>
    <button
      type="button"
      className="App__start-button"
      onClick={showList}
    >
      Start
    </button>
  </>
);

StartButton.propTypes = {
  showList: PropTypes.func.isRequired,
};
