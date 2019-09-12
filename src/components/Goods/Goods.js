import React, { Component } from 'react';
import './Goods.scss';
import { GoodsTypes } from '../../constants/proptypes';
import Good from '../Good/Good';
import Button from '../Button/Button';
import Select from '../Select/Select';

const SELECT_LENGTH = 10;

export default class Goods extends Component {
  state = {
    goods: [...this.props.goods],
    selectValue: 1,
    selectList: [...Array(SELECT_LENGTH + 1).keys()]
      .slice(1)
      .map(item => ({ name: item, value: item })),
  };

  reverseClick = () => {
    this.setState(prevState => ({ goods: prevState.goods.reverse() }));
  };

  alphabeticalClick = () => {
    this.setState(prevState => ({ goods: prevState.goods.sort() }));
  };

  resetClick = () => {
    this.setState({
      goods: [...this.props.goods],
      selectValue: 1,
    });
  };

  sortByLengthClick = () => {
    this.setState(prevState => (
      { goods: prevState.goods.sort((a, b) => a.length - b.length) }));
  };

  selectChange = (e) => {
    this.setState(
      {
        selectValue: e.target.value,
        goods: [...this.props.goods]
          .filter(item => item.length >= e.target.value),
      }
    );
  };

  render() {
    const {
      goods, selectValue, selectList,
    } = this.state;

    return (
      <>
        <div>
          <Button text="Reverse" onClick={this.reverseClick} />
          <Button text="Alphabetical" onClick={this.alphabeticalClick} />
          <Button text="Sort by length" onClick={this.sortByLengthClick} />
        </div>
        <div>
          <Select
            list={selectList}
            selected={selectValue}
            onChange={this.selectChange}
          />
          <Button text="Reset" onClick={this.resetClick} />
        </div>
        <ul>
          {goods.map(good => <Good good={good} />)}
        </ul>
      </>
    );
  }
}

Goods.propTypes = GoodsTypes;
