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
  lengthLimit: number,
  sortBy: string,
}

export class Goods extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReverse: false,
    lengthLimit: 0,
    sortBy: 'origin',
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabetically' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const {
      goods,
      sortBy,
      isReverse,
      lengthLimit,
    } = this.state;
    const availableLengthToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const visibleGoods = goods.filter(
      good => good.length >= lengthLimit,
    );

    if (sortBy) {
      visibleGoods.sort((a, b) => {
        switch (sortBy) {
          case 'alphabetically':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          case 'origin':
          default:
            return 0;
        }
      });
    }

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <div>
        <h2 className="">
          {'Sort by '}
          {this.state.sortBy}
          {(isReverse) && ' and reversed'}
        </h2>
        <div className="buttons">
          <button
            className="buttons__item"
            type="button"
            onClick={this.sortByAlphabet}
          >
            Alphabetically
          </button>
          <button
            className="buttons__item"
            type="button"
            onClick={this.sortByLength}
          >
            Length of goods
          </button>
          <button
            className="buttons__item"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            className="buttons__item"
            type="button"
            onClick={() => {
              this.setState({ sortBy: 'origin', isReverse: false, lengthLimit: 1 });
            }}
          >
            Reset
          </button>
          <div className="selector">
            <div className="selector__title">Choose min length of list: </div>
            <select
              className="buttons__select"
              value={lengthLimit}
              onChange={(event) => {
                this.setState({ lengthLimit: +event.target.value });
              }}
            >
              {availableLengthToSort.map(x => (
                <option key={x} value={x}>{x}</option>
              ))}
            </select>
          </div>
        </div>
        <ul className="goodsList">
          {visibleGoods.map(good => (
            <li key={good} className="goodsItem">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
