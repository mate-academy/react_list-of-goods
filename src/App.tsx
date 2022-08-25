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
  minLength: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    minLength: 0,
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
    const {
      isStarted, isReversed, sortType, minLength,
    } = this.state;

    const visibleGoods = goodsFromServer.filter(
      good => good.length >= minLength,
    );

    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case SortType.ALPABET:
          return good1.localeCompare(good2);
        case SortType.LENGTH:
          return good1[SortType.LENGTH] - good2[SortType.LENGTH];
        default:
          return 0;
      }
    });

    const ten = [
      { id: 'one', number: 1 },
      { id: 'two', number: 2 },
      { id: 'three', number: 3 },
      { id: 'four', number: 4 },
      { id: 'fmive', number: 5 },
      { id: 'six', number: 6 },
      { id: 'seven', number: 7 },
      { id: 'eight', number: 8 },
      { id: 'nine', number: 9 },
      { id: 'ten', number: 10 },
    ];

    if (isReversed) {
      visibleGoods.reverse();
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

        <select
          value={minLength}
          defaultValue={1}
          onChange={(event) => {
            this.setState({ minLength: +event.target.value });
          }}
          className={classNames('button',
            { 'button--hidden': !isStarted })}
        >
          <option value="0" disabled>Chose minimum length</option>
          {ten.map(item => (
            <option
              key={item.id}
              value={item.number}
            >
              {item.number}
            </option>
          ))}
        </select>

        {isStarted
          ? (<GoodsList goodsFromServer={visibleGoods} />)
          : ''}
      </div>
    );
  }
}
