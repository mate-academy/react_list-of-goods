import React from 'react';
import PropTypes from 'prop-types';

export class Start extends React.Component {
    state = {
      isReversed: false,
      sortBy: '',
    };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabetic',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  render() {
    const { isReversed, sortBy } = this.state;
    const { goods } = this.props;
    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g2.length - g1.length;

        case 'alphabetic':
          return g1.localeCompare(g2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetically}
        >
          Sort by alphabetic
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <ul>
          {visibleGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Start.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
