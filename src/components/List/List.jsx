import React from 'react';
import './List.css';
import propTypes from 'prop-types';

export const List = React.memo(({ goods }) => (
  <ul className="list">
    {goods.map(({ name, id }) => (
      <li key={id} className="list__item">
        {name}
      </li>
    ))}
  </ul>
));

List.propTypes = {
  goods: propTypes.arrayOf,
}.isRequired;
