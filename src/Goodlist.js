import React from 'react';
import { goodsFromServer } from './goodsFromserver';

class GoodList extends React.Component {
  state = {
    goods: [...goodsFromServer],
    length: 1,
    arrayOfSelect: Array(10).fill(''),
  };

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetGoods = () => {
    this.setState(
      { goods: [...goodsFromServer] },
    );
  }

  sortByLengthGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  selectedChangeOfGoods = (event) => {
    const { value } = event.target;

    this.setState({
      length: value,
      goods: goodsFromServer
        .filter(good => (good.length <= value)),
    });
  }

  render() {
    const { goods, arrayOfSelect } = this.state;

    return (
      <div className="goods">
        <ul>
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortAlphabetGoods}
        >
          Sort Alphabetically
        </button>

        <button
          type="button"
          onClick={this.resetGoods}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={this.sortByLengthGoods}
        >
          Sort by Length
        </button>

        <select
          onInput={this.selectedChangeOfGoods}
          value={this.state.length}
        >
          {arrayOfSelect.map((item, index) => (
            <option
              value={index + 1}
            >
              {' '}
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default GoodList;
