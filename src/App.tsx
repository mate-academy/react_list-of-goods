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
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
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

  visibleGoods.sort((prev, curr) => {
    switch (sortType) {
      case ('alphabet'):
        return prev.localeCompare(curr);

      case ('length'):
        return prev.length - curr.length;

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
  reseted: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 'none',
    reseted: false,
  };

  reverseButton = () => {
    this.setState(state => ({
      reseted: true,
      isReversed: !state.isReversed,
    }));
  };

  resetedButton = () => {
    this.setState({ reseted: false, sortType: 'none', isReversed: false });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: 'alphabet', reseted: true });
  };

  sortByLength = () => {
    this.setState({ sortType: 'length', reseted: true });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, { isReversed, sortType });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            // className="button is-info is-light"
            className={classNames(
              'button is-info',
              {
                'is-light': this.state.sortType !== 'alphabet',
              },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': this.state.sortType !== 'length',
              },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={this.reverseButton}
          >
            Reverse
          </button>

          {this.state.reseted && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetedButton}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {goods.map((good) => {
              return (
                <li data-cy="Good" key={good}>
                  {good}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
