import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

class GoodsList extends React.Component {
  state = {
    goodsLength: 1,
    goods: [...this.props.goods],
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => (a.length - b.length)),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
      goodsLength: 1,
    });
  }

  selectChange = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      goodsLength: value,
      goods: this.props.goods
        .filter(good => (good.length >= value)),
    }));
  }

  render() {
    return (
      <>
        <ul>
          {this.state.goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>

        <div className="control">
          <button type="button" onClick={this.reverse}>
            Reverse
          </button>
          <button type="button" onClick={this.sortAlphabetically}>
            Sort alphabetically
          </button>
          <button type="button" onClick={this.reset}>
            Reset
          </button>
          <button type="button" onClick={this.sortByLength}>
            Sort by length
          </button>

          <select
            onInput={this.selectChange}
            defaultValue={this.state.goodsLength}
          >
            {[...Array(10).keys()].map((item, index) => (
              <option key={item + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
