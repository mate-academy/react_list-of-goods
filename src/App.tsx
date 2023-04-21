import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((goodA, goodB) => {
    switch (sortType) {
      case (SortType.ALPHABET):
        return goodA.localeCompare(goodB);

      case (SortType.LENGTH):
        return (goodA.length - goodB.length);

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

// export const App: React.FC = () => {
export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphClick = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortLengthClick = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverseClick = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleResetClick = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer, { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info',
              {
                'is-light': !(sortType === SortType.ALPHABET),
              })}
            // className="button is-info is-light"
            onClick={this.handleSortAlphClick}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success',
              {
                'is-light': !(sortType === SortType.LENGTH),
              })}
            // className="button is-success is-light"
            onClick={this.handleSortLengthClick}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning',
              {
                'is-light': !isReversed,
              })}
            // className="button is-warning is-light"
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>

          {isReversed || sortType !== SortType.NONE
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleResetClick}
              >
                Reset
              </button>
            )
            : null}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li key={Math.random()} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
