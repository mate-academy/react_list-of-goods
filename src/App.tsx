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
  None = 'none',
  Name = 'name',
  Length = 'Length',
}

type State = {
  goods: string[];
  isVisible: boolean;
  isReversed: boolean,
  sortBy: SortBy,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    sortBy: SortBy.None,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortByName = () => {
    this.setState({ sortBy: SortBy.Name });
  };

  sortByLength = () => {
    this.setState({ sortBy: SortBy.Length });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.None,
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
      case SortBy.Name:
        visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
        break;

      case SortBy.Length:
        visibleGoods.sort((good1, good2) => good1.length - good2.length);
        break;

      default:
        visibleGoods = [...goods];
        break;
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App container.is-widescreen has-text-centered">
        <h1 className="title is-1 mt-3 has-text-centered">Goods</h1>

        <div className="App__start">
          {!isVisible && (
            <button
              type="button"
              className="button is-success mt-2"
              onClick={this.start}
            >
              Start
            </button>
          )}
        </div>

        <div className="is-flex is-justify-content-center mt-6">
          <button
            type="button"
            className="button is-info mx-4"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-info mx-4"
            onClick={this.sortByName}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-info mx-4"
            onClick={this.sortByLength}
          >
            Sort Sort by length
          </button>

          <button
            type="button"
            className="button is-info mx-4"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <div className="mt-5">
          {isVisible && (
            <ul>
              {visibleGoods.map((good) => (
                <li key={good} className="is-size-4">
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
