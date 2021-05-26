import React from 'react';
import './GoodsList.css';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByABC = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  resetToDefault = () => {
    this.setState(state => ({
      goods: [...this.props.goods],
    }))
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    return(
      <div>
        <ul>
          {this.state.goods.map(good => (
            <li
              className="good"
              key={good}
            >
              <span className="good-item">
                {good}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="button"
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          className="button"
          type="button"
          onClick={this.sortByABC}
        >
          Sort alphabetically
        </button>

        <button
          className="button"
          type="button"
          onClick={this.resetToDefault}
        >
          Reset
        </button>

        <button
          className="button"
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
      </div>
    )
  }
}

export default GoodsList;
