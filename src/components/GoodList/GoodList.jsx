import React from 'react';
import { Good } from '../Good';
import { GoodListShape } from '../../shapes/GoodListShape';
import '../../App.scss';

export const GoodList = ({ goods }) => (
  <ul className="App__goodList">
    <h1>Goods</h1>
    {goods.map(good => (
      <li className="App__goodList-item" key={good.index}>
        <Good good={good.title} />
      </li>
    ))}
  </ul>
);

GoodList.propTypes = GoodListShape;
