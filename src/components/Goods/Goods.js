import React, { Component } from 'react';
import './Goods.scss';
import { GoodsTypes } from '../../constants/proptypes';
import Good from '../Good/Good';
import Button from '../Button/Button';
import Select from '../Select/Select';

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReverse: false,
      isAlphabetical: false,
      isSortByLength: false,
      select: {
        isChange: false,
        value: 1,
      },
    };
    this.onClickReverse = this.onClickReverse.bind(this);
    this.onClickAlphabetical = this.onClickAlphabetical.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.onClickSortByLength = this.onClickSortByLength.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onClickReverse() {
    this.setState(prevState => ({ isReverse: !prevState.isReverse }));
  }

  onClickAlphabetical() {
    this.setState(prevState => ({ isAlphabetical: !prevState.isAlphabetical }));
  }

  onClickReset() {
    this.setState({
      isReverse: false,
      isAlphabetical: false,
      isSortByLength: false,
      select: {
        isChange: false,
        value: 1,
      },
    });
  }

  onClickSortByLength() {
    this.setState(prevState => ({ isSortByLength: !prevState.isSortByLength }));
  }

  onChangeSelect(e) {
    this.setState({
      select: {
        isChange: true,
        value: e.target.value,
      },
    });
  }

  render() {
    const { goods } = this.props;

    const SELECT_LENGTH = 10;
    const selectList = [...Array(SELECT_LENGTH + 1).keys()]
      .slice(1)
      .map(item => ({ name: item, val: item }));

    let goodsList = [...goods];

    if (this.state.select.isChange) {
      goodsList = goodsList
        .filter(item => item.length >= this.state.select.value);
    }

    if (this.state.isAlphabetical) {
      goodsList = goodsList.sort();
    }

    if (this.state.isSortByLength) {
      goodsList = goodsList.sort((a, b) => a.length - b.length);
    }

    if (this.state.isReverse) {
      goodsList = goodsList.reverse();
    }

    return (
      <>
        <div>
          <Button text="Reverse" onClick={this.onClickReverse} />
          <Button text="Alphabetical" onClick={this.onClickAlphabetical} />
          <Button text="Sort by length" onClick={this.onClickSortByLength} />
        </div>
        <div>
          <Select
            list={selectList}
            selected={this.state.select.value}
            onChange={this.onChangeSelect}
          />
          <Button text="Reset" onClick={this.onClickReset} />
        </div>
        <ul>
          {goodsList.map(good => <Good good={good} />)}
        </ul>
      </>
    );
  }
}

Goods.propTypes = GoodsTypes;
