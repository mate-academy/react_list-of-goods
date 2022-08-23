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

enum SortType {
  NONE = 'none',
  ALPABET = 'alpabet',
  LENGTH = 'length',
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
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
    this.setState({ sortType: SortType.ALPABET, isReversed: false });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH, isReversed: false });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const goodsClone = [...goodsFromServer];

    goodsClone.sort((good1, good2) => {
      switch (sortType) {
        case SortType.ALPABET:
          return good1.localeCompare(good2);
        case SortType.LENGTH:
          return good1[SortType.LENGTH] - good2[SortType.LENGTH];
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
          className={classNames('button',
            { 'button--hidden': isStarted })}
          type="button"
          onClick={this.start}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.sortAlpabet}
          className={classNames('button',
            { 'button--hidden': !isStarted })}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
          className={classNames('button',
            { 'button--hidden': !isStarted })}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reverse}
          className={classNames('button',
            { 'button--hidden': !isStarted })}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.reset}
          className={classNames('button',
            { 'button--hidden': !isStarted })}
        >
          Reset
        </button>

        {isStarted
          ? (<GoodsList goodsFromServer={goodsClone} />)
          : ''}
      </div>
    );
  }
}
