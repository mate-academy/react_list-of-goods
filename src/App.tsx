import React from 'react';
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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((firstGood, secondGood) => (
        firstGood.localeCompare(secondGood)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((firstGood, secondGood) => (
        firstGood.length - secondGood.length
      ));
      break;

    default:
      break;
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

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSort = (sortBy: SortType) => {
    switch (sortBy) {
      case SortType.ALPHABET:
        this.setState({ sortType: sortBy });
        break;
      case SortType.LENGTH:
        this.setState({ sortType: SortType.LENGTH });
        break;

      default:
        break;
    }
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goodsToRender = getReorderedGoods(goodsFromServer, this.state);
    const isButtonVisible = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info is-rounded',
              { 'is-light': this.state.sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success is-rounded',
              { 'is-light': this.state.sortType !== SortType.LENGTH },
            )}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning is-rounded',
              { 'is-light': !this.state.isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {isButtonVisible && (
            <button
              type="button"
              className="button is-danger is-light is-rounded"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <div className="box">
          <ul>
            {goodsToRender.map(good => (
              <li className="good" data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}
