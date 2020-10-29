import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

reverse = () => {
  this.setState(state => ({
    goods: [...state.goods].reverse(),
  }));
}

sortAlphabetically = () => {
  this.setState(state => ({
    goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
  }));
}

resetList = () => {
  this.setState({
    goods: [...this.props.goods],
  });
}

sortByLength = () => {
  this.setState(state => ({
    goods: [...state.goods].sort((a, b) => a.length - b.length),
  }));
}

render() {
  const { goods } = this.state;

  return (
    <>
      <ul className="goodsList">
        {goods.map(item => (
          <li key="item">{item}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={this.reverse}
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={this.sortAlphabetically}
      >
        Sort alphabetically
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
    </>
  );
}
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
