/* eslint-disable max-len */
import React from 'react';
import './App.css';
import cn from 'classnames';
import { List } from './List';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    goods: [],
    visibleGoods: [],
    value: '1',
    displayClass: false,
  }

  showGoods = () => {
    this.setState({
      goods: goodsFromServer,
      visibleGoods: goodsFromServer,
      displayClass: true,
    });
  }

  reverse = () => {
    this.setState(state => ({ visibleGoods: [...state.visibleGoods].reverse() }));
  }

  sortByAlpha = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods]
        .sort((productA, productB) => productA.localeCompare(productB)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods]
        .sort((productA, productB) => productA.length - productB.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      visibleGoods: [...state.goods], value: '1',
    }));
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert(`Length of the good is set to: ${this.state.value} or more letters length`);
    event.preventDefault();
    this.setState(state => ({
      visibleGoods: state.goods.filter(product => product.length >= parseInt(state.value, 10)),
    }));
  }

  render() {
    const { visibleGoods, displayClass } = this.state;

    return (
      <div className="App">
        <h1>
          Goods List Length:
          {' '}
          {' '}
          {visibleGoods.length}
        </h1>
        <List goods={visibleGoods} />
        <div className="Container">
          <button
            className={cn({ Action: displayClass === true })}
            type="button"
            onClick={this.showGoods}
          >
            ShowList
          </button>
          <div className={cn({ Action: displayClass === false })}>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortByAlpha}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by Length
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <form
              onSubmit={this.handleSubmit}
            >
              <label>
                Pick the length of the product:
                <select value={this.state.value} onChange={this.handleChange}>
                  {[...Array(11).keys()].slice(1).map(number => (
                    <option
                      key={number}
                      value={number}
                    >
                      {number}
                    </option>
                  ))}
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
