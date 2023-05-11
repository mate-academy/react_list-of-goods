import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { render } from 'react-dom';

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

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  switch (sortType) {
    case 1:
      visibleGoods.sort((first, second) => first.localeCompare(second));
      break;
    case 2:
      visibleGoods.sort((first, second) => first.length - second.length);
      break;
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: 0,
  };

  render() {
    const { isReversed, sortType } = this.state;
    const list = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={() => this.setState({ sortType: 1 })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={() => this.setState({ sortType: 2 })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={() => this.setState({ isReversed: !isReversed })}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState({ sortType: 0, isReversed: false })}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {list.map(good => (
            <li>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
