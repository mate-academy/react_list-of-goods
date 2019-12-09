import React from 'react';
import PropTypes from 'prop-types';

const StartButton = ({ handlerStart, visibility }) => {
  const currentClass = visibility ? 'hidden__start' : 'visible__start';

  return (
    <button
      type="button"
      onClick={handlerStart}
      className={currentClass}
    >
      Start
    </button>
  );
};

StartButton.propTypes = {
  visibility: PropTypes.bool.isRequired,
  handlerStart: PropTypes.func.isRequired,
};

export default StartButton;
