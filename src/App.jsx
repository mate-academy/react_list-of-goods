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

class App extends Component {
  state = {
    isVisible: true,
    allGoods: goodsFromServer,
  }

  showGoods = () => {
    this.setState({
      isVisible: false,
    });
  }

  reverse = () => {
    this.setState(state => ({
      allGoods: [...state.allGoods].reverse(),
    }));
  }

  reset = () => (
    this.setState(() => ({
      allGoods: goodsFromServer,
    }))
  )

  sortAlphabetically = () => (
    this.setState(state => ({
      allGoods: [...state.allGoods].sort((a, b) => a.localeCompare(b)),
    }))
  )

  sortByLength = () => {
    this.setState(state => ({
      allGoods: [...state.allGoods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { isVisible, allGoods } = this.state;

    return (
      <div className="App">
        {isVisible
          ? (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Start
            </button>
          )

          : (
            <>
              <GoodsList goods={allGoods} />
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
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
            </>
          )
        }
      </div>
    );
  }
}

export default App;
