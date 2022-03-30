import React from 'react';

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

const options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Props = {};

interface State {
  goods: string[];
  isReversed: boolean;
  sortBy: string;
  wordMinLength: number;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: 'none',
    wordMinLength: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState({
      sortBy: 'alph',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
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
      sortBy: 'none',
      wordMinLength: 1,
    });
  };

  render() {
    const {
      goods,
      isReversed,
      sortBy,
      wordMinLength,
    } = this.state;

    const {
      reverse,
      sortByAlph,
      sortByLength,
      setLength,
      reset,
    } = this;

    const currentGoods = goods.filter(good => good.length >= wordMinLength);

    currentGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alph':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      currentGoods.reverse();
    }

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
            onClick={sortByAlph}
          >
            Sort alphabetically
          </button>

          <button
            className="button"
            type="button"
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <select
            name="select-length"
            id="select-length"
            value={wordMinLength}
            onChange={({ target }) => {
              setLength(+target.value);
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
