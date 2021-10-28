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

type State = {
  goods: string[];
  visibility: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    visibility: true,
  };

  start = () => {
    this.setState({ visibility: true });
  };

  reverse = () => {
    this.setState(state => ({
      ...state,
      goods: state.goods.reverse(),
    }));
  };

  sortAlphabetically = () => {
    const sorted = this.state.goods.sort((good1, good2) => good1.localeCompare(good2));

    this.setState(state => ({
      ...state,
      goods: sorted,
    }));
  };

  sortbBylength = () => {
    const sorted = this.state.goods.sort((good1, good2) => good1.length - good2.length);

    this.setState(state => ({
      ...state,
      goods: sorted,
    }));
  };

  reset = () => {
    this.setState(state => ({
      ...state,
      goods: [...goodsFromServer],
    }));
  };

  render() {
    const { visibility, goods } = this.state;

    return (
      <div className="App">
        {!visibility
        && (
          <>
            <button
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          </>
        )}
        {visibility
        && (
          <div>
            <h1>Goods</h1>
            <ul>
              {goods.map(good => (
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
                onClick={this.sortbBylength}
              >
                Sort by length
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
