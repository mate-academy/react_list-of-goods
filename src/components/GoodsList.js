import React from 'react';
import uuid from 'uuid-random';
import { GoodsTypes } from './GoodsTypes';

import './GoodsList.css';

export class GoodsList extends React.PureComponent {
  render() {
    const {
      listGoods,
    } = this.props;

    return (
      <div className="Goods">
        <ul>
          {listGoods.map(good => (
            <li key={uuid()}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

GoodsList.propTypes = GoodsTypes;
