import React from 'react';
import { ShapeButton } from '../Shapes/ShapeButton';

export const Button = props => (
  <button
    type="button"
    className="btn btn-primary"
    onClick={props.onClick}
  >
    {props.title}
  </button>
);

Button.propTypes = ShapeButton.isRequired;
