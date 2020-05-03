import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goodsCopy: [...this.props.goods],
    select: 1,
  }

  reverseGoods = () => {
    this.setState(({ goodsCopy }) => ({
      goodsCopy: [...goodsCopy].reverse(),
    }));
  }

  sortGoods = () => {
    this.setState(({ goodsCopy }) => ({
      goodsCopy: [...goodsCopy].sort(),
    }));
  }

  resetGoods = () => {
    this.setState(() => ({
      goodsCopy: [...this.props.goods],
      select: 1,
    }));
  }

  sortByLengthGoods = () => {
    this.setState(({ goodsCopy }) => ({
      goodsCopy: [...goodsCopy].sort((a, b) => a.length - b.length),
    }));
  }

  sortBySelectedLength = (event) => {
    const { value } = event.target;

    this.setState({
      select: value,
      goodsCopy: [...this.props.goods].filter(el => el.length >= value),
    });
  }

  render() {
    const listOfGoods = this.state.goodsCopy;
    const selectedArr = Array.from(Array(10).keys());

    return (
      <div className="goods__container">
        <h1>Goods</h1>
        <button
          className="button button__reverse"
          type="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>
        <button
          className="button button__sortA"
          type="button"
          onClick={this.sortGoods}
        >
          Sort alphabetically
        </button>
        <button
          className="button button__sortL"
          type="button"
          onClick={this.sortByLengthGoods}
        >
          Sort by length
        </button>
        <select
          className="button select"
          value={this.state.select}
          onChange={this.sortBySelectedLength}
        >
          {selectedArr.map(item => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <button
          className="button button__reset"
          type="button"
          onClick={this.resetGoods}
        >
          Reset
        </button>
        <ul className="list">
          {listOfGoods.map(good => (
            <li className="list__item" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
