
import React from 'react';
import PropTypes from 'prop-types';

class ListOfGoods extends React.Component {
  state = {
    maxLength: 10,
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
      maxLength: 10,
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
        <select onInput={this.selectChange} value={this.state.maxLength}>
          {Array(10).fill('').map((item, index) => (
            <option value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </>
    );
  }
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ListOfGoods;
