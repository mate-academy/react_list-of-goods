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
      visibleGoods.sort();
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
    isReversed: false,
    sortType: 0,
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType !== 1 ? 'is-light' : ''}`}
            onClick={() => this.setState({ sortType: 1 })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== 2 ? 'is-light' : ''}`}
            onClick={() => this.setState({ sortType: 2 })}
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
          {(isReversed === true || sortType !== 0) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={
                () => this.setState({ sortType: 0, isReversed: false })
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
