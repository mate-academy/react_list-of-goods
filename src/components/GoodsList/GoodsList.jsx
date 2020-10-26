import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id}>
        {good.name}
      </li>
    ))}
  </ul>
));

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
