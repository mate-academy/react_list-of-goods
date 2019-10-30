import React from 'react';

const Button = ({ shown, callback, text }) => {
  if (shown) {
    return (
      <button type="button" onClick={callback}>
        {text}
      </button>
    );
  }

  return false;
};

export default Button;
