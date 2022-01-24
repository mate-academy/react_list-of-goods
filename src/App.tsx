import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

export const goodsFromServer: string[] = [
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
type State = {
  isVisible: boolean,
  isReversed: boolean,
  isSortedBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: false,
    isReversed: false,
    isSortedBy: '',
  };

  start = () => {
    this.setState((state) => ({
      ...state,
      isVisible: true,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      ...state,
      isReversed: true,
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      ...state,
      isSortedBy: 'alphabetically',
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      ...state,
      isSortedBy: 'length',
    }));
  };

  reset = () => {
    this.setState({
      isVisible: false,
      isReversed: false,
      isSortedBy: '',
    });
  };

  preparedListOfGoods = () => {
    const preparedListOfGoods = [...goodsFromServer];
    const { isReversed, isSortedBy } = this.state;

    if (isReversed) {
      return preparedListOfGoods.reverse();
    }

    if (isSortedBy) {
      preparedListOfGoods.sort((g1, g2) => {
        switch (isSortedBy) {
          case 'alphabetically':
            return g1.localeCompare(g2);
            break;
          case 'length':
            return g1.length - g2.length;
            break;
          default:
            return 0;
        }
      });
    }

    return preparedListOfGoods;
  };

  render() {
    return (
      <div className="App">
        {!this.state.isVisible && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {this.state.isVisible && (
          <>
            <GoodsList preparedListOfGoods={this.preparedListOfGoods()} />

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
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
        )}
      </div>
    );
  }
}

export default App;
