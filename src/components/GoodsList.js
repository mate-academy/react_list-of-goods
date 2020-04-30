import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
    selectValue: 1,
  }

  reverse = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  }

  sort = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.length - b.length),
    }));
  }

  filterByValue = (value) => {
    this.setState(() => ({
      selectValue: value,
      goods: this.props.goods.filter(item => item.length >= value),
    }));
  }

  reset = () => {
    this.setState(() => ({
      selectValue: 1,
      goods: [...this.props.goods],
    }));
  }

  render() {
    const { goods, selectValue } = this.state;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <>
        <ul>
          {goods.map(good => (
            <Good good={good} key={good} />
          ))}
        </ul>
        <button onClick={this.reverse} type="button">Reverse</button>
        <button onClick={this.sort} type="button">Sort by name</button>
        <button onClick={this.reset} type="button">Reset</button>
        <button onClick={this.sortByLength} type="button">
          Sort by length
        </button>
        <select
          value={selectValue}
          onChange={(e) => {
            this.filterByValue(e.target.value);
          }}
        >
          {arr.map(item => (
            <option
              value={item}
              key={item}
            >
              {item}
            </option>
          ))}
        </select>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
