import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList';

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

export class App extends React.Component {
  state = {
    isVissibleList: true,
    listGoods: goodsFromServer,
  }

  toggleSwitchList = () => {
    this.setState(prevState => ({
      isVissibleList: !prevState.isVissibleList,
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      listGoods: prevState.listGoods.sort(
        (current, next) => current.localeCompare(next),
      ),
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      listGoods: [...prevState.listGoods].reverse(),
    }));
  }

  SortByLength = () => {
    this.setState(prevState => ({
      listGoods: prevState.listGoods.sort(
        (current, next) => current.length - next.length,
      ),
    }));
  }

  reset = () => {
    this.setState({
      listGoods: [...goodsFromServer],
    });
  }

  render() {
    const { isVissibleList, listGoods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className="button"
          onClick={this.toggleSwitchList}
        >
          Show / Hide List
        </button>
        {
          isVissibleList
            && (
            <div className="goods">
              <GoodsList goods={listGoods} />
              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="button"
                onClick={this.SortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
            )
        }
      </div>
    );
  }
}
