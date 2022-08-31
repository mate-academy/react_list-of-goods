/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import { Goods } from './components/Goods/Goods';

import './App.css';

const goodsFromServer = [
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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

const initialState: State = {
  isStarted: false,
  isReversed: false,
  sortType: SortType.NONE,
};

export class App extends Component {
  state: Readonly<State> = { ...initialState };

  start = () => this.setState({
    isStarted: true,
  });

  sort = (sortType: SortType) => this.setState({
    sortType,
  });

  reverse = () => this.setState((state: State) => ({
    isReversed: !state.isReversed,
  }));

  reset = () => this.setState({
    ...initialState,
    isStarted: true,
  });

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button
              type="button"
              onClick={() => this.sort(SortType.ALPABET)}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => this.sort(SortType.LENGTH)}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <Goods visibleGoods={visibleGoods} />
          </>
        )}
      </div>
    );
  }
}
