import React from 'react';
import { Good } from '../Good';
import { GoodsListShape } from '../shapes/GoodsListShape';
import './GoodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="list">
    {
      goods.map(good => (
        <li
          key={good.id}
          className="list__item"
        >
          <Good name={good.name} />
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = GoodsListShape;
