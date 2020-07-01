import React from 'react';
import PropTypes from 'prop-types';
import { GoodItem } from './GoodItem';

export class GoodsList extends React.Component {
  state = {
    resetGoods: [...this.props.initialGoods],
    currentGoods: this.props.initialGoods,
  };

  handleReverseButton = () => (
    this.setState(prevState => ({
      currentGoods: [...prevState.currentGoods]
        .reverse(),
    }))
  );

  handleSortButton = () => (
    this.setState(prevState => ({
      currentGoods: [...prevState.currentGoods]
        .sort((a, b) => (
          a.localeCompare(b)
        )),
    }))
  );

  handleResetButton = () => (
    this.setState(prevState => ({
      currentGoods: [...prevState.resetGoods],
    }))
  );

  handleSortLButton = () => (
    this.setState(prevState => ({
      currentGoods: [...prevState.currentGoods]
        .sort((a, b) => (a.length - b.length)),
    }))
  );

  render() {
    // const { initialGoods } = this.props;

    return (
      <>
        <button
          type="button"
          onClick={this.handleReverseButton}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.handleSortButton}
        >
          Sort
        </button>
        <button
          type="button"
          onClick={this.handleResetButton}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.handleSortLButton}
        >
          Sort length
        </button>
        <ul>
          {this.state.currentGoods.map(good => (
            <GoodItem
              key={good}
              good={good}
            />
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  initialGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
