import React from 'react';
import PropTypes from 'prop-types';
import Goods from './Goods';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
    filterLength: 1,
  }

  reverse = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  }

  sortAlphabet = () => {
    this.setState(({ goods }) => ({
      goods: goods.sort(),
    }));
  }

  reset = () => {
    this.setState(({ goods }) => ({
      filterLength: 1,
      goods: [...this.props.goods],
    }));
  }

  sortByLength = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const optionArr = [];

    for (let i = 1; i <= 10; i += 1) {
      optionArr.push(i);
    }

    const { filterLength, goods } = this.state;

    return (
      <>
        <Goods
          goods={goods}
          filterLength={filterLength}
        />
        <div className="buttons">
          <button onClick={this.reverse} type="button">
            Reverse
          </button>
          <button onClick={this.sortAlphabet} type="button">
            Sort alphabetically
          </button>
          <button onClick={this.reset} type="button">
            Reset
          </button>
          <button onClick={this.sortByLength} type="button">
            Sort by length
          </button>
          <select
            value={filterLength}
            onChange={event => this.setState({
              filterLength: event.target.value,
            })}

          >
            {optionArr.map(number => (
              <option
                key={number}
                value={number}
              >
                {number}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
}

export default GoodsList;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
