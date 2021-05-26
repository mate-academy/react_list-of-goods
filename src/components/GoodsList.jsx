import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: 'default',
  }

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  }

  sortByLetter = () => {
    this.setState({
      sortBy: 'letter',
      isReversed: false,
    });
  }

  reset = () => {
    this.setState({
      sortBy: 'default',
      isReversed: false,
    });
  }

  sortByLength = () => {
    this.setState({
      isReversed: false,
      sortBy: 'length',
    });
  }

  render() {
    const goods = [...this.props.goods];

    const { sortBy, isReversed } = this.state;

    if (sortBy.localeCompare('default' !== 0)) {
      switch (sortBy) {
        case 'letter':
          goods.sort();
          break;

        case 'length':
          goods.sort(
            (firsGood, secondGood) => firsGood.length - secondGood.length,
          );
          break;
        default:
      }
    }

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        <>
          <h1>Goods</h1>
          <button type="button" onClick={this.reverse}>Reverse</button>
          <button
            type="button"
            onClick={this.sortByLetter}
          >
            Sort alphabetically
          </button>
          <button type="button" onClick={this.reset}>Reset</button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <ul>
            {goods.map(good => (
              <li key={good}>{good}</li>
            ))}
          </ul>
        </>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
