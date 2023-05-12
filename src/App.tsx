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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];

  if (isReversed === true) {
    visibleGoods.reverse();
  }

  switch (sortType) {
    case 0:
      visibleGoods = [...goods];
      break;

    case 1:
      visibleGoods = [...goods].filter(
        (a, b) => (a.localeCompare(b.toString())
        ),
      );
      break;

    case 2:
      visibleGoods = [...goods].filter(
        (a, b) => (a.length - b.toString().length),
      );
      break;

    default:
      break;
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return (
    visibleGoods.map((good) => {
      return (
        <li data-cy="Good">
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
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={() => (this.setState({ sortType: 1 }))}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={() => (this.setState({ sortType: 2 }))}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={() => (this.setState({ isReversed: true }))}

          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => (this.setState({ sortType: 0 }))}
          >
            Reset
          </button>
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
