import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = React.memo(({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <li key={good.id} className="list-group-item">
        {good.name}
      </li>
    ))}
  </ul>
));

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
