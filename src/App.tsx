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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
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

export class App extends React.PureComponent<{}, State> {
  state: State = {
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

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <Button
            className={classNames(
              'button is-info',
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
              'button is-info',
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
              'button is-info',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </Button>
          {(isReversed || sortType !== SortType.NONE) && (
            <Button
              className="button is-dange is-light"
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
