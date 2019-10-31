import React from 'react';
import Proptypes from 'prop-types';

function GoodsItem({ goods }) {
  return (
    <ul>
      {goods.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

GoodsItem.propTypes = {
  goods: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default GoodsItem;
