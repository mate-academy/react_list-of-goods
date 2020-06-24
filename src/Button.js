import React from 'react';
import PropTypes from 'prop-types';
import { ShapeButtonAction } from './Shapes';

export const Button = props => (
  <button
    type="button"
    onClick={() => props.action.effect()}
    style={{ display: props.display }}
  >
    {props.action.name}
  </button>
);

Button.propTypes = {
  display: PropTypes.string.isRequired,
  action: ShapeButtonAction.isRequired,
};
