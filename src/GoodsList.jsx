import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverse = () => (
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }))
  )

  sortAlphabetically = () => (
    this.setState(state => ({
      goods: [...state.goods]
        .sort((good1, good2) => good1.localeCompare(good2)),
    }))
  )

  sortByLength = () => (
    this.setState(state => ({
      goods: [...state.goods]
        .sort((good1, good2) => good1.length - good2.length),
    }))
  )

  reset = () => (
    this.setState({
      goods: [...this.props.goods],
    })
  )

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <ul>
            {this.state.goods.map(good => (
              <li className="item" key={good}>{good}</li>
            ))}
          </ul>

          <div className="columns">
            <button
              type="button"
              className="column button is-dark is-medium"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="column button is-dark is-medium"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="column button is-dark is-medium"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </div>
          <button
            type="button"
            className="button is-hovered is-danger is-outlined is-large"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
