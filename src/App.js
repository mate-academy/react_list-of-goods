import React from 'react';
import './App.css';

import { StartButton } from './components/StartButton';
import { GoodList } from './components/GoodsList';

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

class App extends React.Component {
  state = {
    listVisibility: false,
    goods: goodsFromServer,
  }

  enter = (callback) => {
    this.setState({ listVisibility: callback });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  alphabeticalSort = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  lengthSort = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  select = (callback) => {
    this.setState(state => ({
      goods: [...state.goods].filter(good => good.length >= callback),
    }));
  }

  reset = () => {
    this.setState({ goods: goodsFromServer });
  }

  render() {
    const { listVisibility, goods } = this.state;

    return (
      <div className="App">
        <h1>
          Goods List
          {' '}
          {goods.length}
        </h1>

        {!listVisibility
          ? (
            <StartButton
              listVisibility={listVisibility}
              enter={this.enter}
            />
          )
          : <div />
        }

        {listVisibility
          ? (
            <GoodList
              goodsList={goods}
              listVisibility={listVisibility}
              reverse={this.reverse}
              alphabeticalSort={this.alphabeticalSort}
              lengthSort={this.lengthSort}
              reset={this.reset}
              select={this.select}
            />
          )
          : <div />
        }
      </div>
    );
  }
}

export default App;
