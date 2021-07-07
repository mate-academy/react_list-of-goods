import React from 'react';
import propTypes from 'prop-types';

export const GoodsList = React.memo(({ goods }) => (
  <ul>
    {goods.map(({ name, id }) => (
      <li key={id} className="">
        {name}
      </li>
    ))}
  </ul>
));

GoodsList.propTypes = {
  goods: propTypes.arrayOf,
}.isRequired;
