import React from 'react';
import './App.css';

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

enum SortBy {
  Normal,
  Alphabetically,
  Length,
}

type State = {
  goods: string[],
  start: boolean,
  sortBy: SortBy,
  isReversed: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    start: false,
    sortBy: SortBy.Normal,
    isReversed: false,
  };

  start = () => {
    this.setState({ start: true });
  };

  reverse = () => {
    this.setState((prevState) => ({
      isReversed: !prevState.isReversed,
    }));
  };

  sortByApph = () => {
    this.setState({ sortBy: SortBy.Alphabetically });
  };

  sortByLength = () => {
    this.setState({ sortBy: SortBy.Length });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.Normal,
    });
  };

  render() {
    const {
      goods,
      sortBy,
      isReversed,
      start,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case SortBy.Length:
          return g1.length - g2.length;

        case SortBy.Alphabetically:
          return g1.localeCompare(g2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App card shadow p-3 mb-5 bg-white rounded mb-3">
        <h1 className="card-title display-3 text-center">Goods</h1>
        {start ? (
          <div className="row g-0">
            <ul className="col-md-6 card-body list-group list-group-flush">
              {visibleGoods.map(good => (
                <li className="list-group-item" key={good}>
                  {good}
                </li>
              ))}
            </ul>

            <div className="col-md-6 button">
              <button
                type="button"
                onClick={this.reverse}
                className="btn btn-secondary"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByApph}
                className="btn btn-warning text-nowrap"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="btn btn-dark"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="btn btn-danger"
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <button
              type="button"
              onClick={this.start}
              className="btn btn-success"
            >
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
