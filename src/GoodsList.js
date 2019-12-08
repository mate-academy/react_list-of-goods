import React from 'react';
import Buttons from './Buttons';
import ShowList from './ShowList';
import SelectLength from './SelectLength';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class GoodsList extends React.Component {
  goodsList = [...goodsFromServer]

  state = {
    list: this.goodsList,
    selectNumber: 1,
  }

  reverse = () => (
    this.setState({ list: this.goodsList.reverse() })
  )

  sortAlphabetic =() => (
    this.setState({
      list: this.goodsList.sort((a, b) => (
        a > b ? 1 : -1
      )),
    })
  )

  reset = () => (
    this.setState({
      list: [...goodsFromServer],
      selectNumber: 1,
    })
  )

  sortLength = () => (
    this.setState({
      list: this.goodsList.sort((a, b) => (
        b.length - a.length
      )),
    })
  )

  sortSelect = event => (
    this.setState({
      list: this.goodsList.filter(item => (
        item.length >= event.target.value)),
      selectNumber: event.target.value,
    })
  )

  render() {
    return (
      <div className="goods">
        <Buttons
          reverse={this.reverse}
          sortAlphabetic={this.sortAlphabetic}
          reset={this.reset}
          sortLength={this.sortLength}
        />
        <SelectLength
          sortSelect={this.sortSelect}
          select={this.state.selectNumber}
        />
        <ShowList list={this.state.list} />
      </div>
    );
  }
}

export default GoodsList;
