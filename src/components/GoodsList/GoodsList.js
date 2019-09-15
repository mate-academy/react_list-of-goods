import React, { Component } from 'react';
import { GoodsListProps } from 'prop-types';
import Button from '../Button/Button';
import Good from '../Good/Good';
import Select from '../Select/Select';

import './GoodsList.css';

class GoodsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfGoods: [...this.props.listOfGoods],
      selectedByDefault: 1,
    };
  }

  onClickReverse = (listOfGoods) => {
    this.setState({
      listOfGoods: listOfGoods.reverse(),
    });
  }

  onClickSortAlphabetically = (listOfGoods) => {
    this.setState({
      listOfGoods: listOfGoods.sort(),
    });
  }

  onClickSortByLength = (listOfGoods) => {
    this.setState({
      listOfGoods: listOfGoods.sort((a, b) => a.length - b.length),
    });
  }

  onClickSelect = (event) => {
    this.setState({
      selectedByDefault: event.target.value,
      listOfGoods: [...this.props.listOfGoods]
        .filter(item => item.length === Number(event.target.value)),
    });
  }

  onClickReset = () => {
    this.setState({
      listOfGoods: [...this.props.listOfGoods],
      selectedByDefault: 0,
    });
  }

  render() {
    const { listOfGoods, selectedByDefault } = this.state;

    const {
      onClickReverse,
      onClickSortAlphabetically,
      onClickSortByLength,
      onClickReset,
      onClickSelect,
    } = this;

    return (
      <div className="content-container">
        <h1>{`Goods amount: ${listOfGoods.length}`}</h1>
        <div className="buttons-container">
          <Button
            text="reverse"
            onClick={onClickReverse}
            listOfGoods={listOfGoods}
          />
          <Button
            text="Sort alphabetically"
            onClick={onClickSortAlphabetically}
            listOfGoods={listOfGoods}
          />
          <Button
            text="Sort by length"
            onClick={onClickSortByLength}
            listOfGoods={listOfGoods}
          />
          <Button
            text="reset"
            onClick={onClickReset}
            listOfGoods={listOfGoods}
          />
        </div>

        <div className="select-list">
          <Select
            listOfGoods={listOfGoods}
            selectedByDefault={selectedByDefault}
            onChange={onClickSelect}
          />
        </div>

        <ul className="goods-list list-group">
          {listOfGoods.map(good => (
            <Good
              key={good}
              content={good}
            />
          ))}
        </ul>
      </div>
    );
  }
}

GoodsList.propTypes = GoodsListProps;

export default GoodsList;
