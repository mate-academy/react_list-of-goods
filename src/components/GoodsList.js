import React from 'react';
import PropTypes from 'prop-types';
import { GoodItem } from './GoodItem';

export class GoodsList extends React.Component {
  state = {
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
