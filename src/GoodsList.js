import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
  }

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({ goods: [...state.goods].sort() }));
  };

  sortByLength = () => {
    this.setState(state => ({ goods: [...state.goods]
      .sort((good1, good2) => good1.length - good2.length) }));
  };

  reset = () => {
    this.setState({ goods: this.props.goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul className="goods">
          {goods.map(good => (
            <li key={good} className="goods__item">
              {good}
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="submit"
          className="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>
        <button
          type="submit"
          className="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="submit"
          className="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
