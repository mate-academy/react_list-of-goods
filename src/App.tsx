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
  isResetButton: boolean,
};

// Use this function in the render method to prepare goods

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods: string[] = [''];

  switch (sortType) {
    case SortType.NONE:
    case SortType.RESET:
      visibleGoods = [...goods];
      break;

    case SortType.ALPHABET:
      visibleGoods = [...goods].sort(
        (a, b) => (a.localeCompare(b.toString())
        ),
      );
      break;

    case SortType.LENGTH:
      visibleGoods = [...goods].sort(
        (a, b) => (a.length - b.length),
      );
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

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
    sortType: SortType.NONE,
    isResetButton: false,
  };

  handleRevers = () => {
    this.setState((prevState) => {
      return {
        isReversed: !prevState.isReversed,
        isResetButton: true,
      };
    });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              cn(
                'button',
                'is-info',
                { 'is-light': this.state.sortType !== SortType.ALPHABET },
              )
            }
            onClick={() => this.setState({
              sortType: SortType.ALPHABET,
              isResetButton: true,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              cn(
                'button',
                'is-success',
                { 'is-light': this.state.sortType !== SortType.LENGTH },
              )
            }
            onClick={() => this.setState({
              sortType: SortType.LENGTH,
              isResetButton: true,
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              cn(
                'button',
                'is-warning',
                { 'is-light': this.state.isReversed !== true },
              )
            }
            onClick={this.handleRevers}
          >
            Reverse
          </button>

          {(this.state.isResetButton) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={
                () => this.setState({
                  sortType: SortType.RESET,
                  isReversed: false,
                  isResetButton: false,
                })
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
