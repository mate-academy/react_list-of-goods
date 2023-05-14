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
    case 1:
      visibleGoods = visibleGoods.sort(
        (a, b) => (a.localeCompare(b.toString())
        ),
      );
      break;

    case 2:
      visibleGoods = visibleGoods.sort(
        (a, b) => (a.length - b.length),
      );
      break;

    case 3:
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
    let isSelected1 = true;
    let isSelected2 = true;
    let isSelected3 = true;
    let isSelected4 = true;

    switch (this.state.sortType) {
      case 1:
        isSelected1 = false;
        isSelected2 = true;
        break;

      case 2:
        isSelected1 = true;
        isSelected2 = false;
        break;

      case 3:
        isSelected1 = true;
        isSelected2 = true;
        break;

      default:
        break;
    }

    if (this.state.isReversed === true) {
      isSelected3 = false;
    } else {
      isSelected3 = true;
    }

    if (this.state.sortType === 0 && this.state.isReversed === false) {
      isSelected4 = false;
    } else {
      isSelected4 = true;
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              cn('button', 'is-info', { 'is-light': isSelected1 })
            }
            onClick={() => {
              return (
                this.setState({ sortType: 1, isReversed: false })
              );
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              cn('button', 'is-info', { 'is-light': isSelected2 })
            }
            onClick={() => (this.setState({ sortType: 2, isReversed: false }))}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              cn('button', 'is-info', { 'is-light': isSelected3 })
            }
            onClick={() => (this.setState({ isReversed: true }))}
          >
            Reverse
          </button>

          {isSelected4 && (
            <button
              type="button"
              className={
                cn('button', { 'is-danger': isSelected4 }, 'is-light')
              }
              onClick={() => (this.setState({
                sortType: 3,
                isReversed: false,
              }))}
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
