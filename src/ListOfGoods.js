import React from 'react';
import PropTypes from 'prop-types';

export class ListOfGoods extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverseList = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState(() => ({
      goods: this.props.goods,
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <ul>
          {goods.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button
            type="button"
            className="buttonReset"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          <button
            type="button"
            className="buttonSortA"
            onClick={this.sortAlphabetically}
          >
            Sort Alphabetically
          </button>
          <button
            type="button"
            className="buttonSortL"
            onClick={this.sortByLength}
          >
            Sort By Length
          </button>
          <button
            type="button"
            className="buttonReset"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

      </div>
    );
  }
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
