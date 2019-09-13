import React from 'react';

import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  return (
    <ul className="goods-list">
      {
        goods.map(good => (
          <li key={good}>{good}</li>
        ))
      }
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf().isRequired,
};

export default GoodsList;
