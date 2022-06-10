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

enum SortBy {
  none,
  name,
  length,
}

type State = {
  goods: string[];
  isVisible: boolean;
  isReversed: boolean;
  sortBy: SortBy;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    sortBy: SortBy.none,
  };

  start = () => (
    this.setState({ isVisible: true })
  );

  reversed = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: SortBy.name,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortBy.length,
    });
  };

  reset = () => {
    this.setState({
      // isVisible: false,
      isReversed: false,
      sortBy: SortBy.none,
    });
  };

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      sortBy,
    } = this.state;

    let listedGoods = [...goods];

    switch (sortBy) {
      case SortBy.name:
        listedGoods.sort((good1, good2) => (good1.localeCompare(good2)));
        break;

      case SortBy.length:
        listedGoods.sort((good1, good2) => (good1.length - good2.length));
        break;

      default:
        listedGoods = [...goods];
    }

    if (isReversed) {
      listedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.start}
        >
          Start
        </button>

        <div>
          <button
            type="button"
            onClick={this.reversed}
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
        </div>

        {isVisible && (
          <ul>
            {listedGoods.map((good) => (
              <li>
                {good}
              </li>
            ))}
          </ul>
        )}

      </div>
    );
  }
}

export default App;
