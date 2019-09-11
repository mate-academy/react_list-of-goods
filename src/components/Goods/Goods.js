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
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ isReverse: !this.state.isReverse });
  }

  onClickAlphabetical() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ isAlphabetical: !this.state.isAlphabetical });
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
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ isSortByLength: !this.state.isSortByLength });
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
        <ul>
          {goodsList.map(good => <Good good={good} />)}
        </ul>
        <div>
          <Button text="Reverse" onClick={this.onClickReverse} />
          <Button text="Alphabetical" onClick={this.onClickAlphabetical} />
          <Button text="Sort by length" onClick={this.onClickSortByLength} />
        </div>
        <div>
          <Select
            rows={10}
            selected={this.state.select.value}
            onChange={this.onChangeSelect}
          />
          <Button text="Reset" onClick={this.onClickReset} />
        </div>
      </>
    );
  }
}

Goods.propTypes = GoodsTypes;
