import React from 'react';
import PropTypes from 'prop-types';

export const ReverseButton = (props) => {
  const handlerClick = () => {
    props.handler(props.children.reverse());
  };

  return (
    <button
      type="button"
      onClick={handlerClick}
    >
Reverse
    </button>
  );
};

ReverseButton.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
