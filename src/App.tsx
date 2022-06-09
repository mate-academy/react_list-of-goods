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

interface State {
  goods: string[];
  isStarted: boolean;
  isReversed: boolean;
  sortBy: 'none' | 'name' | 'length';
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isStarted: false,
    isReversed: false,
    sortBy: 'none',
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortByAlpha = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ isReversed: false, sortBy: 'none' });
  };

  render(): React.ReactNode {
    const {
      goods,
      isStarted,
      isReversed,
      sortBy,
    } = this.state;

    let visibleGoods = [...goods];

    switch (sortBy) {
      case 'name':
        visibleGoods.sort((a, b) => (a.localeCompare(b)));
        break;
      case 'length':
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
          is-half
          is-offset-one-quarter"
        >
          <h1 className="title is-1">Goods</h1>

          <div className="App__start">
            {!isStarted && (
              <button
                type="button"
                className="button is-success"
                onClick={this.start}
              >
                Start
              </button>
            )}
          </div>

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
            onClick={this.sortByAlpha}
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

          {isStarted && (
            <ul className="
              column
              is-half
              is-offset-one-quarter"
            >
              <h2 className="title is-3">Goods List:</h2>

              {visibleGoods.map((good) => (
                <li key={good}>
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
