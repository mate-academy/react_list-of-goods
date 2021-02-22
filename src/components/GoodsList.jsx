import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods, sort, initialGoods }) => {
  let sorted = goods;

  switch (sort) {
    case 'reverse':
      sorted = [...sorted].reverse();
      break;
    case 'abc':
      sorted = [...sorted].sort();
      break;
    case 'reset':
      sorted = initialGoods;
      break;
    case 'length':
      sorted = [...sorted].sort((a, b) => a.length - b.length);
      break;
    default: sorted = goods;
      break;
  }

  return (
    <ul className="goodsList">
      {sorted.map(g => (<li key={g}>{g}</li>))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
  initialGoods: PropTypes.arrayOf(PropTypes.string),
  sort: PropTypes.string,
};

GoodsList.defaultProps = {
  goods: [],
  initialGoods: [],
  sort: PropTypes.string,
};
