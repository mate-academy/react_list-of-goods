import React from 'react';
import PropTypes from 'prop-types';

const SortByLengthButton = ({ isVisible, isSorted, reverse, sortbyLength}) => {
  return (
    <button
      type="button"
      disabled={!isVisible && 'disabled'}
      className="ui secondary button"
      onClick={isSorted ? reverse : sortbyLength}
    >
      { isSorted ? 'Sort by Length DESC' : 'Sort by Length ASC' }
    </button>
  );
};

SortByLengthButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isSorted: PropTypes.bool.isRequired,
  reverse: PropTypes.func.isRequired,
  sortbyLength: PropTypes.func.isRequired,
};

export default SortByLengthButton;
