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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabeticallyClick = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLengthClick = () => this.setState({ sortType: SortType.LENGTH });

  handleReverseClick = () => {
    this.setState((prevState) => {
      return { isReversed: !prevState.isReversed };
    });
  };

  handleResetClick = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const shouldRenderResetButton = sortType !== SortType.NONE || isReversed;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              })}
            onClick={this.handleSortAlphabeticallyClick}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              })}
            onClick={this.handleSortByLengthClick}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              {
                'is-light': !isReversed,
              })}
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>

          {
            (shouldRenderResetButton) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleResetClick}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
