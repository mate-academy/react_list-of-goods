// import { sortBy } from 'cypress/types/lodash';
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
  Name = 'name',
  Length = 'length',
}

interface State {
  goods: string[];
  isListVisible: boolean;
  isReverse: boolean;
  sortBy: SortBy | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isListVisible: false,
    isReverse: false,
    sortBy: null,
  };

  start = () => {
    this.setState({ isListVisible: true });
  };

  reverse = () => {
    this.setState((state) => (
      { isReverse: !state.isReverse }
    ));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: SortBy.Name });
  };

  sortByLength = () => {
    this.setState({ sortBy: SortBy.Length });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: null,
    });
  };

  render() {
    let visibleGoods: string[] = [...this.state.goods];

    switch (this.state.sortBy) {
      case SortBy.Name:
        visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
        break;
      case SortBy.Length:
        visibleGoods.sort((good1, good2) => good1.length - good2.length);
        break;
      default:
        visibleGoods = [...this.state.goods];
        break;
    }

    if (this.state.isReverse) {
      visibleGoods.reverse();
    }

    return (
      <div>
        {!this.state.isListVisible && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {this.state.isListVisible && (
          <div>
            <ul>
              {visibleGoods.map((good) => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <div>
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
                onClick={this.sortByLength}
              >
                Sort By Length
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

            </div>
          </div>
        )}
      </div>

    );
  }
}

export default App;
