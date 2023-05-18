import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  RESET,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render method to prepare goods
let visibleGoods = [...goodsFromServer];

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  if (isReversed === true) {
    return visibleGoods.reverse().map((good) => {
      return (
        <li data-cy="Good" key={good}>
          {good}
        </li>
      );
    });
  }

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods = visibleGoods.sort(
        (a, b) => (a.localeCompare(b.toString())
        ),
      );
      break;

    case SortType.LENGTH:
      visibleGoods = visibleGoods.sort(
        (a, b) => (a.length - b.length),
      );
      break;

    case SortType.RESET:
      visibleGoods = [...goods];
      break;

    default:
      break;
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return (
    visibleGoods.map((good) => {
      return (
        <li data-cy="Good" key={good}>
          {good}
        </li>
      );
    })
  );
}

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    isReversed: false,
    sortType: 0,
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              cn(
                'button',
                'is-info',
                { 'is-light': sortType !== SortType.ALPHABET },
              )
            }
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              cn(
                'button',
                'is-info',
                { 'is-light': sortType !== SortType.LENGTH },
              )
            }
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              cn(
                'button',
                'is-info',
                { 'is-light': isReversed !== true },
              )
            }
            onClick={() => (this.setState({ isReversed: true }))}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={
                () => this.setState(
                  { sortType: SortType.NONE, isReversed: false },
                )
              }
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state)}
          </ul>
        </ul>
      </div>
    );
  }
}
