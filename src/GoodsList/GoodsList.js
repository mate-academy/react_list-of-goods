import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goodsList: [...this.props.goodsList],
    selectValue: 1,
  }

  reverse = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].reverse(),
    }));
  }

  sort = () => {
    this.setState(({ goodsList }) => ({
      goodsList: [...goodsList].sort((a, b) => a.localeCompare(b)),
    }))
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

  selectLength = (event) => {
    this.setState({
      selectValue: event.target.value,
    });
  }

  render() {
    const lengthLimit = [...Array(10).keys()];
    return (
      <>
        <div className="buttons">
          <button type="button" onClick={this.reverse}>
            Reverse
          </button>
          <button type="button" onClick={this.sort}>
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
            onChange={this.selectLength}
          >
            {lengthLimit.map(num => (
              <option key={num}>{num + 1}</option>
            ))}
          </select>
        </div>
        <ul>
          {this.state.goodsList
            .filter(element => element.length >= this.state.selectValue)
            .map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
        </ul>
      </>
    )
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default GoodsList;


