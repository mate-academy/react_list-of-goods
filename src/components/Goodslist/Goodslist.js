import React from 'react';
import PropTypes from 'prop-types';
import Good from '../Good/Good';
import './Goodslist.css';

class Goodslist extends React.Component {
  state = {
    listOfGoods: [...this.props.list],
    minLength: 1,
  }

  reverseSort = () => {
    this.setState(prevState => ({
      listOfGoods: prevState.listOfGoods.reverse(),
    }));
  }

  alphabeticallySort = () => {
    this.setState(prevState => ({
      listOfGoods: prevState.listOfGoods.sort(),
    }));
  }

  resetSort = () => {
    this.setState({
      listOfGoods: [...this.props.list],
      minLength: 1,
    });
  }

  lengthSort = () => {
    this.setState(prevState => ({
      listOfGoods: prevState.listOfGoods.sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  selectedLength = (event) => {
    const { value } = event.target;
    const currentList = [...this.props.list];

    this.setState({
      listOfGoods: currentList.filter(item => item.length >= value),
      minLength: value,
    });
  }

  render() {
    const { listOfGoods, minLength } = this.state;

    return (
      <>
        <div>
          <button
            className="button"
            type="button"
            onClick={this.reverseSort}
          >
            Reverse
          </button>
          <button
            className="button"
            type="button"
            onClick={this.alphabeticallySort}
          >
            Sort alphabetically
          </button>
          <button
            className="button"
            type="button"
            onClick={this.resetSort}
          >
            Reset
          </button>
          <button
            className="button"
            type="button"
            onClick={this.lengthSort}
          >
            Sort by length
          </button>
          <select
            className="select"
            value={minLength}
            onChange={this.selectedLength}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <ul>
          {listOfGoods.map(good => (
            <Good key={good} good={good} />
          ))}
        </ul>
      </>
    );
  }
}

Goodslist.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Goodslist.defaultProps = {
  list: [],
};

export default Goodslist;
