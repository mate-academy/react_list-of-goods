import React from 'react';
import PropTypes from 'prop-types';

const numbers = [];

for (let i = 1; i <= 10; i += 1) {
  numbers.push(i);
}

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
    lengthFilter: 1,
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      lengthFilter: 1,
    });
  }

  reverseGoods = () => {
    this.setState(({ isReversed }) => ({
      isReversed: !isReversed,
    }));
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
      lengthFilter: event.target.value,
    });
  }

  render() {
    const { goods } = this.props;
    const {
      isReversed,
      sortBy,
      lengthFilter,
    } = this.state;
    const visibleGoods = goods.filter(
      good => good.length >= lengthFilter,
    );

    visibleGoods.sort((curGood, nextGood) => {
      switch (sortBy) {
        case 'alphabet':
          return curGood.localeCompare(nextGood);
        case 'length':
          return curGood.length - nextGood.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <p>
          Set filter by word length:

          <select value={lengthFilter} onChange={this.handleChange}>
            {numbers.map(num => (
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

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
