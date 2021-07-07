import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goodsList: [...this.props.goodsList],
    minLengthOfGood: 1,
  }

  reverse = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].reverse(),
    }));
  }

  alphabeticallySort = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goodsList: [...this.props.goodsList],
      minLengthOfGood: 1,
    });
  }

  sortByLength = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.length - b.length),
    }));
  }

  filterBySelectedLength = (event) => {
    this.setState({
      minLengthOfGood: event.target.value,
    });
  }

  render() {
    const { goodsList, minLengthOfGood } = this.state;

    return (
      <>
        <ul>
          {goodsList
            .filter(good => good.length >= minLengthOfGood)
            .map(good => (
              <li key={good}>{good}</li>
            ))}
        </ul>
        <button type="button" onClick={this.reverse}>
          Reverse
        </button>
        <button type="button" onClick={this.alphabeticallySort}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>
        <select
          value={this.state.minLengthOfGood}
          onChange={this.filterBySelectedLength}
        >
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
  goodsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
