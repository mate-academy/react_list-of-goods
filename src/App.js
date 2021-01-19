import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

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
    goodsList: goodsFromServer,
    isVisible: false,
    isReverse: false,
    sortBy: 'default',
  }

  setVisible = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  setReverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  sortedByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortedByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState(state => ({
      sortBy: 'default',
      isReverse: false,
    }));
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <div className="main">
          <h1 className="main__title">Goods</h1>
          <div className="main__buttons">
            {!isVisible
              ? (
                <button
                  className="main__btn"
                  type="button"
                  onClick={this.setVisible}
                >
                  Start
                </button>
              )
              : (
                <button
                  className="main__btn"
                  type="button"
                  onClick={this.setVisible}
                >
                  Hide
                </button>
              )
            }

            <button
              className="main__btn"
              type="button"
              onClick={this.setReverse}
            >
              Reverse
            </button>

            <button
              className="main__btn"
              type="button"
              onClick={this.sortedByAlphabet}
            >
              Sort by alphabet
            </button>

            <button
              className="main__btn"
              type="button"
              onClick={this.sortedByLength}
            >
              Sort by length
            </button>

            <button
              className="main__btn"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
          {isVisible
            && <GoodsList {...this.state} />
          }
        </div>
      </div>
    );
  }
}

export default App;
