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
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;
    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;
    default:
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabetHandler = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLengthHandler = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseHandler = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  resetHandler = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, {
      sortType: this.state.sortType,
      isReversed: this.state.isReversed,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames({
              button: true,
              'is-info': true,
              'is-light': this.state.sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.sortByAlphabetHandler()}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames({
              button: true,
              'is-success': true,
              'is-light': this.state.sortType !== SortType.LENGTH,

            })}
            onClick={() => this.sortByLengthHandler()}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames({
              button: true,
              'is-warning': true,
              'is-light': !this.state.isReversed,

            })}
            onClick={() => this.reverseHandler()}
          >
            Reverse
          </button>

          {!(!this.state.isReversed && this.state.sortType === SortType.NONE)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.resetHandler()}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
