import React from 'react';
import Proptypes from 'prop-types';

function GoodsItem({ goods }) {
  return (
    goods.map(item => <li key={item}>{item}</li>)
  );
}

GoodsItem.propTypes = {
  goods: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default GoodsItem;
