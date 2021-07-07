import React from 'react';
import { goodsFromServer } from '../api/goodsFromServer';
import { GoodsList } from './GoodsList';

export class Goods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: goodsFromServer,
      selectedLength: 1,
    };
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.reverse()],
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .sort((a, b) => (
          a.name.replace(' ', '').length - b.name.replace(' ', '').length
        )),
    }));
  }

  filterLength = (value) => {
    this.setState({
      goods: goodsFromServer.filter(good => good.name.length >= value),
      selectedLength: value,
    });
  }

  render() {
    return (
      <GoodsList
        goods={this.state.goods}
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
