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
  NONE = 'n',
  ALPHABET = 'a',
  LENGTH = 'l',
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

  visibleGoods.sort((w1, w2) => {
    switch (sortType) {
      case 'a':
        return w1.localeCompare(w2);
      case 'l':
        return w1.length - w2.length;
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
  alphabetButton: boolean,
  lengthButton: boolean,
  resetButton: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State > {
  state: State = {
    alphabetButton: true,
    lengthButton: true,
    resetButton: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      alphabetButton: false,
      lengthButton: true,
      resetButton: true,
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      alphabetButton: true,
      lengthButton: false,
      resetButton: true,
      isReversed: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      resetButton: !(
        state.alphabetButton
        && state.lengthButton
        && state.isReversed
      ),
    }));
  };

  reset = () => {
    this.setState({
      alphabetButton: true,
      lengthButton: true,
      resetButton: false,
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const {
      alphabetButton,
      lengthButton,
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
                'is-light': alphabetButton,
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
                'is-light': lengthButton,
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
