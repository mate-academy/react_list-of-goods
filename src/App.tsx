import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Products } from './components/Products/Products';
import { Button } from './components/Button/Button';

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
    visibleGoods.sort();
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

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortGoods = (value: SortType) => {
    const isSameType = this.state.sortType === value;

    this.setState({
      sortType: isSameType
        ? SortType.NONE
        : value,
    });
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const isChanged = isReversed || sortType !== SortType.NONE;

    return (
      <div className="App">
        <div className="buttons">
          <Button
            styles={{
              'is-info': true,
              'is-light': sortType !== SortType.ALPHABET,
            }}
            callback={() => {
              this.sortGoods(SortType.ALPHABET);
            }}
          >
            Sort alphabetically
          </Button>

          <Button
            styles={{
              'is-success': true,
              'is-light': sortType !== SortType.LENGTH,
            }}
            callback={() => {
              this.sortGoods(SortType.LENGTH);
            }}
          >
            Sort by length
          </Button>

          <Button
            styles={{
              'is-warning': true,
              'is-light': !isReversed,
            }}
            callback={this.reverse}
          >
            Reverse
          </Button>

          {isChanged && (
            <Button
              styles={{
                'is-danger': true,
                'is-light': true,
              }}
              callback={this.reset}
            >
              Reset
            </Button>
          )}

        </div>

        <Products products={getReorderedGoods(goodsFromServer, this.state)} />
      </div>
    );
  }
}
