import React from 'react';
import './SortingSection.css';
import PropTypes from 'prop-types';
import { GoodsList } from '../GoodsList/GoodsList';

class SortingSection extends React.Component {
  state = {
    goodsList: this.props.goods,
    sortAlphabetically: true,
    sortLength: true,
    checkboxValue: 10,
  };

  handleReverse = () => {
    this.setState(state => ({ goodsList: state.goodsList.reverse() }));
  }

  handleAlphabeticalSort = () => {
    const { sortAlphabetically } = this.state;

    this.sortAlphabeticallyForwards = () => {
      this.setState(state => ({
        goodsList: [...state.goodsList].sort(),
        sortAlphabetically: !state.sortAlphabetically,
      }));
    };

    this.sortAlphabeticallyBackwards = () => {
      this.setState(state => ({
        goodsList: [...state.goodsList].reverse(),
        sortAlphabetically: !state.sortAlphabetically,
      }));
    };

    sortAlphabetically
      ? this.sortAlphabeticallyForwards()
      : this.sortAlphabeticallyBackwards();
  }

  handleLengthSort = () => {
    const { sortLength } = this.state;

    this.sortLengthForwards = () => {
      this.setState(state => ({
        goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
        sortLength: !state.sortLength,
      }));
    };

    this.sortLengthBackwards = () => {
      this.setState(state => ({
        goodsList: [...state.goodsList].sort((a, b) => b.length - a.length),
        sortLength: !state.sortLength,
      }));
    };

    sortLength
      ? this.sortLengthForwards()
      : this.sortLengthBackwards();
  }

  handleReset = () => {
    this.setState(state => ({ goodsList: [...this.props.goods] }));
  }

  handleSelectChange = (value) => {
    this.setState(() => ({
      goodsList: [...this.props.goods].filter((_, index) => index < value),
      checkboxValue: value,
    }));
  }

  render() {
    const { goodsList, checkboxValue } = this.state;
    const valuesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="sorting__section">
        <div className="sorting__buttons">
          <button
            type="button"
            className="button"
            onClick={this.handleReverse}
          >
            Reverse &#8693;
          </button>

          <button
            type="button"
            className="button"
            onClick={this.handleAlphabeticalSort}
          >
            Sort alphabetically &#8693;
          </button>

          <button
            type="button"
            className="button"
            onClick={this.handleLengthSort}
          >
            Sort by length &#8693;
          </button>

          <button
            type="button"
            className="button"
            onClick={this.handleReset}
          >
            Reset
          </button>

          <select
            value={checkboxValue}
            className="button select"
            onChange={e => this.handleSelectChange(e.target.value)}
          >
            {valuesArr.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
        <GoodsList goods={goodsList} />
      </div>
    );
  }
}

SortingSection.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortingSection;
