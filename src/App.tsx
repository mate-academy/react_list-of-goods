import React from 'react';
import './App.css';

import icon from './images/icon.png';

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
  visible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    visible: false,
  };

  showGoods = () => {
    this.setState({ visible: true });
  };

  resetGoods = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabet = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(
        (a, b) => a.localeCompare(b),
      ),
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
      <div className="app">
        {!visible ? (
          <button
            className="startButton"
            type="button"
            onClick={this.showGoods}
          >
            <img src={icon} alt="start icon" />
          </button>
        ) : (
          <>
            <h1 className="title">
              Goods
            </h1>

            <button
              className="resetButton"
              type="button"
              onClick={this.resetGoods}
            >
              Reset
            </button>

            <ul className="goodsList">
              {goods.map(el => (
                <p className="goodItem" key={el}>
                  {el}
                </p>
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
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
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
