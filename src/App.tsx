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

interface State {
  goods: string[];
  isStarted: boolean;
  isReversed: boolean;
  sortBy: 'none' | 'name' | 'length';
  selection: number;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isStarted: false,
    isReversed: false,
    sortBy: 'none',
    selection: 1,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  hide = () => (this.setState(state => (
    {
      isStarted: !state.isStarted,
      isReversed: false,
      sortBy: 'none',
      selection: 1,
    }
  )));

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
    this.setState({
      isReversed: false,
      sortBy: 'none',
      selection: 1,
    });
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
                className="button
                  is-success column
                  is-offset-one-fifth
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
              App__list
              column
              is-offset-one-fifth
              is-one-fifth"
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
                  is-offset-one-fifth
                  is-one-fifth"
                onClick={this.hide}
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
