import React from 'react';

import { Good } from '../Good';
import { GoodListProps } from '../../props/GoodListProps';

import './GoodList.css';

export const GoodList = React.memo(({ goods }) => (
  <div className="card border-warning">
    <h1 className="card-header mb-3">Goods</h1>
    <ul className="list">
      {goods.map(({ name, id }) => (
        <li key={id} className="list__item">
          <Good name={name} />
        </li>
      ))}
    </ul>
  </div>
));

GoodList.propTypes = GoodListProps;
