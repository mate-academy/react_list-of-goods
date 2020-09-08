import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.scss';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverse = () => {
    this.setState(state => (
      {
        goods: state.goods.reverse(),
      }
    ));
  }

  sortByAlphabet = () => {
    this.setState(state => (
      {
        goods: state.goods
          .sort((a, b) => (a.localeCompare(b))),
      }
    ));
  }

  reset = () => {
    this.setState(state => (
      {
        goods: [...this.props.goods],
      }
    ));
  }

  sortByLength = () => {
    this.setState(state => (
      {
        goods: state.goods
          .sort((a, b) => (a.length - b.length)),
      }
    ));
  }

  render() {
    return (
      <div className="container">
        <ul className="goodsList">
          {
            this.state.goods.map(good => (
              <li
                key={good}
                className="goodsList__item"
              >
                {good}
              </li>
            ))
          }
        </ul>
        <div className="remote">
          <button
            type="button"
            className="remote__button"
            onClick={() => {
              this.reverse();
            }}
          >
            Reverse
          </button>
          <button
            type="button"
            className="remote__button"
            onClick={() => {
              this.sortByAlphabet();
            }}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="remote__button"
            onClick={() => {
              this.reset();
            }}
          >
            Reset
          </button>
          <button
            type="button"
            className="remote__button"
            onClick={() => {
              this.sortByLength();
            }}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

GoodsList.defaultProps = {
  goods: [],
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};
