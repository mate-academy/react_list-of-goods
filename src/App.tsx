import classNames from 'classnames';
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
  state: State = {
    goods: [...goodsFromServer],
    visibility: false,
  };

  show = () => {
    this.setState(state => ({
      ...state,
      visibility: true,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      ...state,
      goods: state.goods.reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      ...state,
      goods: state.goods.sort((good1, good2) => good1.localeCompare(good2)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      ...state,
      goods: state.goods.sort((good1, good2) => good1.length - good2.length),
    }));
  };

  resetToDefault = () => {
    this.setState(state => ({
      ...state,
      goods: [...goodsFromServer],
    }));
  };

  render() {
    return (
      <>
        <button
          type="button"
          className={classNames({ not_visible: this.state.visibility })}
          onClick={this.show}
        >
          Start
        </button>
        <div className={classNames({ not_visible: !this.state.visibility })}>
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
              onClick={this.resetToDefault}
            >
              Reset
            </button>
          </div>
          <h1>Goods</h1>
          <ul>
            {this.state.goods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
