import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';

export class GoodsList extends React.Component {
  state = {
    initialList: [...this.props.goods],
    goods: this.props.goods,
  };

  reverseList = () => {
    const copy = [...this.state.goods];

    this.setState(() => ({
      goods: copy.reverse(),
    }));
  }

  sortAlphabetically = () => {
    const copy = [...this.state.goods];

    this.setState(() => ({
      goods: copy.sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    const copy = [...this.state.goods];

    this.setState(() => ({
      goods: copy.sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: prevState.initialList,
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div classNane="list-container">
        <ul className="list">
          {goods.map(good => (
            <li
              className="list-item"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>

        <button
          className="btn"
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
