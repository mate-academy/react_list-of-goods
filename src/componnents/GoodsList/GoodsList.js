import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Select from '../Select/Select';
import List from '../List/List';

const selectItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class GoodsList extends Component {
  state = {
    goods: [...this.props.goods],
    selectedValue: 1,
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
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
      <div className="d-flex flex-column">
        <List goods={goods} />

        <div className="btn-group">
          <Button
            className="btn btn-secondary"
            onClick={this.reverseGoods}
            text="Reverse"
          />

          <Button
            className="btn btn-secondary"
            onClick={this.sortAlphabetically}
            text="Sort"
          />

          <Button
            className="btn btn-secondary"
            onClick={this.reset}
            text="Reset"
          />

          <Button
            className="btn btn-secondary"
            onClick={this.sortByLength}
            text="Sort By Length"
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

export default GoodsList;
