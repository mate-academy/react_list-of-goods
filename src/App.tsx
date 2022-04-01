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

enum SortBy {
  default,
  alphabet,
  length,
}

interface State {
  isStarted: boolean;
  isReversed: boolean;
  sortBy: SortBy;
}

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortBy: SortBy.default,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  setSortMethod = (by: SortBy) => {
    this.setState({ sortBy: by });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.default,
    });
  };

  setGoods = () => {
    const { isReversed, sortBy } = this.state;
    const preparedGoods = [...goodsFromServer];

    preparedGoods.sort((a, b) => {
      switch (sortBy) {
        case SortBy.alphabet:
          return a.localeCompare(b);
        case SortBy.length:
          return a.length - b.length;
        case SortBy.default:
        default:
          return 0;
      }
    });

    if (isReversed) {
      preparedGoods.reverse();
    }

    return preparedGoods;
  };

  render() {
    const { isStarted } = this.state;
    const goods = this.setGoods();

    return (
      <div className="App">
        <h1>Goods</h1>

        {!isStarted ? (
          <button type="button" onClick={this.start}>
            start
          </button>
        ) : (
          <>
            <button type="button" onClick={this.reverse}>
              reverse
            </button>

            <button type="button" onClick={() => this.setSortMethod(SortBy.alphabet)}>
              sort by abc
            </button>

            <button type="button" onClick={() => this.setSortMethod(SortBy.length)}>
              sort by len
            </button>

            <button type="button" onClick={this.reset}>
              reset
            </button>

            <GoodsList goods={goods} />
          </>
        )}
      </div>
    );
  }
}
