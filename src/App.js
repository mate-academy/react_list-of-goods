import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';

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

const preparedGoods = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

export class App extends Component {
  state = {
    isVisible: true,
    goods: preparedGoods,
  };

  changeVisibility = () => {
    this.setState({ isVisible: false });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.localeCompare(b.name)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.length - b.name.length
      )),
    }));
  }

  reset = () => {
    this.setState({
      goods: preparedGoods,
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        {
          this.state.isVisible
            ? (
              <button
                type="button"
                className="Start-button"
                onClick={this.changeVisibility}
              >
                Start
              </button>
            )
            : (
              <>
                <GoodsList goods={goods} />
                <button
                  type="button"
                  className="reverse-button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="sort-by-alphaber-button"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="sort-by-length-button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="reset-button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </>
            )
        }
      </div>
    );
  }
}
