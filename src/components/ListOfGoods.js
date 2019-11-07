import React from 'react';
import PropTypes from 'prop-types';
import Goods from './Goods';

function ListOfGoods({ goodsArray }) {
  return (
    <>
      {goodsArray.map(
        (item, index) => <Goods product={item} key={item} />
      )}
    </>
  );
}

ListOfGoods.propTypes = {
  goodsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListOfGoods;
