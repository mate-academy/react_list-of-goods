import React from 'react';
import PropTypes from 'prop-types';

export function ProductStartButtons(props) {
  const { callBack, text, isVisibleList } = props;

  return (
    <button
      type="button"
      className={!isVisibleList ? 'hidden-button' : 'product__button'}
      onClick={callBack}
    >
      {text}
    </button>
  );
}

ProductStartButtons.propTypes = PropTypes.shape({
  callBack: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isVisibleList: PropTypes.bool.isRequired,
}).isRequired;
