import React from 'react';
import PropTypes from 'prop-types';

export function StartButton({ showGoodsList }) {
  return (
    <button
      type="button"
      onClick={showGoodsList}
      className="ui primary button"
    >
      Start
    </button>
  );
}

StartButton.propTypes = {
  showGoodsList: PropTypes.func.isRequired,
};
