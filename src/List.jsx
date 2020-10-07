import React from 'react';
import PropTypes from 'prop-types';

const List = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

export default List;

List.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
