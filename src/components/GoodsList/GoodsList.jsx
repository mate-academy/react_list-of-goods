import React from 'react';
import { GoodsListShape } from '../shapes/GoodsListShape';
import './GoodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="list">
    {
      goods.map(good => (
        <li
          key={good.name}
          className="list__item"
        >
          {good.name}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = GoodsListShape;
