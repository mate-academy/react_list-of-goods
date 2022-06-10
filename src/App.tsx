import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  stop = () => {
    this.setState({ isVisible: false });
  };

  sortByAlfabeth = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (prevGood, nextGood) => prevGood.localeCompare(nextGood),
      ),
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (prevGood, nextGood) => prevGood.length - nextGood.length,
      ),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const {
      goods,
      isVisible,
    } = this.state;
    const visibleGoods = [...goods];

    return (
      <div>
        <h1>Goods</h1>
        {!isVisible ? (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        ) : (
          <div>
            <GoodsList
              goodsList={visibleGoods}
            />
            <div>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByAlfabeth}
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
              <button
                type="button"
                onClick={this.stop}
              >
                Stop
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
