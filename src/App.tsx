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

  switch (sortType) {
    case 1:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case 2:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH ? 'is-light' : ''}`}
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed ? 'is-light' : ''}`}
            onClick={
              () => this.setState({ isReversed: !isReversed })
            }
          >
            Reverse
          </button>
          {(isReversed === true || sortType !== SortType.NONE) && (
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
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
