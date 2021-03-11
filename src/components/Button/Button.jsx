import PropTypes from 'prop-types';
import React from 'react';

export const Button = React.memo(
  props => (
    <button
      type="button"
      onClick={props.handler}
    >
      {props.text}
    </button>
  ),
);

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
