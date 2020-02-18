import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Goods.css';

export class Goods extends Component {
  state = {
    displayList: false,
    goods: this.props.goods,
    initial: this.props.goods,
    minLength: 1,
  }

  showList = () => {
    this.setState({
      displayList: true,
    });
  }

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (a.localeCompare(b))),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...prevState.initial],
      minLength: 1,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (a.length - b.length)),
    }));
  }

  selectLength = (event) => {
    const { value } = event.target;
    const goodsList = [...this.props.goods];

    this.setState({
      goods: goodsList.filter(item => item.length >= value),
      minLength: value,
    });
  }

  render() {
    const { goods, minLength } = this.state;

    return (
      <div>
        <ul>
          {
            this.state.displayList
              ? (
                <>
                  <button
                    type="button"
                    onClick={this.handleReverse}
                  >
                    Reverse
                  </button>
                  <button
                    type="button"
                    onClick={this.sortAlphabetically}
                  >
                    Sort alphabetically
                  </button>
                  <button
                    type="button"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>
                  <div>
                    <p className="select-description">
                      Minimum length of goods:
                    </p>
                    <select
                      className="select"
                      value={minLength}
                      onChange={this.selectLength}
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
                  {goods.map(item => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </>
              )
              : (
                <button
                  type="button"
                  onClick={this.showList}
                >
                  Start
                </button>
              )
          }
        </ul>
      </div>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
