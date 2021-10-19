import React from 'react';
import './App.scss';

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
  state: State = {
    goods: [...goodsFromServer],
    visibility: false,
  };

  starting = () => {
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

  sortByLength = () => {
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
              onClick={this.starting}
            >
              Start
            </button>
          </>
        )}
        {visibility
        && (
          <div className="App__started">
            <h1>Goods</h1>
            <ul className="App__list">
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
                onClick={this.sortByLength}
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
