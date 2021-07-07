import React from 'react';
import PropTypes from 'prop-types';

const List = ({ goods }) => (
  <ul className="list-group text-center">
    {goods.map(good => (
      <li
        key={good}
        className="list-group-item"
      >
        {good}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
