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

function getSortChoice(wordOne: string, wordTwo: string, SortType2: SortType) {
  switch (+SortType2) {
    case SortType.ALPHABET:
      return wordOne.localeCompare(wordTwo);
    case SortType.LENGTH:
      return wordOne.length - wordTwo.length;
    case SortType.NONE:
    default:
      return 0;
  }
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

  visibleGoods.sort(
    (
      wordOne, wordTwo,
    ) => getSortChoice(
      wordOne, wordTwo, sortType,
    ),
  );

  if (isReversed === true) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component <{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ isReversed: false, sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ isReversed: false, sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(statePrev => ({
      isReversed: !statePrev.isReversed, sortType: statePrev.sortType,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const sort = this.state.sortType;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', {
              'is-info is-light': sort !== SortType.ALPHABET,
              'is-info': sort === SortType.ALPHABET,
            })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-success is-light': sort !== SortType.LENGTH,
              'is-success': sort === SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-warning is-light': this.state.isReversed !== true,
              'is-warning': this.state.isReversed === true,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE
            || this.state.isReversed === true) && (
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
            {getReorderedGoods(goodsFromServer, this.state).map(
              (good: string) => <li data-cy="Good" key={good}>{good}</li>,
            )}
          </ul>
        </ul>
      </div>
    );
  }
}
