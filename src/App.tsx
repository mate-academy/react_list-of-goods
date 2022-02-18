import React from 'react';
import './App.css';
import Product from './Components/Product/Product';

type State = {
  goods: string[],
  isStartClicked: boolean,
  isReversed: boolean,
  isSortedByABC: boolean,
  isSortedByLength: boolean,
};

const goodsFromServer: string[] = [
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

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStartClicked: false,
    isReversed: false,
    isSortedByABC: false,
    isSortedByLength: false,
  };

  listOpen = () => {
    this.setState(state => ({
      isStartClicked: !state.isStartClicked,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByABC = () => {
    this.setState({
      isSortedByABC: true,
      isReversed: false,
      isSortedByLength: false,
    });
  };

  sortByLength = () => {
    this.setState({
      isSortedByLength: true,
      isSortedByABC: false,
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSortedByABC: false,
      isSortedByLength: false,
    });
  };

  exit = () => {
    this.setState({
      isStartClicked: false,
      isReversed: false,
      isSortedByABC: false,
      isSortedByLength: false,
    });
  };

  render() {
    const {
      goods,
      isStartClicked,
      isReversed,
      isSortedByABC,
      isSortedByLength,
    } = this.state;

    const copyProducts = [...goods];

    if (isSortedByABC) {
      copyProducts.sort((a, b) => a.localeCompare(b));
    }

    if (isSortedByLength) {
      copyProducts.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      copyProducts.reverse();
    }

    return (
      <div className="app">
        <h1 className="app__title">React List Of Goods</h1>
        {!isStartClicked && (
          <button
            type="button"
            className="app__button-start"
            onClick={this.listOpen}
          >
            Start
          </button>
        )}

        {isStartClicked && (
          <>
            <button
              type="button"
              className="app__button-reverse"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="app__button-sort-abc"
              onClick={this.sortByABC}
            >
              Sort by Alphabet
            </button>

            <button
              type="button"
              className="app__button-sort-length"
              onClick={this.sortByLength}
            >
              Sort by Length
            </button>

            <button
              type="button"
              className="app__button-reverse"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              type="button"
              className="app__button-exit"
              onClick={this.exit}
            >
              Exit
            </button>

            <Product copyProducts={copyProducts} />
          </>
        )}
      </div>
    );
  }
}

export default App;
