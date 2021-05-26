import React from 'react';
import PropTypes, { string } from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goodsList: this.props.goods,
    isReverse: false,
    sortBy: 'id',
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
      sortBy: 'id', isReverse: false,
    });
  }

  render() {
    const { sortBy, isReverse, goodsList } = this.state;
    const goods = [...goodsList];

    goods.sort((str1, str2) => {
      switch (sortBy) {
        case 'name': {
          return str1.localeCompare(str2);
        }

        case 'length': {
          return str1.length - str2.length;
        }

        case 'id':
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
