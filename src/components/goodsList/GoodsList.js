import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import { Select } from '../select';
import { List } from '../list';
import './GoodsList.css';

const selectItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class GoodsList extends Component {
  state = {
    goods: this.props.goods,
    selectedValue: 1,
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabeticallyy = () => {
    const sortCallback = (a, b) => a.localeCompare(b);

    this.setState(state => ({
      goods: [...state.goods].sort(sortCallback),
    }));
  }

  sortByLength = () => {
    const sortCallback = (a, b) => a.length - b.length;

    this.setState(state => ({
      goods: [...state.goods].sort(sortCallback),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      selectedValue: 1,
    });
  }

  filterByLength = (e) => {
    const targetValue = Number(e.target.value);

    this.setState({
      goods: this.props.goods.filter(good => good.length >= targetValue),
      selectedValue: targetValue,
    });
  }

  render() {
    const { goods, selectedValue } = this.state;

    return (
      <div className="goods-list">
        <List goods={goods} />

        <div className="goods-list__buttons buttons">
          <Button
            className="buttons__button ui inverted purple button"
            onClick={this.reverseGoods}
            text="Reverse"
          />

          <Button
            className="buttons__button ui inverted purple button"
            onClick={this.sortAlphabeticallyy}
            text="Sort by Alphabet"
          />

          <Button
            className="buttons__button ui inverted purple button"
            onClick={this.reset}
            text="Reset"
          />

          <Button
            className="buttons__button ui inverted purple button"
            onClick={this.sortByLength}
            text="Sort by Length"
          />
        </div>

        <div>
          <Select
            selectedValue={selectedValue}
            selectItems={selectItems}
            filterByLength={this.filterByLength}
          />
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
