
import React from 'react';
import PropTypes from 'prop-types';

class ListOfGoods extends React.Component {
  state = {
    maxLength: Infinity,
    goods: [...this.props.goods],
  }

  reverseArr = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .reverse()
        .filter(good => (good.length <= prevState.maxLength)),
    }));
  }

  alphabetSort = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .sort()
        .filter(good => (good.length <= prevState.maxLength)),
    }));
  }

  lengthSort = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .sort((a, b) => (a.length - b.length))
        .filter(good => (good.length <= prevState.maxLength)),
    }));
  }

  resetOrder = () => {
    this.setState({
      goods: [...this.props.goods],
      maxLength: Infinity,
    });
  }

  selectChange = (event) => {
    this.setState({
      maxLength: event.target.value,
      goods: [...this.props.goods]
        .filter(good => (good.length <= event.target.value)),
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <button type="button" onClick={this.reverseArr}>
          Reverse
        </button>
        <button type="button" onClick={this.alphabetSort}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.resetOrder}>
          Reset
        </button>
        <button type="button" onClick={this.lengthSort}>
          Sort by length
        </button>
        <select onInput={this.selectChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </>
    );
  }
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ListOfGoods;
