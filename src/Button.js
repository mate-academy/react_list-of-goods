import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ reset, sortByLength, sorAlphabetically, reverse }) => (
  <div className="button-block">
    <button type="button" className="button" onClick={() => reverse()}>Reverse</button>
    <button type="button" className="button" onClick={() => sorAlphabetically()}>Sort alphabetically</button>
    <button type="button" className="button" onClick={() => sortByLength()}>Sort by length</button>
    <button type="button" className="button" onClick={() => reset()}>Reset</button>
  </div>
);

Button.propTypes = {
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  sorAlphabetically: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
};

export default Button;
