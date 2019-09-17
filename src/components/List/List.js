import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default List;
