import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
    selectedLength: 1,
  }

  select = new Array(10).fill(0).map((item, index) => (
    <option
      key={item}
      value={index + 1}
    >
      {index + 1}
    </option>
  ));

  reverse = () => {
    this.setState(prev => (
      { goods: [...prev.goods].reverse() }
    ));
  }

  sortAlphabetically = () => {
    this.setState({
      goods: [...this.props.goods].sort(),
    });
  }

  sortByLength = () => {
    this.setState({
      goods: [...this.props.goods].sort((a, b) => a.length - b.length),
    });
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
      selectedLength: 1,
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.goods
            .filter(item => item.length >= this.state.selectedLength)
            .map(item => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <select
          onChange={e => this.setState({ selectedLength: e.target.value })}
        >
          {this.select}
        </select>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
