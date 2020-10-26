import React from 'react';
import PropTypes from 'prop-types';

const ButtonsBlock = React.memo((props) => {
  const {
    clickReverseList,
    clickSortList,
    clickSortByLength,
    clickReset,
  } = props;

  return (
    <>
      <button
        type="button"
        onClick={clickReverseList}
      >
        Reverse
      </button>

      <button
        type="button"
        onClick={clickSortList}
      >
        Sort
      </button>

      <button
        type="button"
        onClick={clickSortByLength}
      >
        Sort Length
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

ButtonsBlock.propTypes = {
  clickReverseList: PropTypes.func.isRequired,
  clickSortList: PropTypes.func.isRequired,
  clickSortByLength: PropTypes.func.isRequired,
  clickReset: PropTypes.func.isRequired,
};

export default ButtonsBlock;
