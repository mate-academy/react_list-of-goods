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
      <div className="App container">
        <div className="box">
          <div className="goods-bar">
            <h1 className="title">Goods</h1>
            {!isVisible && (
              <button
                type="button"
                onClick={this.start}
                className="button is-primary is-rounded start-button"
              >
                Start
              </button>
            )}
          </div>
          {isVisible && (
            <div className="field is-grouped box">
              <button
                type="button"
                onClick={this.reversed}
                className="button is-info is-rounded"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortAlphabetically}
                className="button is-info is-rounded"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="button is-info is-rounded"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="button is-info is-rounded"
              >
                Sort by length
              </button>
            </div>
          )}

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
      </div>
    );
  }
}

export default App;
