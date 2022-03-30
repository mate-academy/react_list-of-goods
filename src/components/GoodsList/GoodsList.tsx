import React from 'react';
import { SortBy } from '../../enums/SortBy';

const goodsFromServer = [
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

const options: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

type Props = {};

interface State {
  goods: string[];
  isReversed: boolean;
  sortBy: SortBy;
  wordMinLength: number;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: SortBy.none,
    wordMinLength: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  setSortBy = (sortType: SortBy) => {
    this.setState({
      sortBy: sortType,
    });
  };

  setLength = (value: number) => {
    this.setState({
      wordMinLength: value,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.none,
      wordMinLength: 1,
    });
  };

  createCurrentGoods = () => {
    const {
      goods,
      isReversed,
      sortBy,
      wordMinLength,
    } = this.state;

    const currentGoods = goods.filter(good => good.length >= wordMinLength);

    currentGoods.sort((a, b) => {
      switch (sortBy) {
        case SortBy.alph:
          return a.localeCompare(b);
        case SortBy.length:
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      currentGoods.reverse();
    }

    return currentGoods;
  };

  render() {
    const {
      reverse,
      setSortBy,
      setLength,
      reset,
      createCurrentGoods,
    } = this;

    const { wordMinLength } = this.state;

    const currentGoods = createCurrentGoods();

    return (
      <div className="goods-list">
        <div className="goods-list__settings">
          <button
            className="button"
            type="button"
            onClick={reverse}
          >
            Reverse
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              setSortBy(SortBy.none);
            }}
          >
            Sort alphabetically
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              setSortBy(SortBy.length);
            }}
          >
            Sort by length
          </button>

          <select
            name="select-length"
            id="select-length"
            value={wordMinLength}
            onChange={({ target }) => {
              setLength(Number(target.value));
            }}
          >
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="button"
            type="button"
            onClick={reset}
          >
            Reset
          </button>
        </div>
        <ul className="goods-list__list">
          {currentGoods.map((good, index) => (
            <li key={good} className="goods-list__item">
              <h3>
                {`${index + 1}. ${good}`}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
