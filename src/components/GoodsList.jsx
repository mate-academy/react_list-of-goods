import React from 'react';
import './GoodsList.css';
import PropTypes, { arrayOf } from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    sortBy: '',
    isReversed: false,
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'word' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'wordLength' });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(state => ({
      isReversed: false,
      sortBy: '',
    }));
  };

  render() {
    const goods = [...this.props.goods];

    goods.sort((g1, g2) => {
      switch (this.state.sortBy) {
        case 'word':
          return g1.localeCompare(g2);
        case 'wordLength':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      goods.reverse();
    }

    return (
      <>
        <ul className="list">
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div className="d-flex gap-3 justify-content-center">
          <button
            type="button"
            onClick={this.reverse}
            className="btn btn-outline-warning"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortAlphabetically}
            className="btn btn-outline-warning"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
            className="btn btn-outline-warning"
          >
            Sort by length
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="btn btn-outline-secondary"
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: arrayOf(PropTypes.string).isRequired,
};
