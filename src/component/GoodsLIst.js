import React from 'react';

import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  return (
    <ul className="goods-list">
      {goods.map(good => (
        <p>{good}</p>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf().isRequired,
};

export default GoodsList;
