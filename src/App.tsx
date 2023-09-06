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
  let visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods = [...visibleGoods]
      .sort((good1, good2) => good1.localeCompare(good2));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods = [...visibleGoods]
      .sort((good1, good2) => good1.length - good2.length);
  }

  if (isReversed) {
    visibleGoods = [...visibleGoods].reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
  isApplied: boolean[],
  hide: boolean,
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
    isApplied: [false, false],
    hide: false,
    count: 0,
  };

  handleSortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      isApplied: [true, false],
      hide: true,
    });
  };

  handleSortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isApplied: [false, true],
      hide: true,
    });
  };

  handleResetClick = () => {
    this.setState({
      sortType: SortType.NONE,
      isApplied: [false, false],
      isReversed: false,
      hide: false,
    });
  };

  handleReverseClick = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
        count: state.count + 1,
        hide: state.count % 2 === 0,
      };
    });
  };

  render() {
    const {
      sortType,
      isReversed,
      isApplied,
      hide,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button', 'is-info', {
              'is-light': !isApplied[0],
            })}
            onClick={this.handleSortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button', 'is-success', {
              'is-light': !isApplied[1],
            })}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>
          {hide
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleResetClick}
              >
                Reset
              </button>
            ) : null}
        </div>

        <ul>
          <ul>
            {[...getReorderedGoods(goodsFromServer, { sortType, isReversed })]
              .map((good) => (
                <li key={good} data-cy="Good">{good}</li>))}
          </ul>
        </ul>
      </div>
    );
  }
}
