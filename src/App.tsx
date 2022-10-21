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
  options: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];
  const { isReversed, sortType } = options;

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  visibleGoods.sort((prevGood, currentGood) => {
    const {
      ALPHABET,
      LENGTH,
    } = SortType;

    switch (sortType) {
      case ALPHABET:
        return prevGood.localeCompare(currentGood);
      case LENGTH:
        return prevGood.length - currentGood.length;
      default:
        return 0;
    }
  });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
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

  render() {
    const { isReversed, sortType } = this.state;
    const {
      LENGTH,
      ALPHABET,
      NONE,
    } = SortType;
    const isSorted = isReversed || (sortType !== NONE);
    const sortedGoodsList = getReorderedGoods(goodsFromServer, this.state);
    const setSortTypeState = (inputType: SortType) => (
      this.setState({ sortType: inputType })
    );
    const setDefaultState = () => (
      this.setState({
        isReversed: false,
        sortType: NONE,
      })
    );
    const switchIsReversedState = () => (
      this.setState((state) => (
        { isReversed: !state.isReversed }
      ))
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== ALPHABET,
            })}
            onClick={() => (setSortTypeState(ALPHABET))}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': sortType !== LENGTH,
            })}
            onClick={() => (setSortTypeState(LENGTH))}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={switchIsReversedState}
          >
            Reverse
          </button>

          {isSorted && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={setDefaultState}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {sortedGoodsList.map((good, index) => (
              <li key={String(good + index)} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
