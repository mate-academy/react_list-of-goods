import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import Good from '../Good/Good';
import './Goodslist.css';

class Goodslist extends React.Component {
  state= {
    listOfGoods: [...this.props.list],
    lengthofGood: 1,
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
      lengthofGood: 1,
    });
  }

  lengthSort = () => {
    this.setState(prevState => ({
      listOfGoods: prevState.listOfGoods.sort((a, b) => a.length - b.length),
    }));
  }

  selectedLength = (event) => {
    const { value } = event.target;
    const currentList = [...this.props.list];

    this.setState(prevState => ({
      listOfGoods: currentList.filter(item => item.length >= value),
      lengthofGood: value,
    }));
  }

  render() {
    const { listOfGoods } = this.state;
    const { lengthofGood } = this.state;
    const { visible } = this.props;

    return (
      <>
        <div hidden={visible}>
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
            value={lengthofGood}
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
        <ul hidden={visible}>
          {listOfGoods.map(good => (
            <Good key={uuidv4()} good={good} />
          ))}
        </ul>
      </>
    );
  }
}

Goodslist.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired),
  visible: PropTypes.bool,
};

Goodslist.defaultProps = {
  list: [],
  visible: 1,
};

export default Goodslist;
