import React from 'react';
import PropTypes from 'prop-types';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import { Options } from '../Options/Options';

const select = [];

for (let i = 1; i < 11; i += 1) {
  select.push(i);
}

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    minLength: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.localeCompare(b)
      )),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      minLength: 1,
    });
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
          reverse={this.reverse}
          sortByAlphabet={this.sortByAlphabet}
          reset={this.reset}
          sortByLength={this.sortByLength}
          select={select}
          filterByLength={this.filterByLength}
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
