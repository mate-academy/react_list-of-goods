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
  state = {
    list: [...goodsFromServer],
    selectNumber: 1,
  }

  reverse = () => (
    this.setState(state => ({ list: [...state.list].reverse() }))
  )

  sortAlphabetic =() => (
    this.setState(state => ({
      list: [...state.list].sort((a, b) => (
        a > b ? 1 : -1
      )),
    }))
  )

  reset = () => (
    this.setState({
      list: [...goodsFromServer],
      selectNumber: 1,
    })
  )

  sortLength = () => (
    this.setState(state => ({
      list: [...state.list].sort((a, b) => (
        b.length - a.length
      )),
    }))
  )

  sortSelect = event => (
    this.setState({
      list: [...goodsFromServer].filter(item => (
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
