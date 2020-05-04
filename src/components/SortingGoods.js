import React from 'react';
import PropTypes from 'prop-types';
import { GoodsList } from './GoodsList';
import { goodsFromServer } from './goodsFromServer';

class SortingGoods extends React.Component {
  state = {
    goodsList: [...goodsFromServer],
    sortAlphabet: false,
    sortLength: 0,
    select: 1,
    selectedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  handleReversed = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].reverse(),
    }));
  }

  handleAlphabetSort = () => {
    const { sortAlphabet } = this.state;

    sortAlphabet
      ? (
        this.setState(({ goodsList }) => ({
          goodsList: [...goodsList].sort(),
          sortAlphabet: false,
        }))
      )
      : (
        this.setState(({ goodsList }) => ({
          goodsList: [...goodsList].sort().reverse(),
          sortAlphabet: true,
        }))
      );
  }

  handleLengthSort = () => {
    const { sortLength, goodsList } = this.state;

    sortLength
      ? (this.setState(() => ({
        goodsList: goodsList.sort((a, b) => b.length - a.length),
        sortLength: false,
      })))
      : (this.setState(() => ({
        goodsList: goodsList.sort((a, b) => a.length - b.length),
        sortLength: true,
      })));
  }

  sortBySelectedLength = (event) => {
    const { value } = event.target;

    this.setState(state => ({
      select: value,
      goodsList: state.goodsList.filter(el => el.length >= value),
    }));
  }

  handleReset = () => {
    this.setState(state => ({ goodsList: [...this.props.goods] }));
  }

  render() {
    const { goodsList, selectedValues } = this.state;

    return (
      <div>
        <div>
          <button
            type="button"
            onClick={this.handleReversed}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.handleAlphabetSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.handleLengthSort}
          >
            Sort by length
          </button>

          <select
            value={this.state.select}
            onChange={this.sortBySelectedLength}
          >
            {selectedValues.map(value => (
              <option
                key={value}
                value={value}
              >
                {value}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
        <GoodsList goods={goodsList} />
      </div>
    );
  }
}

SortingGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortingGoods;
