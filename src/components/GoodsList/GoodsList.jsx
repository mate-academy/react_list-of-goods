import React from 'react';
import PropTypes, { string } from 'prop-types';

export function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string.isRequired).isRequired,
};
