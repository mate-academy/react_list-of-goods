import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ onClick, text, isVisible }) => (
  <button
    type="button"
    className={
      classNames(
        'container__button',
        'btn',
        {
          invisible: isVisible,
          'button__start-container': text === 'Start',
          button__reverse: text === 'Reverse',
          'button__sort-alphabetically': text === 'Sort alphabetically',
          'button__sort-by-length': text === 'Sort by length',
          button__reset: text === 'Reset',
        },
      )
    }
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
