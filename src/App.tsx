import React from 'react';
import './App.css';

const goodsFromServer = [
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
  isHidden: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isHidden: false,
  };

  hiddenStatus = () => {
    this.setState({ isHidden: true });
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (g1, g2) => g1.localeCompare(g2),
      ),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (g1, g2) => g1.length - g2.length,
      ),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { goods, isHidden } = this.state;

    return (
      <div className="App">
        <h1 className="title">List of goods</h1>
        <button
          type="button"
          className="button"
          hidden={isHidden}
          onClick={this.hiddenStatus}
        >
          Start
        </button>
        <ul
          className="list"
          hidden={!isHidden}
        >
          {goods.map(item => (
            <li
              key={item}
              className="list__item"
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="button"
          hidden={!isHidden}
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          hidden={!isHidden}
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button"
          hidden={!isHidden}
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          className="button"
          hidden={!isHidden}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
      </div>
    );
  }
}

export default App;
