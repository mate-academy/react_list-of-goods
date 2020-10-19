import React from 'react';
import uuid from 'uuid-random';
import { GoodsTypes } from './GoodsTypes';

import './GoodsPanel.css';

export class GoodsPanel extends React.PureComponent {
  handleSortAlphabetycally = () => {
    this.props.updateGoods('listGoods', [...this.props.listGoods].sort());
  }

  handleReset = () => {
    this.props.updateGoods('listGoods', this.props.initialListGoods);
  }

  handleReverse = () => {
    this.props.updateGoods('listGoods', [...this.props.listGoods].reverse());
  }

  handleSortByLength = () => {
    this.props.updateGoods('listGoods', [...this.props.listGoods].sort(
      (good1, good2) => good1.length - good2.length,
    ));
  }

  handleChange = (event) => {
    const value = Number(event.target.value);
    const newListGoods = this.props.initialListGoods.filter(
      good => good.length >= value,
    );

    this.props.updateGoods('listGoods', newListGoods);
  }

  render() {
    return (
      <div className="Goods-Panel">
        <button
          type="button"
          onClick={this.handleReverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.handleSortAlphabetycally}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.handleSortByLength}
        >
          Sort by length
        </button>
        <select
          onChange={this.handleChange}
        >
          {[...Array(10).keys()].map((_, index) => (
            <option
              key={uuid()}
              value={index + 1}
            >
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

GoodsPanel.propTypes = GoodsTypes;
