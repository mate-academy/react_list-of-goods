import React from 'react';

import './App.scss';
import './additional_styles/button.css';

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

type Props = {};
type State = {
  isStarted: boolean,
  goodsList: string[],
  visibleGoods: string[],
  isReversed: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    isStarted: false,
    goodsList: goodsFromServer,
    visibleGoods: goodsFromServer,
    isReversed: false,
  };

  openList = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => {
    this.setState(state => ({
      visibleGoods: !state.isReversed
        ? [...state.goodsList].reverse()
        : state.goodsList,
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (sortType: 'alphabet' | 'length') => {
    this.setState(state => ({
      visibleGoods: [...state.goodsList].sort((a, b) => {
        switch (sortType) {
          case 'alphabet':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      }),
    }));
  };

  reset = () => {
    this.setState(state => ({
      visibleGoods: state.goodsList,
    }));
  };

  render() {
    const { isStarted, visibleGoods } = this.state;
    const { reverse, sortBy, reset } = this;

    return (
      <div className="App">
        {!isStarted
          ? (
            <div className="App__start">
              <button
                type="button"
                onClick={this.openList}
                className="button"
              >
                Start
              </button>
            </div>
          )
          : (
            <>
              <div className="App__sort-by">
                <button type="button" className="button" onClick={reverse}>
                  Reverse
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={() => sortBy('alphabet')}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={() => sortBy('length')}
                >
                  Sort by length
                </button>

                <button type="button" className="button" onClick={reset}>
                  Reset
                </button>
              </div>

              <ul className="App__goods-list">
                {visibleGoods.map(good => (
                  <li key={good} className="App__goods-item">
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}

export default App;
