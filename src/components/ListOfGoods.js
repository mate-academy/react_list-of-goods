import React from 'react';
import PropTypes from 'prop-types';

import GoodItem from './GoodItem';

const ListOfGoods = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <GoodItem good={good} />
    ))}
  </ul>
);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListOfGoods;
