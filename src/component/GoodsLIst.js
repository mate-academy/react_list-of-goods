import React from 'react';

import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <p>{good}</p>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf().isRequired,
};

export default GoodsList;
