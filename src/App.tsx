import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './components/GoodsList';

export const goodsFromServer = [
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
  NONE = 'NONE',
  ALPABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((goodOne, goodTwo) => {
    switch (sortType) {
      case SortType.ALPABET:
        return goodOne.localeCompare(goodTwo);
      case SortType.LENGTH:
        return goodOne.length - goodTwo.length;
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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabrtical = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  resetByClick = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const allGoods = getReorderedGoods(
      goodsFromServer, { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              {
                'is-light': sortType !== SortType.ALPABET,
              })}
            onClick={this.sortByAlphabrtical}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              {
                'is-light': !isReversed,
              })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isReversed || sortType !== SortType.NONE
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetByClick}
              >
                Reset
              </button>
            )
            : null}
        </div>
        <ul>
          <GoodsList goods={
            allGoods
          }
          />
        </ul>
      </div>
    );
  }
}
