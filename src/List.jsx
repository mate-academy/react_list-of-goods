import React from 'react';
import PropTypes from 'prop-types';

export class List extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...this.props.goods],
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul className="list">
          {goods.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
        <button
          className="button"
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortByName}
        >
          Sort by name
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          className="button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </>
    );
  }
}

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};git
