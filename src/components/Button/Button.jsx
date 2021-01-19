import React from 'react';

export const Button = ({ handler, textContent, className }) => (
  <button
    type="button"
    onClick={handler}
    className={className}
  >
    {textContent}
  </button>
);
