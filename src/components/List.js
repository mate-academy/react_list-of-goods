import React from 'react';
import PropTypes from 'prop-types';

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default List;
