import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

export const List = ({ goods }) => (
  <ul className="container__list">
    {goods.map(item => (
      <li key={item} className="container__list-item">
        {item}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
