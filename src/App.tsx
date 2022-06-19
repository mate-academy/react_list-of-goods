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
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    sortBy: SortBy.none,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((prevState) => (
      { isReversed: !prevState.isReversed }
    ));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: SortBy.name,
    });
  };

  sortByLength = () => {
    this.setState({ sortBy: SortBy.length });
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

    let visibleGoods = [...goods];

    switch (sortBy) {
      case SortBy.name:
        visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
        break;

      case SortBy.length:
        visibleGoods.sort((good1, good2) => (good1.length - good2.length));
        break;

      default:
        visibleGoods = [...goods];
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (

      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          className="is-medium"
          type="button"
          onClick={this.start}
        >
          Start
        </button>
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
            {visibleGoods.map((good) => (
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
