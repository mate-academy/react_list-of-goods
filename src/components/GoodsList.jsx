import React from 'react';
import PropTypes, { string } from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isReverse: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  goodsSort = (option) => {
    this.setState({ sortBy: option });
  }

  reset() {
    this.setState({
      sortBy: '', isReverse: false,
    });
  }

  render() {
    const { sortBy, isReverse } = this.state;
    const goods = [...this.props.goods];

    goods.sort((prev, next) => {
      switch (sortBy) {
        case 'name': {
          return prev.localeCompare(next);
        }

        case 'length': {
          return prev.length - next.length;
        }

        default:
          return 0;
      }
    });
    if (isReverse) {
      goods.reverse();
    }

    return (
      <>
        <ul>
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            this.reverse();
          }}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => {
            this.goodsSort('name');
          }}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={() => {
            this.goodsSort('length');
          }}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={() => {
            this.reset();
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
};
