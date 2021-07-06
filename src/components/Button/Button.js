import React from 'react';
import PropType from 'prop-types';
import './Button.css';

export const Button = ({ name, handle }) => (
  <button
    className="goods__sort-btn"
    type="button"
    onClick={handle}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropType.string.isRequired,
  handle: PropType.func.isRequired,
};
