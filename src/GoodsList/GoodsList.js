import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends PureComponent {
    state = {
      goods: this.props.goods,
    }

    reverse = () => {
      this.setState(state => ({
        goods: [...state.goods].reverse(),
      }));
    }

    sortByAlphabet = () => {
      this.setState(state => ({
        goods: [...state.goods].sort((goodA, goodB) => (
          goodA.localeCompare(goodB)
        )),
      }));
    }

    sortByLength = () => {
      this.setState(state => ({
        goods: [...state.goods].sort((goodA, goodB) => (
          goodA.length - goodB.length
        )),
      }));
    }

    reset = () => {
      this.setState(state => ({
        goods: this.props.goods,
      }));
    }

    render() {
      const { goods } = this.state;

      return (
        <>
          <ul>
            {goods.map(product => (
              <li>{product}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </>
      );
    }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf({
    product: PropTypes.string.isRequired,
  }).isRequired,
};
