import React from 'react';
import PropTypes from 'prop-types';

const List = ({ list }) => (
  <ul className="list">
    {list.map(item => (
      <li
        key={item}
        className="listItem"
      >
        {item}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  list: [],
};

export default List;
