import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

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
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sort = (sortType: SortType) => () => {
    this.setState({
      sortType,
    });
  };

  reverse = () => {
    this.setState(
      (previousState) => ({
        isReversed: !previousState.isReversed,
      }),
    );
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <>
        <div className="section content">
          <div className="buttons">
            <button
              type="button"
              className={
                sortType === SortType.ALPHABET
                  ? 'button is-info'
                  : 'button is-info is-light'
              }
              onClick={this.sort(SortType.ALPHABET)}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={
                sortType === SortType.LENGTH
                  ? 'button is-info'
                  : 'button is-info is-light'
              }
              onClick={this.sort(SortType.LENGTH)}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={
                isReversed === true
                  ? 'button is-info'
                  : 'button is-info is-light'
              }
              onClick={this.reverse}
            >
              Reverse
            </button>

            {(sortType !== SortType.NONE || isReversed) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )}
          </div>

          <ul>
            <ul>
              {getReorderedGoods(goodsFromServer, this.state).map((good) => {
                return (
                  <li key={good} data-cy="Good">
                    {good}
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </>
    );
  }
}
