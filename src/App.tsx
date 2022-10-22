import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return g1.length - g2.length;

      case SortType.ALPHABET:
        return g1.localeCompare(g2);

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
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
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
    const { sortType, isReversed } = this.state;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <Button
            onClick={this.sortByLength}
            className={
              classNames('is-success', {
                'is-light': sortType !== SortType.LENGTH,
              })
            }
          >
            Sort by length
          </Button>

          <Button
            onClick={this.sortByAlphabet}
            className={
              classNames('is-info', {
                'is-light': sortType !== SortType.ALPHABET,
              })
            }
          >
            Sort alphabetically
          </Button>

          <Button
            onClick={this.reverse}
            className={
              classNames('is-warning', {
                'is-light': !isReversed,
              })
            }
          >
            Reverse
          </Button>

          {(sortType !== SortType.NONE || isReversed) && (
            <Button
              onClick={this.reset}
              className="is-danger is-light"
            >
              Reset
            </Button>
          )}
        </div>

        <GoodsList reorderedGoods={reorderedGoods} />
      </div>
    );
  }
}
