/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { GoodsList } from './components/goodsList';

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

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: string,
  initialOrder: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: true,
    isReversed: false,
    sortType: '',
    initialOrder: false,
  };

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortType: 'alphabetically' });
  };

  sortByLength = () => {
    this.setState({ sortType: 'by length' });
  };

  reset = () => {
    this.setState(state => ({
      initialOrder: !state.initialOrder,
    }));

    // Haven't found the diffrence so don't know how to set the state correct

    // this.setState({ initialOrder: true });
  };

  render(): React.ReactNode {
    const {
      isReversed,
      isStarted,
      initialOrder,
      sortType,
    } = this.state;

    const visibleGoods = [...goodsFromServer];

    return (
      <div className="App">
        {isStarted && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {!isStarted && (
          <>
            <button type="button" onClick={this.sortAlphabetically}>
              Sort alphabetically
            </button>

            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>

            <button type="button" onClick={this.reverse}>
              Reverse
            </button>

            <button type="button" onClick={this.reset}>
              Reset
            </button>

            {/* Can't sort or reverse the list items after I pressed reset button. Maybe it should be this way if no - let me know please */}
            {!initialOrder
              ? <GoodsList goods={visibleGoods} />
              : <GoodsList goods={goodsFromServer} />}
          </>
        )}
      </div>
    );
  }
}
