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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

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
  sortType: SortType;
  isReversed: boolean;
};

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  Reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  SortByAlphabet = () => this.setState({
    sortType: SortType.ALPHABET,
  });

  SortByLength = () => this.setState({
    sortType: SortType.LENGTH,
  });

  Reset = () => this.setState({
    sortType: SortType.NONE, isReversed: false,
  });

  render() {
    const { sortType, isReversed } = this.state;

    const goods = getReorderedGoods(goodsFromServer, this.state);

    const isChanged = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.SortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.SortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.Reverse}
          >
            Reverse
          </button>

          {isChanged && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.Reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
