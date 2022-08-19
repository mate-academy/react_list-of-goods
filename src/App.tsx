import classNames from 'classnames';
import React from 'react';
import { GoodsList } from './GoodsList';
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
    isStarted: false,
    isReversed: false,
    sortType: 'none',
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

  sortAlpabet = () => {
    this.setState({ sortType: 'alpabet', isReversed: false });
  };

  sortByLength = () => {
    this.setState({ sortType: 'length', isReversed: false });
  };

  reset = () => {
    this.setState({ sortType: 'none', isReversed: false });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const goodsClone = [...goodsFromServer];

    goodsClone.sort((good1, good2) => {
      switch (sortType) {
        case 'alpabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1[sortType] - good2[sortType];
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsClone.reverse();
    }

    return (
      <div className="App">
        <button
          className={classNames('startButton',
            { 'startButton--hidden': isStarted })}
          type="button"
          onClick={this.start}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.sortAlpabet}
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
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button type="button" onClick={this.reset}>
          Reset
        </button>

        {isStarted
          ? (<GoodsList goodsFromServer={goodsClone} />)
          : ''}
      </div>
    );
  }
}
