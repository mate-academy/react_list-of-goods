import React from 'react';
import { buttonProp } from '../../types';
import './Button.css';

export const Button = React.memo(({ onClick, className, text }) => (
  <>
    <button
      type="button"
      onClick={onClick}
      className={`button ${className}`}
    >
      {text}
    </button>
  </>
));

Button.propTypes = buttonProp;
