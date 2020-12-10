import React from 'react';
import { ShapeButtonAction } from './Shapes';

export const Button = props => (
  <button
    type="button"
    onClick={() => props.action.effect()}
  >
    {props.action.name}
  </button>
);

Button.propTypes = {
  action: ShapeButtonAction.isRequired,
};
