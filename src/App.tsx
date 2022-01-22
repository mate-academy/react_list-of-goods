import React from 'react';
import classNames from 'classnames';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

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
  isStarted: boolean;
  isReversed: boolean;
  isDefault: boolean;
  sortMethod: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    isDefault: true,
    sortMethod: '',
  };

  start = () => {
    this.setState((state) => ({ ...state, isStarted: true }));
  };

  reverse = () => {
    this.setState((state) => ({
      ...state,
      isReversed: !state.isReversed,
      isDefault: false,
    }));
  };

  sortByLength = () => {
    this.setState(
      {
        sortMethod: 'byLength',
        isDefault: false,
      },
    );
  };

  sortByAlphabet = () => {
    this.setState(
      {
        sortMethod: 'byAlphabet',
        isDefault: false,
      },
    );
  };

  reset = () => {
    this.setState(
      {
        isStarted: true,
        isReversed: false,
        sortMethod: '',
        isDefault: true,
      },
    );
  };

  prepareGoods = () => {
    const preparedGoods = [...goodsFromServer];
    const { isReversed, sortMethod, isDefault } = this.state;

    if (isDefault) {
      return preparedGoods;
    }

    if (sortMethod) {
      preparedGoods.sort((good1, good2) => {
        switch (sortMethod) {
          case 'byAlphabet':
            return good1.localeCompare(good2);
          case 'byLength':
            return good1.length - good2.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      return preparedGoods.reverse();
    }

    return preparedGoods;
  };

  render() {
    return (
      <div className="App">
        <h1 className="rainbow-animated">Goods</h1>
        {!this.state.isStarted && (
          <button
            type="button"
            className="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {this.state.isStarted && (
          <div className="container">
            <GoodsList preparedGoods={this.prepareGoods()} />

            <div className="buttons">
              <button
                className={classNames(
                  'button',
                  {
                    'button--selected': this.state.isReversed,
                  },
                )}
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                className="button"
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort By Alphabet
              </button>

              <button
                className="button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort By Length
              </button>

              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
