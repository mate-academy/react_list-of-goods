import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../ProductList/ProductList';
import sortAlphabetically from '../../actions/sortAlphabetically';
import reverseGoods from '../../actions/reverseGoods';
import sortByLength from '../../actions/sortByLength';
import goodsWithLength from '../../actions/goodsWithLength';

const optionTagsList = [...Array(10)].map((_item, index) => {
  const keyValue = index + 1;

  return (
    <option key={keyValue} value={keyValue}>
      {keyValue}
    </option>
  );
});

class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsList: [...props.goods],
      selectValue: '1',
    };
  }

  sortGoods = sortFunc => this.setState(prevState => ({
    goodsList: sortFunc(prevState.goodsList),
  }));

  sortListAZ = () => {
    this.sortGoods(sortAlphabetically);
  };

  sortListByLength = () => {
    this.sortGoods(sortByLength);
  };

  reverseList = () => {
    this.sortGoods(reverseGoods);
  };

  resetList = () => this.setState({
    goodsList: [...this.props.goods],
    selectValue: '1',
  });

  selectByLength = (event) => {
    const { value } = event.target;

    this.setState({
      goodsList: goodsWithLength([...this.props.goods], Number(value)),
      selectValue: value,
    });
  };

  render() {
    const { goodsList, selectValue } = this.state;

    return (
      <div className="App">
        <h1>List of Goods</h1>
        <div>
          <select value={selectValue} onChange={this.selectByLength}>
            {optionTagsList}
          </select>
          <button type="submit" className="button" onClick={this.sortListAZ}>
            Sort A - Z
          </button>
          <button
            type="submit"
            className="button"
            onClick={this.sortListByLength}
          >
            Sort by length
          </button>
          <button type="submit" className="button" onClick={this.reverseList}>
            Reverse
          </button>
          <button type="submit" className="button" onClick={this.resetList}>
            Reset
          </button>
        </div>
        <ProductList productList={goodsList} />
      </div>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Goods;
