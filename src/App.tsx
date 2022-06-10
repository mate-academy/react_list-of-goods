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
  visible: boolean;
  goods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    visible: false,
    goods: [...goodsFromServer],
  };

  showGoods = () => {
    this.setState({ visible: true });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(
        (a, b) => a.localeCompare(b),
      ),
    }));
  };

  resetGoods = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(
        (a, b) => a.length - b.length,
      ),
    }));
  };

  render() {
    const { goods, visible } = this.state;

    return (
      <div className="App">
        {!visible ? (
          <button
            className="button"
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
        ) : (
          <>
            <h1>
              Goods
            </h1>
            <ul>
              {goods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <div className="buttons">
              <button
                className="button"
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>
              <button
                className="button"
                type="button"
                onClick={this.sortGoods}
              >
                Sort alphabetically
              </button>
              <button
                className="button"
                type="button"
                onClick={this.resetGoods}
              >
                Reset
              </button>
              <button
                className="button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
          </>
        )}

      </div>
    );
  }
}

export default App;
