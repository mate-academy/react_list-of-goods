import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goodsFromServer],
  }

  render() {
    const reverse = () => {
      this.setState(state => ({
        goods: state.goods.reverse(),
      }));
    };

    const sortAlphabetically = () => {
      this.setState(state => ({
        goods: state.goods.sort(),
      }));
    };

    const reset = () => {
      this.setState({
        goods: [...this.props.goodsFromServer],
      });
    };

    return (
      <>
        <button
          type="button"
          onClick={reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={sortAlphabetically}
        >
          Sort Alphabetically
        </button>
        <button
          type="button"
          onClick={reset}
        >
          reset
        </button>
        <ul>
          {this.state.goods.map(
            thing => <li key={thing}>{thing}</li>,
          )}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
