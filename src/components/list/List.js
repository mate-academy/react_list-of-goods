import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

export const List = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        key={good}
        className="list__item"
      >
        {good}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
