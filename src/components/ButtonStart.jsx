import React from 'react';
import PropTypes from 'prop-types';

export function ButtonStart({ showGoods, showButtons }) {
  return (
    <>
      {showButtons && (
        <button
          type="button"
          onClick={showGoods}
        >
          Start
        </button>
      )}
    </>
  );
}

ButtonStart.propTypes = {
  showGoods: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
};
