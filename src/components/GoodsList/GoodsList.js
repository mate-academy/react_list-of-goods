import React from 'react';
import PropTypes from 'prop-types';

import { Goods } from '../Goods/Goods';
import { Select } from '../Select/Select';
import { Buttons } from '../Buttons/Buttons';
import '../Buttons/Buttons.css';

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goodsList,
    isClicked: false,
    resetGoods: [...this.props.goodsList],
    length: 1,
  }

  handleClick = () => {
    this.setState({ isClicked: true });
  }

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortedAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  sortedByLength = () => {
    function compare(a, b) {
      return a.length - b.length;
    }

    this.setState(prevState => ({
      goods: [...prevState.goods].sort(compare),
    }));
  }

  handleReset = () => {
    this.setState(prevState => ({
      goods: prevState.resetGoods, length: 1,
    }));
  }

  handleSelect = (event) => {
    const selectedLength = +event.target.value;

    this.setState({
      length: selectedLength,
    });
  }

  render() {
    const { goods, isClicked, length, resetGoods } = this.state;
    const filteredGoods = goods.filter(item => item.length > length);

    return !isClicked ? (
      <button
        type="button"
        className="button"
        onClick={this.handleClick}
      >
        Start
      </button>
    )
      : (
        <>
          <Select
            onChange={this.handleSelect}
            numbers={resetGoods.length}
            length={length}
          />
          <Buttons
            handleReverse={this.handleReverse}
            sortedAlphabetically={this.sortedAlphabetically}
            handleReset={this.handleReset}
            sortedByLength={this.sortedByLength}
          />
          <Goods goods={filteredGoods} />
        </>
      );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
