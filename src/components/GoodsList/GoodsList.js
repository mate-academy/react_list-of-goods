import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    value: '1',
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      value: '1',
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (a, b) => a.length - b.length,
      ),
    }));
  }

  handleSelectChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { goods, value } = this.state;

    return (
      <>
        <ul className="list">
          {goods.map(item => (
            item.length >= value && (
              <li className="list__item" key={item}>
                {item}
              </li>
            )
          ))}
        </ul>

        <button type="button" onClick={this.reverse}>
          Reverse
        </button>
        <button type="button" onClick={this.sortByAlphabet}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>

        <select value={value} onChange={this.handleSelectChange}>
          {new Array(10)
            .fill()
            .map((_, i) => (
              <option value={i + 1}>
                {i + 1}
              </option>
            ))
          }
        </select>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
