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

  visibleGoods.sort((first, second) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return first.localeCompare(second);
      case SortType.LENGTH:
        return first.length - second.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  alphabetSortedButton: boolean,
  lengthSortedButton: boolean,
  resetButton: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State > {
  state: State = {
    alphabetSortedButton: true,
    lengthSortedButton: true,
    resetButton: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      alphabetSortedButton: false,
      lengthSortedButton: true,
      resetButton: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      alphabetSortedButton: true,
      lengthSortedButton: false,
      resetButton: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      resetButton: !(
        state.alphabetSortedButton
        && state.lengthSortedButton
        && state.isReversed
      ),
    }));
  };

  reset = () => {
    this.setState({
      alphabetSortedButton: true,
      lengthSortedButton: true,
      resetButton: false,
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const {
      alphabetSortedButton,
      lengthSortedButton,
      resetButton,
      isReversed,
      sortType,
    } = this.state;

    const arrayModified
      = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortByAlphabet}
            className={classNames(
              'button is-info',
              {
                'is-light': alphabetSortedButton,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={classNames(
              'button is-success',
              {
                'is-light': lengthSortedButton,
              },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverse}
            className={classNames(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
          >
            Reverse
          </button>

          {resetButton
            && (
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
          {arrayModified.map(item => (
            <li
              data-cy="Good"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
