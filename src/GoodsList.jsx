import React from 'react';
import './GoodsList.css';
import propTypes from 'prop-types';

class GoodsList extends React.PureComponent {
  state = {
    goods: this.props.goods,
  }

  reverseList = () => {
    this.setState({ goods: [...this.props.goods].reverse() });
  }

  sortAlphabetically = () => {
    this.setState(
      { goods: [...this.props.goods]
        .sort((a, b) => a.localeCompare(b)) },
    );
  }

  resetList = () => {
    this.setState({ goods: this.props.goods });
  }

  sortByLength = () => {
    this.setState(
      { goods: [...this.props.goods]
        .sort((a, b) => a.length - b.length) },
    );
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <ul className="goods">
          {goods.map(good => (
            <li key={good} className="goods__item">
              {good}
            </li>
          ))}
        </ul>

        <div className="buttons">
          <button
            className="buttons__item"
            type="button"
            onClick={this.reverseList}
          >
            Reverse
          </button>

          <button
            className="buttons__item"
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            className="buttons__item"
            type="button"
            onClick={this.resetList}
          >
            Reset
          </button>

          <button
            className="buttons__item"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: propTypes.arrayOf(propTypes.string).isRequired,
};

export default GoodsList;
