import React, { Component } from 'react';
import './GoodsList.scss';
import { GoodsListTypes } from '../../constants/proptypes';
import Good from '../Good/Good';
import Button from '../Button/Button';
import Select from '../Select/Select';

const SELECT_LENGTH = 10;

export default class GoodsList extends Component {
  state = {
    goods: [...this.props.goods],
    selectedValue: 1,
    listForSelect: [...Array(SELECT_LENGTH + 1).keys()]
      .slice(1)
      .map(item => ({ name: item, value: item })),
  };

  onReverseClick = () => {
    this.setState(prevState => ({ goods: prevState.goods.reverse() }));
  };

  onAlphabeticalClick = () => {
    this.setState(prevState => ({ goods: prevState.goods.sort() }));
  };

  onResetClick = () => {
    this.setState({
      goods: [...this.props.goods],
      selectedValue: 1,
    });
  };

  onSortByLengthClick = () => {
    this.setState(prevState => (
      { goods: prevState.goods.sort((a, b) => a.length - b.length) }));
  };

  onSelectChange = (wordLength) => {
    this.setState(
      {
        selectedValue: wordLength,
        goods: [...this.props.goods]
          .filter(item => item.length >= wordLength),
      }
    );
  };

  render() {
    const {
      goods, selectedValue, listForSelect,
    } = this.state;

    return (
      <>
        <div>
          <Button text="Reverse" onClick={this.onReverseClick} />
          <Button text="Alphabetical" onClick={this.onAlphabeticalClick} />
          <Button text="Sort by length" onClick={this.onSortByLengthClick} />
        </div>
        <div>
          <Select
            list={listForSelect}
            selected={selectedValue}
            onChange={this.onSelectChange}
          />
          <Button text="Reset" onClick={this.onResetClick} />
        </div>
        <ul>
          {goods.map(good => <Good good={good} />)}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = GoodsListTypes;
