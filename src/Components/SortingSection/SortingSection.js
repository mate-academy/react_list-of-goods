import React from 'react';
import PropTypes from 'prop-types';
import { GoodsList } from '../GoodsList/GoodsList';

class SortingSection extends React.Component {
  state = {
    goodsList: this.props.goods,
    sortAlphabetically: true,
    sortLength: true,
  };

  handleReverse = () => {
    this.setState({ goodsList: [...this.props.goods].reverse() });
  }

  handleAlphabeticalSort = () => {
    const { sortAlphabetically } = this.state;

    this.sortAlphabeticallyForwards = () => {
      this.setState({
        goodsList: [...this.props.goods].sort(),
        sortAlphabetically: false,
      });
    };

    this.sortAlphabeticallyBackwards = () => {
      this.setState({
        goodsList: [...this.props.goods].sort().reverse(),
        sortAlphabetically: true,
      });
    };

    sortAlphabetically
      ? this.sortAlphabeticallyForwards()
      : this.sortAlphabeticallyBackwards();
  }

  handleLengthSort = () => {
    const { sortLength } = this.state;

    this.sortLengthForwards = () => {
      const sortedByLength = [...this.props.goods]
        .sort((a, b) => a.length - b.length);

      this.setState({
        goodsList: sortedByLength,
        sortLength: false,
      });
    };

    this.sortLengthBackwards = () => {
      const sortedByLength = [...this.props.goods]
        .sort((a, b) => b.length - a.length);

      this.setState({
        goodsList: sortedByLength,
        sortLength: true,
      });
    };

    sortLength
      ? this.sortLengthForwards()
      : this.sortLengthBackwards();
  }

  handleReset = () => {
    this.setState({ goodsList: this.props.goods });
  }

  render() {
    const { goodsList } = this.state;

    return (
      <div className="sorting__section">
        <div className="sorting__buttons">
          <button
            type="button"
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.handleAlphabeticalSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.handleLengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
        <GoodsList goods={goodsList} />
      </div>
    );
  }
}

SortingSection.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortingSection;
