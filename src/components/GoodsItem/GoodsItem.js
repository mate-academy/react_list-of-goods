import React from 'react';
import PropTypes from 'prop-types';

export const GoodsItem = (props) => {
  const { goodsItem } = props;

  return (
    <p>
      {goodsItem}
    </p>
  );
};

GoodsItem.propTypes = {
  goodsItem: PropTypes.string.isRequired,
};
