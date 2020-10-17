import React from 'react';
import { GoodsTypes } from './GoodsTypes';

import './GoodsPanel.css';

export class GoodsPanel extends React.PureComponent {
  handleUpdate = (goods) => {
    this.props.updateGoods(goods);
  }

  handleChange = (event) => {
    const value = Number(event.target.value);
    const newListGoods = this.props.listGoods.filter(
      good => good.length >= value,
    );

    this.handleUpdate(newListGoods);
  }

  render() {
    const {
      listGoods,
      initialListGoods,
    } = this.props;

    return (
      <div className="Goods-Panel">
        <button
          type="button"
          onClick={() => this.handleUpdate([...listGoods].reverse())}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => this.handleUpdate([...listGoods].sort())}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={(event) => {
            const select = event.target.nextSibling.nextSibling;

            this.handleUpdate(initialListGoods);
            select.selectedIndex = 0;
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => this.handleUpdate(
            [...listGoods].sort(
              (good1, good2) => good1.length - good2.length,
            ),
          )}
        >
          Sort by length
        </button>
        <select
          onChange={event => this.handleChange(event)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
    );
  }
}

GoodsPanel.propTypes = GoodsTypes;
