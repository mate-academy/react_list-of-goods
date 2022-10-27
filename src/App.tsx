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

interface ReorderOptions {
  sortType: SortType,
  isReversed: boolean,
}

interface State {
  isReversed: boolean,
  sortType: SortType,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const goodsToShow = [...goods];

  goodsToShow.sort((good1, good2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return good1.length - good2.length;

      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      default:
        return 0;
    }
  });

  if (isReversed) {
    goodsToShow.reverse();
  }

  return goodsToShow;
}

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

  toggleReverse = () => {
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
    const isReordered = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
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
            onClick={this.toggleReverse}
            className={
              classNames('is-warning', {
                'is-light': !isReversed,
              })
            }
          >
            Reverse
          </Button>

          {(isReordered) && (
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
