import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList';

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
    visibleSection: 'none',
    visibleButton: 'block',
    visibleGoods: [...goodsFromServer],
    value: '1',
  }

  show = () => {
    this.setState({
      visibleButton: 'none',
      visibleSection: 'block',
    });
  }

  reverse = () => {
    this.setState(state => ({ visibleGoods: state.visibleGoods.reverse() }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({ visibleGoods: state.visibleGoods.sort() }));
  }

  sortByName = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort((x, y) => x.length - y.length),
    }));
  }

  reset = () => {
    this.setState({
      visibleGoods: [...goodsFromServer],
      value: '1',
    });
  }

  handleChange = (e) => {
    const newValue = +e.target.value;

    this.setState({
      visibleGoods: goodsFromServer.filter(good => good.length >= newValue),
      value: newValue,
    });
  }

  render() {
    const { visibleGoods, visibleButton, visibleSection, value } = this.state;

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        <button
          className="btn btn-success"
          type="button"
          style={{ display: visibleButton }}
          onClick={this.show}
        >
          Start
        </button>
        <section style={{ display: visibleSection }}>
          <div className="btn__row">
            <button
              className="btn btn-success"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={this.sortByName}
            >
              Sort by name length
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <select value={value} onChange={this.handleChange}>
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
          </div>
          <GoodsList visibleGoods={visibleGoods} />
        </section>
      </div>
    );
  }
}
