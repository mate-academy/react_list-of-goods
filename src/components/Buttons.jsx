import React from 'react';

export const Buttons = ({ method, title }) => (
  <button
    type="button"
    onClick={method}
  >
    {title}
  </button>
);
