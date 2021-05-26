import React from 'react';
import PropTypes from 'prop-types';
import './Goodlist.css';

class Goodlist extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;
    const presentGoods = goods.concat();

    presentGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      presentGoods.reverse();
    }

    return (
      <div className="field">
        <button
          className="button"
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          className="button"
          type="button"
          onClick={this.sortByAlphabet}
        >
          Alphabet
        </button>

        <button
          className="button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <button
          className="button"
          type="button"
          onClick={this.sortByLength}
        >
          Length
        </button>

        <h1>Goods</h1>
        <ul className="goods">
          {presentGoods.map(good => (
            <li
              key={good}
              className="list"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Goodlist.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Goodlist;
