import React, { Component } from 'react';
import GoodsList from './GoodsList';
import Button from './Button';
import goodsFromServer from '../api/goodsFromServer';

class ListButtons extends Component {
  state = {
    filteredList: goodsFromServer,
    selectedLength: 1,
  };

  reverseList = () => {
    this.setState(state => (
      { filteredList: [...state.filteredList].reverse() }
    ));
  };

  resetList = () => {
    this.setState({
      filteredList: goodsFromServer,
      selectedLength: 1,
    });
  };

  sortByAlphabet = () => {
    this.sortList(
      (first, second) => first.localeCompare(second),
    );
  };

  sortByLength = () => {
    this.sortList(
      (first, second) => first.length - second.length,
    );
  };

  sortList = (callback) => {
    this.setState(state => (
      { filteredList: [...state.filteredList].sort(callback) }
    ));
  };

  filterByLength = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: +value,
      filteredList: goodsFromServer.filter(word => word.length >= +value),
    });
  };

  render() {
    const { filteredList, selectedLength } = this.state;

    return (
      <section className="goods">
        <div className="goods__inner">
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
            name="selectedLength"
            onChange={this.filterByLength}
            value={selectedLength}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(length => (
              <option
                className="goods__option"
                key={length}
                value={length}
              >
                {`List from ${length} or more letters`}
              </option>
            ))}
          </select>
        </div>

        <GoodsList goodsList={filteredList} />
      </section>
    );
  }
}

export default ListButtons;
