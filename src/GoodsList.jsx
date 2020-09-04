import React from 'react';
import PropTypes, { string } from 'prop-types';

export const Goodlist = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
);

Goodlist.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
};
