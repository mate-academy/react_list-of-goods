import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../ProductList/ProductList';
import sortAlphabetically from '../../actions/sortAlphabetically';
import reverseGoods from '../../actions/reverseGoods';
import sortByLength from '../../actions/sortByLength';
import goodsWithLength from '../../actions/goodsWithLength';

class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsList: [...props.goods],
    };
  }

  sortListAZ = () => this.setState(
    prevState => ({
      goodsList: sortAlphabetically(prevState.goodsList),
    })
  );

  sortListByLength = () => this.setState(
    prevState => ({
      goodsList: sortByLength(prevState.goodsList),
    })
  );

  reverseList = () => this.setState(
    prevState => ({
      goodsList: reverseGoods(prevState.goodsList),
    })
  );

  resetList = () => this.setState(
    () => ({
      goodsList: [...this.props.goods],
    })
  );

  selectNumber = (event) => {
    const { value } = event.target;

    this.setState(
      () => ({
        goodsList: goodsWithLength([...this.props.goods], Number(value)),
      })
    );
  }

  render() {
    const { goodsList } = this.state;

    return (
      <div className="App">
        <hr />
        <h1>List of Goods</h1>
        <div>
          <select onChange={this.selectNumber}>
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
          <button
            type="submit"
            className="button"
            onClick={this.sortListAZ}
          >
            Sort A - Z
          </button>
          <button
            type="submit"
            className="button"
            onClick={this.sortListByLength}
          >
            Sort by length
          </button>
          <button
            type="submit"
            className="button"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          <button
            type="submit"
            className="button"
            onClick={this.resetList}
          >
            Reset
          </button>
        </div>
        <ProductList productList={goodsList} />
      </div>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
};

export default Goods;
