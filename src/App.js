import React from 'react';
import './App.css';
import { GoodsList } from './componets/GoodsList';
import { Reset } from './componets/Reset';
import { Reverse } from './componets/Reverse';
import { Sort } from './componets/Sort';
import { Length } from './componets/Length';
import { Select } from './componets/Select';

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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  state = {
    item: 'passive',
    goods: [],
    currentList: [],
    number: 1,
  }

  start = () => {
    this.setState({
      goods: [...goodsFromServer],
      currentList: [...goodsFromServer],
      item: 'active',
    });
  }

  reverse = () => {
    this.setState(state => ({
      currentList: state.goods.reverse(),
    }));
    this.setState(state => this.select(state.number));
  }

  sort = () => {
    this.setState(state => ({
      currentList: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
    this.setState(state => this.select(state.number));
  }

  reset = () => {
    this.setState({
      currentList: [...goodsFromServer],
      number: 1,
    });
  }

  sortLength = () => {
    this.setState(state => ({
      currentList: state.goods.sort((a, b) => a.length - b.length),
    }));
    this.setState(state => this.select(state.number));
  }

  select = (event) => {
    if (typeof event === 'number') {
      this.setState({ number: event });
    } else {
      this.setState({ number: +event.target.value });
    }

    this.setState(state => ({
      currentList: state.goods.filter(unit => unit.length >= state.number),
    }));
  }

  render() {
    const { currentList, item, number } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        { currentList.length === 0 && (
          <button
            type="button"
            className="app__button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        <GoodsList list={currentList} />
        <Reverse item={item} reverse={this.reverse} />
        <Sort item={item} sort={this.sort} />
        <Reset item={item} reset={this.reset} />
        <Length item={item} sortByLength={this.sortLength} />
        <Select
          item={item}
          numbers={numbers}
          number={number}
          select={this.select}
        />
      </div>
    );
  }
}

export default App;
