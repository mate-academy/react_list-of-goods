import React from 'react';
import './App.css';

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

export class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    show: false,
  }

  start = () => {
    this.setState({ show: true });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortName = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((product1, product2) => product1.localeCompare(product2)),
    }));
  }

  sortLength =() => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((product1, product2) => product1.length - product2.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  goodsElements = () => this.state.goods
    .map(product => <li key={product}>{product}</li>)

  render() {
    const { show } = this.state;
    const goodsElements = this.goodsElements();

    return (
      <div className="App container">
        <h1 className="text-center mt-3 mb-3">
          Goods:
          {goodsFromServer.length}
        </h1>

        <div className="buttons mb-3">
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            onClick={this.start}
            hidden={show}
          >
            Start
          </button>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            onClick={this.sortName}
            hidden={!show}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            onClick={this.sortLength}
            hidden={!show}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            onClick={this.reverse}
            hidden={!show}
          >
            Reverse
          </button>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            onClick={this.reset}
            hidden={!show}
          >
            Reset
          </button>
        </div>

        {show && (
        <ul className="list-container">
          {goodsElements}
        </ul>
        )}

      </div>
    );
  }
}
