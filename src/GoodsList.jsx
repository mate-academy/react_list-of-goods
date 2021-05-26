import React from 'react';

import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
    isReversed: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabetically' });
  }

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
      goods: [...this.props.goods],
    });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  render() {
    const { isReversed, sortBy, goods } = this.state;

    goods.sort((a, b) => {
      switch (sortBy) {
        case 'length':
          return a.length - b.length;
        case 'alphabetically':
          return a.localeCompare(b);
        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div>
        <ul>
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div>
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
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
