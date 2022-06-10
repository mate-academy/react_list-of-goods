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

const lengths: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

enum SortBy {
  none,
  name,
  length,
}

interface State {
  goods: string[];
  isStarted: boolean;
  isReversed: boolean;
  sortBy: SortBy;
  selection: number;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isStarted: false,
    isReversed: false,
    sortBy: SortBy.none,
    selection: 1,
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortByName = () => {
    this.setState({ sortBy: SortBy.name });
  };

  sortByLength = () => {
    this.setState({ sortBy: SortBy.length });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.none,
      selection: 1,
    });
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  toggleVisibility = () => (this.setState(state => (
    { isStarted: !state.isStarted }
  )));

  hideAndReset = () => {
    this.reset();
    this.toggleVisibility();
  };

  render(): React.ReactNode {
    const {
      goods,
      isStarted,
      isReversed,
      sortBy,
      selection,
    } = this.state;

    let visibleGoods = [...goods];
    const filterByLength = (good: string) => good.length >= selection;

    switch (sortBy) {
      case SortBy.name:
        visibleGoods.sort((a, b) => (a.localeCompare(b)));
        break;
      case SortBy.length:
        visibleGoods.sort((a, b) => (a.length - b.length));
        break;
      default:
        (visibleGoods = [...goods]);
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App columns">
        <div className="
          column
          is-three-fifths
          is-offset-one-fifth"
        >
          <h1 className="title is-1">Goods</h1>

          <div className="App__start">
            {!isStarted && (
              <button
                type="button"
                className="button
                  is-success
                  column
                  is-one-fifth"
                onClick={this.start}
              >
                Start
              </button>
            )}
          </div>

          <div>
            <label htmlFor="select-field">Select minimum length: </label>
            <select
              name="select-field"
              value={selection}
              onChange={(event) => {
                this.setState({
                  selection: Number(event.currentTarget.value),
                });
              }}
            >
              {lengths.map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <button
              type="button"
              className="button is-info"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button is-info"
              onClick={this.sortByName}
            >
              Sort Alphabetically
            </button>

            <button
              type="button"
              className="button is-info"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              type="button"
              className="button is-info"
              onClick={this.sortByLength}
            >
              Sort by Length
            </button>
          </div>

          {isStarted && (
            <ul className="
              App__list column is-full"
            >
              <h2 className="title is-3">Goods List:</h2>
              {
                visibleGoods
                  .filter(filterByLength)
                  .map((good) => (
                    <li key={good}>
                      {good}
                    </li>
                  ))
              }
            </ul>
          )}

          <div className="App__start">
            {isStarted && (
              <button
                type="button"
                className="button
                  is-danger column
                  is-one-fifth"
                onClick={this.hideAndReset}
              >
                Hide
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
