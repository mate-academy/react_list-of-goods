import React, { Component } from 'react';
import './App.css';
/* import uuid from 'uuid'; */

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

class App extends Component {
  state = {
    isGoodsLoaded: false,
    goods: [...goodsFromServer],
    goods1: [...goodsFromServer],
  }

  loadGoods = () => {
    this.setState({
      isGoodsLoaded: true,
    });
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods1],
    }));
  }

  sortByLength = () => this.setState(prevState => ({
    goods: [...prevState.goods]
      .sort((good, good1) => good.length - good1.length),
  }))

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      goods: [...prevState.goods1]
        .filter(good => good.length >= value),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>List of goods</h1>
        {
          this.state.isGoodsLoaded
            ? (
              <>
                <button
                  type="button"
                  onClick={this.reverseGoods}
                >
                Reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                >
                Sort Alphabetically
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                >
                Reset
                </button>
                <button
                  type="button"
                  onClick={this.sortByLength}
                >
                Sort by length
                </button>
                <select
                  onChange={this.handleChangeSelect}
                >
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

                <ul>
                  {this.state.goods.map(good => (
                    <li>{good}</li>
                  ))}
                </ul>
              </>
            )
            : (
              <button
                type="button"
                onClick={this.loadGoods}
              >
              Load
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
