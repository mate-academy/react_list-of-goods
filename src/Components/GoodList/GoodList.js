import React, { Component } from 'react';
import { GoodsListProps } from 'prop-types';
import Buttons from '../Buttons/Buttons';
import Good from '../Good/Good';
import Select from '../Select/Select';

import './GoodList.css';

class GoodsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfGoods: [...this.props.listOfGoods],
      selectedByDefault: 1,
    };
  }

  onClickReverse = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.listOfGoods].reverse(),
    }));
  };

  onClickSortAlpha = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.listOfGoods].sort(),
    }));
  };

  onClickSortByLength = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.listOfGoods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  onClickSelect = (event) => {
    this.setState({
      selectedByDefault: event.target.value,
      listOfGoods: [...this.props.listOfGoods]
        .filter(item => item.length === Number(event.target.value)),
    });
  };

  onClickReset = () => {
    this.setState({
      listOfGoods: [...this.props.listOfGoods],
      selectedByDefault: 1,
    });
  };

  render() {
    const { listOfGoods, selectedByDefault } = this.state;

    const {
      onClickReverse,
      onClickSortAlpha,
      onClickSortByLength,
      onClickReset,
      onClickSelect,
    } = this;

    return (
      <div className="content-container">
        <div className="buttons-container">
          <Buttons
            text="reverse"
            onClick={onClickReverse}
            listOfGoods={listOfGoods}
          />
          <Buttons
            text="Sort alpha"
            onClick={onClickSortAlpha}
            listOfGoods={listOfGoods}
          />
          <Buttons
            text="Sort by length"
            onClick={onClickSortByLength}
            listOfGoods={listOfGoods}
          />
          <Buttons
            text="reset"
            onClick={onClickReset}
            listOfGoods={listOfGoods}
            selectedByDefault={selectedByDefault}
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
