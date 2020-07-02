import React from 'react';
import PropTypes from 'prop-types';
import SelectElements from './Select';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  sortByLength = () => {
    this.setState(previous => ({

      goods: previous.goods.sort((a, b) => a.length - b.length),
    }));
  };

  sortAlphabetically = () => {
    this.setState(previous => ({

      goods: previous.goods.sort(
        (a, b) => a.localeCompare(b),
      ),
    }));
  }

  reverse = () => {
    this.setState(previous => ({
      goods: previous.goods.reverse(),
    }));
  };

  selected = (event) => {
    const length = event.target.value;

    this.setState(() => ({

      goods: this.props.goods.filter(unit => unit.length >= length),
    }));
  }

  reset = (event) => {
    this.setState(() => ({
      goods: [...this.props.goods],
    }));
  }

  render() {
    if (this.props.hide === true) {
      return null;
    }

    return (
      <>
        <ul className="goodsList__items">
          {this.state.goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <section className="buttons">

          <button
            type="button"
            onClick={this.reverse}
          >
            reverse
          </button>

          <button
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </section>
        <select onChange={this.selected} className="goodsList__select">
          <SelectElements />
        </select>
      </>
    );
  }
}

export default GoodsList;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  hide: PropTypes.bool.isRequired,
};
