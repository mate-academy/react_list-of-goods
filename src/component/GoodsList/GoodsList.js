import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends Component {
  state = {
    goods: [...this.props.goods],
  };

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  resetList = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  };

  sortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    return (
      <>
        <ul>
          {this.state.goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <button className="button" type="button" onClick={this.reverseList}>
          Reverse
        </button>
        <button className="button" type="button" onClick={this.sortList}>
          Sort alphabetically
        </button>
        <button className="button" type="button" onClick={this.resetList}>
          Reset
        </button>
        <button className="button" type="button" onClick={this.sortLength}>
          Sort by length
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
