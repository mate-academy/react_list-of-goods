import React from 'react';
import './App.css';

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

type State = {
  goods: string[],
  isReverse: boolean,
  sortBy: string,
  isStart: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReverse: false,
    sortBy: '',
    isStart: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabetically = () => {
    this.setState(({ sortBy: 'alphabetically' }));
  };

  sortByLength = () => {
    this.setState(({ sortBy: 'length' }));
  };

  toStart = () => {
    this.setState(({ isStart: true }));
  };

  reset = () => {
    this.setState(({ sortBy: '', isReverse: false }));
  };

  render() {
    const {
      goods,
      isReverse,
      sortBy,
      isStart,
    } = this.state;

    const visibleFriends = [...goods];

    visibleFriends.sort((good1: string, good2: string) => {
      switch (sortBy) {
        case 'alphabetically':
          return good1.localeCompare(good2);
          break;
        case 'length':
          return good1.length - good2.length;
          break;
        default:
          return 0;
          break;
      }
    });

    if (isReverse) {
      visibleFriends.reverse();
    }

    return (
      <div className="App">
        <h1>
          Goods
        </h1>
        {!isStart && (
          <button
            type="button"
            onClick={this.toStart}
          >
            Start
          </button>
        )}

        {isStart && (
          <div>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortByAlphabetically}
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
            <ul>
              {visibleFriends.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
