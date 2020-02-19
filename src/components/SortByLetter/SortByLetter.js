import React from 'react';
import PropTypes from 'prop-types';

export const SortByLetter = (props) => {
  const handlerClick = () => {
    props.handler(props.children
      .sort((item1, item2) => item1.title.localeCompare(item2.title)));
  };

  return (
    <button
      type="button"
      onClick={handlerClick}
    >
      Sort by letter
    </button>
  );
};

SortByLetter.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
