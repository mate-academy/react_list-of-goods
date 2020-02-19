import React from 'react';
import PropTypes from 'prop-types';

export const ResetButton = (props) => {
  const handlerClick = () => {
    props.handler(props.children.sort((item1, item2) => item1.id - item2.id));
  };

  return (
    <button
      type="button"
      onClick={handlerClick}
    >
      Reset
    </button>
  );
};

ResetButton.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
