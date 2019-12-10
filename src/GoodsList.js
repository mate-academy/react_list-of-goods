import React from 'react';
import Filter from './Filter';
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

  sortAlphabetic = () => (
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
      list: goodsFromServer.filter(item => (
        item.length >= event.target.value)),
      selectNumber: event.target.value,
    })
  )

  render() {
    const filters = [
      { title: 'Reverse', callback: this.reverse },
      { title: 'Sort by alphabetic', callback: this.sortAlphabetic },
      { title: 'Reset', callback: this.reset },
      { title: 'Sort by length', callback: this.sortLength },
    ];

    return (
      <div className="goods">
        {filters.map(filter => (
          <Filter
            title={filter.title}
            callback={filter.callback}
          />
        ))}
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
