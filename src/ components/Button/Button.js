import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export function Button({ callBack, text }) {
  return (
    <button
      type="button"
      className="button"
      onClick={callBack}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  callBack: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
