import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Good, SortBy, State } from './types';
import './App.css';

const goodsFromServer: Good[] = [
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
].map(good => ({
  name: good,
  id: uuidv4(),
}));

class App extends React.Component<{}, State> {
  state = {
    isListVisible: false,
    isReversed: false,
    sortBy: SortBy.none,
  };

  sortedGoods = (goods: Good[]) => {
    const { sortBy } = this.state;

    goods.sort((a, b) => {
      switch (sortBy) {
        case SortBy.alphabet:
          return a.name.localeCompare(b.name);
        case SortBy.length:
          return a.name.length - b.name.length;
        default:
          return 0;
      }
    });
  };

  sortedByLength = () => {
    this.setState({ sortBy: SortBy.length });
  };

  sortedByAlphbet = () => {
    this.setState({ sortBy: SortBy.alphabet });
  };

  showList = () => {
    this.setState({ isListVisible: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.none,
    });
  };

  render() {
    const { isListVisible, isReversed } = this.state;
    const goods = [...goodsFromServer];

    this.sortedGoods(goods);

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showList}
        >
          Start
        </button>

        {isListVisible && (
          <>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortedByAlphbet}
            >
              Sort By Alphabet
            </button>

            <button
              type="button"
              onClick={this.sortedByLength}
            >
              Sort By Length
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              reset
            </button>

            <ul>
              {goods.map(good => (
                <li key={good.id}>{good.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
