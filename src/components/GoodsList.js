import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    currentList: [...this.props.goods],
  };

  reset = () => {
    this.setState(() => ({
      currentList: [...this.props.goods],
    }));
  };

  reverse = () => {
    this.setState(state => ({
      currentList: state.currentList.reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      currentList: state.currentList.sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      currentList: state.currentList.sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { currentList } = this.state;

    return (
      <div className="container">
        <ul className="goods">
          {currentList.map(good => (
            <li className="good" key={good}>
              {good}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="button"
          onClick={this.reverse}
        >
          REVERSE
        </button>

        <button
          type="button"
          className="button"
          onClick={this.sortByAlphabet}
        >
          ALPHABET
        </button>

        <button
          type="button"
          className="button"
          onClick={this.reset}
        >
          RESET
        </button>

        <button
          type="button"
          className="button"
          onClick={this.sortByLength}
        >
          LENGTH
        </button>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
