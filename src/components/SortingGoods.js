import React from 'react';
import PropTypes from 'prop-types';
import { GoodsList } from './GoodsList';

class SortingGoods extends React.Component {
  state = {
    goodsList: this.props.goods,
    sortLength: true,
    sortAlphabet: false,
    select: 1,
    selectedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  handleReversed = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].reverse(),
    }));
  };

  handleAlphabetSort = () => {
    const { sortAlphabet } = this.state;

    sortAlphabet
      ? (
        this.setState(prevState => ({
          goodsList: [...prevState.goodsList].sort(
            (a, b) => a.localeCompare(b),
          ),
          sortAlphabet: false,
        }))
      )
      : (
        this.setState(prevState => ({
          goodsList: [...prevState.goodsList].sort(
            (a, b) => b.localeCompare(a),
          ),
          sortAlphabet: true,
        }))
      );
  };

  handleLengthSort = () => {
    const { sortLength } = this.state;

    sortLength
      ? (
        this.setState(prevState => ({
          goodsList: [...prevState.goodsList].sort(
            (a, b) => a.length - b.length,
          ),
          sortLength: false,
        }))
      )
      : (
        this.setState(prevState => ({
          goodsList: [...prevState.goodsList].sort(
            (a, b) => b.length - a.length,
          ),
          sortLength: true,
        }))
      );
  };

  handleReset = () => {
    this.setState({
      goodsList: this.props.goods,
      select: 1,
    });
  };

  render() {
    const { goodsList, selectedValues, select } = this.state;
    const filteredGoods = goodsList
      .filter(good => good.length >= select);

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
            value={select}
            onChange={(event) => {
              this.setState({ select: +event.target.value });
            }}
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
        <GoodsList goods={filteredGoods} />
      </div>
    );
  }
}

SortingGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortingGoods;
