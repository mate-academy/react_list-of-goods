import React from 'react';
import PropTypes from 'prop-types';
import { GoodsItem } from '../GoodsItem/GoodsItem';

import './GoodsList.css';

export class GoodsList extends React.Component {
  state = {
    hideList: true,
    goodsList: [...this.props.goodsList],
    goodsLength: 1,
  }

  showList = () => {
    this.setState({
      hideList: false,
    });
  }

  reverseList = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].reverse(),
    }));
  }

  sortAlphabet = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetList = () => {
    this.setState({
      goodsList: [...this.props.goodsList],
      goodsLength: 1,
    });
  }

  sortByLength = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.length - b.length),
    }));
  }

  selectByLength = (length) => {
    this.setState({
      goodsLength: length,
      goodsList: [...this.props.goodsList]
        .filter(good => good.length >= length),
    });
  };

  render() {
    const { goodsList, hideList } = this.state;

    return (
      <div className="goods-list">
        {hideList && (
          <button
            className="goods-list__button"
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}
        {!hideList && (
          <>
            <ul className="goods-list__items">
              <GoodsItem goodsList={goodsList} />
            </ul>
            <div className="goods-list__button-wrap">
              <button
                className="goods-list__button"
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>
              <button
                className="goods-list__button"
                type="button"
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                className="goods-list__button"
                type="button"
                onClick={this.resetList}
              >
                Reset
              </button>
              <button
                className="goods-list__button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <select
                value={this.state.goodsLength}
                onChange={event => this.selectByLength(event.target.value)}
              >
                {Array(10).fill('').map((item, index) => (
                  <option value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
