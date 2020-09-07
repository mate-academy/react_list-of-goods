import React from 'react';

export const Button = ({ handler, textContent }) => (
  <button
    type="button"
    onClick={handler}
  >
    {textContent}
  </button>
);
