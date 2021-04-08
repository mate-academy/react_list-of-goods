import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ name, event, isButtonHidden }) => (
  <button
    className={classNames('button is-medium my-6', {
      'is-hidden': isButtonHidden,
    })}
    type="button"
    onClick={event}
  >
    {name}
  </button>
);

Button.defaultProps = {
  isButtonHidden: true,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  isButtonHidden: PropTypes.bool,
};
