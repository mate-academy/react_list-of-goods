import { Component } from 'react';
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
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  if (sortType === SortType.ALPABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  // eslint-disable-next-line no-console
  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 0,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: 1,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: 2,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const arr = getReorderedGoods(goodsFromServer, this.state);
    const isClicked = !(!isReversed && !sortType);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames('button is-info', {
                'is-light': sortType !== SortType.ALPABET,
              })
            }
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames('button is-success', {
                'is-light': sortType !== SortType.LENGTH,
              })
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames('button is-warning', {
                'is-light': !isReversed,
              })
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isClicked && (
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
            {arr.map((good) => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
