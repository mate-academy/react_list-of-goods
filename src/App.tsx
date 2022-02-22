import React from 'react';
import './App.css';
import { GoodsList } from './goodsList';

type Goods = string[];

const goodsFromServer: Goods = [
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
  goods: Goods,
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  stop = () => {
    this.setState({ isVisible: false });
    this.reset();
  };

  reverse = () => {
    this.setState(state => (
      { goods: [...state.goods.reverse()] }
    ));
  };

  sortAlphabet = () => {
    this.setState(state => (
      { goods: [...state.goods.sort((a, b) => a.localeCompare(b))] }
    ));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  sortByLength = () => {
    this.setState(state => (
      { goods: [...state.goods.sort((a, b) => a.length - b.length)] }
    ));
  };

  render(): React.ReactNode {
    const { goods, isVisible } = this.state;

    const visibleGoods = [...goods];

    return (
      <div className="App">
        <h1>Goods</h1>
        {isVisible ? (
          <div>

            <button
              type="button"
              onClick={this.stop}
            >
              Stop
            </button>
            <div>
              <button
                type="button"
                onClick={this.reverse}
              >
                reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                sort by length
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <GoodsList goodsList={visibleGoods} />
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
