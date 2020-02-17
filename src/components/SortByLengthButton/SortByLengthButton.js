import React from 'react';
import PropTypes from 'prop-types';

export const SortByLengthButton = (props) => {
  const handlerClick = () => {
    props.handler(props.children
      .sort((item1, item2) => item1.title.length - item2.title.length));
  };

  return (
    <button
      type="button"
      onClick={handlerClick}
    >
      SortByLength
    </button>
  );
};

SortByLengthButton.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
