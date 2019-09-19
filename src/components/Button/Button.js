import React from 'react';

const Button = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="button"
  >
    {children}
  </button>
);

export default Button;
