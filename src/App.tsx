/* eslint-disable @typescript-eslint/no-explicit-any */
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
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: true,
    isReversed: false,
    sortType: '',
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
    this.setState({
      sortType: '',
      isReversed: false,
    });
  };

  render(): React.ReactNode {
    const {
      isReversed,
      isStarted,
      sortType,
    } = this.state;

    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((good: any, nextGood: any) => {
      switch (sortType) {
        case 'alphabetically':
          return good.localeCompare(nextGood);

        case 'by length':
          return good.length - nextGood.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

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
            <GoodsList goods={visibleGoods} />
          </>
        )}
      </div>
    );
  }
}
