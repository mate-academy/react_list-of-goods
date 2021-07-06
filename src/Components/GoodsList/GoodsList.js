import React from 'react';
import { Good } from '../Good';
import { GoodsListShape } from '../../Shapes/GoodsListShape';
import './GoodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="goodsList">
    {goods.map(good => (
      <Good key={good} good={good} />
    ))}
  </ul>
);

GoodsList.propTypes = GoodsListShape;
