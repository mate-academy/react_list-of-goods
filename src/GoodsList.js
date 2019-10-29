import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
    initialGoods: [...this.props.goods],
  };

  handleReverse = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  };

  handleReset = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.initialGoods],
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  handleFilter = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.initialGoods]
        .filter(item => item.length >= value),
    }));
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleReverse}>
          Reverse
        </button>
        <button type="button" onClick={this.sortAlphabetically}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>
        <select onChange={this.handleFilter}>
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
        <ul>
          {this.state.goods.map(item => <li key={item}>{item}</li>)}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
