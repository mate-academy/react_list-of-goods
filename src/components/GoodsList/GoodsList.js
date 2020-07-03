import React from 'react';
import PropTypes from 'prop-types';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import { Options } from '../Option/Option';

const select = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    minLength: 1,
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.localeCompare(b)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  filterByLength = (event) => {
    this.setState({
      minLength: event.target.value,
      goods: [...this.props.goods]
        .filter(item => item.length >= event.target.value),
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      minLength: 1,
    });
  }

  render() {
    const { goods, minLength } = this.state;

    return (
      <>
        <ul>
          {
            goods.map(currentGoodsItem => (
              <li key={currentGoodsItem}>
                <GoodsItem goodsItem={currentGoodsItem} />
              </li>
            ))
          }
        </ul>
        <Options
          sortByAlphabet={this.sortByAlphabet}
          sortByLength={this.sortByLength}
          filterByLength={this.filterByLength}
          reverse={this.reverse}
          reset={this.reset}
          select={select}
          value={minLength}
        />
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
