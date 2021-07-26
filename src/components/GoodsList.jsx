import React from 'react';
import './GoodsList.css';
import PropTypes, { arrayOf } from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: state.goods.sort((g1, g2) => g1.localeCompare(g2)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((g1, g2) => g1.length - g2.length),
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  }

  render() {
    const { goods } = this.state;

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
