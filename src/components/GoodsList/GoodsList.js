import React from 'react';
import { GoodsShape } from '../Shapes/GoodsShape';
import GoodsItem from '../GoodsItem/GoodsItem';
import './GoodsList.css';

const GoodsList = ({ goods }) => (
  <ul className="goods__list">
    {goods.map(good => (
      <GoodsItem good={good} key={good} />
    ))}
  </ul>
);

GoodsList.propTypes = GoodsShape.isRequired;

export default GoodsList;
