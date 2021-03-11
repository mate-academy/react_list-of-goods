import React from 'react';
import PropTypes from 'prop-types';

export class Good extends React.Component {
  state = {
    isStarted: false,
    goodsVisible: this.props.goods,
  }

  reset = () => {
    const { goods } = this.props;

    this.setState(state => ({
      goodsVisible: goods,
    }));
  }

  start = () => {
    this.setState(state => ({
      isStared: !state.isStarted,
    }))
  }

  reverse = () => {
    const { goods } = this.props;

    const reversed = [...goods].reverse();

    this.setState(state => ({
      goodsVisible: reversed,
    }));
  }

  sort = () => {
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

  sortByLength = () => {
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
            onClick={this.start}
          >
            Start
          </button>
        )}
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sort}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
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
