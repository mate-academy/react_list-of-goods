import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    sortBy: '',
    reverse: false,
  }

  sortByLength = () => {
    this.setState({ sortBy: 'byLength' });
  }

  SortByAlphabet = () => {
    this.setState({ sortBy: 'byAlphabet' });
  }

  reverseElements = () => {
    this.setState({ reverse: true });
  }

  resetElements = () => {
    this.setState({
      sortBy: '', reverse: false,
    });
  }

  render() {
    const goods = [...this.props.goods];
    const { sortBy, reverse } = this.state;

    if (sortBy === 'byLength') {
      goods.sort((a, b) => a.length - b.length);
    }

    if (sortBy === 'byAlphabet') {
      goods.sort((a, b) => a.localeCompare(b));
    }

    if (reverse) {
      goods.reverse();
    }

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
