import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GoodsList } from './GoodsList';

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

interface State {
  goods: string[];
  isListVisible: boolean;
  isReversed: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isListVisible: false,
    isReversed: false,
  };

  showList = () => {
    this.setState({ isListVisible: true });
  };

  reverseList = () => {
    const { isListVisible } = this.state;

    if (isListVisible) {
      this.setState(state => ({
        isReversed: !state.isReversed,
      }));
    }
  };

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => b.localeCompare(a)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => b.length - a.length),
    }));
  };

  render() {
    const {
      goods,
      isListVisible,
      isReversed,
    } = this.state;

    let modifiedGoods = goods;

    if (isReversed) {
      modifiedGoods = [...modifiedGoods].reverse();
    }

    const buttonClass = 'btn-box bg-primary border-0 rounded text-light w-25 py-2 m-1';
    const flexLayout = 'd-flex justify-content-center align-items-center';

    return (
      <div className={`h-100 w-100 ${flexLayout}`}>
        {isListVisible
          ? (
            <div className="w-100">

              <div className={`${flexLayout} flex-column`}>
                <h1>Goods</h1>
                <GoodsList goods={modifiedGoods} />
              </div>

              <div className={`${flexLayout}`}>
                <button
                  type="button"
                  onClick={() => this.reverseList()}
                  className={`${buttonClass}`}
                >
                  Reverse List
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!isListVisible) {
                      return;
                    }

                    this.sortByAlphabet();
                  }}
                  className={`${buttonClass}`}
                >
                  Sort by Alphabet
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!isListVisible) {
                      return;
                    }

                    this.sortByLength();
                  }}
                  className={`${buttonClass}`}
                >
                  Sort by Length
                </button>

                <button
                  type="button"
                  onClick={() => this.reset()}
                  className={`${buttonClass}`}
                >
                  Reset
                </button>
              </div>

            </div>

          )

          : (
            <button
              type="button"
              onClick={() => this.showList()}
              className={`${buttonClass}`}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
