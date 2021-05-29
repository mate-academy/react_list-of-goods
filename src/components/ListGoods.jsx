import React from 'react';
import PropTypes from 'prop-types';

export class ListGoods extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => {
    this.setState(({ sortBy: 'name' }));
  };

  sortByLength = () => {
    this.setState(({ sortBy: 'length' }));
  };

  reset = () => {
    this.setState({
      isReversed: false, sortBy: '',
    });
  };

  render() {
    const { isReversed, sortBy } = this.state;
    const sortedGoods = [...this.props.goods];

    sortedGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'name':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div>
        <button
          className="btn"
          type="button"
          onClick={this.reverse}
        >
          reverse
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.sortByName}
        >
          sort
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.sortByLength}
        >
          sort for length
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.reset}
        >
          reset
        </button>

        <ul>
          {sortedGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ListGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
