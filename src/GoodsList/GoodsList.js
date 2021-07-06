import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';

import { GoodsItem } from '../GoodsItem/GoodsItem';
import { SelectLength } from '../SelectLength/SelectLength';

export class GoodsList extends React.Component {
  goodMinLength = 1;

  state = {
    hideList: true,
    goodsList: [...this.props.goodsList],
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

  alphabetically = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.length - b.length),
    }));
  }

  resetList = () => {
    this.setState({
      goodsList: this.props.goodsList.filter(good => (
        good.length >= this.goodMinLength
      )),
    });
  }

  filterByLength = (e) => {
    this.goodMinLength = +e.target.value;

    this.resetList();
  }

  render() {
    const { goodsList, hideList } = this.state;

    return (
      <div>
        {hideList && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}
        {!hideList && (
          <>
            <ul>
              <GoodsItem goodsList={goodsList} />
            </ul>
            <button
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.alphabetically}
            >
              Alphabetically
            </button>
            <button
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <SelectLength
              filterByLength={this.filterByLength}
            />
          </>
        )}
      </div>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
