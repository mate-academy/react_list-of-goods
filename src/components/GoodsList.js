import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goodsList: [...this.props.goodsList],
    selectValue: 1,
  }

  reverseList = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetState = () => {
    this.setState(() => ({
      goodsList: [...this.props.goodsList],
      selectValue: 1,
    }));
  }

  lengthSort = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => (a.length - b.length)),
    }));
  }

  selectLength = (value) => {
    this.setState({
      selectValue: value,
      goodsList: this.props.goodsList
        .filter(element => element.length >= value),
    });
  }

  render() {
    const lengthLimit = [...Array(10).keys()];

    return (
      <>
        <div className="buttons">
          <button type="button" onClick={this.reverseList}>
            Reverse
          </button>
          <button type="button" onClick={this.sortAlphabetically}>
            Sort
          </button>
          <button type="button" onClick={this.resetState}>
            Reset
          </button>
          <button type="button" onClick={this.lengthSort}>
            Sort by Length
          </button>
          <select
            value={this.state.selectValue}
            onChange={element => this.selectLength(element.target.value)}
          >
            {lengthLimit.map(num => (
              <option key={num}>{num + 1}</option>
            ))}
          </select>
        </div>
        {/* <button type="button" onClick={this.reverseList}>
          Reverse
        </button>
        <button type="button" onClick={this.sortAlphabetically}>
          Sort
        </button>
        <button type="button" onClick={this.resetState}>
          Reset
        </button>
        <button type="button" onClick={this.lengthSort}>
          Sort by Length
        </button>
        <select
          value={this.state.selectValue}
          onChange={element => this.selectLength(element.target.value)}
        >
          {lengthLimit.map(num => (
            <option key={num}>{num + 1}</option>
          ))}
        </select> */}
        <ul>
          {this.state.goodsList.map(good => (
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
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default GoodsList;
