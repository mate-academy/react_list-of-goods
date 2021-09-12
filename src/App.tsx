import classNames from 'classnames';
import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodList';

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
  isReverse: boolean,
  sortByAlphabet: boolean,
  sortByLength: boolean,
  isReset: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReverse: false,
    sortByAlphabet: false,
    sortByLength: false,
    isReset: false,
  };

  visible = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }
    ));
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
      isReset: false,
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      sortByAlphabet: !state.sortByAlphabet,
      isReset: false,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortByLength: !state.sortByLength,
      isReset: false,
    }));
  };

  reset = () => {
    this.setState(state => ({
      isReset: !state.isReset,
    }));
  };

  render() {
    const {
      isVisible,
      isReverse,
      goods,
      sortByAlphabet,
      sortByLength,
      isReset,
    } = this.state;

    let visibleGoods = goods;

    if (sortByAlphabet) {
      visibleGoods = [...visibleGoods].sort((a, b) => a.localeCompare(b));
    }

    if (sortByLength) {
      visibleGoods = [...visibleGoods].sort((a, b) => a.length - b.length);
    }

    if (isReverse) {
      visibleGoods = [...visibleGoods].reverse();
    }

    if (isReset) {
      visibleGoods = [...goods];
    }

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            onClick={this.visible}
            className="app__button"
          >
            START
          </button>
        )}

        {isVisible && (
          <div className="app__body">
            <button
              type="button"
              onClick={this.reverse}
              className={classNames(
                'app__button',
                {
                  'app__button-active': isReverse && !isReset,
                },
              )}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabet}
              className={classNames(
                'app__button',
                {
                  'app__button-active': sortByAlphabet && !isReset,
                },
              )}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
              className={classNames(
                'app__button',
                {
                  'app__button-active': sortByLength && !isReset,
                },
              )}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="app__button"
            >
              Reset
            </button>

            <ul>
              {isVisible && <GoodsList goods={visibleGoods} />}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
