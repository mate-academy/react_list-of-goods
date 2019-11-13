import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';

class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsActual: [...this.props.goods],
      selectValue: '1',
      goodsForShow: [...this.props.goods],
    };
    this.reverseSort = this.reverseSort.bind(this);
    this.alphaSort = this.alphaSort.bind(this);
    this.reset = this.reset.bind(this);
    this.lengthSort = this.lengthSort.bind(this);
    this.selectSort = this.selectSort.bind(this);
  }

  reverseSort() {
    const goods = this.state.goodsActual;

    goods.reverse();
    this.setState({ goodsActual: [...goods], goodsForShow: [...goods] });
  }

  alphaSort() {
    const goods = this.state.goodsActual;

    goods.sort((a, b) => (a < b ? -1 : 1));
    this.setState({ goodsActual: [...goods], goodsForShow: [...goods] });
  }

  reset() {
    const goods = [...this.props.goods];

    this.setState(
      {
        goodsActual: [...goods],
        goodsForShow: [...goods],
        selectValue: '1',
      }
    );
  }

  lengthSort() {
    const goods = this.state.goodsActual;

    goods.sort((a, b) => a.length - b.length);
    this.setState({ goodsActual: [...goods], goodsForShow: [...goods] });
  }

  selectSort(action) {
    const { value } = action.target;
    const { goodsActual: goods } = this.state;
    const selectValue = value;
    const newGoods = goods.filter(a => a.length >= selectValue);

    this.setState({ goodsForShow: [...newGoods], selectValue });
  }

  render() {
    const { goodsForShow: goods, selectValue } = this.state;

    return (
      <>
        <List goods={goods} />
        <button type="button" onClick={this.reverseSort}>Reverse</button>
        <button type="button" onClick={this.alphaSort}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.reset}>Reset</button>
        <button type="button" onClick={this.lengthSort}>Sort by length</button>
        <select onChange={this.selectSort} value={selectValue}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired,
};

export default GoodsList;
