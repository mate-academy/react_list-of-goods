import { Component } from 'react';
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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case(SortType.LENGTH):
        return good1.length - good2.length;

      case(SortType.ALPHABET):
        return good1.localeCompare(good2);

      default:
        return 0;
    };
  });

  if (isReversed) {
    visibleGoods.reverse();
  };

  return visibleGoods;
}


type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE
  }

  sortByAlphabet = () => {
    this.setState({sortType: SortType.ALPHABET});
  };

  sortByLength = () => {
    this.setState({sortType: SortType.LENGTH});
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed
    }));
  };

  reset = () => {
    this.setState({sortType: SortType.NONE, isReversed: false});
  }

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, {isReversed, sortType});

    const { sortByAlphabet, sortByLength, reverse, reset } = this;

    return (
      <div className="section content">
        <div className="buttons">
        <button
          type="button"
          className={classNames(
            'button is-info',
            {'is-light': sortType !== SortType.ALPHABET}
          )}
          onClick={sortByAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classNames(
            'button is-success',
            {'is-light': sortType !== SortType.LENGTH}
          )}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={classNames(
            'button is-warning',
            {'is-light': isReversed === false}
          )}
          onClick={reverse}
        >
          Reverse
        </button>

        {(sortType !== SortType.NONE || isReversed !== false)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={reset}
            >
              Reset
            </button>
          )}
      </div>

      <ul>
        <ul>
          {goods.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))
          }
        </ul>
      </ul>
    </div>
    )
  }
};
