import React, { PureComponent } from 'react';
import './App.css';
import GoodsList from './Components/GoodsList';
import Button from './Components/Button';

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

class App extends PureComponent {
  state={
    goodsList: [],
    selectedLength: '1',
  };

  start = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      isStarted: true,
      selectedLength: '1',
    });
  };

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => (
        a.localeCompare(b)
      )),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => (
        a.length - b.length
      )),
    }));
  };

  select = (length) => {
    this.setState(state => ({
      goodsList: goodsFromServer.filter(good => (
        good.length >= length
      )),
      selectedLength: length,
    }));
  };

  render() {
    const { isStarted, goodsList, selectedLength } = this.state;

    return (
      <div className="app">
        <h1>Goods</h1>
        {
          isStarted
            ? (
              <GoodsList
                goodsList={goodsList}
                start={this.start}
                reverse={this.reverse}
                sortAlphabetically={this.sortAlphabetically}
                sortByLength={this.sortByLength}
                select={this.select}
                selectedLength={selectedLength}
              />
            )
            : <Button text="Start" action={this.start} />
        }
      </div>
    );
  }
}

export default App;
