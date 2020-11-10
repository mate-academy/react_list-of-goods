import React from 'react';
import PropTypes from 'prop-types';

const Buttons = React.memo((props) => {
  const {
    clickReverse,
    clickSortAlphabetically,
    clickSortByLength,
    clickReset,
  } = props;

  return (
    <>
      <button
        type="button"
        onClick={clickReverse}
      >
        Reverse
      </button>

      <button
        type="button"
        onClick={clickSortAlphabetically}
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        onClick={clickSortByLength}
      >
        Sort by length
      </button>

      <button
        type="button"
        onClick={clickReset}
      >
        Reset
      </button>
    </>
  );
});

Buttons.propTypes = {
  clickReverse: PropTypes.func.isRequired,
  clickSortAlphabetically: PropTypes.func.isRequired,
  clickSortByLength: PropTypes.func.isRequired,
  clickReset: PropTypes.func.isRequired,
};

export default Buttons;
