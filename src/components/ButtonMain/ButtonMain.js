import React from 'react';
import PropTypes from 'prop-types';
import './ButtonMain.css';

const ButtonMain = ({ onClick }) => (
  <button
    type="button"
    className="goods__main"
    onClick={() => onClick()}
  >
    start
  </button>
);

ButtonMain.propTypes = { onClick: PropTypes.func.isRequired };

export default ButtonMain;
