import React, { PureComponent } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

export class App extends PureComponent {
  state = {
    goodsList: goodsFromServer,
    isListVisible: false,
    isReversed: false,
  };

  showGoodsList = () => {
    this.setState({
      isListVisible: true,
    });
  };

  reverseGoodsList = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  sortAlphabet = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((g1, g2) => g1.localeCompare(g2)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList]
        .sort((good1, good2) => good1.length - good2.length),
    }));
  }

  reset = () => {
    this.setState({
      goodsList: goodsFromServer,
    });
  }

  render() {
    const { goodsList, isListVisible, isReversed } = this.state;

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <div className="App">
        {!isListVisible
          ? (
            <button
              type="button"
              onClick={this.showGoodsList}
            >
              Start
            </button>
          )
          : (
            <>
              <GoodsList goods={this.state.goodsList} />
              <button
                type="button"
                onClick={this.reverseGoodsList}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortAlphabet}
              >
                Sort Alphabet
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
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
