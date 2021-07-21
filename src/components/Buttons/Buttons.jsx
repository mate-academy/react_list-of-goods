import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ callback, name }) => (
  <button
    onClick={callback}
    type="submit"
  >
    {name}
  </button>
);

Buttons.propTypes = {
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Buttons;
