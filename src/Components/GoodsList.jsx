import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(({ preparedGoods }) => (
  <ul className="GoodsList">
    {preparedGoods.map(product => (
      <li
        className="GoodsList__item"
        key={product}
      >
        {product}
      </li>
    ))}
  </ul>
));

GoodsList.propTypes = {
  preparedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
