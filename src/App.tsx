import { Component } from 'react';
import classNames from 'classnames';
import { GoodsList } from './components/GoodsList';
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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((previous, current) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return previous.localeCompare(current);

      case SortType.LENGTH:
        return previous.length - current.length;

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
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  setSortMethod = (type: SortType) => {
    this.setState({
      sortType: type,
    });
  };

  reverse = () => {
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
    const { isReversed, sortType } = this.state;

    const goods = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.setSortMethod(SortType.ALPHABET)}
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={() => this.setSortMethod(SortType.LENGTH)}
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverse}
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>

          {
            (sortType !== SortType.NONE || isReversed)
              && (
                <button
                  type="button"
                  onClick={this.reset}
                  className="button is-danger is-light"
                >
                  Reset
                </button>
              )
          }
        </div>

        <GoodsList
          goods={goods}
        />
      </div>
    );
  }
}
