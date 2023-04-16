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

// enum SortType {
//   NONE,
//   ALPHABET,
//   LENGTH,
// }

// type ReorderOptions = {
//   sortType: SortType,
//   isReversed: boolean,
// };

// // Use this function in the render method to prepare goods
// export function getReorderedGoods( goods: string[],{ sortType, isReversed }: ReorderOptions,
// ) {
//   // To avoid the original array mutation
//   const visibleGoods = [...goods];

//   // Sort and reverse goods if needed
//   // eslint-disable-next-line no-console
//   console.log(sortType, isReversed);

//   return visibleGoods;
// }

// DON'T save goods to the state

// type State = {
//   resetVisible: boolean,
//   isReversed: boolean,
//   sortType: SortType,
// };

type State = {
  resetVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    resetVisible: false,
    isReversed: false,
    sortBy: 'none',
  };

  sortName = () => {
    this.setState({
      sortBy: 'alphabet',
      resetVisible: true,
    });
  };

  sortLength = () => {
    this.setState({
      sortBy: 'length',
      resetVisible: true,
    });
  };

  reverse = () => {
    if (this.state.sortBy !== 'none') {
      return this.setState(state => ({
        isReversed: !state.isReversed,
      }));
    }

    return this.setState((state) => ({
      isReversed: !state.isReversed,
      resetVisible: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      resetVisible: false,
      isReversed: false,
      sortBy: 'none',
    });
  };

  render() {
    const { resetVisible, isReversed, sortBy } = this.state;

    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;

        case 'alphabet':
          return g1.localeCompare(g2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames({
              'button is-info': true,
              'is-light': this.state.sortBy !== 'alphabet',
            })}
            onClick={this.sortName}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames({
              'button is-success': true,
              'is-light': this.state.sortBy !== 'length',
            })}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames({
              'button is-warning': true,
              'is-light': !this.state.isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {resetVisible && (
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
            {visibleGoods.map(good => (
              <li
                data-cy="Good"
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
