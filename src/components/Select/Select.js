import React from 'react';
import PropTypes from 'prop-types';

export const Select = (props) => {
  const handler = (event) => {
    props.children(event.target.value);
  };

  return (
    <select onChange={handler} value={props.selectedItem}>
      <option value="1">length = 1</option>
      <option value="2">length = 2</option>
      <option value="3">length = 3</option>
      <option value="4">length = 4</option>
      <option value="5">length = 5</option>
      <option value="6">length = 6</option>
      <option value="7">length = 7</option>
      <option value="8">length = 8</option>
      <option value="9">length = 9</option>
      <option value="10">length = 10</option>
    </select>
  );
};

Select.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};
