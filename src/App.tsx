import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

interface State {
  goods: string[],
  isVisible: boolean,
}

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

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
  };

  showGoods = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  hideGoods = () => {
    this.setState(state => ({
      goods: goodsFromServer,
      isVisible: !state.isVisible,
    }));
  };

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>
        {!isVisible
        && (
          <button
            type="button"
            className="btn"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}

        {isVisible
        && (
          <section className="goods">
            <GoodsList goods={goods} />
            <div className="buttons">
              <button
                type="button"
                className="btn-item"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>
              <button
                type="button"
                className="btn-item"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                className="btn-item"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="btn-item"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
          </section>
        )}

        {isVisible
        && (
          <button
            type="button"
            className="btn btn--hide"
            onClick={this.hideGoods}
          >
            End
          </button>
        )}
      </div>
    );
  }
}

export default App;
