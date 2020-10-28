import React from 'react';
import { ButtonShape } from '../../Shapes/ButtonShape';

export const Button = ({ button }) => (
  <li>
    <button
      type="button"
      className="ui button"
      onClick={button.func}
    >
      {button.name}
    </button>
  </li>
);

Button.propTypes = ButtonShape;
