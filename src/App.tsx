import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';
import { ListOfGoods } from './ListOfGoods';
import { Button } from './Button';

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
  const visibleGoods = [...goods];

  if (sortType) {
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
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const reArrange = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <Button
            className={classNames(
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </Button>

          <Button
            className={classNames(
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </Button>

          <Button
            className={classNames(
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </Button>
          {reArrange && (
            <Button
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </Button>
          )}

        </div>
        <ListOfGoods goods={visibleGoods} />
      </div>
    );
  }
}
