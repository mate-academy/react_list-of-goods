import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ click, text }) => (
  <div>
    <button type="button" onClick={click}>
      {text}
    </button>
  </div>
);

Button.propTypes = {
  click: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
};
