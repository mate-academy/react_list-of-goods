import React, { Component } from 'react';

import GoodsList from './GoodsList';
import Button from './Button';

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

class ListWithButtons extends Component {
  state = {
    filteredList: [...goodsFromServer],
    selectedLength: 1,
  };

  reverseList = () => {
    this.setState(state => (
      { filteredList: [...state.filteredList].reverse() }
    ));
  };

  resetList = () => {
    this.setState({
      filteredList: [...goodsFromServer],
      selectedLength: 1,
    });
  };

  sortByAlphabet = () => {
    this.sortList(
      (firstItem, secondItem) => firstItem.localeCompare(secondItem)
    );
  };

  sortByLength = () => {
    this.sortList(
      (firstItem, secondItem) => firstItem.length - secondItem.length
    );
  };

  sortList = (callback) => {
    this.setState(state => (
      { filteredList: [...state.filteredList].sort(callback) }
    ));
  };

  filterByLength = (event) => {
    const { target: { value } } = event;

    this.setState({
      selectedLength: +value,
      filteredList: [...goodsFromServer].filter(word => word.length >= +value),
    });
  };

  render() {
    const { filteredList, selectedLength } = this.state;

    return (
      <section className="goods">
        <div className="goods__buttons-container">
          <Button handleClick={this.reverseList}>
            Reverse
          </Button>

          <Button handleClick={this.sortByAlphabet}>
            Sort alphabetically
          </Button>

          <Button handleClick={this.resetList}>
            Reset
          </Button>

          <Button handleClick={this.sortByLength}>
            Sort by length
          </Button>

          <select
            className="goods__select"
            onChange={this.filterByLength}
            value={selectedLength}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(length => (
              <option
                className="goods__option"
                key={length}
                value={length}
              >
                {`Goods with length >= ${length}`}
              </option>
            ))}
          </select>
        </div>

        <GoodsList goodsList={filteredList} />
      </section>
    );
  }
}

export default ListWithButtons;
