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

  clicked = () => {
    this.setState({ isClicked: true });
  }

  reversed = () => {
    const reversedGoods = this.props.goodsList.reverse();

    this.setState({ goods: reversedGoods });
  }

  sortedAlphabetically = () => {
    const sortedAlf = this.props.goodsList.sort();

    this.setState({ goods: sortedAlf });
  }

  sortedByLength = () => {
    function compare(a, b) {
      return a.length - b.length;
    }

    const sortedByLength = this.props.goodsList.sort(compare);

    this.setState({ goods: sortedByLength });
  }

  reseted = () => {
    this.setState(prevState => ({
      goods: prevState.resetGoods, length: 1,
    }));
  }

  selected = (event) => {
    const selectedLength = +event.target.value;

    this.setState({
      length: selectedLength,
    });
  }

  render() {
    const { goods, isClicked, length } = this.state;
    const filteredGoods = goods.filter(item => item.length > length);

    if (!isClicked) {
      return (
        <button
          type="button"
          className="button"
          onClick={this.clicked}
        >
          Start
        </button>
      );
    }

    return (
      <>
        <Select
          onChange={this.selected}
          numbers={this.state.resetGoods.length}
          length={this.state.length}
        />
        <Buttons
          reversed={this.reversed}
          sortedAlphabetically={this.sortedAlphabetically}
          reseted={this.reseted}
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
