import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    isReverseGoods: false,
    sortBy: null,
    filterLength: 1,
  }

  arrayNumbers = Array(10).fill(0).map((x, i) => i + 1);

  reverseGoods = () => {
    this.setState(({ isReverseGoods }) => ({
      isReverseGoods: !isReverseGoods,
    }));
  }

  reset = () => {
    this.setState({
      isReverseGoods: false,
      sortBy: null,
      filterLength: 1,
    });
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  handleChange = (event) => {
    this.setState({
      filterLength: event.target.value,
    });
  }

  render() {
    const { goods } = this.props;
    const {
      isReverseGoods,
      sortBy,
      filterLength,
    } = this.state;
    const visibleGoods = goods.filter(
      good => good.length >= filterLength,
    );

    visibleGoods.sort((prevGood, nextGood) => {
      switch (sortBy) {
        case 'alphabet':
          return prevGood.localeCompare(nextGood);
        case 'length':
          return prevGood.length - nextGood.length;
        default:
          return 0;
      }
    });

    if (isReverseGoods) {
      visibleGoods.reverse();
    }

    return (
      <>
        <p>
          Set filter by word length:

          <select value={filterLength} onChange={this.handleChange}>
            {this.arrayNumbers.map(num => (
              <option key={num}>
                {num}
              </option>
            ))}
          </select>
        </p>

        <button type="button" onClick={this.reset}>
          Reset
        </button>

        <button type="button" onClick={this.reverseGoods}>
          Reverse
        </button>

        <p>
          Sort by:

          <button type="button" onClick={this.sortByAlphabet}>
            Alphabet
          </button>

          <button type="button" onClick={this.sortByLength}>
            Length
          </button>
        </p>

        <h1>Goods</h1>

        <ul>
          {visibleGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default GoodsList;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
