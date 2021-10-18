import React from 'react';

const goodsFromServer: string[] = [
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

interface State {
  goods: string[];
  isReverse: boolean,
  length: number,
  sortBy: string,
}

export class GoodsList extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReverse: false,
    length: 1,
    sortBy: '',
  };

  reverse = () => {
    this.setState(({ isReverse }) => ({ isReverse: !isReverse }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      length: 1,
      isReverse: false,
    });
  };

  render() {
    const {
      goods,
      sortBy,
      isReverse,
      length,
    } = this.state;
    const lengthOfDoods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const visibleGoods = goods.filter(
      good => good.length >= length,
    );

    if (sortBy) {
      visibleGoods.sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          case '':
          default:
            return 0;
        }
      });
    }

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="GoodsList">
        <button
          className="buttons__item"
          type="button"
          onClick={this.sortAlphabetically}
        >
          Alphabetically
        </button>

        <button
          className="buttons__item"
          type="button"
          onClick={this.sortByLength}
        >
          Goods length
        </button>

        <button
          className="buttons__item"
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <select
          className="buttons__select"
          value={length}
          onChange={(event) => {
            this.setState({ length: +event.target.value });
          }}
        >
          {lengthOfDoods.map(el => (
            <option key={el} value={el}>{el}</option>
          ))}
        </select>

        <button
          className="buttons__item"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <ul className="goods__list">
          {visibleGoods.map(el => (
            <li key={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
