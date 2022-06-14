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

export class App extends React.Component<{}, State> {
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

    let sortedGoods = [...goods];

    switch (sortBy) {
      case SortBy.name:
        sortedGoods.sort((g1, g2) => (g1.localeCompare(g2)));
        break;

      case SortBy.length:
        sortedGoods.sort((g1, g2) => (g1.length - g2.length));
        break;

      default:
        sortedGoods = [...goods];
    }

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div>
        <h1>Goods</h1>
        {!isVisible && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisible && (
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
        )}

        {isVisible && (
          <ul>
            {sortedGoods.map((good) => (
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
