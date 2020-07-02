import React from 'react';
import { goodsFromServer } from '../api/goodsFromServer';
import { GoodsList } from './GoodsList';

export class Goods extends React.Component {
  constructor(props) {
    super(props);

    this.goods = [...goodsFromServer];

    this.state = {
      mutatedGoods: [...goodsFromServer],
      selectedLength: 1,
    };
  }

  reverse = () => {
    this.setState(prevState => ({
      mutatedGoods: prevState.mutatedGoods.reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      mutatedGoods: prevState.mutatedGoods
        .sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  reset = () => {
    this.setState({
      mutatedGoods: [...this.goods],
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      mutatedGoods: prevState.mutatedGoods
        .sort((a, b) => (
          a.name.replace(' ', '').length - b.name.replace(' ', '').length
        )),
    }));
  }

  filterLength = (value) => {
    this.setState({
      mutatedGoods: this.goods.filter(good => good.name.length >= value),
      selectedLength: value,
    });
  }

  render() {
    return (
      <GoodsList
        goods={this.state.mutatedGoods}
        onReverse={this.reverse}
        onSortAlphabetically={this.sortAlphabetically}
        onReset={this.reset}
        onSortByLength={this.sortByLength}
        onFilterLength={this.filterLength}
        selectedLength={this.state.selectedLength}
      />
    );
  }
}

export default Goods;
