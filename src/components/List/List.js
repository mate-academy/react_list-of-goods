import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from '../Actions/Actions';
import Start from '../Start/Start';
import ListItems from '../ListItems/ListItems';
import './list.css';

export default class List extends Component {
  static propTypes = {
    goods: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  };

  state = {
    isStarted: false,
    goods: [...this.props.goods],
    initialGoods: [...this.props.goods],
    length: 1,
  }

  handleStart = () => {
    this.setState({
      isStarted: true,
    });
  }

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleSortAbc = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  handleSortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  handleReset = () => {
    this.setState(prevState => ({
      goods: prevState.initialGoods,
      length: 1,
    }));
  }

  handleSelect = (e) => {
    this.setState({
      length: Number(e.target.value),
    });
  }

  render() {
    const { goods, isStarted, length } = this.state;
    const currentGoods = goods.filter(item => item.length >= length);

    return (
      <>
        {!isStarted
          ? (
            <Start handleStart={this.handleStart} />
          ) : (
            <>
              <Actions
                value={length}
                handleSelect={this.handleSelect}
                handleReverse={this.handleReverse}
                handleSortAbc={this.handleSortAbc}
                handleSortLength={this.handleSortLength}
                handleReset={this.handleReset}
              />
              <ul className="list">
                <ListItems goods={currentGoods} />
              </ul>
            </>
          )
        }
      </>
    );
  }
}
