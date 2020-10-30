import React from 'react';
import PropTypes from 'prop-types';

const SortButton = ({ isVisible, isSorted, reverse , sort })=> {
  return (
    <button
      type="button"
      disabled={isVisible ? '' : 'disabled'}
      className="ui secondary button"
      onClick={isSorted ? reverse : sort}
    >
      {isSorted ? 'Sort DESC' : 'Sort ASC'}
    </button>

  );
};

SortButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isSorted: PropTypes.bool.isRequired,
  reverse: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

export default SortButton;
