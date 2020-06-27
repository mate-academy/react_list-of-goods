import React from 'react';
import './ButtonToggle.css';
import { ButtonToggleShape } from '../../shapes';

export const ButtonToggle = (props) => {
  const { toggleButton, display } = props;

  return (
    <div className="main__button">
      <button
        style={{ display }}
        type="button"
        className="btn btn-success"
        onClick={toggleButton}
      >
        Start
      </button>
    </div>
  );
};

ButtonToggle.propTypes = ButtonToggleShape.isRequired;
