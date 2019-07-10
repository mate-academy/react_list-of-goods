import React from 'react';

import { goodsFromServer } from './GoodsData';

class GoodsList extends React.Component {
  state = {
    goods: [],
    isLoaded: false,
    selectValue: 0,
  }

  handleClick = () => {
    this.setState(
      {
        goods: goodsFromServer,
        isLoaded: true,
      }
    );
  }

  reverseClick = () => {
    this.setState(
      {
        goods: [...this.state.goods].reverse(),
      }
    );
  }

  sortAlphClick = () => {
    this.setState(
      {
        goods: [...this.state.goods].sort((a, b) => a.localeCompare(b)),
      }
    );
  }

  resetClick = () => {
    this.setState(
      {
        goods: [...goodsFromServer],
        selectValue: 0,
      }
    );
  }

  sortByLengClick = () => {
    this.setState(
      {
        goods: [...this.state.goods].sort((a, b) => a.length - b.length),
      }
    );
  }

  sortByLengClick = () => {
    this.setState(
      {
        goods: [...this.state.goods].sort((a, b) => a.length - b.length),
      }
    );
  }

  filterGoodsWithTheLeng = (event) => {
    const { value } = event.target;
    this.setState(
      {
        selectValue: value,
        goods: [...goodsFromServer].filter(goods => goods.length > value),
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <button
              onClick={this.reverseClick}
              type="button"
              className="btn btn-primary btn-sm"
            >
              Reverse
            </button>
            <button
              onClick={this.sortAlphClick}
              type="button"
              className="btn btn-primary btn-sm"
            >
              Sort alphabetically
            </button>
            <button
              onClick={this.sortByLengClick}
              type="button"
              className="btn btn-primary btn-sm"
            >
              Sort by length
            </button>
            <select
              value={this.state.selectValue}
              onChange={this.filterGoodsWithTheLeng}
              className="custom-select custom-select-sm"
            >
              <option selected> Show the goods with the length</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button
              onClick={this.resetClick}
              type="button"
              className="btn btn-danger btn-sm"
            >
              Reset
            </button>
            <ul className="product-list">
              {this.state.goods.map(items => <li> {items}; </li>)}
            </ul>
          </div>
        ) : (
            <button
              onClick={this.handleClick}
              type="button"
              className="btn btn-success btn-lg">
              Start
            </button>
          )
        }
      </div>
    )
  }
}

export default GoodsList;
