import React from 'react';
import PropTypes from 'prop-types';

export class Good extends React.Component {
  state = {
    isStarted: false,
    goodsVisible: this.props.goods,
  }

  resetHandler = () => {
    const { goods } = this.props;

    this.setState(state => ({
      goodsVisible: goods,
    }));
  }

  startHandler = () => {
    this.setState(state => ({
      isStared: !state.isStarted,
    }))
  }

  reverseHandler = () => {
    const { goods } = this.props;

    const reversedGoods = [...goods].reverse();

    this.setState(state => ({
      goodsVisible: reversedGoods,
    }));
  }

  sortHandler = () => {
    const { goods } = this.props;

    this.setState(() => {
      const sortGoods = [...goods].sort((good1, good2) => (
        good1.localeCompare(good2)
      ));

      return {
        goodsVisible: sortGoods,
      };
    });
  }

  sortByLengthHandler = () => {
    const { goods } = this.props;

    this.setState(() => {
      const sortGoods = [...goods].sort((good1, good2) => (
        good1.length - good2.length
      ));

      return {
        goodsVisible: sortGoods,
      };
    });
  }

  render() {
    const { isStared, goodsVisible } = this.state;

    return (
      <>
        {!isStared && (
          <button
            type="button"
            onClick={this.startHandler}
          >
            Start
          </button>
        )}
        <button
          type="button"
          onClick={this.reverseHandler}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortHandler}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.resetHandler}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLengthHandler}
        >
          Sort by length
        </button>
        {isStared && (
          <ul>
            {goodsVisible.map(good => (
              <li key={good}>{good}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

Good.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
