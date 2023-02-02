import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      case SortType.NONE:
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

  sortByAlphabet = () => (
    this.setState({ sortType: SortType.ALPHABET })
  );

  sortByLength = () => (
    this.setState({ sortType: SortType.LENGTH })
  );

  reverse = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  );

  reset = () => (
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    })
  );

  render() {
    const { sortType, isReversed } = this.state;

    const isAlphabet = sortType === SortType.ALPHABET;
    const isLength = sortType === SortType.LENGTH;
    const isResetRenderButton = isReversed || sortType !== SortType.NONE;

    const goodsForRender = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button is-info ', { 'is-light': !isAlphabet })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button is-success', { 'is-light': !isLength })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning', { 'is-light': !isReversed })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isResetRenderButton && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goodsForRender.map(good => (
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
