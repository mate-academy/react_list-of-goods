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
  goods: string[],
  isStartOnClick: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStartOnClick: false,
  };

  showList = () => {
    this.setState({ isStartOnClick: true });
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByName = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => (
        a.localeCompare(b)
      )),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => (
        a.length - b.length
      )),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { goods, isStartOnClick } = this.state;

    return isStartOnClick ? (
      <div>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByName}
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

        <ol>
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ol>
      </div>
    ) : (
      <button
        type="button"
        onClick={this.showList}
      >
        Start
      </button>
    );
  }
}

export default App;
