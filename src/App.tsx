import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((iteam1, iteam2) => iteam1.localeCompare(iteam2));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((iteam1, iteam2) => iteam1.length - iteam2.length);
      break;

    default:
      break;
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component <{}, State> {
  State: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortGoodsByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortGoodsByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const isOrderChanged = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.sortGoodsByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortGoodsByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {isOrderChanged && (
            <button
              type="button"
              className={classNames(
                'button is-danger',
                {
                  'is-light': isReversed === true,
                },
              )}
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {reorderedGoods.map((good) => (
              <li key={good} data-cy="Good">
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
