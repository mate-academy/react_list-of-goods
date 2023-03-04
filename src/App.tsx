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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 'n':
        return 0;
      case 'a':
        return a.localeCompare(b);
      case 'l':
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
  reset: boolean,
  alphabet: boolean,
  length: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
    reset: false,
    alphabet: false,
    length: false,
  };

  reverse = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  sortAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      reset: true,
      alphabet: true,
      length: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      reset: true,
      alphabet: false,
      length: true,
    });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
      reset: false,
      alphabet: false,
      length: false,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
      reset,
      alphabet,
      length,
    } = this.state;
    const data = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames('button is-info', { 'is-light': !alphabet })
            }
            onClick={() => {
              this.sortAlphabet();
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames('button is-success', { 'is-light': !length })
            }
            onClick={() => {
              this.sortByLength();
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames('button is-warning', { 'is-light': !isReversed })
            }
            onClick={() => {
              this.reverse();
            }}
          >
            Reverse
          </button>

          {
            (reset || isReversed)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => {
                  this.reset();
                }}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          {data.map((item) => (
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
