import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  }

  SortByAlphabet = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  }

  reverseElements = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  resetElements = () => {
    this.setState(state => ({
      goods: this.props.goods,
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <ul>
          {goods.map(el => (
            <li key={el}>
              {el}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button
            type="button"
            className="btn"
            onClick={this.sortByLength}
          >
            Sort By Length
          </button>
          {' '}
          <button
            type="button"
            className="btn"
            onClick={this.SortByAlphabet}
          >
            Sort alphabetically
          </button>
          {' '}
          <button
            type="button"
            className="btn"
            onClick={this.reverseElements}
          >
            Reverse
          </button>
          {' '}
          <button
            type="button"
            className="btn"
            onClick={this.resetElements}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
