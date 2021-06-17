import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  const visibleGoods = [...goods];

  return (
    <ul>
      {visibleGoods.map(good => (
        <li id="good">{good}</li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
