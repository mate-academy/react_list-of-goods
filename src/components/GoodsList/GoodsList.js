import React from 'react';
import './GoodsList.scss';
import PropTypes from 'prop-types';
import GoodsListItem from '../GoodsListItem/GoodsListItem';

const GoodsList = ({ list }) => (
  <ul>
    {list.map(item => <GoodsListItem name={item} key={item} />)}
  </ul>
);

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
