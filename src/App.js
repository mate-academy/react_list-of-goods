import React, { Component } from 'react';
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

const completeGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

class App extends Component {
  state = {
    visible: false,
    goods: completeGoods,
    visibleGoods: completeGoods,
  }

  visible = () => {
    this.setState(state => ({
      visible: !state.visible,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.reverse(),
    }));
  }

  sort = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort((a, b) => (
        a.name.localeCompare(b.name)
      )),
    }));
  }

  reset = () => {
    this.setState(state => ({
      visibleGoods: state.goods,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort((a, b) => (
        a.name.length - b.name.length
      )),
    }));
  }

  selectValue = (event) => {
    const value = +event.target.value;

    this.setState(state => ({
      visibleGoods: state.goods.filter(item => (
        item.name.length >= value
      )),
    }));
  }

  render() {
    const { visible, visibleGoods } = this.state;

    return (
      <div className="App">
        <button
          className="App__btn--start"
          hidden={visible}
          type="button"
          onClick={this.visible}
        >
          Start
        </button>

        <div hidden={!visible}>
          <button
            className="ui primary button"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            className="ui primary button"
            type="button"
            onClick={this.sort}
          >
            Sort alphabetically
          </button>

          <button
            className="ui primary button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            className="ui primary button"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <select
            className="ui primary button"
            onChange={this.selectValue}
          >
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            }
          </select>

          <ul className="App__list ui inverted segment">
            {
              visibleGoods.map(good => (
                <li
                  key={good.id}
                  className="App__good"
                >
                  {good.name}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
