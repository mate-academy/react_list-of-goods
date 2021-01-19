import React from 'react';
import PropsType from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => <li key={good}>{good}</li>)}
  </ul>
);

GoodsList.propTypes = {
  goods: PropsType.arrayOf.isRequired,
};
