import React from 'react';
import { goodsFromServer } from './api/goods';
import './App.css';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: string[],
  isVisible: boolean,
  isReverse: boolean,
  sortedBy: string,
  isReset: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReverse: false,
    sortedBy: '',
    isReset: false,
  };

  showGoodsList = () => {
    this.setState((state) => ({
      ...state,
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      ...state,
      isReverse: !state.isReverse,
    }));
  };

  sortByAlp = () => {
    this.setState((state) => ({
      ...state,
      sortedBy: 'alp',
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      ...state,
      sortedBy: 'length',
    }));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  render() {
    const {
      goods,
      isVisible,
      isReverse,
      sortedBy,
    } = this.state;
    const newGoods = [...goods];

    goods.sort(
      (g1, g2) => {
        switch (sortedBy) {
          case 'alp':
            return g1.localeCompare(g2);
          case 'length':
            return g1.length - g2.length;
          default:
            return 0;
        }
      },
    );

    if (isReverse) {
      goods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {(isVisible && (
          <>
            <GoodsList goods={newGoods} />

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlp}
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
          </>
        ))
        || (
          <button
            type="button"
            onClick={this.showGoodsList}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
export default App;
